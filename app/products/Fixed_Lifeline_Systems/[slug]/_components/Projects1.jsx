"use client";

import { BodyCopyText } from "@/components/views/BodyCopyText";
import { HeaderText } from "@/components/views/HeaderText";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 

export const Projects1 = ({ projects }) => {

	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<div className="space-y-8">
			<HeaderText className={"text-center"}>Projects</HeaderText>
			<div className="relative">
				{/* Navigation Buttons */}
				<button
					ref={prevRef}
					className=" hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
				>
					<ChevronLeft size={24} />
				</button>
				<button
					ref={nextRef}
					className=" hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
				>
					<ChevronRight size={24} />
				</button>
				<Swiper
					modules={[Autoplay, Navigation]}
					navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
					slidesPerView={1.5}
					spaceBetween={30}
					loop={true}
					pagination={{ clickable: true }}
					autoplay={{
						delay: 2000,
						pauseOnMouseEnter: true
					}}
					speed={1500}
					breakpoints={{
						640: { slidesPerView: 1.5 },
						768: { slidesPerView: 2.5 },
						1024: { slidesPerView: 3.5 },
					}}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
				>
					{projects?.map((project, index) => (
						<SwiperSlide key={index}>
							<Link
								href={project.link}
								className="relative group block overflow-hidden rounded-lg"
							>
								<Image
									src={project.image}
									alt={project.title}
									loading="lazy"
									width={1000}
									height={1000}
									className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
								/>

								<div className="absolute bottom-0 left-0 w-full h-16 bg-gray-700 bg-opacity-90 px-4 text-white py-4 transition-all duration-300 group-hover:bg-[#d42225] text-left">
									<BodyCopyText className="text-white font-bold text-[15px]">
										{project.title}
									</BodyCopyText>
									<BodyCopyText className="text-white text-[13px]">
										{project.Plant}
									</BodyCopyText>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};
