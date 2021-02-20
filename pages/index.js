import Head from 'next/head'
import React, { useContext } from 'react'

import Header from '../components/header/views/header'
import Sidebar from '../components/sidebar/views/sidebar'

import { GeneralContext } from '../contexts/general'
import { Appstyle } from '../styles/app'

function ListConversations({ chatsList }) {
  const { searchOpen, headerDetailsOpen } = useContext(GeneralContext)
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
                    <h1>Manutenção...</h1>
                </div>
            </main>
        </Appstyle>
  )
}

export default ListConversations
