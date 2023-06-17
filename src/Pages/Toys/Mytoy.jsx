import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

// import axios from "axios";
import { useState } from "react";

import Swal from "sweetalert2";
import useAuthHook from "../../Hook/UseAuthHook";
import useAxiosInterceptor from "../../Hook/UseInstanceSecureHook";
import UpdateModale from "../../Component/UpdateModale";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const Mytoy = () => {
	const [singleToy, setSingleToy] = useState([]);
	const { user, loading, refetch } = useAuthHook();
	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
	const [instanceSecure] = useAxiosInterceptor();
	const { data: myToys = [] } = useQuery({
		queryKey: ["myToys", user?.email],
		enabled: !!user?.email && !!localStorage.getItem("access-verify-token"),
		queryFn: async () => {
			const res = await instanceSecure.get(`/mytoy/${user?.email}`);
			console.log(res.data);
			return res.data;
		},
	});
	const handleModale = (item) => {
		setSingleToy(item);
		window.my_modal_3.showModal();
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
					instanceSecure.patch(`/toys/${_id}`, newItem).then((data) => {
						reset();
						refetch();
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
				instanceSecure.delete(`toys/${_id}`).then((res) => {
					if (res.data.deletedCount > 0) {
						refetch();
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
						{/* head */}
						<thead className="bg-success text-white">
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
								myToys.map((toy) => (
									<tr key={toy._id}>
										<td>{index}</td>
										<td>
											<div className="avatar">
												<div className="mask mask-squircle w-12 h-12">
													<img
														// src={user.image}
														src={""}
														alt="Avatar Tailwind CSS Component"
													/>
												</div>
											</div>
										</td>
										<td>{toy.name}</td>
										<td className="text-end">${toy.sub_category}</td>
										<td className="text-end">{toy.price}</td>
										<td className="text-end">
											<Link to={`toydescriptions/${toy._id}`}>
												View Details
											</Link>
										</td>
										<td className="text-end">{toy.rating}</td>
										<td className="text-end ">
											<button
												onClick={() => handleModale(toy)}
												className="btn btn-sm btn-warning"
											>
												Update
											</button>
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
					<dialog id="my_modal_3" className="modal">
						<UpdateModale onSubmit={onSubmit} />
					</dialog>
				</div>
			</div>
		</div>
	);
};

export default Mytoy;
