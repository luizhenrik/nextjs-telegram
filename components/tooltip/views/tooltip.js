import style from '../../../components/tooltip/styles/tooltip.module.scss'

import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'

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
        <div className={style.tooltip} data-open={tooltipOpen}>
            <div className={style.tooltip__overlay} onClick={handlerTooltipOpen}></div>
            <div className={style.tooltip__content}>
                <nav className={style.tooltip__nav}>
                    <a className={style['tooltip__nav-item']}>
                        <span className={`${style['tooltip__nav-icon']} fas fa-phone-alt`}></span>
                        <span className={style['tooltip__nav-text']}>Ligar</span>
                    </a>
                    <a className={style['tooltip__nav-item']}>
                        <span className={`${style['tooltip__nav-icon']} fas fa-video`}></span>
                        <span className={style['tooltip__nav-text']}>Video chamada</span>
                    </a>
                    <a className={style['tooltip__nav-item']} onClick={handlerSearchOpen}>
                        <span className={`${style['tooltip__nav-icon']} fas fa-search`}></span>
                        <span className={style['tooltip__nav-text']}>Buscar</span>
                    </a>
                    <a className={style['tooltip__nav-item']}>
                        <span className={`${style['tooltip__nav-icon']} fas fa-quidditch`}></span>
                        <span className={style['tooltip__nav-text']}>Limpar histórico</span>
                    </a>
                    <a className={style['tooltip__nav-item']}>
                        <span className={`${style['tooltip__nav-icon']} fas fa-trash`}></span>
                        <span className={style['tooltip__nav-text']}>Deletar chat</span>
                    </a>
                </nav>
            </div>
        </div>
  )
}
