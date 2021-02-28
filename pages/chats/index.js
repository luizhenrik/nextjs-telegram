import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import { server } from '../../config'
import { Router } from 'next/router'

import Header from '../../components/header/views/header'
import HeaderSearch from '../../components/header/views/headerSearch'
import HeaderDetails from '../../components/header/views/headerDetails'
import Sidebar from '../../components/sidebar/views/sidebar'
import ResumeUser from '../../components/resume-user/views/resume-user'

import { GeneralContext } from '../../contexts/general'
import { Appstyle } from '../../styles/app'

function ListConversations({ chats }) {
  const { searchOpen, headerDetailsOpen, loading, setLoading } = useContext(GeneralContext)

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
                <title>{'Minhas Conversas'}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={'app__content'}>
                {searchOpen
                  ? (
                    <HeaderSearch></HeaderSearch>
                    )
                  : (
                    <>{headerDetailsOpen ? <HeaderDetails></HeaderDetails> : <Header></Header>}</>
                    )}

                <Sidebar></Sidebar>
                <div className={'app__container'}>
                    {loading
                      ? (
                            <h1 className={'app__title'}>Loading...</h1>
                        )
                      : (
                          chats.map((value, index) => (
                            <ResumeUser key={index} data={value}></ResumeUser>
                          ))
                        )}
                </div>
            </main>
        </Appstyle>
  )
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`${server}/api/chats`)
  const chatsList = await res.json()

  return {
    props: {
      chats: chatsList
    }
  }
}

export default ListConversations
