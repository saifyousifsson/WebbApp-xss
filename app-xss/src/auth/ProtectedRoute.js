import React from 'react'
import Loading from '../components/Loading'
import {withAuthenticationRequired} from '@auth0/auth0-react'


 const ProtectedRoute =({component, ...rest})=>{
    const Comp = withAuthenticationRequired(component,{onRedirecting:()=> <Loading/>})
    return <Comp {...rest}/>
 }


export default ProtectedRoute