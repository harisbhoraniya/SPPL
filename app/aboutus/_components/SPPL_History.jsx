"use client";

import { BodyCopyText } from "@/components/views/BodyCopyText";
import ContainerSection from "@/components/views/ContainerSection";
import { HeaderText } from "@/components/views/HeaderText";
import Image from "next/image";
import { useState } from "react";

export const SPPL_History = () => {
	return (
		<>
			<div className="bg-gradient-to-b from-bg-[#e5e4e6] to-bg-[#c7c7c9]  h-fit relative w-full min-h-[800px] md:min-h-[700px] lg:min-h-[600px] overflow-hidden hidden lg:block">
				<Image
					src="/img/About Us/04 SPPL History/SPPL History.jpg"
					alt="History"
					loading="lazy"
					width={1000}
					height={1000}
					className="w-full h-full object-fill md:flex hidden"
				/>
				<div className="absolute inset-0 flex items-center justify-center ">
					<div className="container mx-auto px-8 space-y-8  text-center w-[90%] md:w-[75%] lg:w-[55%] text-white ">
						<HeaderText className="text-black">SPPL History</HeaderText>

						<div className="space-y-4 text-sm md:text-base">
							<BodyCopyText>
								Safety Projects – we know what protects you the best. Our history takes its roots in a humble stall of 15 square feet, selling safety wares in the teeming Nagdevi Street of Mumbai. Mr. Veekaas Mehtaa, our founder, at the time 18 years of age, had rented the stall to pay for his college expenses. During those days, business was simple, following a model of purchasing safety gloves and a few other equipment and selling them locally. Sales topped out at an average of 500 to 700 rupees a day.
							</BodyCopyText>

							<BodyCopyText>
								Slowly, Mr. Veekaas Mehtaa ventured into OEM collaborations and started visiting industries to assess the pain points of worksites. Unlike many suppliers who overlooked workplace safety's complexities, Mr. Veekaas differentiated himself by thoroughly understanding the unique pain areas faced by industries and strove to make them safe and secure for people to work. It was this that led Safety Projects to be known across industries as a solution provider.
							</BodyCopyText>

							<BodyCopyText>
								Today, with more than 2,000 satisfied clients and countless safe work environments created, along with a complete in-house development setup, Safety Projects has expanded itself in providing solutions from construction and engineering fall protection, energy isolation technologies, and personal protective equipment to safety trainings and consultancy services.
							</BodyCopyText>

							<BodyCopyText>
								What sets us apart is our approach. We don’t just supply products — we study, evaluate, and implement robust, cost-optimized solutions that help people stay safe. After all, keeping people safe is what we do.
							</BodyCopyText>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col lg:hidden ">
				<div className=" flex items-center justify-center bg-[#e5e4e6] py-8">
					<div className="container mx-auto px-8 space-y-8  text-center w-[90%] md:w-[75%] lg:w-[55%] text-white ">


						<div className="space-y-4 text-sm md:text-base">
							<BodyCopyText>
								Safety Projects – we know what protects you the best. Our history takes its roots in a humble stall of 15 square feet, selling safety wares in the teeming Nagdevi Street of Mumbai. Mr. Veekaas Mehtaa, our founder, at the time 18 years of age, had rented the stall to pay for his college expenses. During those days, business was simple, following a model of purchasing safety gloves and a few other equipment and selling them locally. Sales topped out at an average of 500 to 700 rupees a day.
							</BodyCopyText>

							<BodyCopyText>
								Slowly, Mr. Veekaas Mehtaa ventured into OEM collaborations and started visiting industries to assess the pain points of worksites. Unlike many suppliers who overlooked workplace safety's complexities, Mr. Veekaas differentiated himself by thoroughly understanding the unique pain areas faced by industries and strove to make them safe and secure for people to work. It was this that led Safety Projects to be known across industries as a solution provider.
							</BodyCopyText>

							<BodyCopyText>
								Today, with more than 2,000 satisfied clients and countless safe work environments created, along with a complete in-house development setup, Safety Projects has expanded itself in providing solutions from construction and engineering fall protection, energy isolation technologies, and personal protective equipment to safety trainings and consultancy services.
							</BodyCopyText>

							<BodyCopyText>
								What sets us apart is our approach. We don’t just supply products — we study, evaluate, and implement robust, cost-optimized solutions that help people stay safe. After all, keeping people safe is what we do.
							</BodyCopyText>
						</div>
					</div>
				</div>
				<Image
					loading="lazy"
					width={1000}
					height={1000}
					src="/img/About Us/04 SPPL History/SPPL History_mobile.jpg"
					alt="History"
					className="w-full h-full object-fill flex"
				/>
			</div>
		</>
	);
};


export const SPPL_History1 = () => {
	const [displayText, setDisplayText] = useState(false)
	return (
		<>
			<ContainerSection>
				<div className="space-y-8">
					<HeaderText className="text-center">Our Journey</HeaderText>
					<div className="grid grid-cols-12 gap-2 items-start">
						<div className="col-span-12 md:col-span-6 lg:col-span-5  flex justify-center md:justify-start">
							<Image
								src="/img/About Us/04 SPPL History/SPPL_History.jpg"
								alt="History"
								width={1000}
								height={1000}
								className="w-full md:max-w-[457px] h-auto object-contain rounded-sm"
							/>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-7 ">

							<div className="space-y-4">
								<BodyCopyText>
									Safety Projects – we know what protects you the best. Our history takes its roots in a humble stall of 15 square feet, selling safety wares in the teeming Nagdevi Street of Mumbai. Mr. Veekaas Mehtaa, our founder, at the time 18 years of age, had rented the stall to pay for his college expenses. During those days, business was simple, following a model of purchasing safety gloves and a few other equipment and selling them locally. Sales topped out at an average of 500 to 700 rupees a day.
								</BodyCopyText>

								<BodyCopyText>
									Slowly, Mr. Veekaas Mehtaa ventured into OEM collaborations and started visiting industries to assess the pain points of worksites. Unlike many suppliers who overlooked workplace safety's complexities, Mr. Veekaas differentiated himself by thoroughly understanding the unique pain areas faced by industries and strove to make them safe and secure for people to work. It was this that led Safety Projects to be known across industries as a solution provider.
								</BodyCopyText>
								{
									displayText && (
										<>
											<BodyCopyText>
												Today, with more than 2,000 satisfied clients and countless safe work environments created, along with a complete in-house development setup, Safety Projects has expanded itself in providing solutions from construction and engineering fall protection, energy isolation technologies, and personal protective equipment to safety trainings and consultancy services.
											</BodyCopyText>

											<BodyCopyText>
												What sets us apart is our approach. We don’t just supply products — we study, evaluate, and implement robust, cost-optimized solutions that help people stay safe. After all, keeping people safe is what we do.
											</BodyCopyText>
										</>

									)
								}
								<BodyCopyText onClick={() => {
									setDisplayText((prev) => !prev)
								}} className={"cursor-pointer text-gray-400 hover:text-[#f97316]"}>
									{displayText ? "Hide" : "Read More..."}
								</BodyCopyText>

							</div>
						</div>
					</div>
				</div>
			</ContainerSection>
		</>
	);
};