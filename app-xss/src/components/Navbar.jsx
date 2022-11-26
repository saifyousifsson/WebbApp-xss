import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Avatar from './Avatar'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { loginWithRedirect ,isAuthenticated , user } = useAuth0();

  return (
    <nav className='navbar navbar-expand-lg'>
        <div className='nav-container flex'  >
          <Link className='navbar-brand'  to="/">My blog</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className='navbar nabvar-collapse' id='navbarSupportedContent'>
            <ul className='flex navbar-nav ms-auto' >
            {
              isAuthenticated 
              && <><Link className='btn btn-primary' to='/add'>Add Post</Link>
              <Link className='btn btn-primary' to='/uploadimage'>Upload</Link>
             </>
            }
              <li><NavLink className='nav-link'  to="/" end>Home</NavLink></li>
              <li><NavLink className='nav-link' to="/profile">Profile</NavLink></li>
              </ul>
            {
                !isAuthenticated && <button  onClick={() =>  loginWithRedirect()} className='login-btn'>Log In</button>
            }
            {
              isAuthenticated && <Avatar user={user}/>
             

            }
           
           </div>
        </div>
    </nav>
  )
}

export default Navbar