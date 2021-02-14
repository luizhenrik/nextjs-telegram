async function api_basic(request, response) {
  const data = [
    {
      name: 'Lorem Ipsum',
      userId: 'oxAhz',
      chatId: 'q2e3r6Zq',
      messages: {
        type: 'sent',
        username: 'eu',
        datetime: 12343545,
        text: 'testando a mensagem'
      }
    },
    {
      name: 'Lorem Ipsum 2',
      userId: 'mnhzAS',
      chatId: 'q1e2r4Zq',
      messages: {
        type: 'received',
        username: 'Lorem Ipsum 2',
        datetime: 12343545,
        text: 'testando a mensagem'
      }
    }
  ]

  response.status(200).json(data)
}

export default api_basic
