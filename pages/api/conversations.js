import { connectToDatabase } from '../../util/mongodb'

export default async (req, res) => {
  const { db } = await connectToDatabase()

  const myId = '602f19110880daeef6955fa1'
  const result = []
  const chatsIds = []
  const usersIds = []
  const usersUsernames = []
  const messagesExcerpt = []

  const chats = await db.collection('chats')
  const messages = await db.collection('messages')
  const users = await db.collection('users')

  const chatsJson = await chats.find({ 'users.user_id': { $exists: [myId] } }).toArray().then(function(items) {
    return items
  }).catch(function(err) {
    console.error(`deu b.o: ${err}`)
  })

  for (let i = 0; i < chatsJson.length; i++) {
    chatsIds.push(chatsJson[i]._id)

    for (let j = 0; j < chatsJson[i].users.length; j++) {
      if (myId !== chatsJson[i].users[j].user_id) {
        usersIds.push(chatsJson[i].users[j].user_id)
      }
    }
  }

  const messagesJson = await messages.find({ chat_id: { $exists: chatsIds } }).toArray().then(function(items) {
    return items
  }).catch(function(err) {
    console.error(`deu b.o: ${err}`)
  })

  for (let i = 0; i < messagesJson.length; i++) {
    messagesExcerpt.push(messagesJson[i].messages[messagesJson[i].messages.length - 1])
  }

  const usersJson = await users.find({ _id: { $exists: usersIds } }).toArray().then(function(items) {
    return items
  }).catch(function(err) {
    console.error(`deu b.o: ${err}`)
  })

  for (let i = 0; i < usersJson.length; i++) {
    usersUsernames.push(usersJson[i].nickname)
  }

  for (let i = 0; i < chatsIds.length; i++) {
    if (messagesExcerpt[i]) {
      messagesExcerpt[i].user_id = messagesExcerpt[i].user_id === myId ? 'eu' : messagesExcerpt[i].user_id

      result.push({
        chatId: chatsIds[i],
        userId: usersIds[i],
        username: usersUsernames[i],
        excerpt: messagesExcerpt[i]
      })
    }
  }

  res.json(result)
}
