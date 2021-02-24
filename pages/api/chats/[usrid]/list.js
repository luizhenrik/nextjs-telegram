import { connectToDatabase } from '../../../../util/mongodb'
import { server } from '../../../../config'

export default async function handler(req, res) {
  const myUserId = req.query.usrid

  const { db } = await connectToDatabase()

  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')

  const result = []

  const chats = await db.collection('chats')
  const chatsJson = await chats.find({ 'users.user_id': { $exists: [myUserId] } }).toArray()

  const getMessage = async (chatId) => {
    const resMessage = await fetch(`${server}/api/chats/${myUserId}/${chatId}`)

    let dataMessage = await resMessage.json()

    dataMessage = dataMessage.messages[dataMessage.messages.length - 1]

    return dataMessage
  }

  const getUser = async (userId) => {
    const resUser = await fetch(`${server}/api/chats/${userId}`)
    const dataUser = await resUser.json()

    return dataUser.username
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
