import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'
import { Headerstyle } from '../styles/header.module'

export default function Header() {
  const { searchOpen, setSearchOpen, sidebarOpen, setSidebarOpen } = useContext(GeneralContext)

  const handlersidebarOpen = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handlersearchOpen = () => {
    setSearchOpen(!searchOpen)
  }

  return (
        <>
            <Headerstyle>
                <a className={'header__handler'} onClick={handlersidebarOpen}>
                    <span className={'fas fa-bars'}></span>
                </a>

                <div className={'header__container'}>
                    <div className={'header__container'}>
                        <h3 className={'header__title'}>{'Xirrim'}</h3>
                    </div>

                    <a className={'header__handler'} onClick={handlersearchOpen}>
                        <span className={'fas fa-search'}></span>
                    </a>
                </div>
            </Headerstyle>
        </>
  )
}
