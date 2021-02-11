import Css_header from '../../components/header/header.module.scss'

import {SearchContext} from '../../contexts/search'

import Link from 'next/link'
import React, { useState, useContext } from 'react';

export default function Header_search() {
    const { isOpen_search, set_isOpen_search } = useContext(SearchContext);

    let handlerSearch = () => {
        set_isOpen_search(!isOpen_search);
    }

    return (
        <>
            <header className={`${Css_header.header}`}>
                <Link href={''}>
                    <a className={`${Css_header.header__handler}`} onClick={handlerSearch}>
                        <i className={`fas fa-arrow-left`}></i>
                    </a>
                </Link>
                <div className={`${Css_header.header__container}`}>
                    <input className={`${Css_header.header__field}`} placeholder={'Buscar'}></input>
                </div>
            </header>
        </>
    )
}