async function api_basic(request, response) {
    let data = [
        {
            'name': 'Lorem Ipsum',
            'userId': 'oxAhz',
            'chatId': 'q2e3r6Zq',
            'messages': [
                {
                    'type': 'sent',
                    'datetime': 12343545,
                    'text': 'testando a mensagem'
                },
                {
                    'type': 'received',
                    'datetime': 12343545,
                    'text': 'testando a mensagem'
                }
            ]
        },
        {
            'name': 'Lorem Ipsum 2',
            'userId': 'mnhzAS',
            'chatId': 'q1e2r4Zq',
            'messages': [
                {
                    'type': 'sent',
                    'datetime': 12343545,
                    'text': 'testando a mensagem2'
                },
                {
                    'type': 'received',
                    'datetime': 12343545,
                    'text': 'testando a mensagem2'
                }
            ]
        }
    ];


    response.status(200).json(data)
}

export default api_basic