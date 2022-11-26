import {useState} from 'react'
import Dropdown from './Dropdown'

const Avatar = ({user}) => {
    const [dropdownOpen,setDropdownOpen ]= useState(false)
  return (
    <div className='avatar-dropdown  mx-3'>
        <div className='avatar' onClick={()=>setDropdownOpen(state=>!state)}>
            <img src={user.picture} alt={user.name}/>
        </div>  
        {
            dropdownOpen && <Dropdown/>
        }      
    </div>
  )
}

export default Avatar