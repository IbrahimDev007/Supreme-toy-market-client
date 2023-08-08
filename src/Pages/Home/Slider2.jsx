import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./styles.css";

// import required modules
import { Scrollbar } from "swiper/modules";

export default function App() {
	return (
		<>
			<Swiper
				scrollbar={{
					hide: true,
				}}
				modules={[Scrollbar]}
				className="mySwiper"
			>
				<SwiperSlide>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
					recusandae necessitatibus incidunt sunt aut beatae labore quas eos
					nostrum rem in quos, quis, eveniet culpa possimus nobis assumenda
					minima odit? Hic odit molestias repellendus recusandae eum et vel
					quidem asperiores!
				</SwiperSlide>
				<SwiperSlide>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
					ullam, incidunt quis quia eius eveniet officiis fuga ab! Nihil aut
					ullam quibusdam dicta alias at ut veniam corrupti nemo libero.
				</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
			</Swiper>
		</>
	);
}
