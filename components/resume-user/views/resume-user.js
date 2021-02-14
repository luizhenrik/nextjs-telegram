import style from '../../../components/resume-user/styles/resume-user.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'

export default function ResumeUser({ data }) {
  const { tooltipOpen, set_tooltipOpen, headerDetailsOpen, set_headerDetailsOpen } = useContext(GeneralContext)

  const handlerTooltipOpen = () => {
    set_tooltipOpen(!tooltipOpen)
  }

  const handlerHeaderDetailsOpen = (e) => {
    set_headerDetailsOpen(!headerDetailsOpen)
    e.currentTarget.dataset.selected = !headerDetailsOpen
  }

  return (
        <>
            <div className={style['resume-user']}>
                <Link href={`/chat?chatId=${data.chatId}`}>
                    <a className={style['resume-user__content']}>
                        <Image
                        src={'https://xirrim.com/images/user.png'}
                        alt={'nickname'}
                        layout={'intrinsic'}
                        width={'52'}
                        height={'52'}
                        className={style['resume-user__avatar']}></Image>

                        <div className={style['resume-user__container']}>
                            <span className={style['resume-user__nickname']}>{data.name}</span>
                            <span className={style['resume-user__text']}><strong>{`${data.messages.username}: `}</strong>{`${data.messages.text}`}</span>
                        </div>
                    </a>
                </Link>

                <a
                className={`${style['resume-user__handler']} js-user-selecting-icon`}
                data-selected={'false'}
                data-clickable={!headerDetailsOpen}
                onClick={handlerHeaderDetailsOpen}>
                    <span className={'far fa-check-circle'}></span>
                </a>
            </div>
        </>
  )
}
