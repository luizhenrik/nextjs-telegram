
import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'
import { Tooltipstyle } from '../styles/tooltip.module'

export default function Tooltip() {
  const { searchOpen, setsearchOpen, tooltipOpen, setTooltipOpen } = useContext(GeneralContext)

  const handlersearchOpen = () => {
    setsearchOpen(!searchOpen)

    if (tooltipOpen) {
      setTooltipOpen(!tooltipOpen)
    }
  }

  const handlertooltipOpen = () => {
    setTooltipOpen(!tooltipOpen)
  }

  return (
        <Tooltipstyle data-open={tooltipOpen}>
            <div className={'tooltip__overlay'} onClick={handlertooltipOpen}></div>
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
                    <a className={'tooltip__nav-item'} onClick={handlersearchOpen}>
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
