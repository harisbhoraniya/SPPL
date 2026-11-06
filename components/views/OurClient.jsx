
"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { HeaderText } from "./HeaderText";
import Image from "next/image";

const OurClients = () => {
	const Clients = [
		{
			image: "/img/Home/07 Client logo/01 Home_Adani.png",
		},
		{
			image: "/img/Home/07 Client logo/02 Home_Aditya birla group.png",
		},
		{
			image: "/img/Home/07 Client logo/03 Home_AMNS.png",
		},
		{
			image: "/img/Home/07 Client logo/04 Home_BASF.png",
		},
		{
			image: "/img/Home/07 Client logo/05 Home_Bharat Petroleum.png",
		},
		{
			image: "/img/Home/07 Client logo/06 Home_CEAT.png",
		},
		{
			image: "/img/Home/07 Client logo/07 Home_Dow.png",
		},
		{
			image: "/img/Home/07 Client logo/08 Home_Godrej.png",
		},
		{
			image: "/img/Home/07 Client logo/09 Home_Hindustan petroleum.png",
		},
		{
			image: "/img/Home/07 Client logo/10 Home_Hindustan unilever.png",
		},
		{
			image: "/img/Home/07 Client logo/11 Home_JSW.png",
		},
		{
			image: "/img/Home/07 Client logo/12 Home_Kalpatru.png",
		},
		{
			image: "/img/Home/07 Client logo/13 Home_L&T.png",
		},
		{
			image: "/img/Home/07 Client logo/14 Home_Lodha.png",
		},
		{
			image: "/img/Home/07 Client logo/15 Home_Mahindra.png",
		},
		{
			image: "/img/Home/07 Client logo/16 Home_Mercedes Benz.png",
		},
		{
			image: "/img/Home/07 Client logo/17 Home_Oberoi Realty.png",
		},
		{
			image: "/img/Home/07 Client logo/18 Home_Piramal.png",
		},
		{
			image: "/img/Home/07 Client logo/19 Home_Reliance Industries Limited.png",
		},
		{
			image: "/img/Home/07 Client logo/20 Home_Tata.png",
		},
	];
	return (
		<div className="space-y-4">
			<HeaderText className={"text-center"}>Our Clients</HeaderText>
			{/* Swiper Container */}
			<Swiper
				modules={[Autoplay]}
				// navigation
				pagination={{ clickable: true }}
				spaceBetween={20} // Space between slides
				slidesPerView={8} // Display 8 images at a time
				loop={true} // Enable looping

				breakpoints={{
					320: { slidesPerView: 2 }, // For small screens (e.g., mobile)
					640: { slidesPerView: 3 }, // For medium screens (e.g., tablets)
					768: { slidesPerView: 4 }, // For large screens
					1024: { slidesPerView: 6 }, // For very large screens
					1280: { slidesPerView: 8 }, // For ultra-wide screens
				}}
				autoplay={{ delay: 300 }}
			>
				{/* Loop through Clients to create each slide */}
				{Clients.map((client, index) => (
					<SwiperSlide key={index}>
						<div className="rounded-md h-36 flex items-center justify-center">
							<Image
								src={client.image}
								alt={`Client Logo ${index + 1}`}
								width={1000}
								height={1000}
								loading="lazy"
								className="object-contain h-full w-full"
							/>
						</div>
						{/* <div className="h-36 w-full flex items-center justify-start">
							<Image
								src={client.image}
								alt={`Client Logo ${index + 1}`}
								width={1000}
								height={1000}
								className="h-full w-full object-contain"
							/>
						</div> */}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default OurClients;
