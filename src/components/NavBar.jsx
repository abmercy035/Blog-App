/** @format */

import React from "react";
import { Link } from 'react-router-dom'
import '../styles/nav.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to='/'> Home </Link>
        <Link to="/about"> About </Link>
        <Link to='/contact'> Contact </Link>
      </div>
    </nav>
  );
}


  