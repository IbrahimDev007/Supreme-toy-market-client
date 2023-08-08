import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuthHook from "../../Hook/UseAuthHook";
import useAxiosInterceptor from "../../Hook/UseInstanceSecureHook";
import UpdateModale from "../../Component/UpdateModale";
import axios from "axios";
import useToy from "../../Hook/UseToy";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const Mytoy = () => {
	const [singleToy, setSingleToy] = useState(null);
	const { user } = useAuthHook();
	const { loading, refetch } = useToy();
	console.log(refetch);
	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
	const [instanceSecure] = useAxiosInterceptor();
	const { data: myToys = [], refetch: reloadData } = useQuery({
		queryKey: ["myToys", user?.email],
		enabled: !!user?.email && !!localStorage.getItem("access-verify-token"),

		queryFn: async () => {
			// console.log(user.email);
			const res = await axios.get(
				`https://y-gamma-woad.vercel.app/mytoy/${user?.email}`
			);
			// console.log(res.data);
			return res.data;
		},
	});
	console.log(singleToy);
	// console.log(data);
	const handleModale = (item) => {
		setSingleToy(item);
	};
	const onSubmit = (data) => {
		const { _id } = singleToy;
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
					};
					console.log(newItem);
					axios
						.patch(`https://y-gamma-woad.vercel.app/toys/${_id}`, newItem)
						.then((data) => {
							reset();
							refetch();
							reloadData();
						});
				}
			});
	};
	const handleDelete = (_id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`https://y-gamma-woad.vercel.app/toys/${_id}`)
					.then((res) => {
						if (res.data.deletedCount > 0) {
							refetch();
							reloadData();
							Swal.fire("Deleted!", "Your file has been deleted.", "success");
						}
					});
			}
		});
	};
	return (
		<div>
			<div>
				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						<thead className="text-slate-900 text-sm font-extralight">
							<tr>
								<th>#</th>
								<th>Image</th>
								<th>Toy name</th>
								<th>sub_category</th>
								<th>price</th>
								<th>rating</th>
								<th>description</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{myToys &&
								myToys.map((toy, index) => (
									<tr key={toy._id}>
										<td>{index}</td>
										<td>
											<div className="avatar">
												<div className="mask mask-squircle w-12 h-12">
													<img
														src={toy.picture_url}
														alt="Avatar Tailwind CSS Component"
													/>
												</div>
											</div>
										</td>
										<td>{toy.name}</td>
										<td className="text-end">${toy.sub_category}</td>
										<td className="text-end">{toy.price}</td>
										<td className="text-end">
											<Link to={`/toydescriptions/${toy._id}`}>
												View Details
											</Link>
										</td>
										<td className="text-end">{toy.rating}</td>
										<td className="text-end">
											<label
												htmlFor="my-modal"
												className="btn btn-sm btn-warning"
												onClick={() => handleModale(toy)}
											>
												update
											</label>

											<button
												onClick={() => handleDelete(toy._id)}
												className="btn btn-sm btn-danger"
											>
												Delete
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</table>
					{/* The button to open modal */}
					{/* Put this part before </body> tag */}
					<UpdateModale onSubmit={onSubmit} />
				</div>
			</div>
		</div>
	);
};

export default Mytoy;
