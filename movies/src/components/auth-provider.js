import React, { createContext, useState, useEffect, useHistory, useContext } from "react";


export const AuthDataContext = createContext(null);

export default function AuthDataProvider(props) { //tienes que ponerle props, si no, no renderiza

  const [isLoggedIn, setLoggedIn] = useState(false);

  const [handleError, setHandleError] = useState(false);
  // const history = useHistory();

  const token = localStorage.getItem('token') 
  const user = localStorage.getItem('user') 

  const checkingLogin = () =>{
    if(token){
      setLoggedIn(true)
    }
  }

  function handleLogin(info) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
    };
    fetch('accounts/api/auth/login', requestOptions)
        .then(async response => {
            const data = await response.json();
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                
                return Promise.reject(error);
               
            }
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", data.user.username)
            setLoggedIn(true);
        })
        .catch(error => {
            //setHandleError({ errorMessage: error.toString() });
            setHandleError(true)
           
            console.error('There was an error!', error);
  
        });

  }

  const handleRegister = (info) => {
     
    const res =  fetch('accounts/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(info),
    })
    .then(response => 
      response.json()
    )
    .then((data) => {
      if (data.token) {
        
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user.username)
        setLoggedIn(true);
        
      }
      
    })
    
  
  }

  const handleLogout = () => {

    const res =  fetch('accounts/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Token ${token}`
      },
    })
    //console.log(token)
   localStorage.removeItem("token")
   localStorage.removeItem("user")
   setLoggedIn(false)
   setHandleError(false)

   
  }



  return <AuthDataContext.Provider value={{ handleLogin,handleLogout, isLoggedIn, checkingLogin, handleRegister, user, handleError}} {...props}/>;
};

export const useAuthDataContext = () => useContext(AuthDataContext);