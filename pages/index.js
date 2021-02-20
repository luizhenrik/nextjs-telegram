import Head from 'next/head'
import React, { useContext } from 'react'
import { connectToDatabase } from '../util/mongodb'

import Header from '../components/header/views/header'
import HeaderSearch from '../components/header/views/headerSearch'
import HeaderDetails from '../components/header/views/headerDetails'
import Sidebar from '../components/sidebar/views/sidebar'
import ResumeUser from '../components/resume-user/views/resume-user'

import { GeneralContext } from '../contexts/general'
import { Appstyle } from '../styles/app'

function Home({ chatsList }) {
  const { searchOpen, headerDetailsOpen } = useContext(GeneralContext)
  return (
        <Appstyle>
            <Head>
                <title>Lista de conversas</title>
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
                        <ResumeUser data={value}></ResumeUser>
                    ))}
                </div>
            </main>
        </Appstyle>
  )
}

// Home.getInitialProps = async (ctx) => {
//   const resChatsList = await fetch('https://xirrim.com/api/conversations')
//   const chatsList = await resChatsList.json()

//   return {
//     chatsList
//   }
// }

export async function getServerSideProps({ query }) {
  const { db } = await connectToDatabase()

  const myId = '602f19110880daeef6955fa1'
  const result = []
  const chatsIds = []
  const usersIds = []
  const usersUsernames = []
  const messagesExcerpt = []

  const chats = await db.collection('chats')
  const messages = await db.collection('messages')
  const users = await db.collection('users')

  const chatsJson = await chats.find({ 'users.user_id': { $exists: [myId] } }).toArray().then(function(items) {
    return items
  }).catch(function(err) {
    console.error(`deu b.o: ${err}`)
  })

  for (let i = 0; i < chatsJson.length; i++) {
    chatsIds.push(chatsJson[i]._id)

    for (let j = 0; j < chatsJson[i].users.length; j++) {
      if (myId !== chatsJson[i].users[j].user_id) {
        usersIds.push(chatsJson[i].users[j].user_id)
      }
    }
  }

  const messagesJson = await messages.find({ chat_id: { $exists: chatsIds } }).toArray().then(function(items) {
    return items
  }).catch(function(err) {
    console.error(`deu b.o: ${err}`)
  })

  for (let i = 0; i < messagesJson.length; i++) {
    messagesExcerpt.push(messagesJson[i].messages[messagesJson[i].messages.length - 1])
  }

  const usersJson = await users.find({ _id: { $exists: usersIds } }).toArray().then(function(items) {
    return items
  }).catch(function(err) {
    console.error(`deu b.o: ${err}`)
  })

  for (let i = 0; i < usersJson.length; i++) {
    usersUsernames.push(usersJson[i].nickname)
  }

  for (let i = 0; i < chatsIds.length; i++) {
    if (messagesExcerpt[i]) {
    //   messagesExcerpt[i].user_id = messagesExcerpt[i].user_id === myId ? 'eu' : messagesExcerpt[i].user_id

      result.push({
        chatId: chatsIds[i],
        userId: usersIds[i],
        username: usersUsernames[i],
        excerpt: messagesExcerpt[i]
      })
    }
  }

  return {
    props: {
      chatsList: JSON.parse(JSON.stringify(result)),
      revalidate: 1
    }
  }
}

export default Home
