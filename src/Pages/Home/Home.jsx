import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Link } from "react-router-dom";
// import Slider2 from "./Slider2";
import Slders from "./sliders";
import Service from "./service/Service";
import Contact from "./Contact/Contact";
import Review from "./Review/Review";
import Weekly from "./Weekly/Weekly";
import Latest from "./Latest/Latest";

const Home = () => {
	const { data: toy = [] } = useQuery({
		queryKey: ["toys"],
		queryFn: async () => {
			const res = await axios.get(`https://y-gamma-woad.vercel.app
/toys`);
			return res.data;
		},
	});
	const [selectedSubCategory, setSelectedSubCategory] =
		useState("Building Sets");

	const handleSubCategoryChange = (e) => {
		setSelectedSubCategory(e.target.value);
	};
	const subCategories = [
		...new Set(toy.map((product) => product.sub_category)),
	];
	const selectedTabIndex = subCategories.findIndex(
		(subCategory) => subCategory === selectedSubCategory
	);

	const handleTabSelect = (index) => {
		setSelectedSubCategory(subCategories[index]);
	};

	const filteredProducts = toy.filter(
		(product) => product.sub_category === selectedSubCategory
	);
	const tabItems = subCategories.map((subCategory, index) => (
		<Tab key={index}>{subCategory}</Tab>
	));

	const panelItems = subCategories.map((subCategory) => (
		<TabPanel key={subCategory}>
			<div className="grid grid-cols-3 gap-3">
				{filteredProducts.map((toy) => (
					<div className="card w-64  bg-base-100 shadow-xl my-4" key={toy._id}>
						<figure>
							<img
								src={toy.picture_url}
								className="object-cover h-48"
								alt="Shoes"
							/>
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
		</TabPanel>
	));

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
			<section>{/* <Service /> */}</section>
			<section>
				<div>
					<select
						value={selectedSubCategory}
						onChange={handleSubCategoryChange}
					>
						{subCategories.map((subCategory) => (
							<option key={subCategory} value={subCategory}>
								{subCategory}
							</option>
						))}
					</select>

					<Tabs selectedIndex={selectedTabIndex} onSelect={handleTabSelect}>
						<TabList>{tabItems}</TabList>
						{panelItems}
					</Tabs>
				</div>
			</section>
			<section>
				<h1 className="text-5xl font-semibold text-black mx-auto">Review</h1>
				<Review />
			</section>
			<section>
				<h1 className="text-5xl font-semibold text-black mx-auto">
					Weekly Hot
				</h1>
				<Weekly />
			</section>
			<section>
				<h1 className="text-5xl font-semibold text-black mx-auto">
					Latest Blog
				</h1>
				<Latest />
			</section>
			<section>
				<Contact />
			</section>
		</div>
	);
};

export default Home;
