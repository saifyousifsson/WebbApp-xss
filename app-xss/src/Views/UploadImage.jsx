import { useState } from 'react'
import axios from 'axios'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loading from '../components/Loading'


const UploadImage = () => {
    const defaultImgSrc =  './placeholder.jpg'
    const [imageSrc, setImageSrc] = useState(defaultImgSrc);
    const [data, setData] = useState();
    const [imageUrl, setImageUrl] = useState(null);
  
    const setImage = e => {
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
  
      reader.onload = x => {
        setImageSrc(x.target.result)
      }
  
      setData(e.target.files[0])
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const formData = new FormData()
      formData.append("file", data)
      const token = localStorage.getItem('token')
      const res = await axios.post('https://localhost:7117/api/Upload',  {
        headers: {
          // 'Authorization': 'Bearer <token>',
      // 'content-type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
        },
        body: formData,
      })     
     
    
    console.log(res);

    setImageUrl(res.data );

      // const res = await axios.post('https://localhost:7117/api/Upload', formData)
       
      // console.log(res);
      // setImageUrl(res.data );
    }
  return (
    <div className='wrapper'>
   
       
    <div className="card">
      <div className="img-container w-50 mb-1">
        <img src={imageSrc} alt="" />
      </div>
      <form className='form' onSubmit={handleSubmit}  encType='multipart/form-data'>
        <input type="file" accept='image/*' multiple className='file-input mx-3 pt-2' onChange={setImage} />
        <button  type="submit" className='btn btn-primary'>Ladda upp</button>
      </form>
    </div>

    { imageUrl &&
      <div className='card M-4 '>
        <div className="img-container">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    }
  </div>

  )
}    

export default withAuthenticationRequired(UploadImage, {
  onRedirecting: () => <Loading/>
})