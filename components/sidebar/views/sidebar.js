import style from '../../../components/sidebar/styles/sidebar.module.scss'

import React, { useState, useContext } from 'react'

import {SidebarContext} from '../../../contexts/sidebar'

function Sidebar() {
    const { sidebarOpen, set_sidebarOpen } = useContext(SidebarContext);

    let handlerSidebarOpen = () => {
        set_sidebarOpen(!sidebarOpen);
    }

    return (
        <>
            <div className={`${style.sidebar}`} data-open={sidebarOpen}>
                <div className={`${style.sidebar__overlay}`} onClick={handlerSidebarOpen}></div>
                <div className={`${style.sidebar__content}`}>
                    <div className={`${style.sidebar__header}`}></div>
                    <div className={`${style.sidebar__main}`}></div>
                    <div className={`${style.sidebar__footer}`}></div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;