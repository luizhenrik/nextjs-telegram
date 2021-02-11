import Css_headerApp from '../../components/header/header.module.scss';

import {SearchContext} from '../../contexts/search'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useContext } from 'react';

export default function Header_chat({data}){
    const { isOpen_search, set_isOpen_search } = useContext(SearchContext);

    let handlerSearch = () => {
        set_isOpen_search(!isOpen_search);
    }

    return (
        <>
            <header className={`${Css_headerApp.header}`}>
                <Link href={'/'}>
                    <a className={`${Css_headerApp.header__handler}`}>
                        <span className={`fas fa-arrow-left`}></span>
                    </a>
                </Link>
                <div className={`${Css_headerApp.header__container}`}>
                    <Link href={'users/profile'}>
                        {data.container.avatar.status ? (
                            <Image
                                src={data.container.avatar.src}
                                alt={data.container.title}
                                width={data.container.avatar.width}
                                height={data.container.avatar.height}
                                className={`${Css_headerApp.header__image}`}
                            />
                        ) : (" ")}
                    </Link>
                    
                    <div className={`${Css_headerApp.header__container}`}>
                        <h3 className={`${Css_headerApp.header__title}`}>{data.container.title}</h3>

                        {data.container.description.status ? (
                            <span className={`${Css_headerApp.header__description}`}>{data.container.description.text}</span>
                        ) : (" ")}
                    </div>

                    <Link href={''}>
                        <a className={`${Css_headerApp.header__handler}`} onClick={handlerSearch}>
                            <span className={`fas fa-search`}></span>
                        </a>
                    </Link>
                    
                    <a className={`${Css_headerApp.header__handler}`}>
                        <span className={`fas fa-phone-alt`}></span>
                    </a>
                    
                    <a className={`${Css_headerApp.header__handler}`}>
                        <span className={`fas fa-ellipsis-v`}></span>
                    </a>
                </div>
            </header>
        </>
    )
}