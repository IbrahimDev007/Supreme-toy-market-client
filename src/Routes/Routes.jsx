import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";
import Error from "../Pages/Toys/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "signup",
				element: <SignUp></SignUp>,
			},

			// {
			// 	path: "book/:id",
			// 	element: (
			// 		<PrivateRoute>
			// 			<BookService></BookService>
			// 		</PrivateRoute>
			// 	),
			// 	loader: ({ params }) =>
			// 		fetch(
			// 			`https://car-doctor-server-smoky.vercel.app/services/${params.id}`
			// 		),
			// },
			// {
			// 	path: "bookings",
			// 	element: (
			// 		<PrivateRoute>
			// 			<Bookings></Bookings>
			// 		</PrivateRoute>
			// 	),
			// },
		],
	},
	{
		path: "/errors",
		element: <Error />,
	},
]);

export default router;
