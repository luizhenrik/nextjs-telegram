import style from '../../../components/header/styles/header.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'

export default function HeaderChat({ data }) {
  const { tooltipOpen, set_tooltipOpen } = useContext(GeneralContext)

  const handlerTooltipOpen = () => {
    set_tooltipOpen(!tooltipOpen)
  }

  return (
        <>
            <header className={`${style.header}`}>
                <Link href={'/'}>
                    <a className={`${style.header__handler}`}>
                        <span className={'fas fa-arrow-left'}></span>
                    </a>
                </Link>
                <div className={`${style.header__container}`}>
                    <Image
                        src={'https://xirrim.com/images/user.png'}
                        alt={`${data.name}`}
                        width={'45'}
                        height={'45'}
                        className={`${style.header__image}`}
                    />

                    <div className={`${style.header__container}`}>
                        <h3 className={`${style.header__title}`}>{`${data.name}`}</h3>

                        <span className={`${style.header__description}`}>{'Online'}</span>
                    </div>

                    <a className={`${style.header__handler}`} onClick={handlerTooltipOpen}>
                        <span className={'fas fa-ellipsis-v'}></span>
                    </a>
                </div>
            </header>
        </>
  )
}
