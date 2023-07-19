import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Slders from "./sliders";

const Home = () => {
	const { data: toy = [] } = useQuery({
		queryKey: ["toys"],
		queryFn: async () => {
			const res = await axios.get(`https://y-gamma-woad.vercel.app
/toys`);
			return res.data;
		},
	});

	return (
		<div>
			<section>
				<div className="hero min-h-screen  bg-[url(https://images.unsplash.com/photo-1558060370-d644479cb6f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)] bg-cover bg-center bg-no-repeat">
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-md">
							<h1 className="mb-5 text-5xl font-bold">
								Supreme Toy Market Hero
							</h1>
							<p className="mb-5">
								Enter a captivating world where rare toys and superheroes
								collide. Explore aisles filled with collectibles, engage in
								thrilling trades, and embrace the joy of toys. Unleash your
								inner hero in this extraordinary toy paradise, where memories
								are made and dreams come to life
							</p>
							<Link to={"/alltoys"} className="btn btn-primary">
								See All Toy
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section>
				<Slders />
			</section>
			<section>
				<div className="grid grid-cols-3 gap-8">
					{toy.map((toy) => (
						<div
							className="card w-5/6 bg-base-100 shadow-xl my-10"
							key={toy._id}
						>
							<figure>
								<img src={toy.picture_url} alt="Shoes" />
							</figure>
							<div className="card-body">
								<h2 className="card-title">{toy.name}</h2>
								<p>
									<span className="font-semibold text-md">Seller:</span>
									{toy.seller_name}
								</p>
								<p>
									<span className="font-semibold text-md">Email:</span>
									{toy.seller_email}
								</p>
								<p>
									<span className="font-semibold text-md">Sub-Catagory:</span>
									{toy.sub_category}
								</p>

								<p>
									<span className="font-semibold text-md">Details:</span>
									<Link
										to={`/toydescriptions/${toy._id}`}
										className="text-accent text-base m-2"
									>
										Toy Description{" "}
									</Link>
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
