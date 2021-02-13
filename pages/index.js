import style from '../styles/Home.module.scss'

import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useContext } from 'react';

import Header from '../components/header/views/header'
import HeaderSearch from '../components/header/views/headerSearch'
import HeaderDetails from '../components/header/views/headerDetails'
import Sidebar from '../components/sidebar/views/sidebar';
import ResumeUser from '../components/resume-user/views/resume-user';

import {GeneralContext} from '../contexts/general'

function Home({chatsList}) {

    const { searchOpen, headerDetailsOpen } = useContext(GeneralContext);

    
    return (
        <div className={style.container}>
            <Head>
                <title>Lista de conversas</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={style.main}>
                {searchOpen ? (
                    <HeaderSearch></HeaderSearch>
                ) : (
                    <>
                        {headerDetailsOpen ? (
                            <HeaderDetails></HeaderDetails>
                        ) : (
                            <Header></Header>
                        )}
                    </>
                )}
                
                <Sidebar></Sidebar>
                <div className={style.content}>
                    <ResumeUser></ResumeUser>

                    teste: {chatsList}
                </div>
            </main>
        </div>
    )
}

// export async function getStaticProps() {
//     const resChatsList = await fetch('https://xirrim.com/api/basic.js')
//     const chatsList = await resChatsList.json()

//     return { 
//         props: {
//             chatsList
//         }
//     }
// }

export default Home;