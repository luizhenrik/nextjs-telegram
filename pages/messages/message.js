import Head from 'next/head'


import Css_Home from '../../styles/Home.module.scss'
import HeaderApp from '../../components/header'

export default function Message() {
        let jsonHeader = {
            "mode": "user", // user/search/menu
            "container": {
                "avatar": {
                    "status": true,
                    "src": "/images/user.png",
                    "width": "45",
                    "height": "45"
                },
                "title": "José",
                "description": {
                    "status": true,
                    "text": "Online"
                }
            },
            "actions": {
                "videoCall": true,
                "voiceCall": true,
                "search": true,
                "menu": true
            },
            "messages": {
                0: {
                    "date": 1234,
                    "nickname": "José",
                    "user_avatar": "/images/user.png",
                    "text": "texto da mensagem"
                }
            }
        };
        return (
            <div className={Css_Home.container}>
                <Head>
                    <title>Conversa com user</title>
                </Head>
                
                <main className={Css_Home.main}>
                    <HeaderApp database={jsonHeader}></HeaderApp>

                    <div className={Css_Home.content}></div>
                </main>
            </div>
        )
}
    