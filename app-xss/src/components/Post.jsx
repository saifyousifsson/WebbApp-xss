import React from 'react'
import DOMPurify from 'dompurify'

const Post = ({post}) => {
  return (
    <div className='card mb-3 p-3 shadow'>
       <h2>{post.title}</h2>
       <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(post.body)}}></div>
    </div>
  )
}

export default Post