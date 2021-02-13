import style from "../../../components/resume-user/styles/resume-user.module.scss"

import Link from "next/link"
import Image from "next/image"
import React, { useState, useContext } from 'react';

import { GeneralContext } from '../../../contexts/general'

export default function ResumeUser({data}) {
    const { tooltipOpen, set_tooltipOpen, headerDetailsOpen, set_headerDetailsOpen } = useContext(GeneralContext);

    let handlerTooltipOpen = () => {
        set_tooltipOpen(!tooltipOpen);
    }

    let handlerHeaderDetailsOpen = () => {
        set_headerDetailsOpen(!headerDetailsOpen);
    }

    return (
        <>
            <div className={style['resume-user']}>
                <Link href={`/chat?chatId=${data.chatId}`}>
                    <a className={style['resume-user__content']}>
                        <Image
                        src={'https://xirrim.com/images/user.png'}
                        alt={'nickname'}
                        layout={'intrinsic'}
                        width={'52'}
                        height={'52'}
                        className={style['resume-user__avatar']}></Image>

                        <div className={style['resume-user__container']}>
                            <span className={style['resume-user__nickname']}>{data.name}</span>
                            <span className={style['resume-user__text']}><strong>{`${data.messages.username}: `}</strong>{`${data.messages.text}`}</span>
                        </div>
                    </a>
                </Link>

                {!headerDetailsOpen ? (
                    <a className={`${style['resume-user__handler']}`} onClick={handlerHeaderDetailsOpen}>
                        <span className={`far fa-check-circle`}></span>
                    </a>
                ) : (
                    <a className={`${style['resume-user__handler']}`}>
                        <span className={`fas fa-check-circle`}></span>
                    </a>
                )}                
            </div>
        </>
    )
}