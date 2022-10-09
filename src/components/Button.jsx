import React from "react";
import { Link } from "react-router-dom";

const Button = ({ bgColor, text, link }) => {
	return (
		<div>
			<Link to={link}>
				<button
					type="button"
					className="btn"
					style={{ backgroundColor: bgColor }}
				>
					{text}
				</button>
			</Link>
		</div>
	);
};

export default Button;
