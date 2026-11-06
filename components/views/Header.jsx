// @ts-nocheck
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { BodyCopyText } from "./BodyCopyText";
import AnimatedButton from "./AnimatedButton";
import ContainerSection from "./ContainerSection";
import ContactFormModal from "./ContactFormModal";

// Detect if device is touch-based (iPad, mobile, etc.)
const isTouchDevice = () => {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
};

const Navbar = () => {
	const [openDropdown, setOpenDropdown] = useState(null);
	const [openSubDropdown, setOpenSubDropdown] = useState(null);
	const [open, setOpen] = useState(false); // mobile sheet
	const [isTouch, setIsTouch] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		setIsTouch(isTouchDevice());
	}, []);

	// Close dropdowns when clicking outside (for touch devices)
	useEffect(() => {
		if (!isTouch) return;
		const handleClickOutside = (e) => {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setOpenDropdown(null);
				setOpenSubDropdown(null);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
		};
	}, [isTouch]);

	// --- Desktop hover handlers (only for non-touch) ---
	const handleMouseEnter = (dropdownName) => {
		if (isTouch) return;
		setOpenDropdown(dropdownName);
	};

	const handleMouseLeave = () => {
		if (isTouch) return;
		setOpenDropdown(null);
		setOpenSubDropdown(null);
	};

	const handleSubMouseEnter = (subDropdownName) => {
		if (isTouch) return;
		setOpenSubDropdown(subDropdownName);
	};

	const handleSubMouseLeave = () => {
		if (isTouch) return;
		setOpenSubDropdown(null);
	};

	// --- Touch / click handlers ---
	const handleItemClick = (e, item) => {
		if (!isTouch) return;
		if (item.children) {
			e.preventDefault();
			setOpenDropdown((prev) => (prev === item.label ? null : item.label));
			setOpenSubDropdown(null);
		}
	};

	const handleSubItemClick = (e, child) => {
		if (!isTouch) return;
		if (child.children) {
			e.preventDefault();
			setOpenSubDropdown((prev) => (prev === child.label ? null : child.label));
		}
	};

	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "About Us", href: "/aboutus" },
		{
			label: "Products",
			children: [
				{
					label: "Construction Fall Protection",
					href: "/products/Construction_Fall_Protection",
					children: [
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
					href: "/products/Fixed_Lifeline_Systems",
					children: [
						{ label: "Roof Lifeline", href: "/products/Fixed_Lifeline_Systems/Roof_Lifeline" },
						{ label: "Vertical Lifeline", href: "/products/Fixed_Lifeline_Systems/Vertical_Lifeline" },
						{ label: "Overhead Lifeline", href: "/products/Fixed_Lifeline_Systems/Overhead_Lifeline" },
						{ label: "Vertical Access System", href: "/products/Fixed_Lifeline_Systems/Vertical_Access_System" },
						{ label: "Anchor Points", href: "/products/Fixed_Lifeline_Systems/Anchor_Points" },
						{ label: "Skylight Protector", href: "/products/Fixed_Lifeline_Systems/Skylight_Protector" },
						{ label: "Edge Protection", href: "/products/Fixed_Lifeline_Systems/Edge_Protection" },
						{ label: "Walkway", href: "/products/Fixed_Lifeline_Systems/Walkway" },
					],
				},
			],
		},
		{
			label: "Engineering Fall Protection",
			href: "#",
			children: [
				{
					label: "Construction Fall Protection",
					href: "/products/Construction_Fall_Protection",
					children: [
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
					href: "/products/Fixed_Lifeline_Systems",
					children: [
						{ label: "Roof Lifeline", href: "/products/Fixed_Lifeline_Systems/Roof_Lifeline" },
						{ label: "Vertical Lifeline", href: "/products/Fixed_Lifeline_Systems/Vertical_Lifeline" },
						{ label: "Overhead Lifeline", href: "/products/Fixed_Lifeline_Systems/Overhead_Lifeline" },
						{ label: "Vertical Access System", href: "/products/Fixed_Lifeline_Systems/Vertical_Access_System" },
						{ label: "Anchor Points", href: "/products/Fixed_Lifeline_Systems/Anchor_Points" },
						{ label: "Skylight Protector", href: "/products/Fixed_Lifeline_Systems/Skylight_Protector" },
						{ label: "Edge Protection", href: "/products/Fixed_Lifeline_Systems/Edge_Protection" },
						{ label: "Walkway", href: "/products/Fixed_Lifeline_Systems/Walkway" },
					],
				},
			],
		},
		{ label: "Contact Us", href: "/contact" },
	];

	return (
		<nav className="bg-gray-100 text-gray-800 sticky top-0 z-50 shadow-sm" ref={navRef}>
			<ContainerSection>
				<div className="flex justify-around items-center h-full">
					<div className="flex justify-between items-center w-full">
						{/* Logo */}
						<Link href="/" className="py-4 lg:py-0">
							<Image
								src="/img/logo sppl.png"
								loading="eager"
								width={1000}
								height={1000}
								className="h-12 w-auto"
								alt="Logo"
							/>
						</Link>

						{/* Desktop + iPad Landscape Menu (lg = 1024px+) */}
						<ul className="hidden lg:flex space-x-8 h-full">
							{navItems.map((item) => (
								<li
									key={item.label}
									onMouseEnter={() => handleMouseEnter(item.label)}
									onMouseLeave={handleMouseLeave}
									className="relative group h-full py-10"
								>
									<button
										onClick={(e) => handleItemClick(e, item)}
										className="focus:outline-none bg-transparent border-0 p-0 m-0 cursor-pointer"
										aria-expanded={openDropdown === item.label}
										aria-haspopup={!!item.children}
									>
										<Link
											href={item.href || "#"}
											className="hover:text-[#f97316] text-[14px] text-wrap flex items-center gap-1"
											onClick={(e) => {
												if (isTouch && item.children) e.preventDefault();
											}}
										>
											{item.label}
											{item.children && (
												<ChevronDown
													size={14}
													className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
												/>
											)}
										</Link>
									</button>

									{/* Dropdown — hover (desktop) or click (touch/iPad) */}
									{item.children && (
										<ul
											className={`absolute top-full border-t-4 border-[#f97316] left-0 bg-white text-gray-800 shadow-lg min-w-[220px] z-10 ${isTouch
												? openDropdown === item.label
													? "block"
													: "hidden"
												: "hidden group-hover:block"
												}`}
										>
											{item.children.map((child) => (
												<li
													key={child.label}
													className="relative group/sub"
													onMouseEnter={() => handleSubMouseEnter(child.label)}
													onMouseLeave={handleSubMouseLeave}
												>
													<div className="flex items-center justify-between">
														<Link
															href={child.href || "#"}
															className="block py-[6px] px-4 hover:text-[#f97316] text-[14px] flex-1"
															onClick={(e) => {
																if (isTouch && child.children) {
																	e.preventDefault();
																	handleSubItemClick(e, child);
																}
															}}
														>
															{child.label}
														</Link>
														{child.children && (
															<button
																className="pr-3 text-gray-500 hover:text-[#f97316] touch-action-manipulation"
																onClick={(e) => {
																	if (isTouch) {
																		e.stopPropagation();
																		handleSubItemClick(e, child);
																	}
																}}
																aria-label={`Expand ${child.label}`}
															>
																<ChevronRight
																	size={14}
																	className={`transition-transform duration-200 ${isTouch && openSubDropdown === child.label
																		? "rotate-90"
																		: ""
																		}`}
																/>
															</button>
														)}
													</div>

													{/* Sub-dropdown — hover (desktop) or click (touch) */}
													{child.children && (
														<ul
															className={`z-20 bg-white border-t-4 border-[#f97316] text-gray-800 shadow-lg min-w-[220px] ${isTouch
																? openSubDropdown === child.label
																	? "block w-full ml-2 border-t-0 border-l-4"
																	: "hidden"
																: "hidden group-hover/sub:block absolute -top-1 left-full"
																}`}
														>
															{child.children.map((grandchild) => (
																<li key={grandchild.label}>
																	<Link
																		href={grandchild.href || "#"}
																		className="block py-[6px] px-4 hover:text-[#f97316] text-[14px]"
																	>
																		{grandchild.label}
																	</Link>
																</li>
															))}
														</ul>
													)}
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>

						<div className="hidden lg:flex">
							<Link href="/OEM_Collaborators">
								<AnimatedButton text={"OEM & Collaboration"} />
							</Link>
						</div>
					</div>

					{/* Mobile / iPad Portrait Menu (below lg) */}
					<div className="lg:hidden">
						<Sheet open={open} onOpenChange={setOpen}>
							<SheetTrigger asChild>
								{/* Use a plain button — SheetTrigger with asChild avoids the nested button issue on iOS/iPadOS */}
								<button
									type="button"
									aria-label="Open menu"
									className="text-gray-800 p-2 focus:outline-none"
									onClick={() => setOpen(true)}
								>
									<Menu size={24} />
								</button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="p-4 bg-white text-black h-screen overflow-auto space-y-4 w-[300px] sm:w-[350px]"
							>
								<Link href="/" onClick={() => setOpen(false)}>
									<Image
										src="/img/sppl_logo_orange.png"
										loading="eager"
										width={500}
										height={325}
										className="h-12 w-auto"
										alt="SPPL Logo"
									/>
								</Link>
								<ul className="space-y-4">
									{navItems.map((item) => (
										<li key={item.label}>
											{!item.children ? (
												<Link
													href={item.href || "#"}
													className="text-lg font-medium hover:text-[#f97316] block"
													onClick={() => setOpen(false)}
												>
													{item.label}
												</Link>
											) : (
												<Accordion type="single" collapsible>
													<AccordionItem value={item.label} className="border-b border-gray-200">
														<AccordionTrigger className="text-lg font-medium hover:text-[#f97316] py-2">
															{/* Separate the link and the chevron so tapping the label navigates, tapping chevron toggles */}
															<Link
																href={item.href || "#"}
																className="hover:text-[#f97316] flex-1 text-left"
																onClick={(e) => {
																	if (item.href === "#") e.preventDefault();
																	else setOpen(false);
																}}
															>
																{item.label}
															</Link>
														</AccordionTrigger>
														{item.children && (
															<AccordionContent>
																<ul className="ml-4 space-y-2">
																	{item.children.map((child) => (
																		<li key={child.label}>
																			{child.children ? (
																				<Accordion type="single" collapsible>
																					<AccordionItem value={child.label} className="border-b border-gray-100">
																						<AccordionTrigger className="hover:text-[#f97316] py-1 text-sm font-medium">
																							<Link
																								href={child.href || "#"}
																								className="hover:text-[#f97316] flex-1 text-left"
																								onClick={(e) => {
																									if (child.href === "#") e.preventDefault();
																									else setOpen(false);
																								}}
																							>
																								{child.label}
																							</Link>
																						</AccordionTrigger>
																						<AccordionContent>
																							<ul className="ml-4 space-y-2">
																								{child.children.map((grandchild) => (
																									<li key={grandchild.label}>
																										<Link
																											href={grandchild.href || "#"}
																											className="block hover:text-[#f97316] text-sm py-1"
																											onClick={() => setOpen(false)}
																										>
																											{grandchild.label}
																										</Link>
																									</li>
																								))}
																							</ul>
																						</AccordionContent>
																					</AccordionItem>
																				</Accordion>
																			) : (
																				<Link
																					href={child.href || "#"}
																					className="block hover:text-[#f97316] text-sm py-1"
																					onClick={() => setOpen(false)}
																				>
																					{child.label}
																				</Link>
																			)}
																		</li>
																	))}
																</ul>
															</AccordionContent>
														)}
													</AccordionItem>
												</Accordion>
											)}
										</li>
									))}
								</ul>
								<div>
									<Link href="/OEM_Collaborators" onClick={() => setOpen(false)}>
										<Button className="p-2 bg-[#f97316] text-white hover:bg-white hover:text-[#f97316] transition duration-300">
											OEM & Collaboration
										</Button>
									</Link>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</ContainerSection>
		</nav>
	);
};

export default Navbar;