
import Head from 'next/head'
import React, { useContext } from 'react'
import { server } from '../../../config'

import HeaderSearch from '../../../components/header/views/headerSearch'
import HeaderChat from '../../../components/header/views/headerChat'
import Tooltip from '../../../components/tooltip/views/tooltip'
import Message from '../../../components/messages/views/message'

import { GeneralContext } from '../../../contexts/general'
import { Appstyle } from '../../../styles/app'

// eslint-disable-next-line react/prop-types
function Chat({ chat }) {
  const { searchOpen } = useContext(GeneralContext)
  const messages = chat.messages
  chat.myUserId = '602f19110880daeef6955fa1'

  return (
        <Appstyle>
            <Head>
                <title>Conversa com {chat.username}</title>
            </Head>

            <main className={'app__content'}>
                {searchOpen
                  ? (
                    <HeaderSearch></HeaderSearch>
                    )
                  : (
                    <>
                        {<HeaderChat data={chat}></HeaderChat>}

                        <Tooltip></Tooltip>
                    </>
                    )}

                <div className={'app__container'}>
                    {messages.map((value, index) => (
                        <Message key={index} data={value}></Message>
                    ))}
                </div>
            </main>
        </Appstyle>
  )
}

export async function getServerSideProps({ query }) {
  const chatId = query.chtid
  const userId = query.usrid

  const res = await fetch(`${server}/api/${userId}/${chatId}`)
  const chat = await res.json()

  return {
    props: {
      chat: chat,
      revalidate: 60
    }
  }
}

export default Chat
