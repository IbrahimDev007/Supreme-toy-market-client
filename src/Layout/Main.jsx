import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
	return (
		<>
			<Navbar></Navbar>
			<Outlet />
			<Footer />
		</>
	);
};

export default Main;
