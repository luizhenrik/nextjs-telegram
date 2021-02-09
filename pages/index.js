import Css_Home from '../styles/Home.module.scss'

import Cpt_header_search from '../components/header/header_search'
import Cpt_MenuBurger from '../components/menuBurger';

import Head from 'next/head'
import Link from 'next/link'

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
                <Cpt_header_search></Cpt_header_search>

                <Cpt_MenuBurger></Cpt_MenuBurger>

                <div className={Css_Home.content}>
                    <Link href={'/messages/message'}>
                        <a>Conversa</a>
                    </Link>
                </div>
            </main>
        </div>
    )
}