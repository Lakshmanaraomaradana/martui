import React, { useState } from "react";
import './app.css'
const Register=()=>{
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(firstname,lastname,username,password,email);
    }
    return(
<div className="App">
      <div className='left-div'>
          <h1>page</h1>
      </div>
      <div className='right-div'>

        <div className='form'>
        <form onSubmit={handleSubmit}>
            <h1>login</h1>
            <div className='firstname'>
            <input value={username} onChange={(e)=>setFirstname(e.target.value)} type="firstname" placeholder="firstname"></input>
            </div>
            <div className='lastname'>
            <input value={lastname} onChange={(e)=>setLastname(e.target.value)} type="lastname" placeholder="lastname"></input>
            </div>
            <div className='username'>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="username" placeholder="username"></input>
            </div>
            <div className='password'>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password"></input>
            </div>
            <div className='email'>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email"></input>
            </div>
            <div className='login'>
              <button type="submit">Login</button>
            </div>
            <p>Don't have an accout?<a href="/register" >Register</a></p>
            
          </form>
        </div>

      </div>
      
    </div>
    )
}

export default Register;