import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
// import useAuthHook from "../../hook/useAuthHook";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAuthHook from "../../Hook/UseAuthHook";

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const navigate = useNavigate();
	const { updateUserProfile, createUser, googleSignIn } = useAuthHook();
	const handle_google = () => {
		googleSignIn().then((result) => {
			const loggedInUser = result.user;
			console.log(loggedInUser);
			const saveUser = {
				name: loggedInUser.displayName,
				email: loggedInUser.email,
				role: "student",
			};
			fetch("https://y-gamma-woad.vercel.app/users", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(saveUser),
			})
				.then((res) => res.json())
				.then(() => {
					navigate(from, { replace: true });
				});
		});
	};

	const onSubmit = (data) => {
		createUser(data.email, data.password).then((result) => {
			const regUser = result.user;
			console.log(regUser);

			updateUserProfile(data.name, data.photoURL)
				.then(() => {
					axios
						.post("https://y-gamma-woad.vercel.app/users", {
							name: data.name,
							email: data.email,
							role: "student",
						})
						.then((data) => {
							console.log(data);
							if (data.data.insertedId) {
								reset();
								Swal.fire({
									position: "top-end",
									icon: "success",
									title: "User created successfully.",
									showConfirmButton: false,
									timer: 1500,
								});
								navigate("/");
							}
						});
				})
				.catch((error) => console.log(error));
		});
	};
	return (
		<div>
			<div>
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<div className="text-center lg:text-left">
							<h1 className="text-5xl font-bold">Registration now!</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
						</div>
						<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
							<form className="card-body" onSubmit={handleSubmit(onSubmit)}>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Name</span>
									</label>
									<input
										type="text"
										placeholder="name"
										className="input input-bordered"
										{...register("name", { required: true })}
									/>
									{errors.name && (
										<p className="text-red-500 text-xs italic">
											Name is required
										</p>
									)}
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Image URL</span>
									</label>
									<input
										type="text"
										placeholder="Image URL"
										className="input input-bordered"
										{...register("photoURL", { required: true })}
									/>
									{errors.photoURL && (
										<p className="text-red-500 text-xs italic">
											photoURL is required
										</p>
									)}
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input
										type="text"
										placeholder="email"
										className="input input-bordered"
										{...register("email", { required: true })}
									/>
									{errors.email && (
										<p className="text-red-500 text-xs italic">
											Email is required
										</p>
									)}
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input
										type="text"
										placeholder="password"
										className="input input-bordered"
										{...register("password", {
											required: true,
											minLength: 6,
											maxLength: 20,
											pattern:
												/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
										})}
									/>
									{errors.password?.type === "required" && (
										<p className="text-red-600">Password is required</p>
									)}
									{errors.password?.type === "minLength" && (
										<p className="text-red-600">
											Password must be 6 characters
										</p>
									)}
									{errors.password?.type === "maxLength" && (
										<p className="text-red-600">
											Password must be less than 20 characters
										</p>
									)}
									{errors.password?.type === "pattern" && (
										<p className="text-red-600">
											Password must have one Uppercase one lower case, one
											number and one special character.
										</p>
									)}
								</div>
								<div className="form-control mt-6 mx-auto">
									<button className="btn btn-primary">Registration</button>
								</div>
							</form>
							<div className="flex justify-between">
								<Link
									to="/login"
									className=" font-bold text-sm text-indigo-600 hover:text-indigo-800"
									href="#"
								>
									Already have a acount?
									<span className="text-blue-900">Click here to login.</span>
								</Link>
								<div className="mx-auto">
									<button className="btn  btn-warning" onClick={handle_google}>
										Google
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
