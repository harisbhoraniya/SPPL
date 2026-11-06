"use client";

import OurClients from "@/components/views/OurClient";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { CompanyValues } from "./_components/Company-values";
import { SPPL_History, SPPL_History1 } from "./_components/SPPL_History";
import Testimonials from "@/components/views/Testimonail";
import { HeaderText } from "@/components/views/HeaderText";
import { BodyCopyText } from "@/components/views/BodyCopyText";
import { Projects } from "./_components/Projects";
import AboutUsSlider from "./_components/AboutUsSlider";
import BannerImage from "@/components/views/BannerImage";
import ContainerSection from "@/components/views/ContainerSection";
import MainPage from "@/components/views/MainPage";

export default function AboutUs() {
	const [displayText, setDisplayText] = useState(false)
	return (
		<MainPage className={"mb-0"}>
			<BannerImage image={"/img/About Us/01 About Us Banner/About Us_Banner.jpg"} text={"ABOUT US"} mobileImage={`/img/About Us/01 About Us Banner/About Us_Banner_mob.jpg`} />
			<ContainerSection>
				<section className=" bg-white">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="flex justify-center">
							<div className="w-full   overflow-hidden  " >
								<Image
									src="/img/About Us/02 About Us/About Us.jpg"
									alt="About Us"
									// layout="responsive"
									width={400}
									height={300}
									loading="eager"
									className="object-cover rounded-lg w-full "
								/>
							</div>
						</div>
						<div className="space-y-4">

							<BodyCopyText>
								Most success stories have humble beginnings. The story of Safety Projects is one of them. It’s one of perseverance, adapting to change, and being committed to society. Safety Projects started its operations in the year 2000. Starting off as a trader of safety products, today we are known across industries as a ‘solution provider’ in the field of Occupational Safety and Health.
							</BodyCopyText>
							<BodyCopyText>
								Be it our PPE, Engineering Fall Protection Systems, Energy Isolation Devices, or Disaster Management Equipment, providing a solution for our customers starts with a thorough analysis. We understand their workflow, requirements, areas of application, and current challenges. Next, we deep dive into providing creative solutions for bottlenecks faced by organisations. You may call it our working style, but for us at Safety Projects, it’s a way of life.
							</BodyCopyText>

							<BodyCopyText>
								It's this penchant to provide solutions coupled with our commitment to serving clients that has put us on the path of growth. Today, individual customers are long-time associates, clients are lifelong partners not because of what we provide but how and why we deliver our promise.
								Over the years, we have handled a variety of projects and provided creative solutions for a range of industries like Construction and Infrastructure, Oil and Gas, Telecommunication, Pharmaceuticals, Power Generation, Defence, and many more.
							</BodyCopyText>
							{
								displayText && (
									<>
										<BodyCopyText>
											The world is changing rapidly. Yesterday’s solutions are obsolete today. At Safety Projects, we understand that safety is paramount to the industries we cater to, so we always strive to provide solutions that are innovative, customized, and technologically advanced. Each new day comes to us with a challenge, and we win it over with our creative solutions.
										</BodyCopyText>
									</>

								)
							}

							<BodyCopyText onClick={() => {
								setDisplayText((prev) => !prev)
							}} className={"cursor-pointer text-gray-400 hover:text-[#d42225]"}>
								{displayText ? "Hide" : "Read More..."}
							</BodyCopyText>

						</div>
					</div>
				</section>
			</ContainerSection>

			{/* <ContainerSection>
				<div className="grid grid-cols-12 gap-4 items-start">
					<div className="col-span-12 md:col-span-6 lg:col-span-5  flex justify-center md:justify-start">
						<Image
							src="/img/About Us/02 About Us/About Us.jpg"
							alt="About Us"
							width={1000}
							height={1000}
							className="w-full md:max-w-[457px] h-auto object-contain rounded-sm"
						/>
					</div>
					<div className="col-span-12 md:col-span-6 lg:col-span-7 lg:px-[93.5px]">
						<div className="space-y-4">
							<BodyCopyText>
								Most success stories have humble beginnings. The story of Safety Projects is one of them. It’s one of perseverance, adapting to change, and being committed to society. Safety Projects started its operations in the year 2000. Starting off as a trader of safety products, today we are known across industries as a ‘solution provider’ in the field of Occupational Safety and Health.
							</BodyCopyText>
							<BodyCopyText>
								Be it our PPE, Engineering Fall Protection Systems, Energy Isolation Devices, or Disaster Management Equipment, providing a solution for our customers starts with a thorough analysis. We understand their workflow, requirements, areas of application, and current challenges. Next, we deep dive into providing creative solutions for bottlenecks faced by organisations. You may call it our working style, but for us at Safety Projects, it’s a way of life.
							</BodyCopyText>


							{
								displayText && (
									<>
										<BodyCopyText>
											It's this penchant to provide solutions coupled with our commitment to serving clients that has put us on the path of growth. Today, individual customers are long-time associates, clients are lifelong partners not because of what we provide but how and why we deliver our promise.
											Over the years, we have handled a variety of projects and provided creative solutions for a range of industries like Construction and Infrastructure, Oil and Gas, Telecommunication, Pharmaceuticals, Power Generation, Defence, and many more.
										</BodyCopyText>
										<BodyCopyText>
											The world is changing rapidly. Yesterday’s solutions are obsolete today. At Safety Projects, we understand that safety is paramount to the industries we cater to, so we always strive to provide solutions that are innovative, customized, and technologically advanced. Each new day comes to us with a challenge, and we win it over with our creative solutions.
										</BodyCopyText>
									</>

								)
							}
							<BodyCopyText onClick={() => {
								setDisplayText((prev) => !prev)
							}} className={"cursor-pointer text-gray-400 hover:text-[#d42225]"}>
								{displayText ? "Hide" : "Read More..."}
							</BodyCopyText>

						</div>
					</div>
				</div>
			</ContainerSection> */}
			{/* <div className="relative w-full overflow-hidden rounded-md">
				
				<Image
					src={`/img/About Us/03 Vision_and_mission/Vision_and_mission.jpg`}
					alt="Vision & Mission"
					width={1000}
					height={500}
					loading="lazy"
					className="object-cover w-full h-auto"
				/>
				<div className="relative lg:absolute inset-0 flex flex-row items-end lg:items-start justify-end lg:justify-end p-4 lg:p-8 overflow-hidden h-full ">
					<div className="w-full h-auto sm:h-full lg:w-72 lg:h-36 flex flex-col items-center justify-start p-4 space-y-2 rounded-xl">
						<HeaderText className="text-black">Vision</HeaderText>
						<BodyCopyText className="text-black text-center">
							“Create safe workplaces around the world.”
						</BodyCopyText>
					</div>
					<div className="w-full h-auto sm:h-full lg:w-72 lg:h-36 flex flex-col items-center justify-start p-4 mt-2 sm:mt-0 lg:mt-0 space-y-2 rounded-xl">
						<HeaderText className="text-black">Mission</HeaderText>
						<BodyCopyText className="text-black text-center">
							“Our mission is to equip workplaces with revolutionary solutions, shaping the world one safe endeavour at a time.”
						</BodyCopyText>
					</div>
				</div>
			</div> */}
			<div className="relative w-full overflow-hidden">
				{/* <Image
					src={`/img/About Us/03 Vision_and_mission/Vision_and_mission.jpg`}
					alt="Vision & Mission"
					width={1000}
					height={500}
					loading="lazy"
					className="object-cover w-full h-auto"
				/> */}
				<Image
					src="/img/About Us/03 Vision_and_mission/mob/Vision & Mission.jpg"
					alt="Vision & Mission"
					width={1000}
					height={500}
					loading="lazy"
					className="object-cover w-full h-auto md:hidden"
				/>

				{/* Image for Large Devices (without text, text is separate) */}
				<Image
					src="/img/About Us/03 Vision_and_mission/Vision & Mission PC.jpg"
					alt="Vision & Mission"
					width={1000}
					height={500}
					loading="lazy"
					className="object-cover w-full h-auto hidden md:block"
				/>

				{/* Text content displayed only on large screens */}
				{/* <div className="relative lg:absolute inset-0 flex flex-row items-end lg:items-start justify-end lg:justify-end p-4 lg:p-8 overflow-hidden h-full "> */}
				{/* <div className="hidden md:flex absolute inset-0 flex-row items-start justify-end p-8 h-full">
					<div className="w-full h-auto sm:h-full lg:w-60 lg:h-36 flex flex-col items-center justify-start p-4 space-y-2 rounded-xl">
						<HeaderText className="text-black">Vision</HeaderText>
						<BodyCopyText className="text-black text-center">
							“Create safe workplaces around the world.”
						</BodyCopyText>
					</div>
					<div className="w-full h-auto sm:h-full lg:w-72 lg:h-36 flex flex-col items-center justify-start p-4 mt-2 sm:mt-0 lg:mt-0 space-y-2 rounded-xl">
						<HeaderText className="text-black">Mission</HeaderText>
						<BodyCopyText className="text-black text-center">
							“Our mission is to equip workplaces with revolutionary solutions, shaping the world one safe endeavour at a time.”
						</BodyCopyText>
					</div>
				</div> */}
			</div>
			{/* <div className="-mt-8 md:-mt-12 ">
				<SPPL_History />
			</div> */}
			<div className="">
				<ContainerSection>
					<SPPL_History1 />
				</ContainerSection>
			</div>
			<ContainerSection>
				<CompanyValues />
			</ContainerSection>
			<Testimonials />
			<ContainerSection>
				<Projects />
			</ContainerSection>

			<div className="py-10 bg-gray-100">
				<ContainerSection>
					<OurClients />
				</ContainerSection>
			</div>
		</MainPage>
	);
}


// {/* <div className="relative h-0 pb-[56.25%] w-full overflow-hidden">
// 	<Image
// 		src="/img/about/f228.jpg" // Replace with your image path
// 		alt="About Us Banner"
// 		layout="fill"
// 		objectFit="cover"
// 		priority // Optional: Prioritize loading this image
// 	/>
// 	{/* width={400}
// 					height={300}
// 					className="object-cover h-full w-full"
// 				/> */}
// 	<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-end pb-8 uppercase flex-col space-y-4 ">
// 		{/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-end pb-8 uppercase flex-col space-y-4 "> */}
// 		{/* <nav className="">
// 						<ul className="flex justify-center text-white font-semibold space-x-2 text-sm">
// 							<li>
// 								<Link href="/">
// 									<p className="hover:text-[#d42225]">Home</p>
// 								</Link>
// 							</li>
// 							<span>|</span>
// 							<li>ABOUT US</li>
// 						</ul>
// 					</nav> */}
// 		<h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide drop-shadow-lg">
// 			ABOUT US
// 		</h1>
// 	</div>
// </div> */}