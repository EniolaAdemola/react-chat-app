import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { ContextProvider } from "./contexts/ContextProvider";
import { ChatContextProvider } from "./contexts/ChatContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ContextProvider>
		<ChatContextProvider>
			<App />
		</ChatContextProvider>
	</ContextProvider>
);
