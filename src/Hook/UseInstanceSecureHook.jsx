import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthHook from "./UseAuthHook";

const useAxiosInterceptor = () => {
	const instanceSecure = axios.create({
		baseURL: "https://localhost:3000",
	});
	const { logOut } = useAuthHook();
	const navigate = useNavigate();
	useEffect(() => {
		// Add a request interceptor
		instanceSecure.interceptors.request.use((config) => {
			const token = localStorage.getItem("access-verify-token");

			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}

			return config;
		});

		// Add a response interceptor
		instanceSecure.interceptors.response.use(
			(response) => {
				return response;
			},
			async (error) => {
				// Handle 401 Unauthorized error
				if (error.response.status === 401 || error.response.status === 404) {
					// Redirect or perform any other action
					await logOut();
					navigate("/login");
				}
				// Handle 404 Not Found error
				return Promise.reject(error);
			}
		);

		// Use the Axios instance for making requests
		// Example: await instanceSecure.get('/api/data') or await instance.post('/api/data', requestData)
	}, [logOut, navigate]);

	return [instanceSecure];
};

export default useAxiosInterceptor;
