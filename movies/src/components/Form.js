import React from 'react';
import { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useAuthDataContext } from './auth-provider';


export default function Form({leads, setLeads}) {
  const alert = useAlert()
   

  const token = localStorage.getItem('token') 
    //const [leads, setLeads] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    

    const addLead = async (lead) => {
      const res = await fetch('api/leads/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Token ${token}`
        
        },
        body: JSON.stringify(lead),
      })
      
      const data = await res.json()
  
      setLeads([...leads, data])
    }

    const onSubmit = (e) => {

        e.preventDefault()

        if(name && email && message){
          alert.success("Note added")

        }else{
          alert.error("Complete fields")
          return
        }

        addLead({name, email, message})

        setName("")
        setEmail("")
        setMessage("")
      
    }

    return (
        
        <div className="card card-body mt-4 mb-4">
        <h2>Add Note</h2>
        
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
    
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
             
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
         
    )
}


