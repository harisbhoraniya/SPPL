// @ts-nocheck
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import { Menu, ChevronDown, ChevronRight, ArrowRight, Phone, Mail, ShieldCheck } from "lucide-react";
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
	const pathname = usePathname();
	const currentPath = (pathname || "/").replace(/\/+$/, "") || "/";

	// Helper to check if a main nav item is active
	const isNavItemActive = (item) => {
		if (item.href === "/" || item.href === "") {
			return currentPath === "/";
		}
		if (item.href && item.href !== "#") {
			return currentPath === item.href || currentPath.startsWith(item.href + "/");
		}
		if (item.label === "Products" && (currentPath.startsWith("/products") || currentPath.startsWith("/notBuilt"))) {
			return true;
		}
		return false;
	};

	// Helper for dropdown / child items
	const isChildActive = (child) => {
		if (!child.href || child.href === "#") return false;
		return currentPath === child.href || currentPath.startsWith(child.href + "/");
	};

	// Helper for grandchild items
	const isGrandchildActive = (grandchild) => {
		if (!grandchild.href) return false;
		return currentPath === grandchild.href;
	};

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
											className={`text-[14px] text-wrap flex items-center gap-1 transition-colors ${
												isNavItemActive(item)
													? "text-[#f97316] font-semibold"
													: "text-gray-800 hover:text-[#f97316]"
											}`}
											onClick={(e) => {
												if (isTouch && item.children) e.preventDefault();
											}}
										>
											{item.label}
											{item.children && (
												<ChevronDown
													size={14}
													className={`transition-transform duration-200 ${
														openDropdown === item.label ? "rotate-180" : ""
													} ${isNavItemActive(item) ? "text-[#f97316]" : ""}`}
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
															className={`block py-[6px] px-4 text-[14px] flex-1 transition-colors ${
																isChildActive(child)
																	? "text-[#f97316] font-semibold bg-orange-50/60"
																	: "hover:text-[#f97316]"
															}`}
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
																		className={`block py-[6px] px-4 text-[14px] transition-colors ${
																			isGrandchildActive(grandchild)
																				? "text-[#f97316] font-semibold bg-orange-50/60"
																				: "hover:text-[#f97316]"
																		}`}
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
					<div className="lg:hidden flex items-center">
						<Sheet open={open} onOpenChange={setOpen}>
							<SheetTrigger asChild>
								{/* Custom Modern Tactile Hamburger Toggle */}
								<button
									type="button"
									aria-label="Open navigation menu"
									className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-[#f97316]/50 hover:bg-orange-50/50 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f97316]/20"
									onClick={() => setOpen(true)}
								>
									<div className="w-5 h-3.5 flex flex-col justify-between items-center">
										<span className="w-5 h-[2px] bg-gray-700 rounded-full group-hover:bg-[#f97316] transition-colors duration-200" />
										<span className="w-3.5 h-[2px] bg-gray-700 rounded-full self-start group-hover:w-5 group-hover:bg-[#f97316] transition-all duration-200" />
										<span className="w-5 h-[2px] bg-gray-700 rounded-full group-hover:bg-[#f97316] transition-colors duration-200" />
									</div>
								</button>
							</SheetTrigger>

							<SheetContent
								side="right"
								className="p-0 bg-white text-gray-800 h-full w-[85vw] max-w-[360px] sm:w-[380px] flex flex-col justify-between shadow-2xl border-l border-gray-100"
							>
								<SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

								{/* Top Brand Header */}
								<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between pr-14 bg-white/95 backdrop-blur-sm sticky top-0 z-10">
									<Link href="/" onClick={() => setOpen(false)} className="flex items-center">
										<Image
											src="/img/logo sppl.png"
											loading="eager"
											width={618}
											height={232}
											className="h-10 w-auto object-contain"
											alt="SPPL Logo"
										/>
									</Link>
								</div>

								{/* Navigation Links Scrollable Body */}
								<div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 no-scrollbar">
									<p className="px-3 text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-2">
										Navigation
									</p>
									<ul className="space-y-1">
										{navItems.map((item) => (
											<li key={item.label}>
												{!item.children ? (
													<Link
														href={item.href || "#"}
														className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[15px] transition-all duration-150 group ${
															isNavItemActive(item)
																? "text-[#f97316] font-semibold bg-orange-50/80 shadow-sm"
																: "font-medium text-gray-700 hover:text-[#f97316] hover:bg-orange-50/70 active:bg-orange-100/60"
														}`}
														onClick={() => setOpen(false)}
													>
														<span>{item.label}</span>
														<ChevronRight
															size={15}
															className={`transition-all ${
																isNavItemActive(item)
																	? "text-[#f97316] translate-x-0.5"
																	: "text-gray-400 group-hover:text-[#f97316] group-hover:translate-x-0.5"
															}`}
														/>
													</Link>
												) : (
													<Accordion type="single" collapsible className="w-full">
														<AccordionItem value={item.label} className="border-0">
															<AccordionTrigger className={`no-underline hover:no-underline px-3.5 py-2.5 rounded-xl text-[15px] transition-all ${
																isNavItemActive(item)
																	? "text-[#f97316] font-semibold bg-orange-50/80 data-[state=open]:bg-orange-50/80 data-[state=open]:text-[#f97316]"
																	: "font-medium text-gray-700 hover:text-[#f97316] hover:bg-orange-50/70 data-[state=open]:bg-orange-50/80 data-[state=open]:text-[#f97316]"
															}`}>
																<span className="flex-1 text-left">
																	{item.label}
																</span>
															</AccordionTrigger>

															{item.children && (
																<AccordionContent className="pb-1 pt-1.5">
																	<div className="ml-3 pl-3 border-l-2 border-orange-200/70 space-y-1 my-1">
																		{item.children.map((child) => (
																			<div key={child.label}>
																				{child.children ? (
																					<Accordion type="single" collapsible className="w-full">
																						<AccordionItem value={child.label} className="border-0">
																							<div className="flex items-center justify-between rounded-lg hover:bg-orange-50/60 transition-all pr-1">
																								<Link
																									href={child.href || "#"}
																									className={`flex-1 text-left py-2 px-2.5 text-sm transition-colors ${
																										isChildActive(child)
																											? "text-[#f97316] font-semibold"
																											: "font-medium text-gray-700 hover:text-[#f97316]"
																									}`}
																									onClick={() => setOpen(false)}
																								>
																									{child.label}
																								</Link>
																								<AccordionTrigger
																									className="no-underline hover:no-underline p-2 text-gray-400 hover:text-[#f97316] rounded-md transition-all shrink-0 [&[data-state=open]>svg]:rotate-180"
																									aria-label={`Toggle ${child.label} items`}
																								/>
																							</div>
																							<AccordionContent className="pb-1 pt-1">
																								<div className="ml-2.5 pl-2.5 border-l border-gray-200 space-y-0.5 my-1">
																									{child.children.map((grandchild) => (
																										<Link
																											key={grandchild.label}
																											href={grandchild.href || "#"}
																											className={`flex items-center gap-2 text-[13px] py-1.5 px-2.5 rounded-md transition-all group/item ${
																												isGrandchildActive(grandchild)
																													? "text-[#f97316] font-semibold bg-orange-50/60"
																													: "text-gray-600 hover:text-[#f97316] hover:bg-orange-50/40"
																											}`}
																											onClick={() => setOpen(false)}
																										>
																											<span
																												className={`w-1.5 h-1.5 rounded-full transition-all ${
																													isGrandchildActive(grandchild)
																														? "bg-[#f97316] scale-125"
																														: "bg-gray-300 group-hover/item:bg-[#f97316] group-hover/item:scale-125"
																												}`}
																											/>
																											<span className="group-hover/item:translate-x-0.5 transition-transform">
																												{grandchild.label}
																											</span>
																										</Link>
																									))}
																								</div>
																							</AccordionContent>
																						</AccordionItem>
																					</Accordion>
																				) : (
																					<Link
																						href={child.href || "#"}
																						className={`block text-sm py-2 px-2.5 rounded-lg transition-all ${
																							isChildActive(child)
																								? "text-[#f97316] font-semibold bg-orange-50"
																								: "font-medium text-gray-700 hover:text-[#f97316] hover:bg-orange-50/50"
																						}`}
																						onClick={() => setOpen(false)}
																					>
																						{child.label}
																					</Link>
																				)}
																			</div>
																		))}
																	</div>
																</AccordionContent>
															)}
														</AccordionItem>
													</Accordion>
												)}
											</li>
										))}
									</ul>
								</div>

								{/* Bottom Action Area */}
								<div className="p-4 border-t border-gray-100 bg-gray-50/80">
									<Link href="/OEM_Collaborators" onClick={() => setOpen(false)} className="block">
										<button
											type="button"
											className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#f97316] hover:bg-[#ea580c] active:scale-[0.98] text-white font-semibold text-sm shadow-md shadow-orange-500/20 transition-all duration-200"
										>
											<ShieldCheck size={16} />
											<span>OEM & Collaboration</span>
											<ArrowRight size={15} className="ml-auto" />
										</button>
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