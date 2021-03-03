import React from 'react'
import { FormChatStyle } from '../styles/form-chat.module'

export default function FormChat() {
  const autoHeight = (e) => {
    const el = e.target
    el.style.height = '5px'
    el.style.height = (el.scrollHeight) + 'px'
  }

  return (
    <FormChatStyle>
        <textarea className={'form-chat__field'} rows={1} placeholder={'Mensagem'} onInput={autoHeight}></textarea>
    </FormChatStyle>
  )
}
