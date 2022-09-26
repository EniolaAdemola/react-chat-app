import React from "react";
import Attach from "../assets/images/attach.png";
import AddImage from "../assets/images/img.png";

const Input = () => {
	return (
		<div className="input">
			<input type="text" placeholder="Send a message..." />
			<div className="send">
				<img src={Attach} alt="" />
				<input type="file" id="file" style={{ display: "none" }} />
				<label htmlFor="file">
					<img src={AddImage} alt="" />
				</label>
				<button>Send</button>
			</div>
		</div>
	);
};

export default Input;
