import React from "react";
import eniola from "../assets/images/eniola.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
	return (
		<div className="navbar">
			<span className="logo">Eniola's Chat</span>
			<div className="user">
				<img src={eniola} alt="" />
				<span>David</span>
				<button onClick={() => signOut(auth)}>Logout</button>
			</div>
		</div>
	);
};

export default Navbar;
