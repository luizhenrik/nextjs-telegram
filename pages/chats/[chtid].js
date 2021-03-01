
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import { Router } from 'next/router'
import { server } from '../../config'

import HeaderSearch from '../../components/header/views/headerSearch'
import HeaderChat from '../../components/header/views/headerChat'
import Tooltip from '../../components/tooltip/views/tooltip'
import Message from '../../components/messages/views/message'

import { GeneralContext } from '../../contexts/general'
import { Appstyle } from '../../styles/app'
import FormChat from '../../components/form-chat/views/form-chat'

// eslint-disable-next-line react/prop-types
function Chat({ chat }) {
  const { searchOpen, setLoading, loading } = useContext(GeneralContext)

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

  const messages = chat.messages

  chat.myUserId = '602f19110880daeef6955fa1'

  return (
        <Appstyle>
            <Head>
                <title>Conversa com {chat.username}</title>
            </Head>

            <main className={'app__content'}>
                    {searchOpen ? (<HeaderSearch></HeaderSearch>) : (<> <HeaderChat data={chat}></HeaderChat><Tooltip></Tooltip> </>)}

                <div className={'app__container'}>
                    {loading
                      ? (
                            <h1 className={'app__title'}>Loading...</h1>
                        )
                      : (
                          <>
                          {messages.map((value, index) => (
                            <Message key={index} data={value}></Message>
                          ))}
                          <FormChat></FormChat>
                          </>
                        )}
                </div>
            </main>
        </Appstyle>
  )
}

export async function getServerSideProps({ query }) {
  const chatId = query.chtid

  const res = await fetch(`${server}/api/chats/${chatId}`)
  const chat = await res.json()

  return {
    props: {
      chat: chat
    }
  }
}

export default Chat