import React, { useContext } from "react";
import Add from "../assets/images/add.png";
import More from "../assets/images/more.png";
import Cam from "../assets/images/cam.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../contexts/ChatContext";

const Chat = () => {
	const { data } = useContext(ChatContext);

	return (
		<div className="chat">
			<div className="chat__info">
				<span>{data.user?.displayName}</span>
				<div className="chat__icons">
					<img src={Cam} alt="" />
					<img src={Add} alt="" />
					<img src={More} alt="" />
				</div>
			</div>
			<Messages />
			<Input />
		</div>
	);
};

export default Chat;
