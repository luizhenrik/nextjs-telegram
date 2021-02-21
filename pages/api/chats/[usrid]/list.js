import { connectToDatabase } from '../../../../util/mongodb'
import { server } from '../../../../config'

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
  const myUserId = req.query.usrid

  const { db } = await connectToDatabase()

  const result = []

  const chats = await db.collection('chats')
  const chatsJson = await chats.find({ 'users.user_id': { $exists: [myUserId] } }).toArray()

  const getMessage = async (chatId) => {
    const response = await fetch(`${server}/api/chats/${myUserId}/${chatId}`)

    let data = await response.json()

    data = data.messages[data.messages.length - 1]

    return data
  }

  const getUser = async (userId) => {
    const response = await fetch(`${server}/api/chats/${userId}`)
    const data = await response.json()

    return data.username
  }

  for (let i = 0; i < chatsJson.length; i++) {
    result.push({
      chatId: chatsJson[i]._id,
      myUserId: myUserId,
      userId: chatsJson[i].users.find(x => x.user_id !== myUserId).user_id,
      username: await getUser(chatsJson[i].users.find(x => x.user_id !== myUserId).user_id),
      messages: await getMessage(chatsJson[i]._id)
    })
  }

  res.json(result)
}
