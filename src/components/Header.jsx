/** @format */

import React from "react";
import NavBar from "./NavBar";
import '../styles/header.css'
import logo from "../img/house-solid.svg"

export default function Header() {
	return (
		<div id="header">
			<img className="header-logo" src={logo} alt="" />
         <h1>Javascript Enthusiast Blog</h1>
         <NavBar />
		</div>
	);
}

