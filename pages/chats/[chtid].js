
import Head from 'next/head'
import React, { useContext } from 'react'
import { server } from '../../config'

import HeaderSearch from '../../components/header/views/headerSearch'
import HeaderChat from '../../components/header/views/headerChat'
import Tooltip from '../../components/tooltip/views/tooltip'
import Message from '../../components/messages/views/message'

import { GeneralContext } from '../../contexts/general'
import { Appstyle } from '../../styles/app'
import FormChat from '../../components/form-chat/views/form-chat'
import Loader from '../../components/loader/views/loader'

function Chat({ chat }) {
  const { searchOpen } = useContext(GeneralContext)

  const messages = chat.messages

  const dataForm = {
    myUserId: chat.myUserId,
    user_id: chat.userId,
    chatId: chat.id
  }

  return (
        <Appstyle>
            <Head>
                <title>Conversa com {chat.username}</title>
            </Head>

            <main className={'app__content'}>
                    {searchOpen ? (<HeaderSearch></HeaderSearch>) : (<> <HeaderChat data={chat}></HeaderChat><Tooltip></Tooltip> </>)}

                <div className={'app__container'}>
                        {messages.map((value, index) => (
                            <Message key={index} data={value}/>
                        ))}
                        <FormChat data={dataForm}/>
                        <Loader />
                </div>
            </main>
        </Appstyle>
  )
}

export async function getServerSideProps({ query }) {
  const chatId = query.chtid

  const chat = await fetch(`${server}/api/chats/${chatId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chatId: chatId,
      myUserId: '602f19110880daeef6955fa1'
    })
  })
    .then(response => response.json())
    .catch(error => console.log(error))

  return {
    props: {
      chat: chat
    }
  }
}

export default Chat
