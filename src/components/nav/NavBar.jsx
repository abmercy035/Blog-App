/** @format */

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function NavBar({toggle}) {
  const body = document.querySelector("#root");
  // body.addEventListener("click", ()=>{
  //   toggle()
  // })
  return (
    <>
      <nav className="navbar">
        <div id="close-bar" onClick={toggle}> &times;</div>
        <div className="links">
          <Link to="/" onClick={toggle}>
            Home
          </Link>
          <Link to="/#mostengaged" onClick={toggle}>
            Trending Posts
          </Link>
          <Link to="/contact" onClick={toggle}>
            Recent Posts
          </Link>
          <Link to="/contact" onClick={toggle}>
            Categories
          </Link>
          <Link to="/contact" onClick={toggle}>
            Subscribe
          </Link>
          <Link to="/contact" onClick={toggle}>
            Add Post
          </Link>
          <Link to="/contact" onClick={toggle}>
            Archive
          </Link>
          <Link to="/contact" onClick={toggle}>
            Contact
          </Link>
          <Link to="/contact" onClick={toggle}>
            About-us
          </Link>
          <Link to="/contact" onClick={toggle}>
            Log-out
          </Link>
        </div>
      </nav>
    </>
  );
}
