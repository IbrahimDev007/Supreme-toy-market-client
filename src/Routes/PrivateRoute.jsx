import { Navigate, useLocation } from "react-router";
import useAuthHook from "../Hook/UseAuthHook";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuthHook();
	const location = useLocation();

	if (loading) {
		return <progress className="progress w-56"></progress>;
	}

	if (user) {
		return children;
	}
	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
