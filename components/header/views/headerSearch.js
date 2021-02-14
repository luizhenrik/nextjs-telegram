import style from '../../../components/header/styles/header.module.scss'

import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'

export default function HeaderSearch() {
  const { searchOpen, set_searchOpen } = useContext(GeneralContext)

  const handlerSearchOpen = () => {
    set_searchOpen(!searchOpen)
  }

  return (
        <>
            <header className={`${style.header}`}>
                <a className={`${style.header__handler}`} onClick={handlerSearchOpen}>
                    <i className={'fas fa-arrow-left'}></i>
                </a>

                <div className={`${style.header__container}`}>
                    <input className={`${style.header__field}`} placeholder={'Buscar'}></input>
                </div>
            </header>
        </>
  )
}
