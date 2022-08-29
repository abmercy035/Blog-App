/** @format */

import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import '../styles/nav.css'

export default function NavBar() {
  const [showBar, setShowBar] = useState(true)
  const body = document.querySelector('.content')
  const toggle = () => {
    const bar = document.querySelector('.navbar')
    if (showBar)
    {
      bar.style.display = "block"
      body.style.position = "fixed"
      setShowBar(prev => !prev)
    }
    else{    bar.style.display = "none";
    body.style.position = "relative"
    setShowBar(prev => !prev)}
  }
  return (
    <>
      <div id="toggle-bar" onClick={toggle} >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="navbar">
        {/* <div id="close-bar" onClick={toggle}>X</div> */}
      <div className="links">
        <Link to='/'> Home </Link>
        <Link to='/contact'> Trending Posts </Link>
        <Link to='/contact'> Recent Posts </Link>
        <Link to="/contact"> Categories </Link>
        <Link to='/contact'> Subscribe </Link>
        <Link to='/contact'> Add Post </Link>
        <Link to='/contact'> Archive </Link>
        <Link to='/contact'> Contact </Link>
        <Link to='/contact'> About-us </Link>
        <Link to='/contact'> Log-out </Link>
      </div>
    </nav></>
  );
}


  