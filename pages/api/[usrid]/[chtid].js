import { connectToDatabase } from '../../../util/mongodb'

export default async function handler(req, res) {
  const chatId = req.query.chtid
  const userId = req.query.usrid

  const { db } = await connectToDatabase()

  const messages = await db.collection('messages')
  const users = await db.collection('users')

  const messagesJson = await messages.find({ chat_id: { $exists: chatId } }).toArray()
  const usersJson = await users.find({ _id: { $exists: userId } }).toArray()

  res.json({
    id: chatId,
    username: usersJson[0].nickname,
    messages: messagesJson[0].messages
  })
}
