

// "use client";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import Image from "next/image";

// export default function ImageSlider() {
// 	const slides = [
// 		{
// 			img: "/img/Home/01 Slider/01 Slider.jpg",
// 			mobimg:"",
// 			link: "",
// 			alt: "Sample Image 1",
// 			type: "image",
// 			header: "Lifeline",
// 		},
// 		{
// 			img: "/img/Home/01 Slider/02 Slider.jpg",
// 			mobimg:"",
// 			link: "",
// 			alt: "Sample Image 2",
// 			type: "image",
// 			header: "",
// 		},
// 		{
// 			img: "/img/Home/01 Slider/03 Slider.jpg",
// 			mobimg:"",
// 			link: "",
// 			alt: "Sample Image 3",
// 			type: "image",
// 			header: "",
// 		},
// 		{
// 			img: "/img/Home/01 Slider/04 Slider.jpg",
// 			mobimg:"",
// 			link: "",
// 			alt: "Sample Image 4",
// 			type: "image",
// 			header: "",
// 		},
// 		{
// 			img: "/img/Home/01 Slider/05 Slider.jpg",
// 			mobimg:"",
// 			link: "",
// 			alt: "Sample Image 5",
// 			type: "image",
// 			header: "",
// 		},
// 	];

// 	return (
// 		<div className="w-full mx-auto">
// 			<Swiper
// 				modules={[Navigation, Pagination, Autoplay]}
// 				// spaceBetween={20}
// 				slidesPerView={1}
// 				pagination={{ clickable: true }}
// 				loop={true}
// 				autoplay={{
// 					delay: 3000,
// 					//  pauseOnMouseEnter: true
// 				}}
// 				speed={1500}

// 				breakpoints={{
// 					640: { slidesPerView: 1 },
// 					768: { slidesPerView: 1 },
// 					1024: { slidesPerView: 1 },
// 				}}
// 				style={{
// 					"--swiper-pagination-color": "#ffffff",
// 					// "--swiper-pagination-bullet-inactive-color": "#fff	",
// 					// "--swiper-pagination-bullet-inactive-opacity": "1",
// 					"--swiper-pagination-bullet-size": "5px",
// 					// "--swiper-pagination-bullet-horizontal-gap": "6px"
// 				}}
// 				className="mySwiper w-full "
// 			>
// 				{slides.map((slide, index) => (
// 					<SwiperSlide key={index}>
// 						<div className="relative w-full h-auto">
// 							{/* Image */}
// 							{slide.type === "video" ? (
// 								<video
// 									src={slide.img}
// 									alt={slide.alt}
// 									className="w-full h-auto"
// 									autoPlay
// 									loop
// 								/>
// 							) : (
// 								<Image
// 									src={slide.img}
// 									alt={`Slider-${index}`}
// 									width={1000}
// 									height={1000}
// 									loading="eager"
// 									className="w-full h-auto"
// 								/>
// 								// <img
// 								// 	src={slide.img}
// 								// 	alt={slide.alt}
// 								// 	className="w-full h-auto"
// 								// />
// 							)}

// 							{/* Gray Overlay */}
// 							<div className="absolute inset-0  flex items-center justify-center ">
// 							</div>
// 						</div>
// 					</SwiperSlide>
// 				))}
// 			</Swiper>
// 		</div>
// 	);
// }

// "use client";

// import { useState, useEffect } from "react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import Image from "next/image";

// export default function ImageSlider() {
// 	const slides = [
// 		{
// 			img: "/img/Home/01 Slider/01 Slider.jpg",
// 			mobimg: "/img/Home/01 Slider/mob/Slider (1).jpg",
// 			link: "",
// 			alt: "Sample Image 1",
// 			type: "image",
// 			header: "Lifeline",
// 		},
// 		{
// 			img: "/img/Home/01 Slider/02 Slider.jpg",
// 			mobimg: "/img/Home/01 Slider/mob/Slider (2).jpg",
// 			link: "",
// 			alt: "Sample Image 2",
// 			type: "image",
// 			header: "",
// 		},
// 		{
// 			img: "/img/Home/01 Slider/03 Slider.jpg",
// 			mobimg: "/img/Home/01 Slider/mob/Slider (3).jpg",
// 			link: "",
// 			alt: "Sample Image 3",
// 			type: "image",
// 			header: "",
// 		},
// 		{
// 			img: "/img/Home/01 Slider/04 Slider.jpg",
// 			mobimg: "/img/Home/01 Slider/mob/Slider (4).jpg",
// 			link: "",
// 			alt: "Sample Image 4",
// 			type: "image",
// 			header: "",
// 		},
// 		{
// 			img: "/img/Home/01 Slider/05 Slider.jpg",
// 			mobimg: "/img/Home/01 Slider/mob/Slider (5).jpg",
// 			link: "",
// 			alt: "Sample Image 5",
// 			type: "image",
// 			header: "",
// 		},
// 	];

// 	const [isMobile, setIsMobile] = useState(false);

// 	// Check screen width on mount and resize
// 	useEffect(() => {
// 		const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
// 		checkScreenSize();
// 		window.addEventListener("resize", checkScreenSize);
// 		return () => window.removeEventListener("resize", checkScreenSize);
// 	}, []);

// 	return (
// 		<div className="w-full mx-auto">
// 			<Swiper
// 				modules={[Navigation, Pagination, Autoplay]}
// 				slidesPerView={1}
// 				pagination={{ clickable: true }}
// 				loop={true}
// 				autoplay={{ delay: 3000 }}
// 				speed={1500}
// 				breakpoints={{
// 					640: { slidesPerView: 1 },
// 					768: { slidesPerView: 1 },
// 					1024: { slidesPerView: 1 },
// 				}}
// 				style={{
// 					"--swiper-pagination-color": "#ffffff",
// 					"--swiper-pagination-bullet-size": "5px",
// 				}}
// 				className="mySwiper w-full"
// 			>
// 				{slides.map((slide, index) => (
// 					<SwiperSlide key={index}>
// 						<div className="relative w-full h-auto">
// 							{/* Image */}
// 							{slide.type === "video" ? (
// 								<video
// 									src={isMobile ? slide.mobimg : slide.img}
// 									alt={slide.alt}
// 									className="w-full h-auto"
// 									autoPlay
// 									loop
// 								/>
// 							) : (
// 								<Image
// 									src={isMobile ? slide.mobimg || slide.img : slide.img}
// 									alt={`Slider-${index}`}
// 									width={1000}
// 									height={1000}
// 									loading="eager"
// 									className="w-full h-auto"
// 								/>
// 							)}
// 						</div>
// 					</SwiperSlide>
// 				))}
// 			</Swiper>
// 		</div>
// 	);
// }



// "use client";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import Image from "next/image";

// const slides = [
// 	{
// 		img: "/img/Home/01 Slider/01 Slider.jpg",
// 		mobimg: "/img/Home/01 Slider/mob/Slider (1).jpg",
// 		alt: "Sample Image 1",
// 	},
// 	{
// 		img: "/img/Home/01 Slider/02 Slider.jpg",
// 		mobimg: "/img/Home/01 Slider/mob/Slider (2).jpg",
// 		alt: "Sample Image 2",
// 	},
// 	{
// 		img: "/img/Home/01 Slider/03 Slider.jpg",
// 		mobimg: "/img/Home/01 Slider/mob/Slider (3).jpg",
// 		alt: "Sample Image 3",
// 	},
// 	{
// 		img: "/img/Home/01 Slider/04 Slider.jpg",
// 		mobimg: "/img/Home/01 Slider/mob/Slider (4).jpg",
// 		alt: "Sample Image 4",
// 	},
// 	{
// 		img: "/img/Home/01 Slider/05 Slider.jpg",
// 		mobimg: "/img/Home/01 Slider/mob/Slider (5).jpg",
// 		alt: "Sample Image 5",
// 	},
// ];

// export default function ImageSlider() {
// 	return (
// 		<div className="w-full mx-auto">
// 			{/* Desktop Slider */}
// 			<div className="hidden md:block">
// 				<Swiper
// 					modules={[Navigation, Pagination, Autoplay]}
// 					slidesPerView={1}
// 					pagination={{ clickable: true }}
// 					loop={true}
// 					autoplay={{ delay: 3000 }}
// 					speed={1500}
// 					className="mySwiper w-full"
// 				>
// 					{slides.map((slide, index) => (
// 						<SwiperSlide key={index}>
// 							<Image
// 								src={slide.img}
// 								alt={slide.alt}
// 								width={1200}
// 								height={600}
// 								loading="eager"
// 								className="w-full h-auto swiper-zoom-img"
// 							/>
// 						</SwiperSlide>
// 					))}
// 				</Swiper>
// 			</div>

// 			{/* Mobile Slider */}
// 			<div className="md:hidden">
// 				<Swiper
// 					modules={[Navigation, Pagination, Autoplay]}
// 					slidesPerView={1}
// 					pagination={{ clickable: true }}
// 					loop={true}
// 					autoplay={{ delay: 3000 }}
// 					speed={1500}
// 					className="mySwiper w-full"
// 				>
// 					{slides.map((slide, index) => (
// 						<SwiperSlide key={index}>
// 							<Image
// 								src={slide.mobimg}
// 								alt={slide.alt}
// 								width={600}
// 								height={400}
// 								loading="eager"
// 								className="w-full h-auto"
// 							/>
// 						</SwiperSlide>
// 					))}
// 				</Swiper>
// 			</div>
// 		</div>
// 	);
// }




"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
	{
		img: "/img/Home/01 Slider/01 Slider.jpg",
		mobimg: "/img/Home/01 Slider/mob/Slider_1.jpg",
		alt: "Sample Image 1",
	},
	{
		img: "/img/Home/01 Slider/02 Slider.jpg",
		mobimg: "/img/Home/01 Slider/mob/Slider (2).jpg",
		alt: "Sample Image 2",
	},
	{
		img: "/img/Home/01 Slider/03 Slider.jpg",
		mobimg: "/img/Home/01 Slider/mob/Slider (3).jpg",
		alt: "Sample Image 3",
	},
	{
		img: "/img/Home/01 Slider/04 Slider.jpg",
		mobimg: "/img/Home/01 Slider/mob/Slider (4).jpg",
		alt: "Sample Image 4",
	},
	{
		img: "/img/Home/01 Slider/05 Slider.jpg",
		mobimg: "/img/Home/01 Slider/mob/Slider (5).jpg",
		alt: "Sample Image 5",
	},
];

export default function ImageSlider() {
	return (
		<div className="w-full mx-auto">
			{/* Desktop Slider */}
			<div className="hidden md:block">
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					slidesPerView={1}
					pagination={{ clickable: true }}
					loop={true}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					speed={1000}
					className="mySwiper w-full h-[500px]"
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index} className="overflow-hidden">
							<div className="relative w-full h-full">
								<Image
									src={slide.img}
									alt={slide.alt}
									fill
									sizes="(max-width: 768px) 100vw, 1200px"
									className="object-cover swiper-zoom-img"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Mobile Slider */}
			<div className="md:hidden">
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					slidesPerView={1}
					pagination={{ clickable: true }}
					loop={true}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					speed={1000}
					className="mySwiper w-full h-[400px]"
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index} className="overflow-hidden">
							<div className="relative w-full h-full">
								<Image
									src={slide.mobimg}
									alt={slide.alt}
									fill
									sizes="100vw"
									className="object-cover"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
