import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const AllToy = () => {
	// all toy get with react query
	const { data: toy = [] } = useQuery({
		queryKey: ["toysk"],
		queryFn: async () => {
			const res = await axios.get(`
			https://y-gamma-woad.vercel.app/toys`);
			// console.log(res.data);
			return res.data;
		},
	});

	return (
		<div>
			<div className="flex justify-center py-16">
				<div className="grid grid-cols-3 gap-8">
					{toy.map((toy) => (
						<div
							className="card w-5/6 bg-base-100 shadow-xl mb-2"
							key={toy._id}
						>
							<figure>
								<img src={toy.picture_url} alt="Shoes" />
							</figure>
							<div className="card-body">
								<h2 className="card-title">{toy.name}</h2>
								<p>
									<span className="font-semibold text-md">seller_name:</span>
									{toy.seller_name}
								</p>
								<p>
									<span className="font-semibold text-md">Email:</span>
									{toy.seller_email}
								</p>
								<p>
									<span className="font-semibold text-md">sub_catagory:</span>
									{toy.sub_category}
								</p>
								<p>
									<span className="font-semibold text-md">rating:</span>
									{toy.rating}
								</p>

								<p>
									<span className="font-semibold text-md"></span>
									<Link
										to={`/toydescriptions/${toy._id}`}
										className="text-red-700"
									>
										view toydesc
									</Link>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllToy;
