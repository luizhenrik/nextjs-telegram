import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'
import { Headerstyle } from '../styles/header.module'

export default function HeaderSearch() {
  const { searchOpen, set_searchOpen } = useContext(GeneralContext)

  const handlerSearchOpen = () => {
    set_searchOpen(!searchOpen)
  }

  return (
        <>
            <Headerstyle>
                <a className={'header__handler'} onClick={handlerSearchOpen}>
                    <i className={'fas fa-arrow-left'}></i>
                </a>

                <div className={'header__container'}>
                    <input className={'header__field'} placeholder={'Buscar'}></input>
                </div>
            </Headerstyle>
        </>
  )
}
