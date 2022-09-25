import React from "react";
import userImage from "../assets/images/eniola.png";

const Search = () => {
	return (
		<div className="search">
			<div className="search__form">
				<input type="test" placeholder="Find a user" />
			</div>
			<div className="user__chat">
				<img src={userImage} alt="userImage" />
				<div className="user__chat-info">
					<span>Daveworld</span>
				</div>
			</div>
		</div>
	);
};

export default Search;
