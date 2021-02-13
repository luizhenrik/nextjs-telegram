async function chats(request, response) {
    let data = {
        "q2e3r6Zq": {
            'name': 'Lorem Ipsum',
            'userId': 'oxAhz',
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
        "q1e2r4Zq": {
            'name': 'Lorem Ipsum 2',
            'userId': 'mnhzAS',
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
    };

    response.status(200).json(data)
}

export default chats