import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from '../components/Loading';

const Profile = () => {
    const { isAuthenticated , user, isLoading  } = useAuth0();

    if (isLoading){
        return <div><Loading/></div>
    }

  return (
    <div className='Profile'>
    {
        isAuthenticated &&
        <div className='card flex'>
            <div className='img-container'>
                <img src={user.picture} alt={user.name}/>
            </div>
            <div className='credentils'>
                <h2 >{user.name}</h2>
                <p>{user.email}</p>
          
            </div>
        </div>  
    }
    </div>
  )
}

export default withAuthenticationRequired(Profile,{
    onRedirecting:()=><Loading/>
})