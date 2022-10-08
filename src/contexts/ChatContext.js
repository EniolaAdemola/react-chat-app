import React, { createContext, useContext, useReducer } from "react";
import { StateContext } from "./ContextProvider";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
	const { currentUser } = useContext(StateContext);

	const INITIAL_STATE = {
		chatid: "null",
		user: {},
	};

	// chat reducer takes two input params
	// 1, iitial state, 2. the action we want it to perform
	const chatReducer = (state, action) => {
		// console.log(action.type);
		switch (action.type) {
			case "CHANGE_USER":
				return {
					user: action.payload,
					chatid:
						currentUser.uid > action.payload.uid
							? currentUser.uid + action.payload.uid
							: action.payload.uid + currentUser.uid,
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

	return (
		<ChatContext.Provider
			value={{
				data: state,
				dispatch,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
