
import Head from 'next/head'
import React, { useContext } from 'react'
import { connectToDatabase } from '../util/mongodb'

import HeaderSearch from '../components/header/views/headerSearch'
import HeaderChat from '../components/header/views/headerChat'
import Tooltip from '../components/tooltip/views/tooltip'
import Message from '../components/messages/views/message'

import { GeneralContext } from '../contexts/general'
import { Appstyle } from '../styles/app'

// eslint-disable-next-line react/prop-types
function Chat({ chat }) {
  const { searchOpen } = useContext(GeneralContext)
  //   const router = useRouter()
  //   const { chatId } = router.query
  const messages = chat.messages

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
                        <Message data={messages[index]}></Message>
                    ))}
                </div>
            </main>
        </Appstyle>
  )
}

export async function getServerSideProps({ query }) {
  const chatId = query.chatId
  const username = query.username
  const { db } = await connectToDatabase()
  const result = []
  const chatsIds = []
  const messagesList = []

  const messages = await db.collection('messages')

  const messagesJson = await messages.find({ chat_id: { $exists: chatId } }).toArray().then(function(items) {
    return items
  }).catch(function(err) {
    console.error(`deu b.o: ${err}`)
  })

  for (let i = 0; i < messagesJson.length; i++) {
    messagesList.push(messagesJson[i].messages[messagesJson[i].messages.length - 1])
  }

  for (let i = 0; i < chatsIds.length; i++) {
    result.push({
      username: username,
      messages: messagesList[i]
    })
  }

  return {
    props: {
      chat: {
        id: chatId,
        username: username,
        messages: messagesJson[0].messages
      }
    }
  }
}

export default Chat
