import Head from 'next/head'
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

function ListConversations({ chats }) {
  const { searchOpen, headerDetailsOpen } = useContext(GeneralContext)

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
                    <Loader />

                    {chats.map((value, index) => (
                        <ResumeUser key={index} data={value}></ResumeUser>
                    ))}
                </div>
            </main>
        </Appstyle>
  )
}

export async function getServerSideProps() {
  const chats = await fetch(`${server}/api/chats`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      myUserId: '602f19110880daeef6955fa1'
    })
  })
    .then(response => response.json())
    .catch(error => console.log(error))

  return {
    props: {
      chats: chats
    }
  }
}

export default ListConversations
