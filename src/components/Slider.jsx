import React, { useRef, useState } from "react";
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import the required modules
// import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
// Install modules
// SwiperCore.use([Autoplay]);

// import required modules
import { Pagination } from "swiper/modules";

export default function Slider() {
	return (
		<>
			<Swiper
				slidesPerView={2}
				centeredSlides={true}
				spaceBetween={30}
				grabCursor={true}
				pagination={{
					clickable: true,
				}}
				// loop={true} // Enable looping for infinite sliding
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="/images/img33.png" className="h-[500px]" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/img33.png" className="h-[500px]" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/img33.png" className="h-[500px]" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/img33.png" className="h-[500px]" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/img33.png" className="h-[500px]" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/img33.png" className="h-[500px]" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/img33.png" className="h-[500px]" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/img33.png" className="h-[500px]" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/images/img33.png" className="h-[500px]" />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
