import Head from 'next/head'
import React, { useContext } from 'react'
import { server } from '../../../config'

import Header from '../../../components/header/views/header'
import HeaderSearch from '../../../components/header/views/headerSearch'
import HeaderDetails from '../../../components/header/views/headerDetails'
import Sidebar from '../../../components/sidebar/views/sidebar'
import ResumeUser from '../../../components/resume-user/views/resume-user'

import { GeneralContext } from '../../../contexts/general'
import { Appstyle } from '../../../styles/app'

function ListConversations({ chatsList }) {
  const { searchOpen, headerDetailsOpen } = useContext(GeneralContext)
  return (
        <Appstyle>
            <Head>
                <title>{chatsList.username}</title>
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
                    {chatsList.map((value, index) => (
                        <ResumeUser key={index} data={value}></ResumeUser>
                    ))}
                </div>
            </main>
        </Appstyle>
  )
}

export async function getServerSideProps({ query }) {
  const userId = '602f19110880daeef6955fa1'

  const res = await fetch(`${server}/api/${userId}/list`)
  const chatsList = await res.json()

  return {
    props: {
      chatsList: chatsList,
      revalidate: 60
    }
  }
}

export default ListConversations
