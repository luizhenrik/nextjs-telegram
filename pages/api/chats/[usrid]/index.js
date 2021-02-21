import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../../../../util/mongodb'

export default async function handler(req, res) {
  const userId = req.query.usrid
  const u_id = new ObjectId(userId)

  const { db } = await connectToDatabase()

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  const users = await db.collection('users')
  const usersJson = await users.find({ _id: u_id }, { nickname: 1 }).toArray()

  res.json({
    userId: userId,
    username: usersJson[0].nickname
  })
}
