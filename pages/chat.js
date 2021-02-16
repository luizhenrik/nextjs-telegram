
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

import HeaderChat from '../components/header/views/headerChat'
import HeaderSearch from '../components/header/views/headerSearch'
import Message from '../components/messages/views/message'
import Tooltip from '../components/tooltip/views/tooltip'

import { GeneralContext } from '../contexts/general'
import { Appstyle } from '../styles/app'

// eslint-disable-next-line react/prop-types
function Chat({ chat }) {
  const { searchOpen } = useContext(GeneralContext)
  const router = useRouter()
  const { chatId } = router.query
  const messages = chat[chatId].messages

  return (
        <Appstyle>
            <Head>
                <title>Conversa com {chat[chatId].name}</title>
            </Head>

            <main className={'app__content'}>
                {searchOpen
                  ? (
                    <HeaderSearch></HeaderSearch>
                    )
                  : (
                    <>
                        <HeaderChat data={chat[chatId]}></HeaderChat>
                        <Tooltip></Tooltip>
                    </>
                    )}

                <div className={'app__container'}>
                    {messages.map((value, index) => (
                        <Message data={messages[index]}></Message>
                    ))}
                </div>
            </main>
        </Appstyle>
  )
}

Chat.getInitialProps = async (ctx) => {
  const resChat = await fetch('https://xirrim.com/api/chats')
  const chat = await resChat.json()

  return {
    chat
  }
}

export default Chat
