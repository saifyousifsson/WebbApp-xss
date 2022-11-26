import React from 'react'
import { useState ,useEffect } from 'react'
// import MessageForm from '../components/MessageForm'
// import Messeges from '../components/Messages'
// import { useAuth0 } from "@auth0/auth0-react";
import Loading from '../components/Loading';
import Post from '../components/Post';

const Home = () => {
  //   const [messages, setMessages] = useState([
  //       {
  //         id:1,
  //         title:'title',
  //         body:'loren jcnndkckdmk',
  //         imgUrl:'https://www.elgiganten.se/image/dv_web_D1800010021129356/522703/iphone-14-pro-5g-smartphone-128gb-deep-purple--pdp_zoom-3000.jpg',     
  //      }, 
  //     ])
  //     const { isAuthenticated , user, isLoading  } = useAuth0();
  //     if (isLoading){
  //         return <div><Loading/></div>
  //     }     
  //     const addMessage = (message)=>{
  //       setMessages(state =>[...state, message])     
  //     }
  // return (    
  //   <div>
  //     <Messeges  messages={messages}/> 
  //     { isAuthenticated &&
  //     <div>
  //       <MessageForm addMessage={addMessage}/>       
  //       </div>
  //     }
  //   </div> 
  // )
  const [loading, setLoading]=useState(false)
  const [posts , setPosts] = useState([])
  useEffect(()=>{
  const getPosts = async ()=>{
    setLoading(true)
    try{
      const res = await fetch('https://localhost:7117/api/Posts')
      if (!res.ok){
        throw new Error(res.status, res.statusText)
      }
      const data = await res.json()
      setPosts(data)
      setLoading(false)

    }catch (err){
    console.log(err.message)
    setLoading(false)

    }
  }
  getPosts();

  },[])
  if(loading){
    return <Loading/>
  }

  return(
    <div className='mt-5'>
      <h1 className='mb-5'>Posts </h1>
      {
       posts.length > 0 ? posts.map(post => (
        <Post key={post.id} post={post}/>
       ))
       :<p>No posts to show</p>
      }

    </div>
  )

}

export default Home