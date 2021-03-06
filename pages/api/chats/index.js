import { connectToDatabase } from '../../../util/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  const myUserId = new ObjectId(req.body.myUserId)
  const api = []

  const { db } = await connectToDatabase()

  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')

  const chats = await db.collection('chats')

  const chat = await chats.aggregate([
    {
      $match: { 'users._id': { $eq: myUserId } }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'users._id',
        foreignField: '_id',
        as: 'users_data'
      }
    },
    {
      $lookup: {
        from: 'messages',
        localField: '_id',
        foreignField: 'chat_id',
        as: 'messages'
      }
    },
    {
      $project: {
        _id: 1,
        users: {
          $filter: {
            input: '$users',
            as: 'user',
            cond: { $ne: ['$$user._id', myUserId] }
          }
        },
        users_data: {
          $filter: {
            input: '$users_data',
            as: 'data',
            cond: { $ne: ['$$data._id', myUserId] }
          }
        },
        messages: { $slice: ['$messages', -1] }
      }
    },
    {
      $unwind: '$users_data'
    },
    {
      $unwind: '$messages'
    },
    {
      $project: {
        users: 0,
        users_data: { name: 0, email: 0 },
        messages: { _id: 0, chat_id: 0 }
      }
    }
  ]).toArray()

  for (let i = 0; i < chat.length; i++) {
    const obj = {
      id: chat[i]._id,
      userId: chat[i].users_data._id,
      username: chat[i].users_data.nickname,
      userAvatar: chat[i].users_data.avatar,
      messages: chat[i].messages
    }
    api.push(obj)
  }

  res.json(api)
}
