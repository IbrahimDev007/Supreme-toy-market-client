import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import useAuthHook from "../../Hook/UseAuthHook";
import useAxiosInterceptor from "../../Hook/UseInstanceSecureHook";

const SingleToy = () => {
	const { id } = useParams();

	console.log("single toy id", typeof id, id);
	const [instanceSecure] = useAxiosInterceptor();
	const { user } = useAuthHook();
	const token = localStorage.getItem("access-verify-token");
	console.log(token, user?.email);
	const { data: toy = [] } = useQuery({
		queryKey: ["Toy", user?.email, token],
		enabled: !!user?.email,
		queryFn: async () => {
			if (!user?.email || !token) {
				return [];
			}
			const res = await instanceSecure.get(`/toy/details/${id}`);
			console.log(res.data);
			return res.data;
		},
	});

	return (
		<div>
			<div className="card w-60 bg-base-100 shadow-xl" key={toy._id}>
				<figure>
					<img src={toy.picture_url} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{toy.name}</h2>
					<p>
						<span className="font-semibold text-md">Seller Name:</span>
						{toy.seller_name}
					</p>
					<p>
						<span className="font-semibold text-md">Seller Email:</span>
						{toy.seller_email}
					</p>
					<p>
						<span className="font-semibold text-md">Sub Catagory</span>
						{toy.sub_category}
					</p>

					<p>
						<span className="font-semibold text-md">Toy description</span>
						{toy.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleToy;
