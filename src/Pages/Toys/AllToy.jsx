import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const AllToys = () => {
	const { data: toys = [] } = useQuery({
		queryKey: ["toysk"],
		queryFn: async () => {
			const res = await axios.get("https://y-gamma-woad.vercel.app/toys");
			return res.data;
		},
	});

	const [searchQuery, setSearchQuery] = useState("");
	const filteredToys = toys.filter((toy) =>
		toy.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	return (
		<div className="flex  flex-col justify-center">
			<div className="my-4">
				<input
					type="text"
					placeholder="Search toys..."
					value={searchQuery}
					onChange={handleSearchChange}
					className="border border-gray-300 px-4 py-2 rounded-md  h-12 w-48 mx-auto  flex justify-center"
				/>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Seller</th>
						<th>Sub-category</th>
						<th>Price</th>
						<th>Available Quantity</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{filteredToys.map((toy) => (
						<tr key={toy._id}>
							<td>
								<div className="flex items-center space-x-3">
									<div className="avatar">
										<div className="mask mask-squircle w-12 h-12">
											<img src={toy.picture_url} alt={toy.name} />
										</div>
									</div>
									<div>
										<div className="font-bold">{toy.name}</div>
										<div className="text-sm opacity-50">
											{toy.seller_name || "Unknown Seller"}
										</div>
									</div>
								</div>
							</td>
							<td>{toy.seller_name || "Unknown Seller"}</td>
							<td>{toy.sub_category}</td>
							<td>{toy.price}</td>
							<td>{toy.available_quantity}</td>
							<td>
								<Link
									to={`/toydescriptions/${toy._id}`}
									className="text-red-700"
								>
									View Description
								</Link>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<th>Name</th>
						<th>Seller</th>
						<th>Sub-category</th>
						<th>Price</th>
						<th>Available Quantity</th>
						<th></th>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default AllToys;
