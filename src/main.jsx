import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<div className="max-w-screen-2xl mx-auto">
					<RouterProvider router={router} />
				</div>
			</QueryClientProvider>
		</HelmetProvider>
	</AuthProvider>
);
