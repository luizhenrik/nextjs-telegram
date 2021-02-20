import { connectToDatabase } from '../../../util/mongodb'
import { server } from '../../../config'

export default async function handler(req, res) {
  const myUserId = req.query.usrid

  const { db } = await connectToDatabase()

  const result = []

  const chats = await db.collection('chats')

  const chatsJson = await chats.find({ 'users.user_id': { $exists: [myUserId] } }).toArray()

  const getMessage = async (chatId) => {
    const resChat = await fetch(`${server}/api/${myUserId}/${chatId}`)
    const chatsList = await resChat.json()

    const message = chatsList.messages[chatsList.messages.length - 1]

    return message
  }

  const getUser = async (userId) => {
    const resUser = await fetch(`${server}/api/${userId}`)
    const user = await resUser.json()

    return user.username
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
