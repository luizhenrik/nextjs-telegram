import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../../../../util/mongodb'

export default async function handler(req, res) {
  const userId = req.query.usrid
  const u_id = new ObjectId(userId)

  const { db } = await connectToDatabase()

  const users = await db.collection('users')
  users.createIndex({ timestamp: 1 })
  const usersJson = await users.find({ _id: u_id }, { timestamp: 1, nickname: 1 }).sort({ timestamp: -1 }).toArray()

  res.json({
    userId: userId,
    username: usersJson[0].nickname
  })
}
