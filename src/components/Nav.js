
import React from "react";
import {BrowserRouter,Routes,Route,Link}from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import './nav.css'
const Nav=()=>{
  return(
    <div className="nav">
        <a href="/home">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">about</a>
        <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>       
        </BrowserRouter>
    </div>
  )
}
export default Nav;