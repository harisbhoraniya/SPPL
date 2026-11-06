"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function AboutUsSlider() {
	const slides = [
		{
			img: "/img/about/slider/slider1.jpg",
			link: "",
			alt: "Sample Image 1",
			type: "image",
			header: "Lifeline",
		},
		{
			img: "/img/about/slider/slider2.jpg",
			link: "",
			alt: "Sample Image 2",
			type: "image",
			header: "",
		},
		{
			img: "/img/about/slider/slider3.jpg",
			link: "",
			alt: "Sample Image 3",
			type: "image",
			header: "",
		},
		{
			img: "/img/about/slider/slider4.jpg",
			link: "",
			alt: "Sample Image 4",
			type: "image",
			header: "",
		},
		// {
		// 	img: "/img/slider/slider5.jpg",
		// 	link: "",
		// 	alt: "Sample Image 5",
		// 	type: "image",
		// 	header: "",
		// },
		// {
		// 	img: "/img/slider/slider6.jpg",
		// 	link: "",
		// 	alt: "Sample Image 6",
		// 	type: "image",
		// 	header: "",
		// },
	];

	return (
		<div className="w-full mx-auto">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				// spaceBetween={20}
				slidesPerView={1}
				pagination={{ clickable: true }}
				loop={true}
				autoplay={{ delay: 3000 }}
				speed={1500}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 1 },
					1024: { slidesPerView: 1 },
				}}
				className="mySwiper w-full "
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="relative w-full h-auto">
							{/* Image */}
							{slide.type === "video" ? (
								<video
									src={slide.img}
									alt={slide.alt}
									className="w-full h-auto"
									autoPlay
									loop
								/>
							) : (
								<img
									src={slide.img}
									alt={slide.alt}
									className="w-full h-auto"
								/>
							)}

							{/* Gray Overlay */}
							<div className="absolute inset-0  flex items-center justify-center ">
								{/* <div className="text-white text-5xl text-left w-full container mx-auto px-8">
									{slide.header}
								</div> */}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
