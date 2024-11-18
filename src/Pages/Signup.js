import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Signup() {
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()

    const handleSubmit= (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3002/signup',{name,email,password})
        .then(result => console.log(result))
        .catch(err=>console.log(err))
    }
  return (
    <div class="container my-4" style={{height: '400px',border: '1px solid gray', width: '350px',
        borderRadius: '10px', margin: '25px', backgroundColor: 'white'
    }}>  
    <br></br>
    <h2>Sign Up</h2>  
    <form onSubmit={handleSubmit}>  
        <div class="form-group">  
            <label for="name">Name</label>  
            <input type="text" class="form-control" id="name" placeholder="Enter your name"
              onChange={(e)=>setName(e.target.value)}
            /> 
            <br></br> 
        </div>  
        <div class="form-group">  
            <label for="email">Email</label>  
            <input type="email" class="form-control" id="email" placeholder="Enter your email"
             onChange={(e)=>setEmail(e.target.value)}
            /> 
            <br></br> 
        </div>  
        <div class="form-group">  
            <label for="password">Password</label>  
            <input type="password" class="form-control" id="password" placeholder="Password"
             onChange={(e)=>setPassword(e.target.value)}
            /> 
            <br></br>
        </div>  
        <button type="submit" class="btn btn-success">Sign Up</button>  
    </form>  
</div>  
  )
}

export default Signup