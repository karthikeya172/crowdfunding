import React from 'react'
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';  
import Signup from './Signup';
import axios from 'axios';
import { useState } from 'react';
const Login = () => {
    const navigate=useNavigate()
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const [message, setMessage] = useState('');
    
    const handleSubmit= (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3002/login',{email,password})
        .then(result => {
            console.log(result)
            if(result.data==="success"){
                navigate('/')
            }else{
                setMessage("Login failed. Please check your credentials.");  
            }
        })
        .catch(err=>{
            console.log(err)
            setMessage("An error occurred. Please try again.");
        })
    }
  return (
    <div class="container" style={{height: '400px',border: '1px solid gray', width: '350px',
        borderRadius: '10px', margin: '25px', backgroundColor: 'white'
    }}>  
    <br></br>
    <h2>Login</h2> 
    <br></br> 
    <form onSubmit={handleSubmit}>  
        <div class="form-group" style={{position:'relative',top:'15%'}}>  
            <label for="email">Email</label>  
            <input type="email" class="form-control" id="email" placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br></br>  
        </div>  
        <div class="form-group" style={{position:'relative',top:'50%'}}>  
            <label for="password">Password</label>  
            <input type="password" class="form-control" id="password" placeholder="Password"
             onChange={(e)=>setPassword(e.target.value)}
            />
            <br></br>  
        </div>  
        <button type="submit" class="btn btn-success" style={{position:'relative',top:'75%'}}>Login</button> 
        <br></br>
        {message && <p style={{color: 'red'}}>{message}</p>}  
        <p class="mt-3">Don't have an account? <Link to="/signup">Sign up here</Link>.</p> 
        {/* <Routes>
        <Route path="/signup" element={<Signup/>}/> 
        </Routes> */}
    </form>  
</div>  
  )
}

export default Login