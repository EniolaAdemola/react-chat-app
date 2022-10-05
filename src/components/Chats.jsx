import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from ".././firebase";
import { StateContext } from "../contexts/ContextProvider";
import { ChatContext } from "../contexts/ChatContext";

const Chats = () => {
	const [chats, setChats] = useState([]);

	const { currentUser } = useContext(StateContext);
	const { dispatch } = useContext(ChatContext);

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

	const handleSelect = (u) => {
		dispatch({ type: "CHANGE_USER", payload: u });
	};

	return (
		<div className="chats">
			{Object.entries(chats)?.map((chat) => (
				<div
					className="user__chat"
					key={chat[0]}
					onClick={() => handleSelect(chat[1].userInfo)}
				>
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
