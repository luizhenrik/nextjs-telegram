
import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'
import { Resumeuserstyle } from '../styles/resumeuser.module'

export default function ResumeUser({ data }) {
  const { tooltipOpen, setTooltipOpen, headerDetailsOpen, setHeaderDetailsOpen } = useContext(GeneralContext)

  const handlertooltipOpen = () => {
    setTooltipOpen(!tooltipOpen)
  }

  const handlerheaderDetailsOpen = (e) => {
    setHeaderDetailsOpen(!headerDetailsOpen)
    e.currentTarget.dataset.selected = !headerDetailsOpen
  }

  return (
        <Resumeuserstyle>
            <Link prefetch={false} as={`/chats/${data.userId}/${data.chatId}`} href={'/chats/[usrid]/[chtid]'}>
                <a className={'resume-user__content'}>
                    <Image
                    src={'https://xirrim.com/images/user.png'}
                    alt={'nickname'}
                    layout={'intrinsic'}
                    width={'52'}
                    height={'52'}
                    className={'resume-user__avatar'}></Image>

                    <div className={'resume-user__container'}>
                        <span className={'resume-user__nickname'}>{data.username}</span>
                        <span className={'resume-user__text'}><strong>{`${data.username}: `}</strong>{`${data.messages.text}`}</span>
                    </div>
                </a>
            </Link>

            <a
            className={`${'resume-user__handler'} js-user-selecting-icon`}
            data-selected={'false'}
            data-clickable={!headerDetailsOpen}
            onClick={handlerheaderDetailsOpen}>
                <span className={'far fa-check-circle'}></span>
            </a>
        </Resumeuserstyle>
  )
}
