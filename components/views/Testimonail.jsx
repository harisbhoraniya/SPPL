"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { HeaderText } from "./HeaderText";
import { BodyCopyText } from "./BodyCopyText";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import AnimatedButton from "./AnimatedButton";

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

	];

	return (
		<section className="py-10 bg-gray-100 " id="testimonials">
			<div className="container mx-auto px-8 space-y-8">
				<div className="flex items-center justify-center w-full">
					<HeaderText className={"text-center"}>
						They Have Trusted Us
					</HeaderText>
				</div>
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={20}
					slidesPerView={1}
					// navigation
					pagination={{ clickable: true }}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
						1280: { slidesPerView: 4 },
					}}
					loop={true}
					className="pb-12 h-full "
				>
					{testimonials.map((testimonial) => (
						<SwiperSlide key={testimonial.id} className="h-full">
							<div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between min-h-[200px] lg:min-h-[250px]">
								<div className="text-gray-600 ">
									<BodyCopyText className="line-clamp-4 text-left">
										“{testimonial.text}”
									</BodyCopyText>

								</div>
								<div className="text-gray-800 font-semibold justify-between items-center flex items-left gap-4">
									{/* Logo */}
									<div className="w-1/2 h-24 md:h-16  overflow-hidden ">
										<Image
											src={testimonial.logo}
											alt={testimonial.author}
											width={1000}
											height={1000}
											loading="lazy"
											className="object-contain w-fit h-full"
										/>
									</div>

									{/* <div className="text-right">
										<Link
											href="/testimonials"
											className="text-gray-400 font-medium text-sm hover:text-[#d42225]"
										>
											Read More
										</Link>
									</div> */}
									{/* Author Name */}
									{/* <span className="text-sm font-medium">{testimonial.author}</span> */}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="flex items-center justify-center w-full mt-2">
					<Link href={"#testimonials"}>
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

