import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const Dropdown = () => {
  const { logout } = useAuth0();

  return (
    <div className='dropdown'>
        <button onClick={() => logout({ returnTo: window.location.origin })} className='logout-btn'>Log Out</button>
    </div>
  )
}

export default Dropdown