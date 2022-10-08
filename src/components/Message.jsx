import React, { useContext } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { StateContext } from "../contexts/ContextProvider";

const Message = ({ message }) => {
	const { currentUser } = useContext(StateContext);
	const { data } = useContext(ChatContext);

	const ref = useRef();

	useEffect(() => {
		ref.current?.scrollIntoView({ behaviour: "amooth" });
	}, [message]);

	return (
		<div
			ref={ref}
			className={`message ${message.senderId === currentUser.uid && "owner"}`}
		>
			<div className="message__info">
				<img
					src={
						message.senderId === currentUser.uid
							? currentUser.photoURL
							: data.user.photoURL
					}
					alt=""
				/>
				<span>Just now</span>
			</div>
			<div className="message__content">
				<p>{message.text}</p>
				{message.pic && <img src={message.pic} alt="" />}
			</div>
		</div>
	);
};

export default Message;
