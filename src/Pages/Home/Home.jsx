import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const { data: toy = [] } = useQuery({
		queryKey: ["toysj"],
		queryFn: async () => {
			const res = await axios.get(`http://localhost:3000/toys`);

			return res.data;
		},
	});
	return (
		<div>
			<section>
				<div
					className="hero min-h-screen"
					// style={`background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg)`}
				>
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-md">
							<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
							<p className="mb-5">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
							<button className="btn btn-primary">Get Started</button>
						</div>
					</div>
				</div>
			</section>

			<section>
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
									<span className="font-semibold text-md">Email:</span>
									{toy.seller_name}
								</p>
								<p>
									<span className="font-semibold text-md">Email:</span>
									{toy.seller_email}
								</p>
								<p>
									<span className="font-semibold text-md">Email:</span>
									{toy.sub_category}
								</p>

								<p>
									<span className="font-semibold text-md">Email:</span>
									<Link to={`/toydescriptions/${toy._id}`}>view toydesc </Link>
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
