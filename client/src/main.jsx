import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from "./context/AuthContext.jsx";

createRoot(
	document.getElementById("root")
).render(
	<StrictMode>
		<AuthContextProvider>
			<App />
			<Toaster />
		</AuthContextProvider>
	</StrictMode>
);
