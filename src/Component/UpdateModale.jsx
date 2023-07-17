import { useForm } from "react-hook-form";

const UpdateModale = ({ onSubmit }) => {
	const { register, handleSubmit } = useForm();
	return (
		<div>
			<input type="checkbox" id="my-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box">
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
							<button className="btn btn-primary">Update Toy</button>
						</div>
					</form>
					<div className="modal-action">
						<label htmlFor="my-modal" className="btn">
							close!
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateModale;
