// import { useState } from 'react'
// import MessageForm from './components/MessageForm';
// import Messages from './components/Messages';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import{ Routes,Route} from 'react-router-dom';
import Home from './Views/Home';
import Profile from './Views/Profile';
import AddPost from './Views/AddPost';
import ProtectedRoute from './auth/ProtectedRoute';
import { useAuth0 } from '@auth0/auth0-react';
import UploadImage from './Views/UploadImage';

 const App = () => {
  const {getAccessTokenSilently, isAuthenticated}= useAuth0()
  useEffect (()=>{
    const getToken = async ()=>{
      if(isAuthenticated){
        // Vi är inloggade hämta accessToken och spara i Localstorage
         try{
          const token = await getAccessTokenSilently({
            audience : process.env.REACT_APP_AUTH0_AUDIENCE

          })
          localStorage.setItem('accessToken',token)
         }catch(err){
         console.log(err.message)
         }
      }else{
        // Vi har loggat ut -ta bort accesToken från Localstorage
         localStorage.removeItem('accessToken')
      }

    }
   getToken()

  },[getAccessTokenSilently, isAuthenticated])
//  const [messages, setMessages] = useState([
//   {
//     id:1,
//     title:'title',
//     body:'loren jcnndkckdmk',
//     imgUrl:'https://www.elgiganten.se/image/dv_web_D1800010021129356/522703/iphone-14-pro-5g-smartphone-128gb-deep-purple--pdp_zoom-3000.jpg',

//  }, 
// ])
// const addMessage = (message)=>{
//   setMessages(state =>[...state, message])
// }

  return (
    <>
    <Navbar/>
    <div className='container'>  
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/uploadimage' element={<ProtectedRoute component={UploadImage}/>}/>
      {/* <Route path='/add' element={<AddPost/>}/> */}

      <Route  path='/add'  element={<ProtectedRoute component={AddPost}/>} />

      {/* <Route  path='/'  element={<Messages/>} addMessage={addMessage}/>
      <Route path='/'   element={<MessageForm/>} messages={messages}/> */}
      {/* <MessageForm   path='/'  addMessage={addMessage}/>
      <Messages   path='/' messages={messages}/> */}
    </Routes>
      
    </div>
    </>
  )
}


export default App;
