import { useState } from 'react'
import DOMPurify from 'dompurify'


const MessageForm = ({addMessage}) => {
  const [error, setError] = useState('')
  const [formData, setFormData]= useState({
    // title:'',
    // body:'',
    // imgUrl:''
  })
  const handelChange =e =>{
    setFormData(data=>(
      {
        ...data,
        [e.target.name]: e.target.value
      }
    ))
  }
  const handleSubmit = e => {
    e.preventDefault()
    if(!formData.title || !formData.body || !formData.imgUrl){
      setError('Please enter all the fields!')
      return
    }
    setError('')
    const message={
      id: Date.now().toString(),
      title:DOMPurify.sanitize(formData.title),
      body:DOMPurify.sanitize(formData.body),
      imgUrl:DOMPurify.sanitize(formData.imgUrl)
    }
    addMessage(message)
    e.target.reset()
  }
  return (
    <form className='message-form'onSubmit={handleSubmit}>
     <div className='input-group'>
       <label htmlFor='title'>Message Title</label>
       <input name='title' type="text" id="title"onChange={handelChange} />
     </div>
     <div className='input-group'>
       <label htmlFor='message'>Your Message</label>
       <textarea  name='body' id='message' cols='30' rows='10' onChange={handelChange}></textarea>
     </div>
     <div className='input-group'>
       <label htmlFor='imgUrl'>Image Url</label>
       <input name='imgUrl' type="text" id="imgUrl" onChange={handelChange}/>
     </div>
     <p className='error-message'>{error}</p>
     <button className='btn'>Send</button>
    
    </form>
  )
}

export default MessageForm