import React, { useState, useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { StateContext } from ".././contexts/ContextProvider";

const Search = () => {
	const [username, setUsername] = useState("");
	const [user, setUser] = useState(null);
	const [err, setErr] = useState(false);

	const { currentUser } = useContext(StateContext);

	const handleSearch = async () => {
		const q = query(
			collection(db, "users"),
			where("displayName", "==", username)
		);

		try {
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				setUser(doc.data());
			});
		} catch (err) {
			setErr(true);
		}
	};

	const handleKey = (e) => {
		e.code === "Enter" && handleSearch();
	};

	const handleSelect = async () => {
		// check if the group (chat in firestore) exist in not create a new one
		// const combinedID = currentUser.uid
		console.log(currentUser.uid);
		const res = await getDocs(db, "chats");

		// create user chat
		setUser(null);
	};
	return (
		<div className="search">
			<div className="search__form">
				<input
					type="test"
					placeholder="Find a user"
					onKeyDown={handleKey}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			{err && <span>user NotFound</span>}
			{user && (
				<div className="user__chat" onClick={handleSelect}>
					<img src={user.photoURL} alt="userImage" />
					<div className="user__chat-info">
						<span>{user.displayName}</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Search;
