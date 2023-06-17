import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";
import SingleToy from "../Pages/ToyDetails/SingleToy";
import AddToy from "../Pages/Toys/AddToy";
import AllToy from "../Pages/Toys/AllToy";
import Error from "../Pages/Toys/Error";
import Mytoy from "../Pages/Toys/Mytoy";
import MytoyUpdate from "../Pages/Toys/MytoyUpdate";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "alltoys",
				element: <AllToy />,
			},
			{
				path: "toydescriptions/:id",
				element: (
					<PrivateRoute>
						<SingleToy />
					</PrivateRoute>
				),
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signup",
				element: <SignUp />,
			},
		],
		errorElement: <Error />,
	},
	{
		path: "dashboard",
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		errorElement: <Error />,
		children: [
			{
				path: "addtoy",
				element: (
					<PrivateRoute>
						<AddToy></AddToy>
					</PrivateRoute>
				),
			},

			{
				path: "mytoy",
				element: (
					<PrivateRoute>
						<Mytoy></Mytoy>
					</PrivateRoute>
				),
			},

			{
				path: "toyupdate",
				element: (
					<PrivateRoute>
						<MytoyUpdate />
					</PrivateRoute>
				),
			},
		],
	},
]);

export default router;
