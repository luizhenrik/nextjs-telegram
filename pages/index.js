import style from '../styles/Home.module.scss'

import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useContext } from 'react';

import Header from '../components/header/views/header'
import HeaderSearch from '../components/header/views/headerSearch'
import Sidebar from '../components/sidebar/views/sidebar';

import {SidebarProvider} from '../contexts/sidebar'
import {SearchContext} from '../contexts/search'

export default function Home() {

    const { searchOpen } = useContext(SearchContext);

    
    return (
        <div className={style.container}>
            <Head>
                <title>Lista de conversas</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={style.main}>
                <SidebarProvider>
                    {searchOpen ? (
                        <HeaderSearch></HeaderSearch>
                    ) : (
                        <Header></Header>
                    )}
                    
                    <Sidebar></Sidebar>
                </SidebarProvider>
                <div className={style.content}>
                    <Link href={'/chat'}>
                        <a>Conversa</a>
                    </Link>
                </div>
            </main>
        </div>
    )
}