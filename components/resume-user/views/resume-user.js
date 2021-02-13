import style from "../../../components/resume-user/styles/resume-user.module.scss"

import Link from "next/link"
import Image from "next/image"
import React, { useState, useContext } from 'react';

import { GeneralContext } from '../../../contexts/general'

export default function ResumeUser() {
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
                <Link href={"/chat"}>
                    <a className={style['resume-user__content']}>
                        <Image
                        src={'https://xirrim.com/images/user.png'}
                        alt={'nickname'}
                        layout={'intrinsic'}
                        width={'52'}
                        height={'52'}
                        className={style['resume-user__avatar']}></Image>

                        <div className={style['resume-user__container']}>
                            <span className={style['resume-user__nickname']}>Lorem Ipsum</span>
                            <span className={style['resume-user__text']}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                        </div>
                    </a>
                </Link>

                {!headerDetailsOpen ? (
                    <a className={`${style['resume-user__handler']}`} onClick={handlerHeaderDetailsOpen}>
                        <span className={`fas fa-cog`}></span>
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