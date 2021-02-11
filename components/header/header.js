import Css_header from '../../components/header/header.module.scss';

import Link from 'next/link'

import React, { useState, useContext } from 'react';
import {MenuContext} from '../../contexts/menu'
import {SearchContext} from '../../contexts/search'

export default function Header() {

    const { isOpen, set_isOpen } = useContext(MenuContext);
    const { isOpen_search, set_isOpen_search } = useContext(SearchContext);
    
    let handlerClick = () => {
        set_isOpen(!isOpen);
    }

    let handlerSearch = () => {
        set_isOpen_search(!isOpen_search);
    }

    return (
        <>
            <header className={`${Css_header.header}`}>
                    <Link href={'#'}>
                        <a className={`${Css_header.header__handler}`} onClick={handlerClick}>
                            <span className={`fas fa-bars`}></span>
                        </a>
                    </Link>
                    <div className={`${Css_header.header__container}`}>
                        <div className={`${Css_header.header__container}`}>
                            <h3 className={`${Css_header.header__title}`}>{`Xirrim`}</h3>
                        </div>

                        <a className={`${Css_header.header__handler}`} onClick={handlerSearch}>
                            <span className={`fas fa-search`}></span>
                        </a>
                </div>
            </header>
        </>
    )
}

