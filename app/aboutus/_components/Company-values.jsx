import { BodyCopyText } from "@/components/views/BodyCopyText";
import { HeaderText } from "@/components/views/HeaderText";
import Image from "next/image";

export const CompanyValues = () => {
	return (
		<div>
			<div className="space-y-8 text-center">
				<HeaderText>Our Merits</HeaderText>

				<div>
					<div className="grid grid-cols-2 md:grid-cols-4  gap-8">
						{[

							{
								header: "Tenacity",
								img: "/img/About Us/05 Our Merits/01 Tenacity.jpg",
								content:
									"Our work does not permit any chance of error. With sheer hard work, we aim to be the best and constantly keep on improving our ourselves. Our work is a question of life – we never give up in ensuring people stay safe.",
							},
							{
								header: "Courage",
								img: "/img/About Us/05 Our Merits/02 Courage.jpg",
								content:
									"We take the road less travelled and dare to solve unusual challenges. It is in this that we explore and shatter boundaries. Never say no and never say die – that’s who we are.",
							},
							{
								header: "Humility",
								img: "/img/About Us/05 Our Merits/03 Humility.jpg",
								content:
									"Nobody is perfect – neither are we. We have the honesty to admit if we’re wrong and the grit to amend. Every setback helps us grow and learn. Practicing humility is what helps us deliver the best to industries and workplaces.",
							},
							{
								header: "Safety",
								img: "/img/About Us/05 Our Merits/04 Safety.jpg",
								content:
									"Our religion. Our motto. We swear by it and live by it. It’s what runs through our blood: keeping people safe.",
							},
						].map((value, index) => (
							<div
								className="border h-full  space-y-3 rounded-md overflow-hidden"
								key={index}
							>

								<Image
									src={value.img}
									alt={value.img}
									loading="lazy"
									width={1000}
									height={1000}
									className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
								/>

								{/* <BodyCopyText className={""}>
									{value.header}
								</BodyCopyText> */}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
