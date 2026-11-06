import Image from "next/image";
import Link from "next/link";
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaYoutube,
	FaInstagram,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import ContainerSection from "./ContainerSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Footer = () => {
	return (
		<footer className=" bg-gray-100 text-gray-700 py-10 relative overflow-hidden border-t border-gray-200">
			<ContainerSection>


				{/* Animated Background  bg-gray-900*/}
				{/* <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent opacity-100 animate-pulse"></div> */}

				<div className="relative z-10">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
						{/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8"> */}
						{/* Logo and Company Name */}
						<div className="space-y-4">
							<Image
								src="/img/logo sppl.png"
								alt="SPPL Logo"
								width={120}
								height={40}
								loading="eager"
								className="transform transition duration-300"
							/>
							<div className="mt-6">
								{/* <p className="text-sm mb-2">Social Network:</p> */}
								<div className="flex space-x-2">
									{[
										{ icon: FaLinkedinIn, href: "https://in.linkedin.com/company/safety-projects-private-limited" },
										{ icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61561340366356" },
										{ icon: AiFillInstagram, href: "https://www.instagram.com/safetyprojects_sppl/" },
										{ icon: BsTwitterX, href: "https://x.com/Safety_Projects" },
										{ icon: FaYoutube, href: "https://www.youtube.com/@SafetyProjects" },
									].map(({ icon: Icon, href }, index) => (
										<Link
											href={href}
											key={index}
											className="p-2 rounded-full bg-[#20335C] text-white hover:bg-[#f97316] transition"
											aria-label={`Social Link ${index}`}
											target="_blank"
										>
											<Icon />
										</Link>
									))}
								</div>
							</div>
						</div>

						{/* Main Links */}
						<div className="ml-0 lg:ml-4">
							<h3 className="text-[16px] font-semibold mb-4 text-gray-900">
								Main Links
							</h3>
							<ul className="space-y-2">
								{[
									{ label: "Home", href: "/" },
									{ label: "About Us", href: "/aboutus" },
									// { label: "Innovolab", href: "/Innovolabs" },
									{ label: "Contact Us", href: "/contact" },
								].map((item, index) => (
									<li key={index}>
										<Link
											href={`${item.href}`}
											className="hover:text-[#f97316]  transform transition duration-300 text-[16px] block"
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Construction Fall Protection */}
						<div>

							<div className="md:hidden">
								<Accordion type="single" collapsible>
									<AccordionItem value="products">
										<AccordionTrigger className="text-[16px] font-semibold text-gray-900">
											Construction Fall Protection
										</AccordionTrigger>
										<AccordionContent className="border-b-0">
											<ul className="space-y-2">
												{[
													{ label: "Safety Net Fan System", href: "/products/Construction_Fall_Protection/Safety_Net_Fan_System" },
													{ label: "Vertical Net Fan System", href: "/products/Construction_Fall_Protection/Vertical_Net_Fan_System" },
													{ label: "Safety Screen Self-Climb", href: "/products/Construction_Fall_Protection/Safety_Screen_Self-Climb" },
													{ label: "Vertical Enveloping", href: "/products/Construction_Fall_Protection/Vertical_Enveloping" },
													{ label: "Edge Protection", href: "/products/Construction_Fall_Protection/Edge_Protection" },
												].map((item, index) => (
													<li key={index}>
														<Link
															href={item.href}
															className="hover:text-[#f97316]  transform transition duration-300 text-[16px] block"
														>
															{item.label}
														</Link>
													</li>
												))}
											</ul>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>

							{/* Desktop View - Normal List */}
							<div className="hidden md:block">
								<h3 className="text-[16px] font-semibold mb-4 text-gray-900">Construction Fall Protection</h3>
								<ul className="space-y-2">
									{[
										{ label: "Safety Net Fan System", href: "/products/Construction_Fall_Protection/Safety_Net_Fan_System" },
										{ label: "Vertical Net Fan System", href: "/products/Construction_Fall_Protection/Vertical_Net_Fan_System" },
										{ label: "Safety Screen Self-Climb", href: "/products/Construction_Fall_Protection/Safety_Screen_Self-Climb" },
										{ label: "Vertical Enveloping", href: "/products/Construction_Fall_Protection/Vertical_Enveloping" },
										{ label: "Edge Protection", href: "/products/Construction_Fall_Protection/Edge_Protection" },
									].map((item, index) => (
										<li key={index}>
											<Link
												href={item.href}
												className="hover:text-[#f97316]  transform transition duration-300 text-[16px]"
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Fixed Lifeline Systems */}
						<div>
							<div className="md:hidden">
								<Accordion type="single" collapsible>
									<AccordionItem value="products">
										<AccordionTrigger className="text-[16px] font-semibold text-gray-900">
											Fixed Lifeline Systems
										</AccordionTrigger>
										<AccordionContent className="border-b-0">
											<ul className="space-y-2">
												{[
													{ label: "Roof Lifeline", href: "/products/Fixed_Lifeline_Systems/Roof_Lifeline" },
													{ label: "Vertical Lifeline", href: "/products/Fixed_Lifeline_Systems/Vertical_Lifeline" },
													{ label: "Overhead Lifeline", href: "/products/Fixed_Lifeline_Systems/Overhead_Lifeline" },
													{ label: "Vertical Access System", href: "/products/Fixed_Lifeline_Systems/Vertical_Access_System" },
													{ label: "Anchor Points", href: "/products/Fixed_Lifeline_Systems/Anchor_Points" },
													{ label: "Skylight Protector", href: "/products/Fixed_Lifeline_Systems/Skylight_Protector" },
													{ label: "Edge Protection", href: "/products/Fixed_Lifeline_Systems/Edge_Protection" },
													{ label: "Walkway", href: "/products/Fixed_Lifeline_Systems/Walkway" },
												].map((item, index) => (
													<li key={index}>
														<Link
															href={item.href}
															className="hover:text-[#f97316]  transform transition duration-300 text-[16px] block"
														>
															{item.label}
														</Link>
													</li>
												))}
											</ul>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
							<div className="hidden md:block">
								<h3 className="text-[16px] font-semibold mb-4 text-gray-900">Fixed Lifeline Systems</h3>
								<ul className="space-y-2">
									{[
										{ label: "Roof Lifeline", href: "/products/Fixed_Lifeline_Systems/Roof_Lifeline" },
										{ label: "Vertical Lifeline", href: "/products/Fixed_Lifeline_Systems/Vertical_Lifeline" },
										{ label: "Overhead Lifeline", href: "/products/Fixed_Lifeline_Systems/Overhead_Lifeline" },
										{ label: "Vertical Access System", href: "/products/Fixed_Lifeline_Systems/Vertical_Access_System" },
										{ label: "Anchor Points", href: "/products/Fixed_Lifeline_Systems/Anchor_Points" },
										{ label: "Skylight Protector", href: "/products/Fixed_Lifeline_Systems/Skylight_Protector" },
										{ label: "Edge Protection", href: "/products/Fixed_Lifeline_Systems/Edge_Protection" },
										{ label: "Walkway", href: "/products/Fixed_Lifeline_Systems/Walkway" },
									].map((item, index) => (
										<li key={index}>
											<Link
												href={item.href}
												className="hover:text-[#f97316]  transform transition duration-300 text-[16px]"
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div>
							<div className="md:hidden">
								<Accordion type="single" collapsible>
									<AccordionItem value="products">
										<AccordionTrigger className="text-[16px] font-semibold text-gray-900">
											Pages
										</AccordionTrigger>
										<AccordionContent className="border-b-0">
											<ul className="space-y-2">
												{[
													{ label: "Privacy Notice", href: "/Privacy_Notice" },
													{ label: "Terms Of Use", href: "/Termsofuse" },
												].map((item, index) => (
													<li key={index}>
														<Link
															href={item.href}
															className="hover:text-[#f97316]  transform transition duration-300 text-[16px] block"
														>
															{item.label}
														</Link>
													</li>
												))}
											</ul>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
							<div className="hidden md:block">
								<h3 className="text-[16px] font-semibold mb-4 text-gray-900">Pages</h3>
								<ul className="space-y-2">
									{[
										{ label: "Privacy Notice", href: "/Privacy_Notice" },
										{ label: "Terms Of Use", href: "/Termsofuse" },
									].map((item, index) => (
										<li key={index}>
											<Link
												href={item.href}
												className="hover:text-[#f97316]  transform transition duration-300 text-[16px]"
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>

						</div>
					</div>

					{/* Footer Bottom */}
					<div className="mt-8 pt-4 text-center border-t border-gray-200">
						<p className="text-sm text-gray-600">
							© {new Date().getFullYear()} Copyright SPPL. All Rights Reserved.
							{/* Design &
						Develop by -{" "}
						<Link
								href="https://www.r5advertising.com/"
							className="text-red-600 hover:text-white transition"
							target="_blank"
							rel="noopener noreferrer"
						>
							R5 DESIGN HUB
						</Link> */}
						</p>
					</div>
				</div>
			</ContainerSection>
		</footer>
	);
};

export default Footer;