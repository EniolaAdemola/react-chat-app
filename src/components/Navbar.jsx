import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { StateContext } from "../contexts/ContextProvider";

const Navbar = () => {
	const { currentUser } = useContext(StateContext);

	return (
		<div className="navbar">
			<span className="logo">Eniola's Chat</span>
			<div className="user">
				<img src={currentUser.photoURL} alt="" />
				<span>{currentUser.displayName}</span>
				<button onClick={() => signOut(auth)}>Logout</button>
			</div>
		</div>
	);
};

export default Navbar;
