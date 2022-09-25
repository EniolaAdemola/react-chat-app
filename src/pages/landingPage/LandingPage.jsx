import React from "react";
import "./landingPage.scss";
import Button from "../../components/Button";

const LandingPage = () => {
	return (
		<header className="main__header">
			<div className="main__header-container">
				<h1>Welcome to Eniola's Chat App</h1>
				<h3 className="text-light">get to meet new friends around the world</h3>
				<div className="page__link">
					<Button bgColor="yellow" link="login" text="Sign In" />
					<Button bgColor="blue" link="register" text="Register" />
				</div>
			</div>
		</header>
	);
};

export default LandingPage;
