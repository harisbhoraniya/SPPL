// // "use client";

// // import { BodyCopyText } from "@/components/views/BodyCopyText";
// // import { HeaderText } from "@/components/views/HeaderText";
// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useRef } from "react";

// // import { Pagination, Navigation, Autoplay } from "swiper/modules";

// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { ChevronLeft, ChevronRight } from "lucide-react"; //

// // export const Components1 = ({ Components }) => {

// // 	const prevRef = useRef(null);
// // 	const nextRef = useRef(null);

// // 	return (
// // 		<div className="space-y-8">


// // 			<div className="relative">
// // 				<button
// // 					ref={prevRef}
// // 					className="absolute -left-16 top-[42.5%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
// // 				>
// // 					<ChevronLeft size={24} />
// // 				</button>
// // 				<button
// // 					ref={nextRef}
// // 					className="absolute -right-16 top-[42.5%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
// // 				>
// // 					<ChevronRight size={24} />
// // 				</button>
// // 				<Swiper
// // 					modules={[Autoplay, Navigation]}
// // 					navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
// // 					slidesPerView={2}
// // 					spaceBetween={10}
// // 					loop={true}
// // 					pagination={{ clickable: true }}
// // 					autoplay={{
// // 						delay: 2000,
// // 						pauseOnMouseEnter: true
// // 					}}
// // 					speed={1500}
// // 					breakpoints={{
// // 						640: { slidesPerView: 2 },
// // 						768: { slidesPerView: 4 },
// // 						1024: { slidesPerView: 6 },
// // 					}}
// // 					onBeforeInit={(swiper) => {
// // 						swiper.params.navigation.prevEl = prevRef.current;
// // 						swiper.params.navigation.nextEl = nextRef.current;
// // 						swiper.navigation.init();
// // 						swiper.navigation.update();
// // 					}}
// // 				>
// // 					{Components.map((Component, index) => (
// // 						<SwiperSlide key={index}>
// // 							<div
// // 								className="relative group block overflow-hidden hover:cursor-pointer"
// // 							>
// // 								<div className='h-full w-full overflow-hidden'>
// // 									<img
// // 										src={Component.img}
// // 										alt={Component.name}
// // 										className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
// // 									/>
// // 								</div>
// // 								<div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16 ">
// // 									<BodyCopyText className="text-black font-bold text-[12px] w-full text-center uppercase mb-[5px]">
// // 										{Component.name}
// // 									</BodyCopyText>

// // 								</div>
// // 							</div>
// // 						</SwiperSlide>
// // 					))}
// // 				</Swiper>
// // 			</div>
// // 		</div>
// // 	);
// // };



// // "use client";

// // import { BodyCopyText } from "@/components/views/BodyCopyText";
// // import { HeaderText } from "@/components/views/HeaderText";
// // import React, { useRef } from "react";

// // import { Pagination, Navigation, Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // export const Components1 = ({ Components }) => {
// // 	const prevRef = useRef(null);
// // 	const nextRef = useRef(null);

// // 	const IMAGE_WRAPPER =
// // 		"w-[180px] h-[180px] sm:w-[190px] sm:h-[190px] lg:w-[200px] lg:h-[200px]";

// // 	const isLessImages = Components.length < 4;

// // 	const renderImageBlock = (com) => (
// // 		<div
// // 			className="overflow-hidden"
// // 		>
// // 			<img
// // 				src={com.img}
// // 				alt={com.name}
// // 				className={`${IMAGE_WRAPPER} object-cover transition-transform duration-300 group-hover:scale-105`}
// // 			/>
// // 		</div>
// // 	);

// // 	if (isLessImages) {
// // 		return (
// // 			<div className="space-y-8">

// // 				<div className="flex gap-8 justify-center items-center">
// // 					{compatibility.map((com, index) => (
// // 						<div
// // 							key={index}
// // 							className="flex flex-col items-center gap-3 hover:cursor-pointer group overflow-hidden"
// // 						>
// // 							{renderImageBlock(com)}
// // 							<div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16">
// // 								<BodyCopyText className="text-black font-bold text-[12px] w-full text-center uppercase mb-[5px]">
// // 									{com.name}
// // 								</BodyCopyText>
// // 							</div>
// // 						</div>
// // 					))}
// // 				</div>
// // 			</div>
// // 		);
// // 	}

// // 	return (
// // 		<div className="space-y-8">


// // 			<div className="relative w-full mx-auto">
// // 				<button
// // 					ref={prevRef}
// // 					className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition hidden md:block"
// // 				>
// // 					<ChevronLeft size={24} />
// // 				</button>
// // 				<button
// // 					ref={nextRef}
// // 					className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition hidden md:block"
// // 				>
// // 					<ChevronRight size={24} />
// // 				</button>
// // 				<Swiper
// // 					modules={[Autoplay, Navigation, Pagination]}
// // 					navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
// // 					slidesPerView={2}
// // 					spaceBetween={10}
// // 					loop={true}
// // 					pagination={{ clickable: true }}
// // 					autoplay={{
// // 						delay: 2000,
// // 						pauseOnMouseEnter: true,
// // 					}}
// // 					speed={1200}
// // 					breakpoints={{
// // 						640: { slidesPerView: 2 },
// // 						768: { slidesPerView: 4 },
// // 						1024: { slidesPerView: 6 },
// // 					}}
// // 					onBeforeInit={(swiper) => {
// // 						swiper.params.navigation.prevEl = prevRef.current;
// // 						swiper.params.navigation.nextEl = nextRef.current;
// // 					}}
// // 				>
// // 					{Components.map((com, index) => (
// // 						<SwiperSlide key={index}>
// // 							<div className="flex flex-col items-center gap-3 hover:cursor-pointer py-4  group ">
// // 								{renderImageBlock(com)}
// // 								<div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16">
// // 									<BodyCopyText className="text-black font-bold text-[12px] w-full text-center uppercase mb-[5px]">
// // 										{com.name}
// // 									</BodyCopyText>
// // 								</div>
// // 							</div>
// // 						</SwiperSlide>
// // 					))}
// // 				</Swiper>
// // 			</div>
// // 		</div >
// // 	);
// // };


// "use client";

// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import React, { useRef } from "react";

// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export const Components1 = ({ Components }) => {
// 	const prevRef = useRef(null);
// 	const nextRef = useRef(null);

// 	// ONE fixed size used everywhere (tweak as you like)
// 	const IMAGE_WRAPPER =
// 		"w-[160px] h-[160px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]";

// 	const isLessImages = Components.length <= 4;

// 	// const renderCard = (Component) => (
// 	// 	<div className="flex flex-col items-center gap-2 hover:cursor-pointer group ">
// 	// 		<div
// 	// 		>
// 	// 			<img
// 	// 				src={Component.img}
// 	// 				alt={Component.name}
// 	// 				className={`${IMAGE_WRAPPER} object-cover transition-transform duration-300 group-hover:scale-105`}
// 	// 			/>
// 	// 		</div>
// 	// 		<div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16">
// 	// 			<BodyCopyText className="text-black font-bold text-[12px] w-full text-center uppercase mb-[5px]">
// 	// 				{Component.name}
// 	// 			</BodyCopyText>
// 	// 		</div>
// 	// 	</div>
// 	// );
// 	const renderCard = (Component) => (
// 		<div className={`flex flex-col items-center gap-2 hover:cursor-pointer group w-[180px] md:w-[180px]  lg:w-[200px]  h-full`}>
// 			{/* Image */}
// 			<div className="overflow-hidden">
// 				<img
// 					src={Component.img}
// 					alt={Component.name}
// 					className={`${IMAGE_WRAPPER} object-cover transition-transform duration-300 group-hover:scale-105`}
// 				/>
// 			</div>

// 			{/* <div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16"> */}
// 			<div className="w-full flex flex-col items-center px-2 text-center min-h-[60px]">
// 				<BodyCopyText className="text-black font-bold text-[12px] w-full text-center uppercase mb-[5px]">
// 					{Component.name}
// 				</BodyCopyText>
// 			</div>
// 		</div>
// 	);


// 	// FEW IMAGES → centered, same size as swiper
// 	// if (isLessImages) {
// 	// 	return (
// 	// 		<div className="space-y-8">
// 	// 			<div className="flex justify-center gap-6 w-full mx-auto">
// 	// 				{Components.map((Component, index) => (
// 	// 					<div key={index}>{renderCard(Component)}</div>
// 	// 				))}
// 	// 			</div>
// 	// 		</div>
// 	// 	);
// 	// }


// 	if (isLessImages) {
// 		return (
// 			<div className="space-y-8">
// 				<HeaderText className="text-center mb-6">
// 					Components
// 				</HeaderText>

// 				<div className="flex justify-center gap-6 w-full mx-auto">
// 					{Components.map((Component, index) => (
// 						<div key={index}>{renderCard(Component)}</div>
// 					))}
// 				</div>
// 			</div>
// 		);
// 	}

// 	// ENOUGH IMAGES → Swiper, same card size
// 	return (
// 		<div className="space-y-8">

// 			<HeaderText className="text-center mb-6">
// 				Components
// 			</HeaderText>
// 			<div className="relative">
// 				<button
// 					ref={prevRef}
// 					className="hidden md:block absolute -left-16 top-[42.5%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
// 				>
// 					<ChevronLeft size={24} />
// 				</button>
// 				<button
// 					ref={nextRef}
// 					className="hidden md:block absolute -right-16 top-[42.5%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
// 				>
// 					<ChevronRight size={24} />
// 				</button>

// 				<Swiper
// 					modules={[Autoplay, Navigation]}
// 					navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
// 					slidesPerView={2}
// 					spaceBetween={10}
// 					loop={true}

// 					autoplay={{
// 						delay: 2000,
// 						pauseOnMouseEnter: true,
// 					}}
// 					speed={1500}
// 					breakpoints={{
// 						640: { slidesPerView: 3 },
// 						768: { slidesPerView: 4 },
// 						1024: { slidesPerView: 6 },
// 					}}
// 					onBeforeInit={(swiper) => {
// 						swiper.params.navigation.prevEl = prevRef.current;
// 						swiper.params.navigation.nextEl = nextRef.current;
// 						swiper.navigation.init();
// 						swiper.navigation.update();
// 					}}
// 				>
// 					{Components.map((Component, index) => (
// 						<SwiperSlide key={index}>{renderCard(Component)}</SwiperSlide>
// 					))}
// 				</Swiper>
// 			</div>
// 		</div>
// 	);
// };




// {/* -mt-[100px] */ }
// {/* <HeaderText className={"text-center"}>Components</HeaderText> */ }

// {/* <div className="relative">
// 				<button
// 					ref={prevRef}
// 					className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
// 				>
// 					<ChevronLeft size={24} />
// 				</button>
// 				<button
// 					ref={nextRef}
// 					className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
// 				>
// 					<ChevronRight size={24} />
// 				</button>
// 				<Swiper
// 					modules={[Autoplay, Navigation]}
// 					navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
// 					slidesPerView={1.5}
// 					spaceBetween={30}
// 					loop={true}
// 					pagination={{ clickable: true }}
// 					autoplay={{
// 						delay: 2000,
// 						pauseOnMouseEnter: true
// 					}}
// 					speed={1500}
// 					breakpoints={{
// 						640: { slidesPerView: 1.5 },
// 						768: { slidesPerView: 2.5 },
// 						1024: { slidesPerView: 3.5 },
// 					}}
// 					onBeforeInit={(swiper) => {
// 						swiper.params.navigation.prevEl = prevRef.current;
// 						swiper.params.navigation.nextEl = nextRef.current;
// 						swiper.navigation.init();
// 						swiper.navigation.update();
// 					}}
// 				>
// 					{Components.map((Component, index) => (
// 						<SwiperSlide key={index}>
// 							<div
// 								className="relative group block overflow-hidden rounded-lg"
// 							>
// 								<Image
// 									src={Component.img}
// 									alt={Component.name}
// 									loading="lazy"
// 									width={1000}
// 									height={1000}
// 									className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
// 								/>
// 								<div className="absolute bottom-0 left-0 w-full h-12  bg-gray-700 bg-opacity-90 px-4 text-white flex items-center transition-all duration-300 group-hover:bg-[#d42225] text-left">
// 									<BodyCopyText
// 										className={"text-white font-bold text-[15px]"}
// 									>
// 										{Component.name}
// 									</BodyCopyText>

// 								</div>
// 							</div>
// 						</SwiperSlide>
// 					))}
// 				</Swiper>
// 			</div> */}

// "use client";

// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import React, { useRef } from "react";

// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export const Components1 = ({ Components }) => {
// 	const prevRef = useRef(null);
// 	const nextRef = useRef(null);

// 	const isLessImages = Components.length <= 4;

// 	const renderCard = (Component) => (
// 		<div className="flex flex-col items-center gap-2 hover:cursor-pointer group w-full h-full">
// 			{/* Image */}
// 			<div className="overflow-hidden w-full">
// 				<img
// 					src={Component.img}
// 					alt={Component.name}
// 					className="w-full h-auto aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
// 				/>
// 			</div>

// 			{/* Label */}
// 			<div className="w-full flex flex-col items-center px-1 text-center min-h-[40px]">
// 				<BodyCopyText className="text-black font-bold text-[11px] w-full text-center uppercase mb-[5px]">
// 					{Component.name}
// 				</BodyCopyText>
// 			</div>
// 		</div>
// 	);

// 	// FEW IMAGES (≤4) → responsive grid, no swiper
// 	if (isLessImages) {
// 		return (
// 			<div className="space-y-8">
// 				<HeaderText className="text-center mb-6">Components</HeaderText>
// 				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
// 					{Components.map((Component, index) => (
// 						<div key={index}>{renderCard(Component)}</div>
// 					))}
// 				</div>
// 			</div>
// 		);
// 	}

// 	// MANY IMAGES → Swiper carousel
// 	return (
// 		<div className="space-y-8">
// 			<HeaderText className="text-center mb-6">Components</HeaderText>

// 			<div className="relative">
// 				{/* Prev button — hidden on mobile */}
// 				<button
// 					ref={prevRef}
// 					className="hidden md:flex absolute -left-12 top-[42%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition items-center justify-center"
// 				>
// 					<ChevronLeft size={24} />
// 				</button>

// 				{/* Next button — hidden on mobile */}
// 				<button
// 					ref={nextRef}
// 					className="hidden md:flex absolute -right-12 top-[42%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition items-center justify-center"
// 				>
// 					<ChevronRight size={24} />
// 				</button>

// 				<Swiper
// 					modules={[Autoplay, Navigation]}
// 					navigation={{
// 						prevEl: prevRef.current,
// 						nextEl: nextRef.current,
// 					}}
// 					slidesPerView={2}
// 					spaceBetween={8}
// 					loop={true}
// 					autoplay={{
// 						delay: 2000,
// 						pauseOnMouseEnter: true,
// 					}}
// 					speed={1500}
// 					breakpoints={{
// 						480: { slidesPerView: 2, spaceBetween: 10 },
// 						640: { slidesPerView: 3, spaceBetween: 12 },
// 						768: { slidesPerView: 4, spaceBetween: 14 },
// 						1024: { slidesPerView: 6, spaceBetween: 16 },
// 					}}
// 					onBeforeInit={(swiper) => {
// 						swiper.params.navigation.prevEl = prevRef.current;
// 						swiper.params.navigation.nextEl = nextRef.current;
// 						swiper.navigation.init();
// 						swiper.navigation.update();
// 					}}
// 				>
// 					{Components.map((Component, index) => (
// 						<SwiperSlide key={index}>
// 							{renderCard(Component)}
// 						</SwiperSlide>
// 					))}
// 				</Swiper>
// 			</div>
// 		</div>
// 	);
// };

// "use client";

// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import React, { useRef } from "react";

// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export const Components1 = ({ Components }) => {
// 	const prevRef = useRef(null);
// 	const nextRef = useRef(null);

// 	const isLessImages = Components.length < 4;

// 	const renderCard = (Component) => (
// 		<div className="flex flex-col items-center gap-2 hover:cursor-pointer group w-full h-full">
// 			{/* Image */}
// 			<div className="overflow-hidden w-full">
// 				<img
// 					src={Component.img}
// 					alt={Component.name}
// 					className="w-full h-auto aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
// 				/>
// 			</div>

// 			{/* Label */}
// 			<div className="w-full flex flex-col items-center px-1 text-center min-h-[40px]">
// 				<BodyCopyText className="text-black font-bold text-[11px] w-full text-center uppercase mb-[5px]">
// 					{Component.name}
// 				</BodyCopyText>
// 			</div>
// 		</div>
// 	);

// 	// FEW IMAGES (≤4) → responsive grid, no swiper
// 	if (isLessImages) {
// 		return (
// 			<div className="space-y-8">
// 				<HeaderText className="text-center mb-6">Components</HeaderText>
// 				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
// 					{Components.map((Component, index) => (
// 						<div key={index}>{renderCard(Component)}</div>
// 					))}
// 				</div>
// 			</div>
// 		);
// 	}

// 	// MANY IMAGES → Swiper carousel
// 	return (
// 		<div className="space-y-8">
// 			<HeaderText className="text-center mb-6">Components</HeaderText>

// 			<div className="relative">
// 				{/* Prev button — hidden on mobile */}
// 				<button
// 					ref={prevRef}
// 					className="hidden md:flex absolute -left-12 top-[42%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition items-center justify-center"
// 				>
// 					<ChevronLeft size={24} />
// 				</button>

// 				{/* Next button — hidden on mobile */}
// 				<button
// 					ref={nextRef}
// 					className="hidden md:flex absolute -right-12 top-[42%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition items-center justify-center"
// 				>
// 					<ChevronRight size={24} />
// 				</button>

// 				<Swiper
// 					modules={[Autoplay, Navigation]}
// 					navigation={{
// 						prevEl: prevRef.current,
// 						nextEl: nextRef.current,
// 					}}
// 					slidesPerView={2}
// 					spaceBetween={8}
// 					loop={true}
// 					autoplay={{
// 						delay: 2000,
// 						pauseOnMouseEnter: true,
// 					}}
// 					speed={1500}
// 					breakpoints={{
// 						480: { slidesPerView: 2, spaceBetween: 10 },
// 						640: { slidesPerView: 3, spaceBetween: 12 },
// 						768: { slidesPerView: 4, spaceBetween: 14 },
// 						1024: { slidesPerView: 6, spaceBetween: 16 },
// 					}}
// 					onBeforeInit={(swiper) => {
// 						swiper.params.navigation.prevEl = prevRef.current;
// 						swiper.params.navigation.nextEl = nextRef.current;
// 						swiper.navigation.init();
// 						swiper.navigation.update();
// 					}}
// 				>
// 					{Components.map((Component, index) => (
// 						<SwiperSlide key={index}>
// 							{renderCard(Component)}
// 						</SwiperSlide>
// 					))}
// 				</Swiper>
// 			</div>
// 		</div>
// 	);
// };


"use client";

import { BodyCopyText } from "@/components/views/BodyCopyText";
import { HeaderText } from "@/components/views/HeaderText";
import React, { useRef } from "react";

import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Components1 = ({ Components }) => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const isFewImages = Components.length <= 4;

	const renderCard = (Component) => (
		<div className="flex flex-col items-center gap-2 hover:cursor-pointer group w-full h-full">
			<div className="overflow-hidden w-full">
				<img
					src={Component.img}
					alt={Component.name}
					className="w-full h-auto aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			<div className="w-full flex flex-col items-center px-1 text-center min-h-[40px]">
				<BodyCopyText className="text-black font-bold text-[11px] w-full text-center uppercase mb-[5px]">
					{Component.name}
				</BodyCopyText>
			</div>
		</div>
	);

	return (
		<div className="space-y-8">
			<HeaderText className="text-center mb-6">Components</HeaderText>

			{/* Desktop: centered grid for few images */}
			{isFewImages && (
				<div className="hidden md:flex flex-wrap justify-center gap-6">
					{Components.map((Component, index) => (
						<div key={index} className="w-[180px] lg:w-[200px]">
							{renderCard(Component)}
						</div>
					))}
				</div>
			)}

			{/* Mobile (always) + Desktop when many images: Swiper */}
			<div className={isFewImages ? "md:hidden" : ""}>
				<div className="relative">
					<button
						ref={prevRef}
						className="hidden md:flex absolute -left-12 top-[42%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition items-center justify-center"
					>
						<ChevronLeft size={24} />
					</button>
					<button
						ref={nextRef}
						className="hidden md:flex absolute -right-12 top-[42%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition items-center justify-center"
					>
						<ChevronRight size={24} />
					</button>

					<Swiper
						modules={[Autoplay, Navigation]}
						navigation={{
							prevEl: prevRef.current,
							nextEl: nextRef.current,
						}}
						slidesPerView={2}
						spaceBetween={8}
						loop={true}
						autoplay={{
							delay: 2000,
							pauseOnMouseEnter: true,
						}}
						speed={1500}
						breakpoints={{
							480: { slidesPerView: 2, spaceBetween: 10 },
							640: { slidesPerView: 3, spaceBetween: 12 },
							768: { slidesPerView: 4, spaceBetween: 14 },
							1024: { slidesPerView: 6, spaceBetween: 16 },
						}}
						onBeforeInit={(swiper) => {
							swiper.params.navigation.prevEl = prevRef.current;
							swiper.params.navigation.nextEl = nextRef.current;
							swiper.navigation.init();
							swiper.navigation.update();
						}}
					>
						{Components.map((Component, index) => (
							<SwiperSlide key={index}>
								{renderCard(Component)}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};