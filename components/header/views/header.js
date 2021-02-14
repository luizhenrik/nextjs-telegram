import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'
import { Headerstyle } from '../styles/header.module'

export default function Header() {
  const { searchOpen, set_searchOpen, sidebarOpen, set_sidebarOpen } = useContext(GeneralContext)

  const handlerSidebarOpen = () => {
    set_sidebarOpen(!sidebarOpen)
  }

  const handlerSearchOpen = () => {
    set_searchOpen(!searchOpen)
  }

  return (
        <>
            <Headerstyle>
                <a className={'header__handler'} onClick={handlerSidebarOpen}>
                    <span className={'fas fa-bars'}></span>
                </a>

                <div className={'header__container'}>
                    <div className={'header__container'}>
                        <h3 className={'header__title'}>{'Xirrim'}</h3>
                    </div>

                    <a className={'header__handler'} onClick={handlerSearchOpen}>
                        <span className={'fas fa-search'}></span>
                    </a>
                </div>
            </Headerstyle>
        </>
  )
}
