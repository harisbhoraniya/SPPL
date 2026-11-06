// "use client";

// import { Button } from "@/components/ui/button";
// import { FlagIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function notfound() {
// 	return (
// 		<div className="h-screen mx-auto grid place-items-center text-center px-8">
// 			<div>
// 				{/* <FlagIcon className="w-20 h-20 mx-auto" /> */}
// 				<Link href="/" className="w-full flex justify-center">
// 					<Image
// 						src="/img/SPPL_LOGO_2.png"
// 						width={1000}
// 						height={1}
// 						className="h-20 w-auto"
// 						alt="Logo"
// 					/>
// 				</Link>
// 				<h1
// 					color="blue-gray"
// 					className="mt-10 !text-3xl !leading-snug md:!text-4xl"
// 				>
// 					Error 404 <br /> It looks like something went wrong.
// 				</h1>
// 				<p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
// 					Don&apos;t worry, our team is already on it.Please try
// 					refreshing the page or come back later.
// 				</p>
// 				<Link href={"/"}>
// 					<Button color="gray" className="w-full px-4 md:w-[8rem]">
// 						Back Home
// 					</Button>
// 				</Link>
// 			</div>
// 		</div>
// 	);
// }

'use client';

import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
			<div className="text-center p-6">
				<h1 className="text-5xl font-bold mb-4 text-[#d42225]">🚧 Under Construction 🚧</h1>
				<p className="text-lg text-gray-600 mb-6">
					We're working hard to bring this page to life. Please check back soon!
				</p>
				<Link href="/" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
					Go Back to Home

				</Link>
			</div>
		</div >
	);
}
