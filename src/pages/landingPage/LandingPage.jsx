import React from "react";
import "./landingPage.scss";
import Button from "../../components/Button";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
	return (
		<header className="main__header">
			<div className="main__header-container">
				<h1>Welcome to Eniola's Chat App</h1>
				<h3 className="text-light">
					<Typewriter
						options={{
							strings: [
								"Welcome to my chat app",
								"get to meet new friends around the world",
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</h3>
				<div className="page__link">
					<Button bgColor="#a7bcff" link="login" text="Sign In" />
					<Button bgColor="none" link="register" text="Register" />
				</div>
			</div>
		</header>
	);
};

export default LandingPage;
