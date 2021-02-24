import React from 'react'
import { MessageStyle } from '../styles/message.module'

export default function Message({ data }) {
  const myUserId = '602f19110880daeef6955fa1'
  const dataSender = (myUserId === data.user_id) ? 'sent' : 'received'
  return (
    <>
        <MessageStyle data-type={'text'} data-sender={dataSender}>
            <div className={'message__item-content'}>
                <p className={'message__item-text'}>{`${data.text}`}</p>
                <sub>
                    <small>10:46</small>
                </sub>
            </div>
        </MessageStyle>
    </>
  )
}
