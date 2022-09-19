import React, { createContext, useContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	return (
		<StateContext.Provider
			value={
				{
					// This is where i'm going to pass my
					// all my global state hook
				}
			}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
