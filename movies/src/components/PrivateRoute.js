import React from 'react';
import { Navigate } from 'react-router-dom';


const isLogin = ()=>{

    const token = localStorage.getItem('token') 
    if (token)
     return true
}


/*const PrivateRoute = ({ component: Component, ...rest }) => (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (isLogin() ? <Component {...props} /> :  
    <Navigate to="/login" />)} />                         
)*/
const PrivateRoute = ({ children }) => {
    const authed = isLogin() // isauth() returns true or false based on localStorage
    
    return authed ? children : <Navigate to="/login" />;
  }


export default PrivateRoute;