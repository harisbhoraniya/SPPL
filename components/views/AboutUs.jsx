import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { HeaderText } from "./HeaderText";
import { BodyCopyText } from "./BodyCopyText";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";

export default function AboutUsHomePage() {
	return (
		<div className="space-y-8 mt-2">
			<HeaderText>About Us</HeaderText>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<div className="flex justify-center">
					<div className="w-full overflow-hidden  rounded-lg">
						<Image
							src="/img/Home/02 About Us/Home_About Us.jpg"
							alt="About Us"
							width={400}
							height={300}
							loading="eager"
							className="object-cover h-auto w-full rounded-lg"
						/>
					</div>
				</div>
				<div className="space-y-4 ">
					<BodyCopyText className={"leading-normal "}>
						Most success stories have humble beginnings. The story of Safety Projects is one of them. It’s one of perseverance, adapting to change, and being committed to society. Safety Projects started its operations in the year 2000. Starting off as a trader of safety products, today we are known across industries as a ‘solution provider’ in the field of Occupational Safety and Health.
					</BodyCopyText>
					<BodyCopyText className={"leading-normal "}>
						Be it our PPE, Engineering Fall Protection Systems, Energy Isolation Devices, or Disaster Management Equipment, providing a solution for our customers starts with a thorough analysis. We understand their workflow, requirements, areas of application, and current challenges. Next, we deep dive into providing creative solutions for bottlenecks faced by organisations. You may call it our working style, but for us at Safety Projects, it’s a way of life.
					</BodyCopyText>
					<BodyCopyText className={"leading-normal "}>
						It's this penchant to provide solutions coupled with our commitment to serving clients that has put us on the path of growth. Today, individual customers are long-time associates, clients are lifelong partners not because of what we provide but how and why we deliver our promise. Over the years, we have handled a variety of projects and provided creative solutions for a range of industries like Construction and Infrastructure, Oil and Gas, Telecommunication, Pharmaceuticals, Power Generation, Defence, and many more.
					</BodyCopyText>
					<div>
						<Link href={"/aboutus"} >
							<AnimatedButton text={"Read More"} />
						</Link>
					</div>
				</div>
			</div>
		</div>

		// <div className="grid grid-cols-12 gap-4 items-start">

		// 	<div className="col-span-12 md:col-span-6 lg:col-span-5  flex justify-center md:justify-start">
		// 		<Image
		// 			src="/img/Home/02 About Us/Home_About Us.jpg"
		// 			alt="About Us"
		// 			width={1000}
		// 			height={1000}
		// 			className="w-full md:max-w-[457px] h-auto object-contain rounded-sm"
		// 		/>
		// 	</div>
		// 	<div className="col-span-12 md:col-span-6 lg:col-span-7 lg:px-[93.5px]">
		// 		<HeaderText className="text-left mb-[25px]">About Us</HeaderText>
		// 		<div className="space-y-4 ">
		// 			<BodyCopyText className={"leading-normal "}>
		// 				Most success stories have humble beginnings. The story of Safety Projects is one of them. It’s one of perseverance, adapting to change, and being committed to society. Safety Projects started its operations in the year 2000. Starting off as a trader of safety products, today we are known across industries as a ‘solution provider’ in the field of Occupational Safety and Health.
		// 			</BodyCopyText>
		// 			<BodyCopyText className={"leading-normal "}>
		// 				Be it our PPE, Engineering Fall Protection Systems, Energy Isolation Devices, or Disaster Management Equipment, providing a solution for our customers starts with a thorough analysis. We understand their workflow, requirements, areas of application, and current challenges. Next, we deep dive into providing creative solutions for bottlenecks faced by organisations. You may call it our working style, but for us at Safety Projects, it’s a way of life.
		// 			</BodyCopyText>
		// 			<div>
		// 				<Link href={"/aboutus"} >
		// 					<AnimatedButton text={"Read More"} />
		// 				</Link>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>


	);
}



// import Image from "next/image";
// import React from "react";
// import { Button } from "../ui/button";
// import { HeaderText } from "./HeaderText";
// import { BodyCopyText } from "./BodyCopyText";
// import Link from "next/link";

// export default function AboutUsHomePage() {
// 	return (
// 		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// 			{/* Image Section */}
// 			<div className="relative">
// 				<div className="w-full h-full overflow-hidden border border-gray-300 rounded-lg">
// 					<Image
// 						src="/img/home/about/About_Us.jpg"
// 						alt="About Us"
// 						width={400}
// 						height={300}
// 						className="object-cover w-full h-full"
// 					/>
// 				</div>
// 			</div>

// 			{/* Text Section */}
// 			<div className="flex flex-col justify-between overflow-hidden">
// 				<div className="space-y-4 h-full">
// 					<HeaderText>About Us</HeaderText>
// 					<div className="overflow-hidden">
// 						<BodyCopyText className={"leading-normal line-clamp-4"}>
// 							Most success stories have humble beginnings. The story of Safety Projects is one of them. It’s one of perseverance, adapting to change, and being committed to society. Safety Projects started its operations in the year 2000. Starting off as a trader of safety products, today we are known across industries as a ‘solution provider’ in the field of Occupational Safety and Health.
// 						</BodyCopyText>
// 						<BodyCopyText className={"line-clamp-4"}>
// 							Be it our PPE, Engineering Fall Protection Systems, Energy Isolation Devices, or Disaster Management Equipment, providing a solution for our customers starts with a thorough analysis. We understand their workflow, requirements, areas of application, and current challenges. Next, we deep dive into providing creative solutions for bottlenecks faced by organisations. You may call it our working style, but for us at Safety Projects, it’s a way of life.
// 						</BodyCopyText>
// 					</div>
// 				</div>
// 				<div>
// 					<Link href={"/aboutus"}>
// 						<Button
// 							className={
// 								"bg-[#d42225] hover:bg-[#d42225] text-white text-2xl p-6"
// 							}
// 						>
// 							Read More
// 						</Button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
