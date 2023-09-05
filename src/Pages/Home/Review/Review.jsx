import { Swiper, SwiperSlide } from "swiper/react";
import "./review.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { reviews } from "../Constant/Constant";
export default function Review() {
	return (
		<section className="">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className=""
			>
				{reviews.map((rev, i) => {
					return (
						<SwiperSlide key={i}>
							<div className="  bg-[url(https://swiperjs.com/demos/images/nature-3.jpg)] bg-cover bg-center bg-no-repeat">
								<div className=" bg-opacity-60 h-5/6">
									<img
										src={rev.avatar}
										alt=""
										className="rounded-full border-2 h-[3px] w-[3px] "
									/>
									<div className="mx-auto  h-5/6 w-full">
										<h3 className="text-xs text-warning">{rev.reviewText}</h3>
										<p className="text-sm text-white">
											Ratting:<span className="text-error">{rev.rating}</span>
										</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}
