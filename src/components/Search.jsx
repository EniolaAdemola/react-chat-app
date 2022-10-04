import React, { useState, useContext } from "react";
import {
	doc,
	collection,
	query,
	where,
	getDocs,
	getDoc,
	setDoc,
	updateDoc,
	serverTimestamp,
} from "firebase/firestore";
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
		const combinedID =
			currentUser.uid > user.uid
				? currentUser.uid + user.uid
				: user.uid + currentUser.uid;
		try {
			const res = await getDoc(doc(db, "chats", combinedID));

			if (!res.exists()) {
				// create chats in chats collection
				await setDoc(doc(db, "chats", combinedID), { messages: [] });

				// create user chat
				await updateDoc(doc(db, "userChats", currentUser.uid), {
					[combinedID + ".userInfo"]: {
						// how to use variable and string together
						uid: user.uid,
						displayName: user.displayName,
						photoURL: user.photoURL,
					},
					[combinedID + ".date"]: serverTimestamp(),
				});
				await updateDoc(doc(db, "userChats", user.uid), {
					[combinedID + ".userInfo"]: {
						// how to use variable and string together
						uid: currentUser.uid,
						displayName: currentUser.displayName,
						photoURL: currentUser.photoURL,
					},
					[combinedID + ".date"]: serverTimestamp(),
				});
			}
			// console.log("done");
		} catch (err) {
			// console.log(err);
			setErr(true);
		}
		setUser(null);
		setUsername("");
	};
	return (
		<div className="search">
			<div className="search__form">
				<input
					type="test"
					placeholder="Find a user"
					onKeyDown={handleKey}
					onChange={(e) => setUsername(e.target.value)}
					value={username}
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
