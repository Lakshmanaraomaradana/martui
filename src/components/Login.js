
import React, { useState } from "react";
import './app.css'
const Login =()=>{

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username,password);
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
            <div className='username'>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="username" placeholder="your@email.com"></input>
            </div>
            <div className='password'>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password"></input>
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

export default Login;