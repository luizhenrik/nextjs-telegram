import { useContext } from 'react';
import Css_menuBurger from '../components/menuBurger.module.scss';

import React, { useState } from 'react';
import {MenuContext} from '../contexts/menu'

function menuBurger() {
    const { isOpen, set_isOpen } = useContext(MenuContext);

    let handlerClick = () => {
        set_isOpen(!isOpen);
    }

    return (
        <>
            <div className={`${Css_menuBurger.menuBurger}`} data-open={isOpen}>
                <div className={`${Css_menuBurger.menuBurger__overlay}`} onClick={handlerClick}></div>
                <div className={`${Css_menuBurger.menuBurger__content}`}>
                    <div className={`${Css_menuBurger.menuBurger__header}`}></div>
                    <div className={`${Css_menuBurger.menuBurger__main}`}></div>
                    <div className={`${Css_menuBurger.menuBurger__footer}`}></div>
                </div>
            </div>
        </>
    )
}

export default menuBurger;