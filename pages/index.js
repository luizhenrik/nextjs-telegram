import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

import Header from '../components/header/views/header'
import Sidebar from '../components/sidebar/views/sidebar'
import Loader from '../components/loader/views/loader'

import { Appstyle } from '../styles/app'

function Home() {
  return (
        <Appstyle>
            <Head>
                <title>Lista de conversas</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={'app__content'}>
                <Header></Header>
                <Sidebar></Sidebar>
                <div className={'app__container'}>
                    <Loader />
                    <Link prefetch={false} as={'/chats'} href={'/chats'}>
                        <a className={'app__title'}>
                            Clique aqui para conectar no app
                        </a>
                    </Link>
                </div>
            </main>
        </Appstyle>
  )
}

export default Home
