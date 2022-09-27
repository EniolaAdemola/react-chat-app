import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [signUp, setSignUp] = useState({
		FName: "",
		email: "",
	});
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			console.log(user);
		});

		return unsub();
	}, []);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setSignUp((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};

	return (
		<StateContext.Provider
			value={{
				// This is where i'm going to pass my
				// all my global state hook
				signUp,
				handleChange,
				currentUser,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
