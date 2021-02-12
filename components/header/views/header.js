import style from '../../../components/header/styles/header.module.scss';

import Link from 'next/link'
import React, { useState, useContext } from 'react';

import {SidebarContext} from '../../../contexts/sidebar'
import {SearchContext} from '../../../contexts/search'

export default function Header() {

    const { sidebarOpen, set_sidebarOpen } = useContext(SidebarContext);
    const { searchOpen, set_searchOpen } = useContext(SearchContext);
    
    let handlerSidebarOpen = () => {
        set_sidebarOpen(!sidebarOpen);
    }

    let handlerSearchOpen = () => {
        set_searchOpen(!searchOpen);
    }

    return (
        <>
            <header className={`${style.header}`}>
                    <Link href={'#'}>
                        <a className={`${style.header__handler}`} onClick={handlerSidebarOpen}>
                            <span className={`fas fa-bars`}></span>
                        </a>
                    </Link>
                    <div className={`${style.header__container}`}>
                        <div className={`${style.header__container}`}>
                            <h3 className={`${style.header__title}`}>{`Xirrim`}</h3>
                        </div>

                        <a className={`${style.header__handler}`} onClick={handlerSearchOpen}>
                            <span className={`fas fa-search`}></span>
                        </a>
                </div>
            </header>
        </>
    )
}

