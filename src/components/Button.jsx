import React from "react";
import { Link } from "react-router-dom";

const Button = ({ bgColor, text, link }) => {
	return (
		<div>
			<Link to={link} className="btn lg">
				<button type="button" style={{ backgroundColor: bgColor }}>
					{text}
				</button>
			</Link>
		</div>
	);
};

export default Button;
