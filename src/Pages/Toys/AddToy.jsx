import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosInterceptor from "../../Hook/UseInstanceSecureHook";
import useAuthHook from "../../Hook/UseAuthHook";
import axios from "axios";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
console.log(img_hosting_token);
const AddToy = () => {
	const [instanceSecure] = useAxiosInterceptor();
	const { register, handleSubmit, reset } = useForm();
	const { user } = useAuthHook();
	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
	const onSubmit = (data) => {
		const formData = new FormData();
		formData.append("image", data.image[0]);
		fetch(img_hosting_url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.success) {
					const imgURL = res.data.display_url;

					const {
						name,
						rating,
						price,
						available_quantity,
						description,
						sub_category,
					} = data;
					const newItem = {
						name,
						picture_url: imgURL,
						rating: parseFloat(rating),
						price: parseFloat(price),
						available_quantity: parseFloat(available_quantity),
						description,
						sub_category,
						seller_name: user.displayName,
						seller_email: user.email,
					};
					console.log(newItem);
					axios
						.post("https://y-gamma-woad.vercel.app/toys", newItem)
						.then((data) => {
							console.log("after posting new class item", data.data);
							if (data.data.insertedId) {
								reset();
								Swal.fire({
									position: "top-end",
									icon: "success",
									title: "class added successfully",
									showConfirmButton: false,
									timer: 1500,
								});
							}
						});
				}
			});
	};
	return (
		<div>
			<div>
				<h1 className="text-3xl text-center">Add Toy</h1>
				<form
					className="card-body bg-success modal-box"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Toy Name</span>
						</label>
						<input
							type="text"
							placeholder="toy name"
							className="input input-bordered"
							{...register("name", { required: true })}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Toy sub-catagory</span>
						</label>
						<input
							type="text"
							placeholder="toy sub_category"
							className="input input-bordered"
							{...register("sub_category", { required: true })}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Toy Image</span>
						</label>
						<input
							type="file"
							className="file-input w-full max-w-xs"
							{...register("image", { required: true })}
						/>
					</div>

					<div className="form-control">
						<label className="label">
							<span className="label-text">available_quantity</span>
						</label>
						<input
							type="number"
							placeholder="available_quantity"
							className="input input-bordered"
							{...register("available_quantity", { required: true })}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">rating</span>
						</label>
						<input
							type="number"
							placeholder="rating"
							className="input input-bordered"
							{...register("rating", { required: true })}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Price</span>
						</label>
						<input
							type="number"
							placeholder="Price"
							className="input input-bordered"
							{...register("price", { required: true })}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Description</span>
						</label>
						<textarea
							type="text"
							placeholder="description"
							className="textarea"
							{...register("description", { required: true })}
						></textarea>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary">Add Toy</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddToy;
