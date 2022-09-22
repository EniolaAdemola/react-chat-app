import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<LandingPage />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="home" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
