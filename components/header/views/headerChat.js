import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'
import { Headerstyle } from '../styles/header.module'

export default function HeaderChat({ data }) {
  const { tooltipOpen, setTooltipOpen } = useContext(GeneralContext)

  const handlertooltipOpen = () => {
    setTooltipOpen(!tooltipOpen)
  }

  return (
            <Headerstyle>
                <Link href={`/chats/${data.myUserId}/list`}>
                    <a className={'header__handler'}>
                        <span className={'fas fa-arrow-left'}></span>
                    </a>
                </Link>
                <div className={'header__container'}>
                    <Image
                        src={'https://xirrim.com/images/user.png'}
                        alt={`${data.name}`}
                        width={'45'}
                        height={'45'}
                        className={'header__image'}
                    />

                    <div className={'header__container'}>
                        <h3 className={'header__title'}>{`${data.username}`}</h3>

                        <span className={'header__description'}>{'Online'}</span>
                    </div>

                    <a className={'header__handler'} onClick={handlertooltipOpen}>
                        <span className={'fas fa-ellipsis-v'}></span>
                    </a>
                </div>
            </Headerstyle>
  )
}
