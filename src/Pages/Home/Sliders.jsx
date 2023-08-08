import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";

const Slders = () => {
	return (
		<section className="my-10">
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper mb-24  "
			>
				<SwiperSlide>
					<img src={slide1} alt="" />
					<h3 className="text-4xl uppercase text-center -mt-16 text-white">
						Fun puzzel
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide2} alt="" />
					<h3 className="text-4xl uppercase text-center -mt-16 text-white">
						Action
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide3} alt="" />
					<h3 className="text-4xl uppercase text-center -mt-16 text-white">
						Entertain
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide4} alt="" />
					<h3 className="text-4xl uppercase text-center -mt-16 text-white">
						Mysterious
					</h3>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Slders;
