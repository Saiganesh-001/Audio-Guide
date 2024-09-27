import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import SignIn from "./routes/SignIn"
import SignUp from "./routes/SignUp"
import Home from "./routes/Home"

function App() {
	const router = createBrowserRouter([
		{
			path: "/signup",
			element: <SignUp />,
		},
		{
			path: "/signin",
			element: <SignIn />,
		},
		{
			path: "/",
			element: <Home />,
		},
	])
	return <RouterProvider router={router} />
}

export default App
