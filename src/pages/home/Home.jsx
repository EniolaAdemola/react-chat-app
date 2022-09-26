import React from "react";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";
import "./home.scss";

const Home = () => {
	return (
		<div className="home" style={{ backgroundColor: "#a7bcff" }}>
			<div className="container">
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
};

export default Home;
