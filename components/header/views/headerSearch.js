import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'
import { Headerstyle } from '../styles/header.module'

export default function HeaderSearch() {
  const { searchOpen, setSearchOpen } = useContext(GeneralContext)

  const handlersearchOpen = () => {
    setSearchOpen(!searchOpen)

    const icons = document.querySelectorAll('.js-user-selecting-icon')

    for (let i = 0; i < icons.length; i++) {
      icons[i].dataset.selected = 'false'
    }
  }

  return (
        <>
            <Headerstyle>
                <a className={'header__handler'} onClick={handlersearchOpen}>
                    <i className={'fas fa-arrow-left'}></i>
                </a>

                <div className={'header__container'}>
                    <input className={'header__field'} placeholder={'Buscar'}></input>
                </div>
            </Headerstyle>
        </>
  )
}
