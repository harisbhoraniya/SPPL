import AboutUsHomePage from "@/components/views/AboutUs";
import SafeProComponent from "@/components/views/SafePro";
import ImageSlider from "@/components/views/Slider";
import Testimonials from "@/components/views/Testimonail";
import OurClients from "@/components/views/OurClient";
import Image from "next/image";
import Link from "next/link";
import MainPage from "@/components/views/MainPage";
import ContainerSection from "@/components/views/ContainerSection";
import ProductFinder from "@/components/views/ProductFinder";
import AnimatedButton from "@/components/views/AnimatedButton";

export const metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "https://sppl-psi.vercel.app"
	),
	title: "Safety Projects | Engineering Fall Protection Solutions",
	description:
		"Saving lives at height with world-class fall protection. From engineered lifelines to construction safety systems — we make high-risk work safer, smarter, stronger.",
	keywords:
		"SPPL, Safetyprojects, Safety Projects, SAFEPRO, Fall Protection Company, Lifeline Systems Company, Engineering Fall Protection, Lifeline Solutions In India, Construction Fall Protection In India, Roof Line, Guardrails, Safety Line, Walkway, Fan Net System, Vertical Net System, Safety Screen, fall protection, gravity safety, industrial safety, stainless steel fabrication, safety engineering, PPE, Innovolab, safepro, Safety Projects Pvt Ltd",
	robots: {
		index: true,
		follow: true,
		nocache: false,
	},
	openGraph: {
		title: "Safety Projects Pvt. Ltd.",
		description:
			"Leading provider of industrial safety and stainless steel solutions. Over 30 years of experience in protecting lives through innovation.",
		url: "https://sppl-psi.vercel.app",
		siteName: "Safety Projects Pvt. Ltd.",
		type: "website",
		images: [
			{
				url: "/img/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Safety Projects Pvt. Ltd. - Industrial Safety Solutions",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Safety Projects Pvt. Ltd.",
		description:
			"Leading provider of industrial safety and stainless steel solutions. Over 30 years of experience in protecting lives through innovation.",
		images: [
			{
				url: "/img/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Safety Projects Pvt. Ltd. - Industrial Safety Solutions",
			},
		],
	},
};

export default function Home() {
	return (
		<MainPage>
			<ImageSlider />
			<ContainerSection>
				<AboutUsHomePage />
			</ContainerSection>

			<ProductFinder />
			<ContainerSection>
				<SafeProComponent />
			</ContainerSection>

			{/* <div className="relative w-full"> */}
			{/* // CHANGE TO */}
			{/* <div className="relative w-full pb-12 md:pb-0">
				<Image
					src="/img/Home/05 Innovolab/mob/Innovolab.jpg"
					alt="Vision & Mission"
					width={1000}
					height={500}
					loading="lazy"
					className="object-cover w-full h-auto md:hidden"
				/>
				<Image
					src="/img/Home/05 Innovolab/Innovolab.jpg"
					alt="Vision & Mission"
					width={1000}
					height={500}
					loading="lazy"
					className="object-cover w-full h-auto hidden md:block"
				/>
				<div className="flex flex-col justify-center absolute -bottom-3 md:bottom-[5%] left-[5%] md:left-[30%] w-80 h-44 leading-snug md:leading-none">
				// CHANGE TO
				<div className="flex flex-col justify-center absolute bottom-14 md:bottom-[5%] left-[5%] md:left-[30%] w-80 h-44 leading-snug md:leading-none">
					<div className="md:text-xl lg:text-2xl xl:text-3xl text-white font-bold">Gravity Pulls</div>
					<div className="md:text-lg lg:text-xl xl:text-2xl text-white font-bold">Balancing Gravity With</div>
					<div className="md:text-lg lg:text-xl xl:text-2xl text-white font-bold">Smart Safety Solutions</div>
					<Link href="/Innovolabs">
						<AnimatedButton text="Innovolab – where brilliance takes form" className="p-2 md:p-2 mt-1" />
					</Link>
				</div>
			</div> */}

			<div className="-mt-8 md:-mt-12">
				<Testimonials />
			</div>

			<ContainerSection>
				<OurClients />
			</ContainerSection>
		</MainPage>
	);
}