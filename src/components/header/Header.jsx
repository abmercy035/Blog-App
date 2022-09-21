/** @format */

import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import NavBar from "../nav/NavBar";
import "./header.css";

export default function Header() {

  const [showBar, setShowBar] = useState(true);
  const toggler = () => {
    const bar = document.querySelector(".navbar");
    if (showBar) {
      bar.style.minWidth = "250px";
      setShowBar((prev) => !prev);
      
    } else {
      bar.style.minWidth = "0";
      setShowBar((prev) => !prev);
    }
  };

  return (
    <div id="header">
      <img
        className="header-logo"
        src="https://via.placeholder.com/350.png/#3571f1/4169e1/?text=Java+Blog"
 onError={(e) => {e.target.style.display='none'}}
  />

      <h1>Javascript Enthusiast Blog</h1>
      <div id="toggle-bar" className="home-toggle-bar" onClick={toggler}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <NavBar toggle={toggler}/>
    </div>
  );
}
