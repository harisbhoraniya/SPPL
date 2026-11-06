
// import { FixedLifeLineSystem } from "@/data/FixedLifeLineSystem";
// import Image from "next/image";
// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import MainPage from "@/components/views/MainPage";
// import ContainerSection from "@/components/views/ContainerSection";

// export async function generateStaticParams() {
//   return FixedLifeLineSystem.map((product) => ({
//     slug: product.slug,
//   }));
// }

// export default function DecotechPage() {
//   return (
//     <MainPage className="mt-10">
//       <ContainerSection>
//         <HeaderText variant="h1" className="text-center mb-10">
//           Distinctive Innovation
//         </HeaderText>

//         {/* Intro Section */}
//         <div className="flex flex-col lg:flex-row-reverse items-start gap-10 mb-16">
//           <div className="w-full lg:w-1/2">
//             <Image
//               src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/distinctive innovation.jpg"
//               alt="Decotech Lifeline System"
//               width={600}
//               height={400}
//               className="rounded-lg w-full object-cover"
//             />
//           </div>

//           <div className="w-full lg:w-1/2 space-y-6">
//             {/* <HeaderText variant="h2">What is Decotech?</HeaderText> */}
//             <BodyCopyText>
//               SafePro roof anchors are designed to enhance fall protection systems on roofs by dissipating and reducing
//               the forces generated during a fall. These anchors are
//               crucial for maintaining the structural integrity of the roof
//               and protecting individuals working at heights.
//             </BodyCopyText>

//             <BodyCopyText>
//               These posts typically consist of a sturdy structure that
//               can securely anchor a worker’s fall protection system
//               and they incorporate mechanisms that absorb and
//               dissipate the forces.
//             </BodyCopyText>

//             <HeaderText variant="h1" className="text-left list-disc mb-10">
//               Fall Protection from Any Angle
//             </HeaderText>
//             <BodyCopyText>
//               Regardless of the direction or angle from which
//               a fall happens, the 360-degree energy absorbing
//               deploying feature ensures that the forces are mitigated, protecting the user and the roof structure.
//               This is crucial because falls can occur in various
//               orientations, and the anchor needs to be effective
//               regardless of the angle.
//             </BodyCopyText>
//             <HeaderText variant="h1" className="text-left list-disc mb-10">
//               Applied for patent
//             </HeaderText>
//             <BodyCopyText>
//               In case of a fall, the SafePro anchor activates its innovative DecoTECH Energy
//               Dissipating Technology. This technology effectively absorbs and dissipates
//               forces, ensuring that the impact on the roof structure is minimal, reducing it
//               to less than 6 kN. This force reduction is the most impressive in the market,
//               making the anchor suitable for installation on various roof types, whether they
//               are old or new. This versatility also enhances safety by minimizing the risk to
//               the structural integrity of the roof.
//             </BodyCopyText>
//           </div>
//         </div>

//         {/* Features Section */}
//         <div className="space-y-10 mb-16">
//           <HeaderText className="text-center">
//             Key Features
//           </HeaderText>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Adjustable",
//                 description:
//                   "Designed to handle falls from any angle with a 360-degree energy-dissipating system that ensures safety regardless of direction.",
//               },
//               {
//                 title: "Versatility",
//                 description:
//                   "Patent-pending mechanism reduces force to under 6 kN, ensuring unmatched safety for new and existing rooftops.",
//               },
//               {
//                 title: "Ease of installation",
//                 description:
//                   "Engineered for hassle-free, fast setup without compromising on safety or performance.",
//               },
//               {
//                 title: "Corrosion Resistant",
//                 description:
//                   "Engineered for hassle-free, fast setup without compromising on safety or performance.",
//               },
//               {
//                 title: "Load Distribution",
//                 description:
//                   "Engineered for hassle-free, fast setup without compromising on safety or performance.",
//               },
//             ].map((feature, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//               >
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Full Width Image */}
//         <div className="mb-16">
//           <Image
//             src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/2.jpg"
//             alt="Decotech anchor system close-up"
//             width={1200}
//             height={600}
//             className="rounded-lg w-full object-cover"
//           />
//         </div>

//         {/* Test Results Section */}
//         <div className="space-y-10">
//           <HeaderText variant="h2" className="text-center">
//             Test Results
//           </HeaderText>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <Image
//               src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/1.jpg"
//               alt="Lab testing of Decotech anchor"
//               width={600}
//               height={400}
//               className="rounded-lg w-full object-cover"
//               loading="lazy"
//             />
//             <Image
//               src="https://placehold.co/800x400?text=Test+Result+Video"
//               alt="Decotech video test placeholder"
//               width={600}
//               height={400}
//               className="rounded-lg w-full object-cover"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </ContainerSection>
//     </MainPage>
//   );
// }


// import { FixedLifeLineSystem } from "@/data/FixedLifeLineSystem";
// import Image from "next/image";
// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import MainPage from "@/components/views/MainPage";
// import ContainerSection from "@/components/views/ContainerSection";

// export async function generateStaticParams() {
//   return FixedLifeLineSystem.map((product) => ({
//     slug: product.slug,
//   }));
// }

// export default function DecotechPage() {
//   return (
//     <MainPage className="mt-10">
//       <ContainerSection>
//         <HeaderText variant="h1" className="text-center mb-14 font-semibold tracking-wide">
//           Distinctive Innovation with DecoTECH™ Energy Dissipating Technology
//         </HeaderText>

//         {/* Introduction Section */}
//         <div className="flex flex-col lg:flex-row-reverse items-start gap-10 mb-20">
//           <div className="w-full lg:w-1/2">
//             <Image
//               src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/distinctive innovation.jpg"
//               alt="Decotech Lifeline System"
//               width={600}
//               height={400}
//               className="rounded-lg w-full object-cover shadow-lg"
//             />
//           </div>

//           <div className="w-full lg:w-1/2 space-y-6">
//             <BodyCopyText>
//               Our roof anchors are designed to enhance fall protection systems on roofs by dissipating and reducing the forces generated during a fall. These anchors are crucial for maintaining the structural integrity of the roof and protecting individuals working at heights
//             </BodyCopyText>

//             <BodyCopyText>
//               Our posts typically consist of a sturdy structure that can securely anchor a worker’s fall protection device, and they incorporate force absorbing and dissipating mechanisms.
//             </BodyCopyText>

//             <HeaderText variant="h2" className="mt-8 text-left">
//               Fall Protection From <span className="text-[#d42225]">Any Angle</span>
//             </HeaderText>
//             <BodyCopyText>
//               Regardless of the direction or angle from which a fall occurs, the 360-degree energy dissipating deploying feature ensures that the forces are dissipated protecting the user and the roof structure. This is crucial because falls can occur in various orientations, and the anchor needs to be effective regardless of the fall angle.
//             </BodyCopyText>

//             <HeaderText variant="h2" className="mt-8 text-left">
//               Roof Integrity with <span className="text-[#d42225]">DecoTECH™</span>
//             </HeaderText>

//             <BodyCopyText>
//               In case of a fall, our anchor activates its innovative DecoTECH Energy Dissipating Technology. This technology effectively absorbs and dissipates forces, ensuring that the impact on the roof structure is minimal, reducing it to less than 6 kN. This impressive force reduction makes our anchor suitable for installation on various roof profiles – be they old or new. This versatility enhances safety and minimizes the risk to the structural integrity of the roof.
//             </BodyCopyText>
//           </div>
//         </div>

//         {/* Features Section */}
//         {/* <div className="space-y-16 mb-20">
//           <HeaderText variant="h2" className="text-center font-semibold tracking-wider text-2xl text-indigo-700 mb-8">
//             Key Features
//           </HeaderText>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {[
//               {
//                 icon: "🔄",
//                 title: "360° Energy Dissipation",
//                 description:
//                   "Ensures consistent force absorption from any fall angle, providing comprehensive user and roof protection.",
//               },
//               {
//                 icon: "🏗️",
//                 title: "Structural Integrity Preservation",
//                 description:
//                   "Minimizes impact forces to less than 6 kN, protecting both new and aging rooftops from damage.",
//               },
//               {
//                 icon: "👥",
//                 title: "Multi-User Certified",
//                 description:
//                   "Tested and compliant to support multiple users simultaneously without compromise.",
//               },
//               {
//                 icon: "🛡️",
//                 title: "Durable & Corrosion Resistant",
//                 description:
//                   "Constructed from high-grade materials to withstand harsh weather and maintain performance.",
//               },
//               {
//                 icon: "⚙️",
//                 title: "Easy Installation",
//                 description:
//                   "Designed for quick and hassle-free setup on diverse roof types, enhancing deployment efficiency.",
//               },
//               {
//                 icon: "😊",
//                 title: "Worry-Free Safety",
//                 description:
//                   "Delivers peace of mind during rooftop work by integrating advanced, patented fall protection technology.",
//               },
//             ].map((feature, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-400 flex flex-col items-center text-center"
//               >
//                 <div className="text-indigo-600 text-5xl mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-semibold text-indigo-800 mb-3 tracking-wide uppercase">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-base leading-relaxed max-w-xs">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div> */}
//         <div className="space-y-16 mb-20">
//           <HeaderText variant="h2" className="text-center font-semibold tracking-wide text-2xl text-[#d42225] mb-8">
//             Key Features
//           </HeaderText>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {[
//               "360-degree energy dissipation",
//               "Maintains integrity of structure",
//               "Absorbs forces and brings them down to less than 6 KN",
//               "Tested and compliant for multi-user protection",
//               "Worry free rooftop experience",
//             ].map((feature, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gradient-to-tr from-[#f9b3b3] via-[#f2dede] to-white rounded-xl border border-[#d42225] shadow-md p-6 flex items-center space-x-3 text-[#d42225] font-semibold text-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
//               >
//                 <span className="inline-block w-5 h-5 bg-[#d42225] rounded-full flex-shrink-0" />
//                 <span className="flex-1">{feature}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
//           {/* First Section - Ordinary Engineering */}
//           <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-gray-200">
//             <Image
//               src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Roof Integrity With DecoTECH green.jpg" // Replace with actual path for the first image
//               alt="Ordinary engineering high stresses"
//               width={400}
//               height={300}
//               className="rounded-md mb-4 object-contain"
//             />
//             <p className="mt-2 text-center text-base font-semibold text-[#d42225]">
//               Ordinary engineering leads to high stresses on sub-structures
//             </p>
//           </div>

//           {/* Second Section - DecoTECH Engineering */}
//           <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 border border-gray-200">
//             <Image
//               src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Roof Integrity With DecoTECH copy_silver.jpg" // Replace with actual path for the second image
//               alt="DecoTECH Energy Dissipating Technology"
//               width={400}
//               height={300}
//               className="rounded-md mb-4 object-contain"
//             />
//             <p className="mt-2 text-center text-base font-semibold text-[#489949]">
//               Our DecoTECH Energy Dissipating Technology ensures negligible impact on sub-structures
//             </p>
//           </div>
//         </div>




//         {/* Full Width Image */}
//         <div className="mb-20">
//           <Image
//             src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/2.jpg"
//             alt="Decotech anchor system close-up"
//             width={1200}
//             height={600}
//             className="rounded-lg w-full object-cover shadow-md"
//           />
//         </div>

//         {/* Test Results Section */}
//         <div className="space-y-12">
//           <HeaderText variant="h2" className="text-center font-semibold tracking-wide">
//             Test Results & Validation
//           </HeaderText>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             <Image
//               src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/1.jpg"
//               alt="Lab testing of Decotech anchor"
//               width={600}
//               height={400}
//               className="rounded-lg w-full object-cover"
//               loading="lazy"
//             />
//             <Image
//               src="https://placehold.co/800x400?text=Test+Result+Video"
//               alt="Decotech video test placeholder"
//               width={600}
//               height={400}
//               className="rounded-lg w-full object-cover"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </ContainerSection>
//     </MainPage>
//   );
// }



import { FixedLifeLineSystem } from "@/data/FixedLifeLineSystem";
import DecotechPage from "./DecoTechPage";


export async function generateStaticParams() {
  // Should return an array like: [{slug: "Roof_Lifeline"}, ...]
  return FixedLifeLineSystem.map(product => ({
    slug: product.slug, // Must be string not undefined/null!
  }));
}

export default DecotechPage;