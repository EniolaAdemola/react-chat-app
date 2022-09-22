import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [signUp, setSignUp] = useState({
		FName: "",
		email: "",
	});

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
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
