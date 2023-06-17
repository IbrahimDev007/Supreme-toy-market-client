import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuthHook = () => {
	const auth = useContext(AuthContext);
	return auth;
};

export default useAuthHook;
