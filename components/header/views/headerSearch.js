import style from '../../../components/header/styles/header.module.scss'

import Link from 'next/link'
import React, { useState, useContext } from 'react';

import {GeneralContext} from '../../../contexts/general'

export default function HeaderSearch() {
    const { searchOpen, set_searchOpen } = useContext(GeneralContext);

    let handlerSearchOpen = () => {
        set_searchOpen(!searchOpen);
    }

    return (
        <>
            <header className={`${style.header}`}>
                <Link href={''}>
                    <a className={`${style.header__handler}`} onClick={handlerSearchOpen}>
                        <i className={`fas fa-arrow-left`}></i>
                    </a>
                </Link>
                <div className={`${style.header__container}`}>
                    <input className={`${style.header__field}`} placeholder={'Buscar'}></input>
                </div>
            </header>
        </>
    )
}