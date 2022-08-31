/** @format */

import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'

export default function NavBar () {
  const [showBar, setShowBar] = useState(true)
  const body = document.querySelector('#root')
  const toggle = () => {
    const bar = document.querySelector('.navbar')
    if (showBar) {
      bar.style.display = 'block'
      setShowBar(prev => !prev)
    } else {
      bar.style.display = 'none'
      setShowBar(prev => !prev)
    }
  }
  return (
    <>
      <div id='toggle-bar' onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id='cover'></div>
      <nav className='navbar'>
        {/* <div id="close-bar" onClick={toggle}>X</div> */}
        <div className='links'>
          <Link to='/' onClick={toggle}>
            Home
          </Link>
          <Link to='/contact' onClick={toggle}>
            Trending Posts
          </Link>
          <Link to='/contact' onClick={toggle}>
            Recent Posts
          </Link>
          <Link to='/contact' onClick={toggle}>
            Categories
          </Link>
          <Link to='/contact' onClick={toggle}>
            Subscribe
          </Link>
          <Link to='/contact' onClick={toggle}>
            Add Post
          </Link>
          <Link to='/contact' onClick={toggle}>
            Archive
          </Link>
          <Link to='/contact' onClick={toggle}>
            Contact
          </Link>
          <Link to='/contact' onClick={toggle}>
            About-us
          </Link>
          <Link to='/contact' onClick={toggle}>
            Log-out
          </Link>
        </div>
      </nav>
    </>
  )
}
