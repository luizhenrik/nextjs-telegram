import Head from 'next/head'
import useSWR from 'swr'
import React, { useContext } from 'react'
import { server } from '../../config'

import Header from '../../components/header/views/header'
import HeaderSearch from '../../components/header/views/headerSearch'
import HeaderDetails from '../../components/header/views/headerDetails'
import Sidebar from '../../components/sidebar/views/sidebar'
import ResumeUser from '../../components/resume-user/views/resume-user'
import Loader from '../../components/loader/views/loader'

import { GeneralContext } from '../../contexts/general'
import { Appstyle } from '../../styles/app'

const fetcher = async function (url, params) {
  const res = await fetch(url, params)
  const result = await res.json()
  if (res.status !== 200) {
    throw new Error(result.error)
  }
  return result
}

function ListConversations({ chats, urlFetch, params }) {
  const { searchOpen, headerDetailsOpen } = useContext(GeneralContext)
  const { data, error } = useSWR([urlFetch, params], fetcher, { chats })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

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
                    {data.map((value, index) => (
                        <ResumeUser key={index} data={value}></ResumeUser>
                    ))}
                    <Loader />
                </div>
            </main>
        </Appstyle>
  )
}

ListConversations.getInitialProps = async ({ query }) => {
  const urlFetch = `${server}/api/chats`
  const params = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      myUserId: '602f19110880daeef6955fa1'
    })
  }
  const chats = await fetcher(urlFetch, params)

  return {
    chats,
    urlFetch,
    params
  }
}

export default ListConversations
