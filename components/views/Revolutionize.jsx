// import React from 'react'

// const data = [
//   {
//     header: "PPE",
//     list: [
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//     ]
//   },
//   {
//     header: "PPE",
//     list: [
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//     ]
//   },
//   {
//     header: "PPE",
//     list: [
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//     ]
//   },
//   {
//     header: "PPE",
//     list: [
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//       {
//         text: "Head Protection",
//         link: "/"
//       },
//     ]
//   },
// ]

// export default function Revolutionize() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-400">
//       <div className='space-y-4'>
//         <div className='text-4xl font-semibold'>
//           Revolutionize Your Industry's Safety Standards with Our Cutting-Edge Product!
//         </div>
//         <div>
//           At SPPL, we understand the importance of workplace safety. That's why we've developed safety product,s that is specifically designed to meet the unique needs of your industry. With our innovative technology and durable materials, our product is sure to revolutionize your safety standards and provide unparalleled protection for your employees.
//         </div>
//       </div>
//       <div>
//         {/* display card */}
//       </div>

//     </div>
//   )
// }

"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const data = [
	{
		header: "PPE",
		list: [
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
		],
	},
	{
		header: "PPE",
		list: [
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
		],
	},
	{
		header: "PPE",
		list: [
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
		],
	},
	{
		header: "PPE",
		list: [
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
			{
				text: "Head Protection",
				link: "/",
			},
		],
	},
];

export default function Revolutionize() {
	return (
		<section className="bg-gray-100 py-12">
			<div className="container mx-auto px-8 ">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="space-y-4">
						<h2 className="text-3xl sm:text-[32px] font-semibold ">
							Revolutionize Your Industry's Safety Standards with
							Our Cutting-Edge Product!
						</h2>
						<p className="text-gray-700 leading-relaxed">
							At SPPL, we understand the importance of workplace
							safety. That's why we've developed safety products
							that are specifically designed to meet the unique
							needs of your industry. With our innovative
							technology and durable materials, our product is
							sure to revolutionize your safety standards and
							provide unparalleled protection for your employees.
						</p>
					</div>
					<div className="mt-6">
						{" "}
						{/* Added margin top */}
						<Swiper
							modules={[Navigation]}
							loop
							spaceBetween={30}
							slidesPerView={1}
							// navigation
							breakpoints={{
								640: {
									slidesPerView: 1,
								},
								1024: {
									slidesPerView: 2,
								},
							}}
						>
							{data.map((item, index) => (
								<SwiperSlide key={index}>
									<div className="bg-white rounded-lg shadow-md p-6 h-full">
										<h3 className="text-xl font-semibold text-gray-800 mb-4">
											{item.header}
										</h3>
										<ul className="space-y-2">
											{item.list.map(
												(listItem, index) => (
													<li key={index}>
														<Link
															href={listItem.link}
														>
															{listItem.text}
														</Link>
													</li>
												)
											)}
										</ul>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
}
