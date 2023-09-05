import { Link } from "react-router-dom";
import { Hot } from "../../Constant/constant";

const Latest = () => {
	return (
		<div className="2xl:mx-auto 2xl:container my-10">
			<div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
				<div className="flex justify-center">
					<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 lg:mt-16 md:mt-12 mt-8 items-center">
						{Hot.map((hot, idx) => (
							<div key={idx} className="relative flex flex-wrap">
								<img
									src={hot.image}
									alt="two girls"
									className="w-full h-full object-contain"
								/>
								<img
									src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
									alt="opacity bg"
									className="absolute w-full h-full top-0 "
								/>
								<div className="absolute m-6 bottom-0 z-30">
									<p className="text-sm leading-none text-white">
										Special collection
									</p>
									<h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
										{hot.title}
									</h1>
									<Link
										to={hot.link}
										className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white"
									>
										Discover
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Latest;
