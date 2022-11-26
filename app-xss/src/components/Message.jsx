import React from 'react'
import DOMPurify from 'dompurify'

const Message = ({message}) => {
  return (
    <div className='message'>
        <div className='message-header'>
          <div className='img-container'>
           <img src={message.imgUrl} alt=''/>
           </div>
           <h2>{message.title}</h2>
        </div>
        <div className='message-body'dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(message.body)}}>
            {/* {message.body} */}
        </div>
    </div>
  )
}

export default Message