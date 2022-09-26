import React from "react";
import eniola from "../assets/images/eniola.png";

const Message = () => {
	return (
		<div className="message owner">
			<div className="message__info">
				<img src={eniola} alt="" />
				<span>Just now</span>
			</div>
			<div className="message__content">
				<p>Hello</p>
				<img src={eniola} alt="" />
			</div>
		</div>
	);
};

export default Message;
