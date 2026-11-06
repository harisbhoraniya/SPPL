
// import { FixedLifeLineSystem } from "@/data/FixedLifeLineSystem";
// import Image from "next/image";
// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import ContainerSection from "@/components/views/ContainerSection";
// import MainPage from "@/components/views/MainPage";

// export async function generateStaticParams() {
// 	// Generate paths for all categories
// 	return FixedLifeLineSystem.map((product) => ({
// 		slug: product.slug,
// 	}));
// }

// export default function AllInOnePage() {
// 	return (
// 		<MainPage className={"mt-10"}>
// 			<ContainerSection>
// 				<HeaderText className="text-center">
// 					All In One
// 				</HeaderText>

// 				<div className="flex flex-col lg:flex-row items-start gap-8">
// 					<div className="relative w-full lg:w-1/2 h-64 lg:h-96">
// 						<Image
// 							src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/All in one.jpg"
// 							alt="Horizontal Fall Protection Lifeline System"
// 							fill
// 							className="object-cover rounded-lg"
// 						/>
// 					</div>

// 					<div className="w-full lg:w-1/2 space-y-6">
// 						<BodyCopyText>
// 							Lorem ipsum dolor sit amet consectetur adipisicing
// 							elit. Mollitia enim accusamus placeat dicta
// 							possimus? Commodi officiis aut deleniti unde fugiat.
// 							Nemo error soluta, pariatur voluptate illum omnis
// 							aperiam porro provident quos non quas repudiandae
// 							beatae aut temporibus alias quasi, molestias sunt
// 							deleniti quod iusto nostrum laborum. Ipsum accusamus
// 							fuga velit. Lorem ipsum dolor sit, amet consectetur
// 							adipisicing elit. Voluptas laborum adipisci placeat
// 							accusantium ipsam blanditiis maiores pariatur ex
// 							commodi perferendis. Rem, magni! Accusantium,
// 							dolorem! In reprehenderit delectus asperiores,
// 							consequuntur tenetur soluta assumenda praesentium
// 							libero repellat inventore. Provident, nemo tenetur.
// 							Ea perspiciatis minus sit reprehenderit consequatur
// 							consectetur enim officiis rerum velit!
// 						</BodyCopyText>

// 						{/* <div>
// 						<BodyCopyText className="font-bold">
// 							Energy Absorber
// 						</BodyCopyText>
// 						<BodyCopyText>
// 							A device designed to dissipate and reduce the forces
// 							generated during a fall and serves to minimize the
// 							impact on the user and the anchorage point.
// 						</BodyCopyText>
// 					</div>

// 					<div>
// 						<BodyCopyText className="font-bold">
// 							Tensioner
// 						</BodyCopyText>
// 						<BodyCopyText>
// 							A tensioner is used to keep the horizontal lifeline
// 							taut and at the appropriate level of tension.
// 						</BodyCopyText>
// 					</div>

// 					<div>
// 						<BodyCopyText className="font-bold">
// 							Tension Indicator
// 						</BodyCopyText>
// 						<BodyCopyText>
// 							A tension indicator helps to ensure that lifeline
// 							remains properly tensioned over time. The indicator
// 							alerts users or safety personnel when tension needs
// 							adjustment.
// 						</BodyCopyText>
// 					</div>

// 					<div>
// 						<BodyCopyText className="font-bold">
// 							Fall Indicator
// 						</BodyCopyText>
// 						<BodyCopyText>
// 							A fall indicator is a mechanism that triggers an
// 							alert when a fall occurs.
// 						</BodyCopyText>
// 					</div>

// 					<div>
// 						<BodyCopyText className="font-bold">
// 							End Cable Termination
// 						</BodyCopyText>
// 						<BodyCopyText>
// 							The end cable termination is the way of anchoring
// 							the horizontal at its End Post Extremity.
// 						</BodyCopyText>
// 					</div> */}
// 					</div>
// 				</div>

// 				<div className="grid grid-cols-12 gap-4">
// 					{[0, 1, 2].map((index) => (
// 						<div
// 							key={index}
// 							className="col-span-4 flex flex-col items-start"
// 						>
// 							<Image
// 								src={`https://placehold.co/600x400?text=Image+${
// 									index + 1
// 								}.jpg`}
// 								alt={`Item ${index + 1}`}
// 								width={300} // Set your desired original width
// 								height={200} // Set your desired original height
// 								className="mb-4 w-full h-96 object-none"
// 							/>
// 							<BodyCopyText className="font-bold">
// 								{
// 									[
// 										"Energy Absorber",
// 										"Tensioner",
// 										"Tension Indicator",
// 									][index]
// 								}
// 							</BodyCopyText>
// 							<BodyCopyText>
// 								{
// 									[
// 										"A device designed to dissipate and reduce the forces generated during a fall and serves to minimize the impact on the user and the anchorage point.",
// 										"A tensioner is used to keep the horizontal lifeline taut and at the appropriate level of tension.",
// 										"A tension indicator helps to ensure that lifeline remains properly tensioned over time. The indicator alerts users or safety personnel when tension needs adjustment.",
// 									][index]
// 								}
// 							</BodyCopyText>
// 						</div>
// 					))}
// 					{[3, 4].map((index) => (
// 						<div
// 							key={index}
// 							className="col-span-6 flex flex-col items-start"
// 						>
// 							<Image
// 								src={`https://placehold.co/800x400?text=Image+${
// 									index + 1
// 								}.jpg`}
// 								alt={`Item ${index + 1}`}
// 								width={300} // Set your desired original width
// 								height={200} // Set your desired original height
// 								className="mb-4 w-full h-96 object-none"
// 							/>
// 							<div>
// 								<BodyCopyText className="font-bold">
// 									{
// 										[
// 											"Fall Indicator",
// 											"End Cable Termination",
// 										][index - 3]
// 									}
// 								</BodyCopyText>
// 								<BodyCopyText>
// 									{
// 										[
// 											"A fall indicator is a mechanism that triggers an alert when a fall occurs.",
// 											"The end cable termination is the way of anchoring the horizontal at its End Post Extremity.",
// 										][index - 3]
// 									}
// 								</BodyCopyText>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</ContainerSection>
// 		</MainPage>
// 	);
// }



// import { FixedLifeLineSystem } from "@/data/FixedLifeLineSystem";
// import Image from "next/image";
// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import ContainerSection from "@/components/views/ContainerSection";
// import MainPage from "@/components/views/MainPage";

// export async function generateStaticParams() {
//   return FixedLifeLineSystem.map((product) => ({
//     slug: product.slug,
//   }));
// }

// export default function AllInOnePage() {
//   const features = [
//     {
//       title: "Energy Absorber",
//       description:
//         "A device designed to dissipate and reduce the forces generated during a fall and serves to minimize the impact on the user and the anchorage point.",
//       image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/Energy absorber.jpg",
//     },
//     {
//       title: "Tensioner",
//       description:
//         "A tensioner is used to keep the horizontal lifeline taut and at the appropriate level of tension.",
//       image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/Tensioner.jpg",
//     },
//     {
//       title: "Tension Indicator",
//       description:
//         "A tension indicator helps to ensure that the lifeline remains properly tensioned over time.",
//       image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/tension indicator.jpg",
//     },
//     {
//       title: "Fall Indicator",
//       description:
//         "A fall indicator is a mechanism that triggers an alert when a fall occurs.",
//       image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/Fall indicator.jpg",
//     },
//     {
//       title: "End Cable Termination",
//       description:
//         "The end cable termination is the method of anchoring the horizontal lifeline at its end post extremity.",
//       image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/End cable termination.jpg",
//     },
//   ];

//   return (
//     <MainPage className="mt-10">
//       <ContainerSection>
//         <HeaderText className="text-center text-3xl mb-10">
//           All In One Fixed Lifeline System
//         </HeaderText>

//         <div className="flex flex-col lg:flex-row gap-8 items-start">
//           <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-xl shadow-md overflow-hidden">
//             <Image
//               src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/All in one.jpg"
//               alt="All In One Lifeline System"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="w-full lg:w-1/2 space-y-4">
//             <BodyCopyText>
//               Our All-In-One Fixed Lifeline System is engineered
//               to offer maximum safety with integrated components
//               like energy absorbers, tensioners, and fall
//               indicators. This system ensures a secure working
//               environment at heights, minimizing risk while
//               maintaining flexibility and ease of use. Built for
//               durability, reliability, and regulatory compliance,
//               it’s an ideal choice for modern rooftop and
//               structural applications.
//             </BodyCopyText>
//             <BodyCopyText>
//               Each component plays a critical role in safeguarding
//               personnel while maintaining system integrity, from
//               preventing excessive forces during a fall to
//               indicating when maintenance or inspections are
//               needed.
//             </BodyCopyText>
//           </div>
//         </div>

//         <div className="mt-16 grid gap-10 md:grid-cols-2">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-2xl shadow-lg flex flex-col"
//             >
//               <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
//                 <Image
//                   src={feature.image}
//                   alt={feature.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <BodyCopyText className="text-lg font-semibold mb-2">
//                 {feature.title}
//               </BodyCopyText>
//               <BodyCopyText className="text-gray-700">
//                 {feature.description}
//               </BodyCopyText>
//             </div>
//           ))}
//         </div>
//       </ContainerSection>
//     </MainPage>
//   );
// }

import { FixedLifeLineSystem } from "@/data/FixedLifeLineSystem";

// REQUIRED static export for every slug variant:
export async function generateStaticParams() {
  // Should return an array like: [{slug: "Roof_Lifeline"}, ...]
  return FixedLifeLineSystem.map(product => ({
    slug: product.slug, // Must be string not undefined/null!
  }));
}

import AllInOnePage from "./AllInOnePage";
export default AllInOnePage;
