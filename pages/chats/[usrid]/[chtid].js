
import Head from 'next/head'
import React, { useContext } from 'react'
import { server } from '../../../config'
import { Router } from 'next/router'

import HeaderSearch from '../../../components/header/views/headerSearch'
import HeaderChat from '../../../components/header/views/headerChat'
import Tooltip from '../../../components/tooltip/views/tooltip'
import Message from '../../../components/messages/views/message'

import { GeneralContext } from '../../../contexts/general'
import { Appstyle } from '../../../styles/app'

// eslint-disable-next-line react/prop-types
function Chat({ chat }) {
  const { searchOpen, setLoading, loading } = useContext(GeneralContext)

  const messages = chat.messages

  chat.myUserId = '602f19110880daeef6955fa1'

  React.useEffect(() => {
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
                          messages.map((value, index) => (
                            <Message key={index} data={value}></Message>
                          ))
                        )}
                </div>
            </main>
        </Appstyle>
  )
}

export async function getServerSideProps({ query }) {
  const chatId = query.chtid
  const userId = query.usrid

  const res = await fetch(`${server}/api/chats/${userId}/${chatId}`)
  const chat = await res.json()

  return {
    props: {
      chat: chat,
      revalidate: 1
    }
  }
}

export default Chat
