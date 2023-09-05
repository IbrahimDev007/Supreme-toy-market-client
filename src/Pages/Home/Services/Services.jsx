import { Service } from "../../Constant/constant";
import "./servicess.scss";
const Services = () => {
	return (
		<div>
			<div className="flex flex-wrap justify-center mt-10">
				{Service.map((teck, index) => (
					<span
						key={index}
						className={`${
							index % 2 === 0 ? "btn--wut" : "btn--wiggle"
						} w-60 h-60 bg-white shadow-2xl m-2 rounded-full flex  flex-col items-center p-5  justify-between`}
					>
						<img
							src={teck.companyImage}
							alt={teck.title}
							className="max-h-32 w-40 "
						/>
						<p className="text-error bg-slate-700 px-2 w-36">
							{teck.description}
						</p>
					</span>
				))}
			</div>
		</div>
	);
};

export default Services;
