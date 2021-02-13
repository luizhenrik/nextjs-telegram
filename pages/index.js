import style from '../styles/Home.module.scss'

import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useContext } from 'react';

import Header from '../components/header/views/header'
import HeaderSearch from '../components/header/views/headerSearch'
import Sidebar from '../components/sidebar/views/sidebar';
import ResumeUser from '../components/resume-user/views/resume-user';

import {GeneralContext} from '../contexts/general'

export default function Home() {

    const { searchOpen } = useContext(GeneralContext);

    
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
                    <Header></Header>
                )}
                
                <Sidebar></Sidebar>
                <div className={style.content}>
                    <ResumeUser></ResumeUser>
                </div>
            </main>
        </div>
    )
}