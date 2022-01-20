import React, { Component, useEffect, useState } from 'react'
import { Link  } from 'react-router-dom'
import { useAuthDataContext } from './auth-provider';

export default function Header() {

  const { handleLogout, checkingLogin, isLoggedIn, user} = useAuthDataContext();



  useEffect(() => {
    checkingLogin()
  }, [])

  return (

    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="tab" href="">MY NOTES</a>
      </li>
      <li className="nav-item">
        {user ? "" : <a className="nav-link" data-bs-toggle="tab" href="#/register">Register</a>}
      </li>
      <li className="nav-item">
        {isLoggedIn ? <a className="nav-link" data-bs-toggle="tab" onClick={handleLogout} href="#/login">Logout</a> : <a className="nav-link" data-bs-toggle="tab" href="#/login">Login</a> }
      </li>
      <span className="navbar-text mr-3">
        <strong>{user ? `Welcome ${user}` : 'Welcome to My Notes'}</strong>
      </span>

      
    
    </ul>
    
    

  )
}