import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import "./register.scss";
import AddImg from "../../assets/images/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
	const [err, setErr] = useState(false);
	const { handleChange, signUp } = useStateContext();
	const navigate = useNavigate();

	const burderStyle = "1px solid #a7bcff";

	const handleForm = async (e) => {
		e.preventDefault();
		const form = e.target;
		const displayName = form.FName.value;
		const email = form.email.value;
		const password = form.password.value;
		const file = form.avatar.files[0];
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);

			const storageRef = ref(storage, displayName);

			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				(error) => {
					// Handle unsuccessful uploads
					setErr(true);
				},
				() => {
					// Handle successful uploads on complete
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						console.log("File available at", downloadURL);
						await updateProfile(res.user, {
							displayName,
							photoURL: downloadURL,
						});
						await setDoc(doc(db, "users", res.user.uid), {
							uid: res.user.uid,
							displayName,
							email,
							photoURL: downloadURL,
						});
						await setDoc(doc(db, "userChats", res.user.uid), {});
						navigate("/login");
					});
				}
			);
		} catch (err) {
			console.log(err);
			setErr(true);
		}
	};

	return (
		<div className="register__container" style={{ backgroundColor: "#a7bcff" }}>
			<h1>Hello {signUp.FName}</h1>
			<p>{signUp.email}</p>
			<div className="from__wrapper">
				<div className="logo__container">
					<span className="logo">
						<Link to="/">Eniola's Chat</Link>
					</span>
					<span className="title" style={{ color: "#a7bcff" }}>
						Register
					</span>
				</div>
				<form className="form__input" onSubmit={handleForm}>
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
						name="password"
						style={{ borderBottom: burderStyle }}
						placeholder="password"
						autoComplete="off"
						required
					/>
					<input
						style={{ display: "none" }}
						type="file"
						id="file"
						name="avatar"
					/>
					<label htmlFor="file" style={{ color: "#a7bcff" }}>
						<img src={AddImg} alt="uploadImage" />
						<span>Add your avatar</span>
					</label>
					<button type="submir" style={{ backgroundColor: "#a7bcff" }}>
						Register
					</button>
					{err && (
						<span style={{ textAlign: "center", color: "red" }}>
							Something went wrong{" "}
						</span>
					)}
				</form>
				<p style={{ color: "#a7bcff" }}>
					Already have an account? <Link to="/login">Sign in</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
