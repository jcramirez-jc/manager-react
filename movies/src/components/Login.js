import React from 'react'
import { useState, useEffect, createContext, useContext } from 'react';
import { Link, Navigate, useHistory } from 'react-router-dom';
import { useAuthDataContext } from './auth-provider';
import { useAlert } from 'react-alert'

export default function Login() {

    const [username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    const { handleLogin, isLoggedIn, handleError } = useAuthDataContext();
    const alert = useAlert()

    useEffect(()=>{
      if(handleError){  // si hay un error (variable en estado true) me lanza una alerta
        alert.error("Error")
      }
      console.log(handleError)
      
    },[handleError]) //cambio

    const onSubmit = (e) => {
      if(!username || !password){
        alert.error("Complete the fields")
      }
      e.preventDefault()
      handleLogin({username, password}) //llamo a la funcion que esta en mi provider
    }

    if (isLoggedIn) {
      
      return <Navigate to="/" />;

    }
    
    return (
        <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                background-color='white'
                type="text"
                className="form-control"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
           
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
          
        </div>
        <span style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-80px" }}>
               MyNotes: A CRUD Portal made by JC
          </span>
      </div>
      
    )
}