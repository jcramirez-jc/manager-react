
import "bootswatch/dist/cyborg/bootstrap.min.css";
import '../App.css';
import React, {useState, useEffect, Fragment} from 'react'
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Leads from "./Leads"
import Header from "./Header"
import Login from "./Login"
import Register from "./Register";
import AuthDataProvider  from './auth-provider';
import PrivateRoute from "./PrivateRoute";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

 const App = () => {

  const options = {
    // you can also just use 'bottom center'
    position: 'top center',
    timeout: 5000,
  }

  
 return (
  <AuthDataProvider>
  <AlertProvider template={AlertTemplate} {...options}>
  <HashRouter>
  <Header />
    <Routes>
        <Route
        path="/"
        element={
          <PrivateRoute>
            <Leads />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
    </Routes>
  </HashRouter>
  </AlertProvider>
  </AuthDataProvider>
);
}


 
 export default App
 