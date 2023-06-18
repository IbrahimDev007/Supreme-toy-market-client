import { createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import axios from "axios";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
			role: "Student",
		});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log("current user-4", currentUser, currentUser?.email);

			//	get and set token
			if (currentUser) {
				axios
					.post("https://y-gamma-woad.vercel.app/jwt", {
						email: currentUser.email,
					})
					.then((data) => {
						// console.log(data.data);
						localStorage.setItem("access-verify-token", data.data.token);
						setLoading(false);
					})
					.catch((err) => console.log(err.message));
			} else {
				localStorage.removeItem("access-verify-token");
			}
		});
		return () =>
			unsubscribe()
				.then(() => {
					// localStorage.removeItem("access-verify-token");
					console.log("remove done");
				})
				.catch((err) => console.log(err));
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		signIn,
		googleSignIn,
		logOut,
		updateUserProfile,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
