import Head from 'next/head'
import Css_Home from '../styles/Home.module.scss'
import HeaderApp from '../components/header'
import Link from 'next/link'
import MenuBurger from '../components/menuBurger';

export default function Home() {
    let jsonHeader = {
        "mode": "search", // user/search/menu
        "messages": {
            0: {
                "date": 1234,
                "nickname": "José",
                "user_avatar": "/images/user.png",
                "text": "texto da mensagem"
            }
        }
    };

    let jsonBurger = {
        "opened": false
    };

    return (
        <div className={Css_Home.container}>
            <Head>
                <title>Lista de conversas</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={Css_Home.main}>
                <HeaderApp database={jsonHeader}></HeaderApp>

                <MenuBurger></MenuBurger>

                <div className={Css_Home.content}>
                    <Link href={'/messages/message'}>
                        <a>Conversa</a>
                    </Link>
                </div>
            </main>
        </div>
    )
}