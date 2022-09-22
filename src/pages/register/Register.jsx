import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import "./register.scss";

const Register = () => {
	const { handleChange, signUp } = useStateContext();
	const burderStyle = "1px solid #a7bcff";
	return (
		<div className="register__container" style={{ backgroundColor: "#a7bcff" }}>
			<h1>Hello {signUp.FName}</h1>
			<p>{signUp.email}</p>
			<div className="from__wrapper">
				<div className="logo__container">
					<span className="logo">Eniola's Chat</span>
					<span className="title" style={{ color: "#a7bcff" }}>
						Register
					</span>
				</div>
				<form className="form__input">
					<input
						type="test"
						onChange={handleChange}
						name="FName"
						value={signUp.FName}
						style={{ borderBottom: burderStyle }}
						placeholder="First Name"
						autoComplete="off"
						required
					/>
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
					<input type="file" />
					<button type="button" style={{ backgroundColor: "#a7bcff" }}>
						Register
					</button>
				</form>
				<p>
					Already have an account? <Link to="/login">Log in</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
