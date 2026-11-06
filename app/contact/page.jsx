"use client";

import { BodyCopyText } from "@/components/views/BodyCopyText";
import { Factory, Handshake, Mail, MapPin, MapPinned, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeaderText } from "@/components/views/HeaderText";
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaYoutube,
	FaInstagram
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import BannerImage from "@/components/views/BannerImage";
import AnimatedButton from "@/components/views/AnimatedButton";
import ContainerSection from "@/components/views/ContainerSection";
import { useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import MainPage from "@/components/views/MainPage";

export default function ContactUs() {
	const [formData, setFormData] = useState({
		name: "",
		company: "",
		Phone: "",
		email: "",
		message: "",
	});

	const { toast } = useToast()

	const [error, setError] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		if (!formData.name.trim()) {
			toast({
				variant: "destructive",
				title: "Name Required",
				description: "Please enter your name.",
			});
			return;
		}
		if (!formData.company.trim()) {
			toast({
				variant: "destructive",
				title: "Company Name Required",
				description: "Please enter your company name.",
			});
			return;
		}

		if (!formData.Phone.trim()) {
			toast({
				variant: "destructive",
				title: "Phone Number Required",
				description: "Please enter your phone number.",
			});
			return;
		}

		const phoneRegex = /^[\d+\-\s]+$/;
		if (!phoneRegex.test(formData.Phone)) {
			toast({
				variant: "destructive",
				title: "Invalid Phone Number",
				description: "Phone number should contain only numbers.",
			});
			return;
		}

		if (!formData.email.trim()) {
			toast({
				variant: "destructive",
				title: "Email Required",
				description: "Please enter your email address.",
			});
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			toast({
				variant: "destructive",
				title: "Invalid Email",
				description: "Please enter a valid email address.",
			});
			return;
		}

		if (!formData.message.trim()) {
			toast({
				variant: "destructive",
				title: "Message Required",
				description: "Please enter your message.",
			});
			return;
		}

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				access_key: "8586bec1-f0b2-4c32-89c5-ccb765af1e15",
				...formData,
			}),
		});

		const result = await response.json();
		if (result.success) {
			toast({
				variant: "success",
				title: "Form Submitted Successfully",
				description: "Thank you for reaching out! We will contact you soon.",
			});
			setFormData({ name: "", company: "", Phone: "", email: "", message: "" });
		} else {
			setError("Failed to send message. Please try again.");
			toast({
				variant: "destructive",
				title: "Submission Failed",
				description: "There was an error submitting the form. Please try again later.",
			});
		}
	};
	return (
		<MainPage>

			<BannerImage image={"/img/Contact Us/Contact Us_Banner.jpg"} mobileImage={`/img/Contact Us/mob/Contact Us_Banner.jpg`} text={"CONTACT US"} />

			<ContainerSection>
				<div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
					<div className="lg:w-1/2 w-full p-4 md:p-8 lg:p-16 space-y-8">
						<motion.div
							className="shadow-md rounded-xl w-full bg-white p-3 md:p-6 group flex gap-3 md:gap-6 items-center border border-gray-200  transition"
						>
							<MapPinned className="min-h-5 min-w-5 md:min-h-6 md:min-w-6 text-[#f97316]  transition-transform" />
							<BodyCopyText className="text-gray-700 font-medium text-lg">
								301, Ruby Crescent, Ashok Nagar, Kandivali (E), Mumbai – 400101
							</BodyCopyText>
						</motion.div>
						<motion.div
							className="shadow-md rounded-xl w-full bg-white p-3 md:p-6 group flex gap-3 md:gap-6 items-center border border-gray-200  transition"
						>
							<Factory className="min-h-5 min-w-5 md:min-h-6 md:min-w-6 text-[#f97316]  transition-transform" />
							<BodyCopyText className="text-gray-700 font-medium text-lg">
								Survey No. 1909/10/11, Coastal Highway, Umbergaon, Gujarat – 396170
							</BodyCopyText>
						</motion.div>
						<motion.div
							className="shadow-md rounded-xl w-full bg-white p-3 md:p-6 group flex gap-3 md:gap-6 items-center border border-gray-200  transition overflow-auto"
						>
							<Mail className="min-h-5 min-w-5 md:min-h-6 md:min-w-6  text-[#f97316]  transition-transform" />
							<BodyCopyText className="text-gray-700 font-medium text-lg">
								info@safetyprojects.co.in
							</BodyCopyText>
						</motion.div>
						<motion.div
							className="shadow-md rounded-xl w-full bg-white p-3 md:p-6 group flex gap-3 md:gap-6 items-center border border-gray-200  transition"
						>
							<Phone className="min-h-5 min-w-5 md:min-h-6 md:min-w-6  text-[#f97316]  transition-transform" />
							<BodyCopyText className="text-gray-700 font-medium text-lg">
								+91 22 61749999
							</BodyCopyText>
						</motion.div>
						<motion.div
							className=" rounded-xl w-full bg-white   group flex gap-6 items-center  transition"
						>
							<div className="flex flex-wrap space-x-4 w-full">
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
										className="p-2 md:p-3 rounded-full text-gray-600 bg-gray-200 hover:bg-[#f97316] hover:text-white transition"
										aria-label={`Social Link ${index}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Icon className="min-h-2 min-w-2 md:h-5 md:w-5" />
									</Link>
								))}
							</div>
						</motion.div>
					</div>

					<div className="lg:w-1/2 w-full p-4 md:p-8 space-y-4">
						<HeaderText className={"text-[#f97316] text-center"}>
							Get In Touch
						</HeaderText>
						<BodyCopyText className={"text-gray-600 text-center"}>
							Have any questions? We'd love to hear from you!
						</BodyCopyText>
						<motion.form
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 1 }}
							onSubmit={handleSubmit}
							className="space-y-4"
						>
							<div>
								<label className="block text-gray-600">Name</label>
								<input type="text" name="name" placeholder="Your Name"
									value={formData.name} onChange={handleChange}
									className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]" />
							</div>
							<div>
								<label className="block text-gray-600">Company Name</label>
								<input type="text" name="company" placeholder="Your Company Name"
									value={formData.company} onChange={handleChange}
									className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]" />
							</div>
							<div>
								<label className="block text-gray-600">Phone</label>
								<input type="text" name="Phone" placeholder="Your Phone Number"
									value={formData.Phone} onChange={handleChange}
									className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]" />
							</div>
							<div>
								<label className="block text-gray-600">Email</label>
								<input type="text" name="email" placeholder="Your Email"
									value={formData.email} onChange={handleChange}
									className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]" />
							</div>
							<div>
								<label className="block text-gray-600">Message</label>
								<textarea name="message" rows={4} placeholder="Your Message"
									value={formData.message} onChange={handleChange}
									className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#d42225]"></textarea>
							</div>
							<div className="w-full">
								<AnimatedButton text={"Send Message"} className={"duration-1000"} />
							</div>
						</motion.form>
					</div>
				</div>

				<div className="space-y-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20">

						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 1 }}
							className="w-full flex flex-col"
						>
							<p className="text-center text-gray-600 font-medium mb-2">Mumbai Office</p>
							<div className="h-[300px] sm:h-[350px] lg:h-[420px]">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.49431014529293!2d72.85716493849321!3d19.199178218484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce24ceaaaaab%3A0xcdf89b02f836dd6a!2sSafety%20Projects%20Private%20Limited!5e0!3m2!1sen!2sin!4v1737443253671!5m2!1sen!2sin"
									width="100%"
									height="100%"
									allowFullScreen=""
									loading="lazy"
									className="rounded-lg shadow-lg"
									title="Mumbai Office Map"
								></iframe>
							</div>
						</motion.div>

						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 1, delay: 0.2 }}
							className="w-full flex flex-col"
						>
							<p className="text-center text-gray-600 font-medium mb-2">Umbergaon Factory</p>
							<div className="h-[300px] sm:h-[350px] lg:h-[420px]">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.236457584359!2d72.7471797!3d20.165877899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72b003189609f%3A0xe32ddfa2789c1062!2sSafety%20Project%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1775721307423!5m2!1sen!2sin"
									width="100%"
									height="100%"
									allowFullScreen=""
									loading="lazy"
									className="rounded-lg shadow-lg"
									title="Umbergaon Factory Map"
								></iframe>
							</div>
						</motion.div>

					</div>
				</div>
			</ContainerSection >
		</MainPage>
	);
}