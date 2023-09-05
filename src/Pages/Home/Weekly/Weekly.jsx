import { Weeklyes } from "../Constant/Constant";

const Weekly = () => {
	return (
		<div className="2xl:mx-auto 2xl:container 2xl:px-20 xl:px-12 sm:px-6 px-4 py-16">
			<div className="md:flex items-start justify-between mt-12">
				{Weeklyes.map((weekly, idx) => (
					<div className=" mx-2 md:w-1/2 lg:w-full" key={idx}>
						<div>
							<div className="relative">
								<img src={weekly.image} alt={weekly.name} />
								<div className="bg-white absolute top-0 left-0">
									<p className="text-base leading-4 py-3 px-5 text-gray-800">
										News
									</p>
								</div>
							</div>
							<p className="text-base font-light leading-4 text-gray-800 mt-6">
								{weekly.name}
							</p>
							<h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
								{weekly.title}
							</h1>
							<p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">
								{weekly.description}
							</p>
							<button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
								<p className="text-base font-medium leading-4 text-white">
									Read more
								</p>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3.33203 8H12.6654"
										stroke="white"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M10 10.6667L12.6667 8"
										stroke="white"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M10 5.33344L12.6667 8.0001"
										stroke="white"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Weekly;
