import React from "react";
import { useParams } from "react-router-dom";

const SingleToy = () => {
	const _id = useParams();
	const { data: toy = [] } = useQuery({
		queryKey: ["Toy", user?.email],
		enabled: !!user?.email && !!localStorage.getItem("access-verify-token"),
		queryFn: async () => {
			const res = await instanceSecure.get(`/toy/detailsuser?.email/${_id}`);
			console.log(res.data);
			return res.data;
		},
	});

	return (
		<div>
			<div className="card w-60 bg-base-100 shadow-xl" key={toy._id}>
				<figure>
					<img
						src="https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
						alt="Shoes"
					/>
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
