import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from ".././firebase";
import { ChatContext } from "../contexts/ChatContext";
import Message from "./Message";

const Messages = () => {
	const [messages, setMessages] = useState([]);
	const { data } = useContext(ChatContext);

	// console.log(data);
	useEffect(() => {
		const unSub = onSnapshot(doc(db, "chats", data.chatid), (doc) => {
			doc.exists() && setMessages(doc.data().messages);
		});

		return () => {
			unSub();
		};
	}, [data.chatid]);

	console.log(messages);
	return (
		<div className="messages">
			{messages.map((m) => (
				<Message message={m} key={m.id} />
			))}
		</div>
	);
};

export default Messages;
