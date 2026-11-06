"use client"

import AnimatedButton from "@/components/views/AnimatedButton";
import BannerImage from "@/components/views/BannerImage";
import { BodyCopyText } from "@/components/views/BodyCopyText";
import ContainerSection from "@/components/views/ContainerSection";
import { HeaderText } from "@/components/views/HeaderText";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import MainPage from "@/components/views/MainPage";

const protections = [
	{
		title: "Safety Net Fan System",
		link: "/products/Construction_Fall_Protection/Safety_Net_Fan_System",
		image: "/img/Products/Construction Fall Protections/Construction Fall Protections/Safety Net Fan System Thumbnail/CFP_Safety Net Fan System Thumbnail.jpg",
	},
	{
		title: "Vertical Net Fan System",
		link: "/products/Construction_Fall_Protection/Vertical_Net_Fan_System",
		image: "/img/Products/Construction Fall Protections/Construction Fall Protections/Vertical Net Fan System Thumbnai/CFP_Vertical Net Fan System Thumbnai.jpg",
	},
	{
		title: "Safety Screen Self-Climb",
		link: "/products/Construction_Fall_Protection/Safety_Screen_Self-Climb",
		image: "/img/Products/Construction Fall Protections/Construction Fall Protections/Safety Screen Self-Climb Thumbnail/CFP_Safety Screen Self-Climb Thumbnail.jpg",
	},
	{
		title: "Vertical Enveloping",
		link: "/products/Construction_Fall_Protection/Vertical_Enveloping",
		image: "/img/Products/Construction Fall Protections/Construction Fall Protections/Vertical Enveloping Thumbnail/CFP_Vertical Enveloping Thumbnail.jpg",
	},
	{
		title: "Edge Protection",
		link: "/products/Construction_Fall_Protection/Edge_Protection",
		image: "/img/Products/Construction Fall Protections/Construction Fall Protections/Edge Protection Thumbnail/CFP_Edge Protection Thumbnail.jpg",
	},
];

const importanceItems = [
	{
		title: "Worker Safety",
		content:
			"Falls are the leading cause of fatalities in the construction industry. Implementing robust fall protection systems can significantly reduce the risk of severe injuries or deaths, ensuring a safer work environment for construction workers.",
	},
	{
		title: "Regulatory Compliance",
		content:
			"Adhering to OSHA standards and regulations is crucial for construction companies. Compliance not only avoids hefty fines but also promotes a culture of safety, protecting the workforce and enhancing the company's reputation.",
	},
	{
		title: "Equipment Reliability",
		content:
			"Using high-quality fall protection equipment, such as harnesses and safety nets, is essential. Regular inspections and maintenance ensure that these tools remain effective, providing reliable protection against falls and other hazards.",
	},
	{
		title: "Training & Awareness",
		content:
			"Continuous training programs are vital in educating workers about the proper use of fall protection equipment. Raising awareness about the risks and reinforcing safety protocols help prevent complacency and ensure a proactive approach to on-site safety.",
	},
];

const FallProtection = () => {
	return (
		<MainPage>
			<BannerImage
				image="/img/Products/Construction Fall Protections/Construction Fall Protections/Construction Fall Protection_Header_Banner.jpg"
				mobileImage={`/img/Products/Construction Fall Protections/Construction Fall Protections/mob/Construction Fall Protection_Header_Banner.jpg`}
				text="Construction Fall Protection"
				subheading="Engineering Fall Protection"
			/>

			<ContainerSection>
				{/* <BodyCopyText className="space-y-4 w-full lg:w-4/5 lg:mx-auto text-center"> */}
				<BodyCopyText className="text-gray-700 text-[14px] normal-case space-y-4 w-full lg:w-3/5 lg:mx-auto text-center">

					Construction fall protection refers to the safety measures and systems implemented to prevent debris, objects, and workers from falling while working at heights on construction sites. These measures include guardrails, safety nets, personal fall arrest systems, and proper training. The objective is to minimize the risk of injuries or fatalities caused by falls, which are one of the leading causes of accidents in the construction industry.
				</BodyCopyText>
			</ContainerSection>


			<section className="space-y-8 py-10 bg-gray-100">
				<ContainerSection>
					<div className="space-y-8">
						<HeaderText className=" text-center ">
							Importance Of Construction Fall Protection
						</HeaderText>
						{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{importanceItems.map((item, index) => (
							<div
								key={index}
								className=" text-white backdrop-blur-lg bg-white p-6 rounded-lg space-y-4 border shadow-md "
							>
								<h3 className="text-xl font-semibold text-black">{item.title}</h3>
								<BodyCopyText>{item.content}</BodyCopyText>
							</div>
						))}
					</div> */}
						<div className="block md:hidden">
							<Swiper
								slidesPerView={1}
								spaceBetween={20}
								loop={true}
								pagination={{ clickable: true }}
								modules={[Pagination]}
								autoplay={{
									delay: 2000,
									pauseOnMouseEnter: true,
								}}
								speed={1500}
								className="h-full"
							>
								{importanceItems.map((item, index) => (
									<SwiperSlide key={index} className="flex justify-center">
										<div className="backdrop-blur-lg bg-white p-6 rounded-lg border shadow-md w-full flex flex-col  sm:h-[150px] h-[220px]">
											<h3 className="text-xl font-semibold text-black">{item.title}</h3>
											<BodyCopyText className="mt-2 flex-1">{item.content}</BodyCopyText>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4">
							{importanceItems.map((item, index) => (
								<div
									key={index}
									className="backdrop-blur-lg bg-white p-6 rounded-lg border shadow-md flex flex-col h-full"
								>
									<h3 className="text-xl font-semibold text-black">{item.title}</h3>
									<BodyCopyText className="mt-2 flex-1">{item.content}</BodyCopyText>
								</div>
							))}
						</div>
					</div>
				</ContainerSection>
			</section>
			<ContainerSection>
				<section className="space-y-8 mb-10">
					<HeaderText className="text-center  font-bold">
						Protection Systems
					</HeaderText>

					<div className="block md:hidden">
						<Swiper
							slidesPerView={1.5}
							spaceBetween={20}
							loop={true}
							pagination={{ clickable: true }}
							modules={[Pagination]}
							autoplay={{
								delay: 2000,
								pauseOnMouseEnter: true,
							}}
							speed={1500}
							className="h-full"
						// breakpoints={{
						// 	540: { slidesPerView: 2.5 },
						// }}
						>
							{protections.map((item, index) => (
								<SwiperSlide key={index} className="flex justify-center">
									<Link
										href={item.link}
										className="relative group block overflow-hidden rounded-lg"
									>
										<img
											src={item.image}
											alt={item.title}
											className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
										/>
										<div className="absolute bottom-0 left-0 w-full flex items-center bg-[#20335C] bg-opacity-90 px-4 text-white py-4 transition-all duration-300 group-hover:bg-[#f97316] text-left h-16">
											<BodyCopyText className="text-white font-bold text-[15px]">
												{item.title}
											</BodyCopyText>
										</div>
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className="hidden md:flex flex-wrap justify-between gap-4 font-medium">
						{protections.map((item, index) => (
							<Link
								key={index}
								href={item.link}
								className="relative group block overflow-hidden  rounded-lg shadow-md items-center w-[calc(20%-0.8rem)] min-w-[150px] transition-transform duration-300 hover:shadow-lg"
							>
								<Image
									src={item.image}
									alt={item.title}
									loading="lazy"
									width={1000}
									height={1000}
									className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute bottom-0 left-0 w-full bg-[#20335C] bg-opacity-90 px-4 text-white py-4 transition-all duration-300 group-hover:bg-[#f97316] text-left h-16 flex items-center">
									<BodyCopyText className="text-white font-bold">{item.title}</BodyCopyText>
								</div>
							</Link>
						))}
					</div>



				</section>
			</ContainerSection>
		</MainPage>
	);
};

export default FallProtection;