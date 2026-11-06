"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";
import { BodyCopyText } from "@/components/views/BodyCopyText";
import { HeaderText } from "@/components/views/HeaderText";
import AnimatedButton from "@/components/views/AnimatedButton";

const Testimonials = () => {
	const testimonials = [
		{
			id: 1,
			text: "We have been using this EPS System for the last 4 years and found it very safe and easy to use, it saves a lot of time and requires less manpower.",
			author: "Birla Estates",
			logo: "/img/Home/06 Testimonial Logo/01 Home_Test_Birla estates.png"
		},
		{
			id: 2,
			text: "We congratulate team SAFEPRO / Safety Projects Pvt Ltd, for their wonderful product and services and wish them great success for their future.",
			author: "Larsen & Toubro",
			logo: "/img/Home/06 Testimonial Logo/02 Home_Test_L&T.png"
		},
		{
			id: 3,
			text: "It has Lot many advantages like Fall Indicator, Tension Indicator, Energy Absorbing Post Which indicate healthiness of lifeline system and maintain stability of our structure where Safepro system is installed.",
			author: "AMNS",
			logo: "/img/Home/06 Testimonial Logo/03 Home_Test_AMNS.png"
		},
		{
			id: 4,
			text: "We look forward to continue working with you as our preferred safety partner for all safety items and having a long term relationship of trust and mutual benefit.",
			author: "Siemens",
			logo: "/img/Home/06 Testimonial Logo/04 Home_Test_Siemens.png"
		},
		{
			id: 5,
			text: "We have been using this EPS System for the last 4 years and found it very safe and easy to use, it saves a lot of time and requires less manpower.",
			author: "Birla Estates",
			logo: "/img/Home/06 Testimonial Logo/01 Home_Test_Birla estates.png"
		},
		{
			id: 6,
			text: "We congratulate team SAFEPRO / Safety Projects Pvt Ltd, for their wonderful product and services and wish them great success for their future.",
			author: "Larsen & Toubro",
			logo: "/img/Home/06 Testimonial Logo/02 Home_Test_L&T.png"
		},
		{
			id: 7,
			text: "It has Lot many advantages like Fall Indicator, Tension Indicator, Energy Absorbing Post Which indicate healthiness of lifeline system and maintain stability of our structure where Safepro system is installed.",
			author: "AMNS",
			logo: "/img/Home/06 Testimonial Logo/03 Home_Test_AMNS.png"
		},
		{
			id: 8,
			text: "We look forward to continue working with you as our preferred safety partner for all safety items and having a long term relationship of trust and mutual benefit.",
			author: "Siemens",
			logo: "/img/Home/06 Testimonial Logo/04 Home_Test_Siemens.png"
		},

	];

	return (
		<section className="py-10 bg-gray-100 ">
			<div className="container mx-auto px-8 space-y-8">
				<div className="flex items-center justify-center w-full">
					<HeaderText className={"text-center"}>
						SECTION
					</HeaderText>

				</div>
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={20}
					slidesPerView={"auto"}
					// navigation
					pagination={{ clickable: true }}
					breakpoints={{
						640: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
						1280: { slidesPerView: 5 },
					}}
					loop={true}
					className="pb-12 h-full "
				>
					{testimonials.map((testimonial) => (
						<SwiperSlide key={testimonial.id} className="h-full">
							<div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between min-h-[200px] lg:min-h-[250px] gap-2">
								<div className="w-full flex justify-center">
									<div className="text-gray-600 p-6 rounded-full bg-gray-400 w-fit ">
										{/* <Image
											src="https://placehold.co/40x40?text=Video"
											alt="Vision & Mission"
											width={1000}
											height={500}
											loading="lazy"
											className="object-cover w-full h-auto hidden md:block"
										/> */}
									</div>
								</div>
								<div className="text-center ">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel veritatis alias obcaecati accusamus ab minus repellendus.
								</div>
								{/* <div className="text-gray-800 font-semibold justify-between items-center flex items-left gap-4">
								
									<div className="w-1/2 h-16   overflow-hidden ">
										<Image
											src={testimonial.logo}
											alt={testimonial.author}
											width={1000}
											height={1000}
											loading="lazy"
											className="object-contain w-fit h-full"
										/>
									</div>

									<div className="text-right">
										<Link
											href="/testimonials"
											className="text-gray-400 font-medium text-sm hover:text-[#d42225]"
										>
											Read More
										</Link>
									</div>
								</div> */}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="flex items-center justify-center w-full mt-2">
					<Link href={"/testimonials"}>
						<AnimatedButton text={"View More"} />
					</Link>


				</div>
			</div>
		</section>
	);
};

export default Testimonials;

// <SwiperSlide key={testimonial.id} className="h-full ">
// 	<div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
// 		<div className="text-gray-600 mb-4">
// 			<BodyCopyText
// 				className={"line-clamp-4 text-left"}
// 			>
// 				“{testimonial.text}”
// 			</BodyCopyText>
// 		</div>
// 		<div className="text-right">
// 			<Link
// 				href="/testimonials"
// 				className="text-gray-300 font-medium text-sm hover:underline"
// 			>
// 				Read More
// 			</Link>
// 		</div>
// 		<div className="text-gray-800 font-semibold text-left">

// 			<BodyCopyText className={"flex gap-2 items-center"}>
// 				<div className="w-24 h-auto  overflow-hidden  ">
// 					<Image
// 						src={testimonial.logo}
// 						alt={testimonial.author}
// 						width={1000}
// 						height={1000}
// 						className="object-contain w-full h-full"
// 					/>
// 					{/* <img src={logo} className="" /> */}
// 				</div>
// 				{/* <span>
// 					{testimonial.author}
// 				</span> */}
// 			</BodyCopyText>
// 		</div>
// 	</div>
// </SwiperSlide>

