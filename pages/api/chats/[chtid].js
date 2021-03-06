import { connectToDatabase } from '../../../util/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  const chatId = new ObjectId(req.body.chatId)
  const myUserId = new ObjectId(req.body.myUserId)

  const { db } = await connectToDatabase()

  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')

  const chats = await db.collection('chats')

  const chat = await chats.aggregate([
    { $match: { _id: chatId } },
    {
      $project: {
        _id: 1,
        users: {
          $setDifference: [
            {
              $map: {
                input: '$users',
                as: 'user',
                in: {
                  $cond: [
                    { $ne: ['$$user._id', myUserId] },
                    '$$user._id',
                    false
                  ]
                }
              }
            },
            [false]
          ]
        }
      }
    },
    { $unwind: '$users' },
    {
      $lookup: {
        from: 'users',
        localField: 'users',
        foreignField: '_id',
        as: 'users_data'
      }
    },
    {
      $project: {
        users_data: { _id: 0 }
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
      $unwind: '$users_data'
    }
  ]).toArray()

  res.json({
    id: chatId,
    myUserId: myUserId,
    userId: chat[0].users,
    username: chat[0].users_data.nickname,
    userAvatar: chat[0].users_data.avatar,
    messages: chat[0].messages
  })
}
