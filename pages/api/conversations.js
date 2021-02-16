async function conversations(request, response) {
  const resChat = await fetch('https://xirrim.com/api/chats')
  const chat = await resChat.json()

  const data = [
    {
      name: 'Lorem Ipsum',
      userId: 'oxAhz',
      chatId: 'q2e3r6Zq',
      messages: []
    },
    {
      name: 'Lorem Ipsum 2',
      userId: 'mnhzAS',
      chatId: 'q1e2r4Zq',
      messages: []
    }
  ]

  data.map((value, index) => {
    const arr = chat[data[index].chatId].messages.length
    data[index].messages = chat[data[index].chatId].messages[arr - 1]
    data[index].messages.username = (data[index].messages.type === 'sent') ? 'eu' : data[index].name
  })

  response.status(200).json(data)
}

export default conversations
