import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
	const [err, setErr] = useState(false);
	const { handleChange, signUp } = useStateContext();
	const navigate = useNavigate();

	const burderStyle = "1px solid #a7bcff";

	const handleForm = async (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/home");
		} catch (err) {
			setErr(true);
		}
	};
	return (
		<div className="register__container" style={{ backgroundColor: "#a7bcff" }}>
			<div className="from__wrapper">
				<div className="logo__container">
					<span className="logo">
						<Link to="/">Eniola's Chat</Link>
					</span>
					<span className="title" style={{ color: "#a7bcff" }}>
						Sign in
					</span>
				</div>
				<form className="form__input" onSubmit={handleForm}>
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
						name="password"
						style={{ borderBottom: burderStyle }}
						placeholder="password"
						autoComplete="off"
						required
					/>
					<button type="submit" style={{ backgroundColor: "#a7bcff" }}>
						Sign in
					</button>
					{err && (
						<span style={{ textAlign: "center", color: "red" }}>
							Something went wrong{" "}
						</span>
					)}
				</form>
				<p style={{ color: "#a7bcff" }}>
					Don't have an account <Link to="/register">Register</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
