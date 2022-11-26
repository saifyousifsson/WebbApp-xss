import React from 'react'
import Message from './Message'

const Messeges = ({messages}) => {

  return (
    <>
    <h2 className='sub-title'>Messeges</h2>
    {
      messages && messages.map(message =>(
        <Message key={message.id} message={message}/>
      ))
    }
    </>
  )
}

export default Messeges