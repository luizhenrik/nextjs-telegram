
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
import useSWR from 'swr'

const fetcher = async function (url, params) {
  const res = await fetch(url, params)
  const result = await res.json()
  if (res.status !== 200) {
    throw new Error(result.error)
  }
  return result
}

function Chat({ chat, urlFetch, params }) {
  const { searchOpen } = useContext(GeneralContext)
  const { data, error } = useSWR([urlFetch, params], fetcher, { chat })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
        <Appstyle>
            <Head>
                <title>Conversa com {data.username}</title>
            </Head>

            <main className={'app__content'}>
                    {searchOpen ? (<HeaderSearch></HeaderSearch>) : (<> <HeaderChat data={data}></HeaderChat><Tooltip></Tooltip> </>)}

                <div className={'app__container'}>
                        {data.messages.map((value, index) => (
                            <Message key={index} data={value}/>
                        ))}
                        <FormChat data={{
                          myUserId: data.myUserId,
                          user_id: data.userId,
                          chatId: data.id
                        }}/>
                        <Loader />
                </div>
            </main>
        </Appstyle>
  )
}

Chat.getInitialProps = async ({ query }) => {
  const chatId = query.chtid
  const urlFetch = `${server}/api/chats/${chatId}`
  const params = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chatId: chatId,
      myUserId: '602f19110880daeef6955fa1'
    })
  }

  const chat = await fetcher(urlFetch, params)

  return {
    chat,
    urlFetch,
    params
  }
}

export default Chat
