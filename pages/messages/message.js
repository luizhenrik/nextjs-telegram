import Head from 'next/head'

import Css_Home from '../../styles/Home.module.scss'

import Cpt_header_chat from '../../components/header/header_chat'
import Cpt_header_search from '../../components/header/header_search'

import {SearchContext} from '../../contexts/search'
import React, { useState, useContext } from 'react';

export default function Message() {
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

        const { isOpen_search } = useContext(SearchContext);

        return (
            <div className={Css_Home.container}>
                <Head>
                    <title>Conversa com user</title>
                </Head>
                
                <main className={Css_Home.main}>
                    {isOpen_search ? (
                        <Cpt_header_search></Cpt_header_search>
                    ) : (
                        <Cpt_header_chat data={jsonHeader}></Cpt_header_chat>
                    )}

                    <div className={Css_Home.content}></div>
                </main>
            </div>
        )
}
    