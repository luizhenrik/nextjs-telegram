import Css_Home from '../styles/Home.module.scss'

import Cpt_header from '../components/header/header'
import Cpt_MenuBurger from '../components/menuBurger';

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={Css_Home.container}>
            <Head>
                <title>Lista de conversas</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={Css_Home.main}>
                <Cpt_header open_menuBurger></Cpt_header>

                <Cpt_MenuBurger open_menuBurger></Cpt_MenuBurger>

                <div className={Css_Home.content}>
                    <Link href={'/messages/message'}>
                        <a>Conversa</a>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://xirrim.com/api/basic')
    const data = await res.json()
  
    return {
        props: {
            open_menuBurger: data.menuBurger_isOpen
        },
        revalidate: 1
    }
  }