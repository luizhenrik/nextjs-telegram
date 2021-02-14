
import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'
import { Tooltipstyle } from '../styles/tooltip.module'

export default function Tooltip() {
  const { searchOpen, set_searchOpen, tooltipOpen, set_tooltipOpen } = useContext(GeneralContext)

  const handlerSearchOpen = () => {
    set_searchOpen(!searchOpen)

    if (tooltipOpen) {
      set_tooltipOpen(!tooltipOpen)
    }
  }

  const handlerTooltipOpen = () => {
    set_tooltipOpen(!tooltipOpen)
  }

  return (
        <Tooltipstyle data-open={tooltipOpen}>
            <div className={'tooltip__overlay'} onClick={handlerTooltipOpen}></div>
            <div className={'tooltip__content'}>
                <nav className={'tooltip__nav'}>
                    <a className={'tooltip__nav-item'}>
                        <span className={'tooltip__nav-icon fas fa-phone-alt'}></span>
                        <span className={'tooltip__nav-text'}>Ligar</span>
                    </a>
                    <a className={'tooltip__nav-item'}>
                        <span className={'tooltip__nav-icon fas fa-video'}></span>
                        <span className={'tooltip__nav-text'}>Video chamada</span>
                    </a>
                    <a className={'tooltip__nav-item'} onClick={handlerSearchOpen}>
                        <span className={'tooltip__nav-icon fas fa-search'}></span>
                        <span className={'tooltip__nav-text'}>Buscar</span>
                    </a>
                    <a className={'tooltip__nav-item'}>
                        <span className={'tooltip__nav-icon fas fa-quidditch'}></span>
                        <span className={'tooltip__nav-text'}>Limpar histórico</span>
                    </a>
                    <a className={'tooltip__nav-item'}>
                        <span className={'tooltip__nav-icon fas fa-trash'}></span>
                        <span className={'tooltip__nav-text'}>Deletar chat</span>
                    </a>
                </nav>
            </div>
        </Tooltipstyle>
  )
}
