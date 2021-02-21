import Head from 'next/head'
import React, { useContext } from 'react'
import { useRouter, Router } from 'next/router'
import { server } from '../../../config'

import Header from '../../../components/header/views/header'
import HeaderSearch from '../../../components/header/views/headerSearch'
import HeaderDetails from '../../../components/header/views/headerDetails'
import Sidebar from '../../../components/sidebar/views/sidebar'
import ResumeUser from '../../../components/resume-user/views/resume-user'

import { GeneralContext } from '../../../contexts/general'
import { Appstyle } from '../../../styles/app'

function ListConversations({ chatsList }) {
  const { searchOpen, headerDetailsOpen, loading, setLoading } = useContext(GeneralContext)
  const router = useRouter()

  if (router.isFallback) {
    return <div className={'app__title'}>Loading...</div>
  }

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
                    {loading
                      ? (
                            <h1 className={'app__title'}>Loading...</h1>
                        )
                      : (
                          chatsList.map((value, index) => (
                            <ResumeUser key={index} data={value}></ResumeUser>
                          ))
                        )}
                </div>
            </main>
        </Appstyle>
  )
}
export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { usrid: '602f19110880daeef6955fa1' } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const userId = JSON.parse(JSON.stringify(params))

  const res = await fetch(`${server}/api/chats/${userId.usrid}/list`)
  const chatsList = await res.json()

  return {
    props: {
      chatsList: chatsList
    },
    revalidate: 1
  }
}

export default ListConversations
