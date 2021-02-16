import React from 'react'
import { MessageStyle } from '../styles/message.module'

export default function Message({ data }) {
  return (
    <>
        <MessageStyle data-type={'text'}>
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
