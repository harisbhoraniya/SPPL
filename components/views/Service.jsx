import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { HeaderText } from "./HeaderText";
import { BodyCopyText } from "./BodyCopyText";

const ServicesSection = () => {
	const services = [
		{
			id: 1,
			title: "Product Maintenance",
			description: "Process 01",
			icon: "/img/home/service/icon/maintenance.png", // Replace with actual SVG paths
			link: "/services/product-maintenance",
		},
		{
			id: 2,
			title: "Project Inspection",
			description: "Process 02",
			icon: "/img/home/service/icon/product-inpection.png", // Replace with actual SVG paths
			link: "/services/product-maintenance",
		},
		{
			id: 3,
			title: "Site Visit Services",
			description: "Process 03",
			icon: "/img/home/service/icon/site-visit.png", // Replace with actual SVG paths
			link: "/services/product-maintenance",
		},
	];

	return (
		<section className="py-12 bg-white">
			<HeaderText className={"text-center"}>Our Services</HeaderText>
			<div className=" flex flex-wrap lg:flex-nowrap gap-8 items-center">
				{/* Image Section */}
				<div className="flex gap-8">
					<div className="w-full lg:w-[300px] h-[400px] rounded-lg overflow-hidden shadow-lg">
						{/* <Image
							src="/img/home/service/Maintance-01.jpg" // Replace with actual image paths
							alt="Service 1"
							width={300}
							height={400}
							className="object-cover"
						/> */}

						<Image
							src="/img/home/service/Maintance-01.jpg"
							alt="Service 1"
							width={1000}
							height={1000}
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="w-full lg:w-[300px] h-[400px] rounded-lg overflow-hidden shadow-lg mt-16">
						{/* <Image
							src="/img/home/service/Maintance-02.jpg" // Replace with actual image paths
							alt="Service 2"
							width={300}
							height={400}
							className="object-cover"
						/> */}
						<Image
							src="/img/home/service/Maintance-02.jpg" // Replace with actual image paths
							alt="Service 2"
							width={1000}
							height={1000}
							className="object-cover w-full h-full"
						/>
					</div>
				</div>

				{/* Services List Section */}
				<div className="flex-1 space-y-4">
					<ul className="space-y-6">
						{services.map((service) => (
							<>
								<li
									key={service.id}
									className="flex items-center justify-between group"
								>
									<Link
										href={service.link}
										className="flex items-center w-full p-6  transition-all rounded-lg "
									>
										<div className="flex items-center gap-4">
											{/* Icon */}
											<div className="text-red-600 ">
												<Image
													src={service.icon}
													alt={service.title}
													width={40}
													height={40}
												/>
											</div>

											{/* Text */}
											<div>
												{/* <span className="text-sm text-gray-500 "> */}
												<BodyCopyText className={""}>
													{service.description}
												</BodyCopyText>
												{/* </span> */}
												{/* <p className="text-lg font-semibold text-gray-800 "> */}
												<BodyCopyText
													className={
														"text-2xl font-semibold text-gray-800 "
													}
												>
													{service.title}
												</BodyCopyText>
												{/* </p> */}
											</div>
										</div>

										{/* Arrow */}
										<span className="text-red-600  text-2xl ml-auto">
											<ArrowRight />
										</span>
									</Link>
								</li>
								<Separator />
							</>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
