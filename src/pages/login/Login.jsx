import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const Login = () => {
	const { handleChange, signUp } = useStateContext();
	const burderStyle = "1px solid #a7bcff";
	return (
		<div className="register__container" style={{ backgroundColor: "#a7bcff" }}>
			<div className="from__wrapper">
				<div className="logo__container">
					<span className="logo">Eniola's Chat</span>
					<span className="title" style={{ color: "#a7bcff" }}>
						Sign in
					</span>
				</div>
				<form className="form__input">
					<input
						type="email"
						onChange={handleChange}
						name="email"
						value={signUp.email}
						style={{ borderBottom: burderStyle }}
						autoComplete="off"
						placeholder="example@mail.com"
						required
					/>
					<input
						type="password"
						onChange={() => {}}
						name="FName"
						style={{ borderBottom: burderStyle }}
						placeholder="password"
						autoComplete="off"
						required
					/>
					<button type="button" style={{ backgroundColor: "#a7bcff" }}>
						Sign in
					</button>
				</form>
				<p style={{ color: "#a7bcff" }}>
					Don't have an account <Link to="/register">Register</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
