import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';
// import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));


   root.render(
  <React.StrictMode>
    <Router>
    {/* <Auth0Provider
     domain={domain}
     clientId={clientId}
    redirectUri={window.location.origin}
  > */}
 
  <Auth0ProviderWithHistory >
   <App />
  </Auth0ProviderWithHistory>
  
  
     
     {/* </Auth0Provider> */}
    </Router>   
  </React.StrictMode>
    )
