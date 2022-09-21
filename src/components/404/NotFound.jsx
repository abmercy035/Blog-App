/** @format */

import React from "react";
import { Link } from "react-router-dom";
import '../404/notfound.css'

export default function NotFound() {
	return (
		<div className="not-found">
			<p>sorry this link might be broken or page deleted</p>
			<Link to="/"> Click to go back to the HomePage...</Link>
		</div>
	);
}
