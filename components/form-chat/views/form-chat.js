import React, { useState } from 'react'
import { FormChatStyle } from '../styles/form-chat.module'
import { server } from '../../../config'

export default function FormChat(data) {
  const [message, setMessage] = useState(0)

  const autoHeight = (e) => {
    const el = e.target
    el.style.height = '5px'
    el.style.height = (el.scrollHeight) + 'px'
  }

  const handleChange = e => {
    setMessage({
      [e.target.name]: e.target.value
    })
  }

  const sendMessage = (e) => {
    e.preventDefault()
    // making a post request with the fetch API
    fetch(`${server}/api/chats/send_message`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: data.chatId,
        text: message.text,
        datetime: new Date().getTime(),
        user_id: data.myUserId
      })
    })
      .then(response => response.json())
      .then(content => console.log(content))
      .catch(error => console.log(error))
  }

  return (
    <FormChatStyle>
        <form onSubmit={sendMessage}>
            <textarea
            className={'form-chat__field'}
            rows={1}
            placeholder={'Mensagem'}
            name={'text'}
            onChange={handleChange}
            onInput={autoHeight}></textarea>
            <button type="submit" className={'fa fa-paper-plane'}></button>
        </form>
    </FormChatStyle>
  )
}
