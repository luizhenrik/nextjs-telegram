import Head from 'next/head'
import React, { useContext } from 'react'
import Link from 'next/link'

import Header from '../components/header/views/header'
import Sidebar from '../components/sidebar/views/sidebar'

import { GeneralContext } from '../contexts/general'
import { Appstyle } from '../styles/app'

function Home() {
  const { loading, setLoading } = useContext(GeneralContext)
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
                    {loading
                      ? (

                            <h1 className={'app__title'}>Conectando...</h1>
                        )
                      : (
                            <Link prefetch={false} as={'/chats/602f19110880daeef6955fa1/list'} href={'/chats/[usrid]/list'}>
                                <a className={'app__title'}>
                                    Clique aqui para conectar no app
                                </a>
                            </Link>
                        )}
                </div>
            </main>
        </Appstyle>
  )
}

export default Home
