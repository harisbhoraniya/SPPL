// import { Geist, Geist_Mono, Raleway } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/views/Header";
// import Footer from "@/components/views/Footer";
// import { Toaster } from "@/components/ui/toaster";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });
// const raleway = Raleway({
// 	variable: "--font-raleway",
// 	subsets: ["latin"],
// 	weight: ["300", "400", "700"],
// });

// export const metadata = {
// 	title: "Safety Project Private Ltd.",
// 	description: "Safety Project Private Ltd.",
// };

// export default function RootLayout({ children }) {
// 	return (
// 		<html lang="en">
// 			<body
// 				className={`${raleway.variable} antialiased flex flex-col w-full no-scrollbar overflow-auto `}
// 			>
// 				{/* <body
// 				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col w-full`}
// 			> */}
// 				<Toaster />
// 				<Header />
// 				<div className="">{children}</div>
// 				<Footer />
// 			</body>
// 		</html>
// 	);
// }

import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/views/Header";
import Footer from "@/components/views/Footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const raleway = Raleway({
	variable: "--font-raleway",
	subsets: ["latin"],
	weight: ["300", "400", "700"],
});

export const metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "https://sppl-psi.vercel.app"
	),
	title: "Safety Projects | Engineering Fall Protection Solutions",
	description:
		"Saving lives at height with world-class fall protection. From engineered lifelines to construction safety systems — we make high-risk work safer, smarter, stronger.",
	keywords:
		"SPPL, Safetyprojects, Safety Projects, SAFEPRO, Fall Protection Company, Lifeline Systems Company, Engineering Fall Protection, Lifeline Solutions In India, Construction Fall Protection In India, Roof Line, Guardrails, Safety Line, Walkway, Fan Net System, Vertical Net System, Safety Screen, fall protection, gravity safety, industrial safety, stainless steel fabrication, safety engineering, PPE, Innovolab, safepro, Safety Projects Pvt Ltd",
	icons: {
		icon: "/icon.png",
		shortcut: "/favicon.ico",
		apple: "/icon.png",
	},
	robots: "index, follow",
	other: {
		"Content-Security-Policy": "upgrade-insecure-requests",
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

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				suppressHydrationWarning
				className={`${raleway.variable} antialiased flex flex-col w-full no-scrollbar overflow-auto`}
			>
				<Toaster />
				<Header />
				<div className="">{children}</div>
				<Footer />
			</body>
		</html>
	);
}