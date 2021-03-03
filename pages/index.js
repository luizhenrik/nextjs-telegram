import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { Router } from 'next/router'

import Header from '../components/header/views/header'
import Sidebar from '../components/sidebar/views/sidebar'

import { GeneralContext } from '../contexts/general'
import { Appstyle } from '../styles/app'

function Home() {
  const { loading, setLoading } = useContext(GeneralContext)

  useEffect(() => {
    const start = () => {
      console.log('start')
      setLoading(true)
    }

    const end = () => {
      console.log('findished')
      setLoading(false)
    }

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

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
                            <Link prefetch={false} as={'/chats'} href={'/chats'}>
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
