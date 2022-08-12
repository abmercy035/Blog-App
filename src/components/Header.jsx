/** @format */

import React from "react";
import NavBar from "./NavBar";
import '../styles/header.css'

export default function Header() {
	return (
		<div id="header">
			<img className="header-logo" src="https://picsum.photos/1000/200" alt="logo" />
         <h1>Javascript Enthusiast Blog</h1>
         <NavBar />
		</div>
	);
}

