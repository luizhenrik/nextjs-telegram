import style from '../styles/Home.module.scss'

import Head from 'next/head'
import React, { useState, useContext } from 'react'

import HeaderChat from '../components/header/views/headerChat'
import HeaderSearch from '../components/header/views/headerSearch'

import {SearchContext} from '../contexts/search'

export default function Chat() {
        let jsonHeader = {
            "mode": "user", // user/search/menu
            "container": {
                "avatar": {
                    "status": true,
                    "src": "/images/user.png",
                    "width": "45",
                    "height": "45"
                },
                "title": "José",
                "description": {
                    "status": true,
                    "text": "Online"
                }
            },
            "actions": {
                "videoCall": true,
                "voiceCall": true,
                "search": true,
                "menu": true
            },
            "messages": {
                0: {
                    "date": 1234,
                    "nickname": "José",
                    "user_avatar": "/images/user.png",
                    "text": "texto da mensagem"
                }
            }
        };

        const { searchOpen } = useContext(SearchContext);

        return (
            <div className={style.container}>
                <Head>
                    <title>Conversa com user</title>
                </Head>
                
                <main className={style.main}>
                    {searchOpen ? (
                        <HeaderSearch></HeaderSearch>
                    ) : (
                        <HeaderChat data={jsonHeader}></HeaderChat>
                    )}

                    <div className={style.content}></div>
                </main>
            </div>
        )
}
    