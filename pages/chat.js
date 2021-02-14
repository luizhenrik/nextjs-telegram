import style from '../styles/Home.module.scss'

import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

import HeaderChat from '../components/header/views/headerChat'
import HeaderSearch from '../components/header/views/headerSearch'
import Tooltip from '../components/tooltip/views/tooltip'

import { GeneralContext } from '../contexts/general'

// eslint-disable-next-line react/prop-types
function Chat({ chat }) {
  const { searchOpen } = useContext(GeneralContext)
  const router = useRouter()
  const { chatId } = router.query

  return (
        <div className={style.container}>
            <Head>
                <title>Conversa com {chat[chatId].name}</title>
            </Head>

            <main className={style.main}>
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

                <div className={style.content}></div>
            </main>
        </div>
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
