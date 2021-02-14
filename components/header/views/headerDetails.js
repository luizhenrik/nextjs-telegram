
import React, { useContext } from 'react'

import Tooltip from '../../../components/tooltip/views/tooltip'

import { GeneralContext } from '../../../contexts/general'
import { Headerstyle } from '../styles/header.module'

export default function HeaderDetails() {
  const { tooltipOpen, set_tooltipOpen, headerDetailsOpen, set_headerDetailsOpen } = useContext(GeneralContext)

  const handlerTooltipOpen = () => {
    set_tooltipOpen(!tooltipOpen)
  }

  const handlerHeaderDetailsOpen = () => {
    set_headerDetailsOpen(!headerDetailsOpen)

    const icons = document.querySelectorAll('.js-user-selecting-icon')

    for (let i = 0; i < icons.length; i++) {
      icons[i].dataset.selected = 'false'
    }
  }

  return (
        <>
            <Headerstyle>
                <a className={'header__handler'} onClick={handlerHeaderDetailsOpen}>
                    <span className={'fas fa-arrow-left'}></span>
                </a>

                <div className={'header__container'}>
                    <div className={'header__container'}>
                        <h3 className={'header__title'}>{'Selecionado'}</h3>
                    </div>

                    <a className={'header__handler'}>
                        <span className={'fas fa-thumbtack'}></span>
                    </a>

                    <a className={'header__handler'}>
                        <span className={'fas fa-volume-mute'}></span>
                    </a>

                    <a className={'header__handler'}>
                        <span className={'fas fa-trash'}></span>
                    </a>

                    <a className={'header__handler'} onClick={handlerTooltipOpen}>
                        <span className={'fas fa-ellipsis-v'}></span>
                    </a>
                </div>
            </Headerstyle>
            <Tooltip></Tooltip>
        </>
  )
}
