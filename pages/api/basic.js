async function api_basic(request, response) {
    response.json({
        0: {
            name: 'Lorem Ipsum',
            userId: 'oxAhz',
            chatId: 'q2e3r6Zq',
            messages: {
                0: {
                    type: 'sent',
                    datetime: 12343545,
                    text: 'testando a mensagem'
                },
                1: {
                    type: 'received',
                    datetime: 12343545,
                    text: 'testando a mensagem'
                },
            }
        },
        1: {
            name: 'Lorem Ipsum 2',
            userId: 'mnhzAS',
            chatId: 'q1e2r4Zq',
            messages: {
                0: {
                    type: 'sent',
                    datetime: 12343545,
                    text: 'testando a mensagem'
                },
                1: {
                    type: 'received',
                    datetime: 12343545,
                    text: 'testando a mensagem'
                },
            }
        }
    })
}

export default api_basic