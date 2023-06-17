import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthHook from "../../Hook/UseAuthHook";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { signIn, googleSignIn } = useAuthHook();
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";
	const handle_google = () => {
		googleSignIn().then((result) => {
			const loggedInUser = result.user;
			console.log(loggedInUser);
			const saveUser = {
				name: loggedInUser.displayName,
				email: loggedInUser.email,
				role: "admin",
			};
			fetch("http://localhost:3000/users", {
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
		signIn(data.email, data.password).then((result) => {
			const user = result.user;
			console.log(user);
			Swal.fire({
				title: "User Login Successful.",
				showClass: {
					popup: "animate__animated animate__fadeInDown",
				},
				hideClass: {
					popup: "animate__animated animate__fadeOutUp",
				},
			});
			navigate(from, { replace: true });
		});
	};
	return (
		<div>
			<div>
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<div className="text-center lg:text-left">
							<h1 className="text-5xl font-bold">Login now!</h1>
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
									<button className="btn btn-primary">Login</button>
								</div>
							</form>
							<div className="flex justify-between">
								<Link
									to="/signup"
									className=" font-bold text-sm text-indigo-600 hover:text-indigo-800"
									href="#"
								>
									Not registered?
									<span className="text-blue-900">Click here to register.</span>
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

export default Login;
