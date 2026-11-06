"use client"

import Image from "next/image";
import Link from "next/link";
import { HeaderText } from "./HeaderText";
import { BodyCopyText } from "./BodyCopyText";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SafeProComponent = () => {

	const safeProItems = [
		{
			label: "Construction Fall Protection",
			img: "/img/Home/04 Fall Protection Solutions/Engineering Fall Protection.jpg",
			link: "/products/Construction_Fall_Protection",
			tabs: [
				{
					label: "Safety Net Fan System",
					href: "/products/Construction_Fall_Protection/Safety_Net_Fan_System",
				},
				{
					label: "Vertical Net Fan System",
					href: "/products/Construction_Fall_Protection/Vertical_Net_Fan_System",
				},
				{
					label: "Safety Screen Self-Climb",
					href: "/products/Construction_Fall_Protection/Safety_Screen_Self-Climb",
				},
				{
					label: "Vertical Enveloping",
					href: "/products/Construction_Fall_Protection/Vertical_Enveloping",
				},
				{
					label: "Edge Protection",
					href: "/products/Construction_Fall_Protection/Edge_Protection",
				},
			],
		},
		{
			label: "Fixed Lifeline Systems",
			img: "/img/Home/04 Fall Protection Solutions/Safe Pro Fixed Life Line System.jpg",
			link: "/products/Fixed_Lifeline_Systems",
			tabs: [
				{
					label: "Roof Lifeline",
					href: "/products/Fixed_Lifeline_Systems/Roof_Lifeline",
				},
				{
					label: "Vertical Lifeline",
					href: "/products/Fixed_Lifeline_Systems/Vertical_Lifeline",
				},
				{
					label: "Overhead Lifeline",
					href: "/products/Fixed_Lifeline_Systems/Overhead_Lifeline",
				},
				{
					label: "Vertical Access System",
					href: "/products/Fixed_Lifeline_Systems/Vertical_Access_System",
				},
				{
					label: "Anchor Points",
					href: "/products/Fixed_Lifeline_Systems/Anchor_Points",
				},
				{
					label: "Skylight Protector",
					href: "/products/Fixed_Lifeline_Systems/Skylight_Protector",
				},
				{
					label: "Edge Protection",
					href: "/products/Fixed_Lifeline_Systems/Edge_Protection",
				},
				{
					label: "Walkway",
					href: "/products/Fixed_Lifeline_Systems/Walkway",
				},
			],
		},
	];

	return (
		<section className=" bg-white">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
				{/* Text Section */}
				<div className="space-y-4 col-span-1 md:col-span-2 xl:col-span-1 h-full md:mt-2 flex flex-col ">
					<HeaderText className={"text-left"}>
						Make Falls A Thing Of The Past With Our Engineering Fall Protection Solutions
					</HeaderText>
					<BodyCopyText className=" text-gray-700">
						Falls are deadly and pose a lethal risk to industries. Our engineering fall protection solutions are meticulously designed, simulated, tested against extreme stresses, and then implemented to absolutely eradicate falls. If it’s SAFEPRO, say goodbye to falls.
					</BodyCopyText>
				</div>

				{/* Card Section */}
				<div className="hidden md:grid md:grid-cols-2 md:col-span-2 xl:col-span-2 gap-8">
					{safeProItems.map((item, index) => (
						<div
							key={index}
							className="flex flex-col h-full bg-gray-50 rounded-lg shadow-md "
						>
							{/* Image Section */}
							<div className="relative w-full h-auto bg-gray-200 rounded-md overflow-hidden">
								<Image
									src={item.img}
									alt={item.label}
									width={1000}
									height={1000}
									loading="lazy"
									className="object-cover w-full h-full"
								/>
							</div>

							{/* Text Section */}
							<div className="mt-4  flex-1 p-6">
								<Link
									href={item.link}
									className=" pt-[2px]  text-2xl font-semibold text-[#20335C] hover:text-[#f97316] transition-colors"
								>
									{item.label}
								</Link>
								<ul className="mt-2 space-y-2 text-left">
									{item.tabs.map((tab, tabIndex) => (
										<li key={tabIndex}>
											<BodyCopyText>
												<Link
													href={tab.href}
													className={
														tabIndex % 2 === 0
															? " p-[2px]  rounded block text-gray-700 hover:text-[#f97316] transition-colors"
															: "p-[2px]  rounded block text-gray-700 hover:text-[#f97316] transition-colors"
													}
												>
													{tab.label}
												</Link>
											</BodyCopyText>
										</li>
									))}
								</ul>
							</div>

							{/* Tabs Section */}
						</div>
					))}
				</div>
				<div className="block md:hidden">
					<Swiper
						slidesPerView={1}
						spaceBetween={20}
						pagination={{ clickable: true }}
						modules={[Pagination]}
						className="h-full"
					>
						{safeProItems.map((item, index) => (
							<SwiperSlide key={index} className="flex justify-center">
								<div className="flex flex-col w-full bg-gray-50 rounded-lg shadow-md h-full">
									{/* Image Section */}
									<div className="relative w-full  bg-gray-200 rounded-t-md overflow-hidden">
										<Image src={item.img} alt={item.label} width={1000} height={1000} className="object-cover w-full h-full" />
									</div>
									{/* Text Section */}
									<div className="mt-4 flex-1 p-6 flex flex-col">
										<Link className="text-2xl font-semibold text-[#20335C] hover:text-[#f97316] transition-colors" href={item.link}>{item.label}</Link>
										<ul className="mt-2 space-y-1 text-gray-700 flex-1">
											{item.tabs.map((tab, i) => (
												<li key={i}>
													<Link href={tab.href} className="text-gray-700 hover:text-[#f97316] transition-colors">{tab.label}</Link>
												</li>
											))}
										</ul>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section >
	);
};

export default SafeProComponent;