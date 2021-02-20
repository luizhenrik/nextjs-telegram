import { connectToDatabase } from '../../../util/mongodb'
import { server } from '../../../config'

export default async function handler(req, res) {
  const chatId = req.query.chtid
  const userId = req.query.usrid

  const { db } = await connectToDatabase()

  const messages = await db.collection('messages')

  const messagesJson = await messages.find({ chat_id: { $in: [chatId] } }).toArray()

  const resUser = await fetch(`${server}/api/${userId}`)
  const user = await resUser.json()

  res.json({
    id: chatId,
    userId: userId,
    username: user.username,
    messages: messagesJson[0].messages
  })
}