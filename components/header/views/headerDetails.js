import style from '../../../components/header/styles/header.module.scss';

import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useContext } from 'react';

import Tooltip from '../../../components/tooltip/views/tooltip'

import {GeneralContext} from '../../../contexts/general'

export default function HeaderDetails(){
    const { tooltipOpen, set_tooltipOpen, headerDetailsOpen, set_headerDetailsOpen } = useContext(GeneralContext);

    let handlerTooltipOpen = () => {
        set_tooltipOpen(!tooltipOpen);
    }

    let handlerHeaderDetailsOpen = () => {
        set_headerDetailsOpen(!headerDetailsOpen);
    }

    return (
        <>
            <header className={`${style.header}`}>
                <a className={`${style.header__handler}`} onClick={handlerHeaderDetailsOpen}>
                    <span className={`fas fa-arrow-left`}></span>
                </a>

                <div className={`${style.header__container}`}>                    
                    <div className={`${style.header__container}`}>
                        <h3 className={`${style.header__title}`}>{`Selecionado`}</h3>
                    </div>
                    
                    <a className={`${style.header__handler}`}>
                        <span className={`fas fa-thumbtack`}></span>
                    </a>
                    
                    <a className={`${style.header__handler}`}>
                        <span className={`fas fa-volume-mute`}></span>
                    </a>
                    
                    <a className={`${style.header__handler}`}>
                        <span className={`fas fa-trash`}></span>
                    </a>
                    
                    <a className={`${style.header__handler}`} onClick={handlerTooltipOpen}>
                        <span className={`fas fa-ellipsis-v`}></span>
                    </a>
                </div>
            </header>
            <Tooltip></Tooltip>
        </>
    )
}