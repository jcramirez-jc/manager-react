import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuthDataContext } from './auth-provider';
import { useAlert } from 'react-alert'

export default function Register() {

    const alert = useAlert()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [ password2, setPassword2] = useState('')
    const { handleRegister, isLoggedIn } = useAuthDataContext();

    const onSubmit = (e) => {

      e.preventDefault()
      //console.log(handleError)
      if(password == password2){
        handleRegister({username, email, password}) //we can take the token of this function
      }else{
        alert.error("Paswords don't match")
      }

    }

    if (isLoggedIn) {
      
      return <Navigate to="/" />;
      
    }
    


    return (
        <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={(e) => setPassword2(e.target.value)}
                value={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
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