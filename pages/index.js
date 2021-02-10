import Css_Home from '../styles/Home.module.scss'

import Cpt_header from '../components/header/header'
import Cpt_MenuBurger from '../components/menuBurger';

import {MenuProvider} from '../contexts/menu'

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
                <MenuProvider>
                    <Cpt_header></Cpt_header>
                    <Cpt_MenuBurger></Cpt_MenuBurger>
                </MenuProvider>
                <div className={Css_Home.content}>
                    <Link href={'/messages/message'}>
                        <a>Conversa</a>
                    </Link>
                </div>
            </main>
        </div>
    )
}