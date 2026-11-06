"use client";

import { BodyCopyText } from "@/components/views/BodyCopyText";
import { HeaderText } from "@/components/views/HeaderText";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 

export const Projects = () => {

	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const swiperRef = useRef(null);

	const handleSlide = (direction) => {
		if (swiperRef.current) {
			swiperRef.current.params.speed = 500; // Faster speed on manual click
			direction === "prev"
				? swiperRef.current.slidePrev()
				: swiperRef.current.slideNext();
			swiperRef.current.params.speed = 1500; // Reset to default speed for autoplay
		}
	};

	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.params.navigation.prevEl = prevRef.current;
			swiperRef.current.params.navigation.nextEl = nextRef.current;
			swiperRef.current.navigation.init();
			swiperRef.current.navigation.update();
		}
	}, []);

	const projects = [
		{
			project: "Minerva",
			Product: "Safety Net Fan System",
			developer: "Lokhandwala Construction",
			location: "Mahalakshmi, Mumbai",
			href: "/products/Construction_Fall_Protection/Safety_Net_Fan_System/Project/Minerva",
			img: "/img/About Us/06 Projects/01 SNF/SNF_Project_T.jpg",
		},
		{
			project: "Vanya",
			Product: "Vertical Net Fan System",
			developer: "Birla Estates",
			location: "Kalyan, Mumbai",
			href: "/products/Construction_Fall_Protection/Vertical_Net_Fan_System/Project/Vanya",
			img: "/img/About Us/06 Projects/02 VNF/VNF_Project_T.jpg",
		},
		{
			project: "Northern Hills",
			Product: "Safety Screen Self Climb",
			developer: "N Rose Developers",
			location: "Dahisar, Mumbai",
			href: "/products/Construction_Fall_Protection/Safety_Screen_Self-Climb/Project/Northern_Hills",
			img: "/img/About Us/06 Projects/03 Safety Screen Self Climb/Safety Screen Self Climb_Project_T.jpg",
		},
		{
			project: "Crescent Bay",
			Product: "Vertical Enveloping",
			developer: "L&T Realty",
			location: "Parel, Mumbai",
			href: "/products/Construction_Fall_Protection/Vertical_Enveloping/Project/Crescent_Bay",
			img: "/img/About Us/06 Projects/04 Vertical Enveloping/Vertical Enveloping_Project_T.jpg",
		},
		{
			project: "Indian Oil Corporation",
			Product: "Overhead Lifeline",
			developer: "Paradip",
			location: "Bhiwandi",
			href: "",
			img: "/img/About Us/06 Projects/05 Overhead Lifeline/Overhead Lifeline_Project_T.jpg",
		},
		{
			project: "Luminous Power Technologies",
			Product: "Vertical Lifeline",
			developer: "Hosur",
			location: "Bangalore",
			href: "",
			img: "/img/About Us/06 Projects/06 Vertical Lifeline/Vertical Lifeline_Project_T.jpg",
		},
		{
			project: "Avient Materials",
			Product: "Roof Lifeline",
			developer: "Bhiwandi",
			location: "Taloja",
			href: "",
			img: "/img/About Us/06 Projects/07 Roof Lifeline/Roof Lifeline_Project_T.jpg",
		},
	];

	return (
		<div className="space-y-8">
			<HeaderText className={"text-center"}>Projects</HeaderText>
			<div className="relative">
				{/* Navigation Buttons */}

				<button
					ref={prevRef}
					className="absolute hidden  md:block left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
				>
					<ChevronLeft size={30} />
				</button>

				<button
					ref={nextRef}
					className="absolute hidden  md:block right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
				>
					<ChevronRight size={30} />
				</button>
				<Swiper
					ref={swiperRef}
					modules={[Autoplay, Navigation, Pagination]}
					navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
					slidesPerView={1.5}
					spaceBetween={30}
					loop={true}
					pagination={{ clickable: true }}
					autoplay={{
						delay: 1200,
						pauseOnMouseEnter: true
					}}
					speed={1000}
					breakpoints={{
						640: { slidesPerView: 1.5 },
						768: { slidesPerView: 2.5 },
						1024: { slidesPerView: 3.5 },
					}}
					// onBeforeInit={(swiper) => {
					// 	swiper.params.navigation.prevEl = prevRef.current;
					// 	swiper.params.navigation.nextEl = nextRef.current;
					// 	swiper.navigation.init();
					// 	swiper.navigation.update();
					// }}
					onBeforeInit={(swiper) => {
						swiperRef.current = swiper;
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
				>
					{projects.map((project, index) => (
						<SwiperSlide key={index}>
							<Link
								href={project.href}
								className="relative group block overflow-hidden rounded-lg"
							>
								<Image
									src={project.img}
									alt={project.project}
									loading="lazy"
									width={1000}
									height={1000}
									className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
								/>

								<div className="absolute bottom-0 left-0 w-full h-16 md:h-20 flex flex-col justify-center bg-[#20335C] bg-opacity-90 px-4 text-white py-4 transition-all duration-300 group-hover:bg-[#f97316] text-left">
									<BodyCopyText
										className={"text-white font-bold text-[15px]"}
									>
										{project.project}
									</BodyCopyText>
									<BodyCopyText
										className={"text-white text-[13px]"}
									>
										{project.developer}
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