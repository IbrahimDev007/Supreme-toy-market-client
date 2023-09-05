const Service = () => {
	return (
		<section className="bg-gray-100 py-16">
			<div className="container mx-auto relative">
				<div className="flex flex-wrap items-center -mx-4">
					<div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
						<img
							src="https://img.freepik.com/free-vector/happy-children-jumping-summer-meadow_74855-5852.jpg?w=2000"
							alt="Premium Service"
							className="mx-auto md:mx-0 max-w-full"
						/>
					</div>
					<div className="w-full md:w-1/2 px-4">
						<div className="max-w-lg mx-auto">
							<h2 className="text-3xl font-semibold mb-4 absolute text-violet-700 top-7 left-[9.4cm] ">
								We provide & offer premium <br />
								service
							</h2>
							<p className="text-gray-600 mb-2 pt-15 mt-20">
								Discover the ultimate toy experience with Supreme Toy Market. We
								are your destination for high-quality, expertly curated toys
								that spark imagination and joy. Our dedicated team of toy
								enthusiasts ensures that every product meets our rigorous
								standards, guaranteeing your satisfaction. Experience fast and
								reliable shipping, along with 24/7 customer support to assist
								you at every step.
							</p>
							<ul className="list-disc pl-6 text-gray-600">
								<li>High-quality products</li>
								<li>Expert toy enthusiasts</li>
								<li>Fast and reliable shipping</li>
								<li>24/7 customer support</li>
							</ul>
							<div className="mt-8">
								<button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-red-700">
									Learn More
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service;
