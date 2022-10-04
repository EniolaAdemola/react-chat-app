import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from ".././firebase";
import { StateContext } from "../contexts/ContextProvider";

const Chats = () => {
	const [chats, setChats] = useState([]);

	const { currentUser } = useContext(StateContext);

	useEffect(() => {
		const getChats = () => {
			const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
				setChats(doc.data());
			});
			return () => {
				unsub();
			};
		};

		currentUser.uid && getChats();
	}, [currentUser.uid]);

	console.log(Object.entries(chats));
	return (
		<div className="chats">
			{Object.entries(chats)?.map((chat) => (
				<div className="user__chat" key={chat[0]}>
					<img src={chat[1].userInfo.photoURL} alt="userImage" />
					<div className="user__chat-info">
						<span>{chat[1].userInfo.displayName}</span>
						<p>{chat[1].userInfo.lastMessage?.text}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Chats;
