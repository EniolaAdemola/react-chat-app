import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import "./register.scss";
import AddImg from "../../assets/images/addAvatar.png";

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
					<input style={{ display: "none" }} type="file" id="file" />
					<label htmlFor="file" style={{ color: "#a7bcff" }}>
						<img src={AddImg} alt="uploadImage" />
						<span>Add your avatar</span>
					</label>
					<button type="button" style={{ backgroundColor: "#a7bcff" }}>
						Register
					</button>
				</form>
				<p style={{ color: "#a7bcff" }}>
					Already have an account? <Link to="/login">Sign in</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
