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
			console.log(res.data);
			return res.data;
		},
	});

	return (
		<div>
			<div className="flex justify-center py-16">
				<div className="grid grid-cols-3 gap-8">
					{toy.map((toy) => (
						<div className="card w-48 bg-base-100 shadow-xl" key={toy._id}>
							<figure>
								<img
									src="https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
									alt="Shoes"
								/>
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
									<Link to={`/toydescriptions/${toy._id}`}>view toydesc </Link>
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
