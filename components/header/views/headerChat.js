import style from '../../../components/header/styles/header.module.scss';

import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useContext } from 'react';

import {GeneralContext} from '../../../contexts/general'

export default function HeaderChat({data}){
    const { searchOpen, set_searchOpen } = useContext(GeneralContext);

    let handlerSearchOpen = () => {
        set_searchOpen(!searchOpen);
    }

    return (
        <>
            <header className={`${style.header}`}>
                <Link href={'/'}>
                    <a className={`${style.header__handler}`}>
                        <span className={`fas fa-arrow-left`}></span>
                    </a>
                </Link>
                <div className={`${style.header__container}`}>
                    <Link href={'users/profile'}>
                        {data.container.avatar.status ? (
                            <Image
                                src={data.container.avatar.src}
                                alt={data.container.title}
                                width={data.container.avatar.width}
                                height={data.container.avatar.height}
                                className={`${style.header__image}`}
                            />
                        ) : (" ")}
                    </Link>
                    
                    <div className={`${style.header__container}`}>
                        <h3 className={`${style.header__title}`}>{data.container.title}</h3>

                        {data.container.description.status ? (
                            <span className={`${style.header__description}`}>{data.container.description.text}</span>
                        ) : (" ")}
                    </div>
                    
                    <a className={`${style.header__handler}`}>
                        <span className={`fas fa-ellipsis-v`}></span>
                    </a>
                </div>
            </header>
        </>
    )
}