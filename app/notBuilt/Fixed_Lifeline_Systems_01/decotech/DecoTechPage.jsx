// "use client";
// import Image from "next/image";
// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import MainPage from "@/components/views/MainPage";
// import ContainerSection from "@/components/views/ContainerSection";
// import { motion, AnimatePresence } from "framer-motion";
// import BannerImage from "@/components/views/BannerImage";
// import { useState } from "react";

// const fadeUp = {
//   initial: { opacity: 0, y: 40 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };
// const fadeIn = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const tabs = [
//   { id: 1, label: "Fall Protection" },
//   { id: 2, label: "Roof Integrity" },
//   { id: 3, label: "Structural Load Anaylsis" },
// ];

// // Tab 1 component with its own layout/design
// function Tab1Content() {
//   return (
//     <div className="grid grid-cols-12 gap-4 items-start">
//       <div className="col-span-12 md:col-span-6 lg:col-span-5  flex justify-center md:justify-start">
//         <Image
//           src={`/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/360 angle.jpg`}
//           alt="Fixed Lifeline System"
//           width={1000}
//           height={1000}
//           className="w-full h-auto object-contain rounded-sm"
//         />
//       </div>
//       <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:px-[93.5px]">
//         <HeaderText className="text-left mb-[25px]">Fall Protection From <span className="text-[#d42225]">Any Angle</span></HeaderText>
//         <BodyCopyText className="space-y-4 w-full text-left">
//           Regardless of the direction or angle from which a fall occurs, the 360-degree energy dissipating deploying feature ensures that the forces are dissipated protecting the user and the roof structure. This is crucial because falls can occur in various orientations, and the anchor needs to be effective regardless of the fall angle.
//         </BodyCopyText>
//       </div>
//     </div>
//   );
// }

// // Tab 2 component customized independently
// function Tab2Content() {
//   return (
//     <div>
//       <div className="hidden md:grid grid-cols-12 gap-4 items-start">
//         <div className="col-span-12 md:col-span-6 lg:col-span-5  flex flex-col justify-center md:justify-start space-y-4">
//           <div className="flex flex-col gap-4">
//             <Image
//               src={`/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Roof Integrity With DecoTECH copy_silver.jpg`}
//               alt="Fixed Lifeline System"
//               width={1000}
//               height={1000}
//               className="w-full  h-auto object-contain rounded-sm"
//             />
//             <BodyCopyText className="space-y-4 w-full text-left text-[#d42225]">
//               Ordinary engineering leads to high stresses on sub-structures
//             </BodyCopyText>
//           </div>
//           <div className="flex flex-col gap-4">
//             <Image
//               src={`/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Roof Integrity With DecoTECH green.jpg`}
//               alt="Fixed Lifeline System"
//               width={1000}
//               height={1000}
//               className="w-full  h-auto object-contain rounded-sm"
//             />
//             <BodyCopyText className="space-y-4 w-full text-left text-[#489949]">
//               Our DecoTECH Energy Dissipating Technology ensures negligible impact on sub-structures
//             </BodyCopyText>
//           </div>
//         </div>
//         <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:px-[93.5px]">
//           <HeaderText className="text-left mb-[25px]">Roof Integrity With <span className="text-[#d42225]">DecoTECH™</span></HeaderText>
//           <BodyCopyText className="space-y-4 w-full text-left">
//             In case of a fall, our anchor activates its innovative DecoTECH Energy Dissipating Technology. This technology effectively absorbs and dissipates forces, ensuring that the impact on the roof structure is minimal, reducing it to less than 6 kN. This impressive force reduction makes our anchor suitable for installation on various roof profiles – be they old or new. This versatility enhances safety and minimizes the risk to the structural integrity of the roof.
//           </BodyCopyText>
//         </div>
//       </div>
//       <div className="grid grid-cols-12 md:hidden gap-4 items-start ">
//         <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:px-[93.5px]">
//           <HeaderText className="text-left mb-[25px]">Roof Integrity With <span className="text-[#d42225]">DecoTECH™</span></HeaderText>
//           <BodyCopyText className="space-y-4 w-full text-left">
//             In case of a fall, our anchor activates its innovative DecoTECH Energy Dissipating Technology. This technology effectively absorbs and dissipates forces, ensuring that the impact on the roof structure is minimal, reducing it to less than 6 kN. This impressive force reduction makes our anchor suitable for installation on various roof profiles – be they old or new. This versatility enhances safety and minimizes the risk to the structural integrity of the roof.
//           </BodyCopyText>
//         </div>
//         <div className="col-span-12 md:col-span-6 lg:col-span-5  flex flex-col justify-center md:justify-start space-y-4">
//           <div className="flex flex-col gap-4">
//             <Image
//               src={`/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Roof Integrity With DecoTECH copy_silver.jpg`}
//               alt="Fixed Lifeline System"
//               width={1000}
//               height={1000}
//               className="w-full  h-auto object-contain rounded-sm"
//             />
//             <BodyCopyText className="space-y-4 w-full text-left text-[#d42225]">
//               Ordinary engineering leads to high stresses on sub-structures
//             </BodyCopyText>
//           </div>
//           <div className="flex flex-col gap-4">
//             <Image
//               src={`/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Roof Integrity With DecoTECH green.jpg`}
//               alt="Fixed Lifeline System"
//               width={1000}
//               height={1000}
//               className="w-full  h-auto object-contain rounded-sm"
//             />
//             <BodyCopyText className="space-y-4 w-full text-left text-[#489949]">
//               Our DecoTECH Energy Dissipating Technology ensures negligible impact on sub-structures
//             </BodyCopyText>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// // Tab 3 component with another unique layout
// function Tab3Content() {
//   return (
//     <div className="grid grid-cols-12 gap-4 items-start">
//       <div className="col-span-12 md:col-span-6 lg:col-span-5  flex justify-center md:justify-start">
//         <Image
//           src={`/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/2.jpg`}
//           alt="Fixed Lifeline System"
//           width={1000}
//           height={1000}
//           className="w-full h-auto object-contain rounded-sm"
//         />
//       </div>
//       <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:px-[93.5px]">
//         <HeaderText className="text-left mb-[25px]">Structural Load Anaylsis</HeaderText>
//         <BodyCopyText className="space-y-4 w-full text-left">
//           When a fall happens on a lifeline system, the force travels directly into the roof structure. This is where the difference between DecoTECH and traditional competitor roof posts becomes critical. In a fall, competitor posts create a sudden force spike of 10–12 kN, far above the safe limit the roof sheet and purlins can withstand. This violent impact travels straight into the structure, increasing the risk of sheet tearing, deformation, or fastener failure. DecoTECH, on the other hand, keeps the load consistently below 6 kN through its engineered energy-dissipating mechanism. Instead of a sharp shock, the force is smoothly absorbed, controlled, and dissipated—protecting the roof, preserving the sub-structure, and ensuring the worker’s safety in one seamless response.
//         </BodyCopyText>
//       </div>
//     </div>
//   );
// }

// const Feature = [
//   {
//     name: "360-degree energy dissipation",
//     desc: "",
//   },
//   {
//     name: "Maintains integrity of structure",
//     desc: "",
//   },
//   {
//     name: "Absorbs forces & brings them down to less than 6 KN",
//     desc: "",
//   },
//   {
//     name: "Tested & compliant for multi-user protection",
//     desc: "",
//   },
//   {
//     name: "Worry free rooftop experience",
//     desc: "",
//   }
// ]

// export default function DecotechPage() {
//   const [hoverIndex, setHoverIndex] = useState(null);
//   const [activeTab, setActiveTab] = useState(1);

//   // Render tab content based on activeTab state
//   function renderActiveTabContent() {
//     switch (activeTab) {
//       case 1:
//         return <Tab1Content />;
//       case 2:
//         return <Tab2Content />;
//       case 3:
//         return <Tab3Content />;
//       default:
//         return null;
//     }
//   }
//   return (
//     <MainPage className="">
//       <BannerImage
//         image="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Banner.jpg"
//       // mobileImage={`https://placehold.co/600x400?text=Decotech Image`}
//         text={`DecoTECH`}
//       />
//       <ContainerSection>
//         <div className="">
//           <p className="text-[#d42225] text-sm opacity-60 font-normal drop-shadow-lg mb-[10px]">
//             Distinctive Innovation
//           </p>
//           <HeaderText className="text-left mb-[25px]">DecoTECH Energy Dissipating Technology</HeaderText>
//           <BodyCopyText className="space-y-4 w-full text-left">
//             Our roof anchors are designed to enhance fall protection systems on roofs by dissipating and reducing the forces generated during a fall. These anchors are crucial for maintaining the structural integrity of the roof and protecting individuals working at heights.
//           </BodyCopyText>
//           <BodyCopyText className="space-y-4 w-full text-left">
//             Our posts typically consist of a sturdy structure that can securely anchor a worker’s fall protection device, and they incorporate force absorbing and dissipating mechanisms.
//           </BodyCopyText>
//         </div>
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 overflow-hidden">
//           {Feature.map((feature, index) => (
//             <div
//               key={index}
//               onMouseEnter={() => setHoverIndex(index)}
//               onMouseLeave={() => setHoverIndex(null)}
//               className="
//                       cursor-pointer flex flex-col items-center justify-center text-center align-middle
//                       p-4 h-40
//                       border-r border-opacity-5
//                       transition-colors duration-300 ease-in-out
//                     "
//               style={{ minHeight: '6rem' }}
//             >
//               <motion.div
//                 layout
//                 initial={{ y: 0, color: "#000" }}
//                 animate={hoverIndex === index ? { color: "#d42225" } : { y: 0, color: "#000" }}
//                 transition={{ type: "spring", stiffness: 300, damping: 40 }}
//                 className="text-[14px] z-10 pointer-events-none"
//               >
//                 {feature.name}
//               </motion.div>
//             </div>
//           ))}
//         </div> */}
//         <div className="block md:hidden space-y-8">
//           {Feature.map((feature, index) => (
//             <div key={index}
//               onMouseEnter={() => setHoverIndex(index)}
//               onMouseLeave={() => setHoverIndex(null)}
//               className="border-b border-black border-opacity-20 pb-6 last:border-b-0 cursor-pointer ">
//               <motion.div
//                 layout
//                 initial={{ y: 0, color: "#000" }}
//                 animate={hoverIndex === index ? { color: "#d42225" } : { y: 0, color: "#000" }}
//                 transition={{ type: "spring", stiffness: 300, damping: 40 }}
//                 className="text-[14px] z-10 pointer-events-none text-center "
//               >
//                 {feature.name}
//               </motion.div>
//             </div>
//           ))}
//         </div>


//         <div className="hidden md:block">
//           <div className="flex flex-wrap divide-x divide-black divide-opacity-20 ">
//             {Feature.map((feature, index) => (
//               <div
//                 onMouseEnter={() => setHoverIndex(index)}
//                 onMouseLeave={() => setHoverIndex(null)}
//                 key={index}
//                 className={`w-[20%] px-4 border-b p-4 cursor-pointer flex flex-col items-center justify-center text-center align-middle h-40
//                                 ${index > 3 - 4 ? "border-b-0" : ""} 
//                                 ${(index + 1) % 4 === 0 ? "border-r-0" : ""}`}
//               >
//                 <motion.div
//                   layout
//                   initial={{ y: 0, color: "#000" }}
//                   animate={hoverIndex === index ? { color: "#d42225" } : { y: 0, color: "#000" }}
//                   transition={{ type: "spring", stiffness: 300, damping: 40 }}
//                   className="text-[14px] z-10 pointer-events-none"
//                 >
//                   {feature.name}
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="w-full max-w-4xl mx-auto p-4">
//           <div className="flex border-b border-gray-300 relative">
//             {tabs.map((tab) => (
//               <div
//                 key={tab.id}
//                 className={`cursor-pointer flex-1 text-center py-3 font-medium ${activeTab === tab.id ? "text-[#d42225]" : "text-gray-600"
//                   }`}
//                 onClick={() => setActiveTab(tab.id)}
//               >
//                 {tab.label}
//               </div>
//             ))}
//             <motion.div
//               layoutId="underline"
//               className="absolute bottom-0 h-1 bg-red-600 rounded"
//               style={{
//                 width: `calc(100% / ${tabs.length})`,
//                 left: `calc((100% / ${tabs.length}) * ${activeTab - 1})`,
//               }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             />
//           </div>
//         </div>
//         <div className="mt-6 min-h-[8rem]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.3 }}
//               className=""
//             >
//               {renderActiveTabContent()}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </ContainerSection>
//     </MainPage>
//   );
// }


// "use client";
// import Image from "next/image";
// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import MainPage from "@/components/views/MainPage";
// import ContainerSection from "@/components/views/ContainerSection";
// import BannerImage from "@/components/views/BannerImage";

// const Feature = [
//   { name: "360-degree energy dissipation" },
//   { name: "Maintains integrity of structure" },
//   { name: "Absorbs forces & brings them down to less than 6 KN" },
//   { name: "Tested & compliant for multi-user protection" },
//   { name: "Worry free rooftop experience" }
// ];

// export default function DecotechPage() {
//   return (
//     <MainPage className="">
//       <BannerImage
//         image="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Banner.jpg"
//         text={`DecoTECH`}
//       />
//       <ContainerSection>

//         {/* SECTION 1: Distinctive Innovation (Image Left, Features/Text Right) */}
//         <div className="grid grid-cols-12 gap-8 items-center mb-20">
//           {/* Green Area: Image */}
//           <div className="col-span-12 md:col-span-6 lg:col-span-5 flex justify-center md:justify-start">
//             <div className="w-full relative bg-green-50 rounded-sm overflow-hidden">
//               {/* Using placeholder as main image wasn't specified for this exact section, utilizing banner logic or generic */}
//               <Image
//                 src="https://placehold.co/600x600/e0ffe0/000000?text=Distinctive+Innovation+(Image)"
//                 alt="Distinctive Innovation"
//                 width={1000}
//                 height={1000}
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>

//           {/* Text Area */}
//           <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:px-8">
//             <p className="text-[#d42225] text-sm opacity-60 font-normal drop-shadow-lg mb-[10px]">
//               Distinctive Innovation
//             </p>
//             <HeaderText className="text-left mb-[25px]">
//               Our roof anchors are designed to enhance fall protection
//             </HeaderText>
//             <BodyCopyText className="space-y-4 w-full text-left mb-6">
//               Our roof anchors are designed to enhance fall protection systems on roofs by dissipating and reducing the forces generated during a fall. These anchors are crucial for maintaining the structural integrity of the roof.
//             </BodyCopyText>

//             {/* Feature List embedded here as per wireframe */}
//             <ul className="space-y-2">
//               {Feature.map((feature, index) => (
//                 <li key={index} className="flex items-start text-sm font-medium text-gray-800">
//                   <span className="mr-2 text-[#d42225]">•</span>
//                   {feature.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* SECTION 2: Fall Protection (Image Left, Text Right) */}
//         <div className="grid grid-cols-12 gap-8 items-center mb-20 border-t pt-10 border-gray-100">
//           {/* Green Area: Image */}
//           <div className="col-span-12 md:col-span-6 lg:col-span-5 flex justify-center md:justify-start">
//             <Image
//               src={`/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/360 angle.jpg`}
//               alt="Fall Protection"
//               width={1000}
//               height={1000}
//               className="w-full h-auto object-contain rounded-sm bg-green-50"
//             />
//           </div>

//           {/* Text Area */}
//           <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:px-[93.5px]">
//             <HeaderText className="text-left mb-[25px]">
//               Fall Protection From <span className="text-[#d42225]">Any Angle</span>
//             </HeaderText>
//             <BodyCopyText className="space-y-4 w-full text-left font-bold text-gray-900">
//               Regardless of the direction or angle from which a fall occurs, the 360-degree energy dissipating deploying feature ensures safety.
//             </BodyCopyText>
//             <BodyCopyText className="space-y-4 w-full text-left mt-4">
//               Regardless of the direction or angle from which a fall occurs, the 360-degree energy dissipating deploying feature ensures that the forces are dissipated protecting the user and the roof structure.
//             </BodyCopyText>
//           </div>
//         </div>

//         {/* SECTION 3: Roof Integrity (Text Left, Two Images Right) */}
//         <div className="grid grid-cols-12 gap-8 items-start mb-20 border-t pt-10 border-gray-100">
//           {/* Text Area (Left) */}
//           <div className="col-span-12 md:col-span-5">
//             <HeaderText className="text-left mb-[25px]">
//               Roof Integrity With <span className="text-[#d42225]">DecoTECH™</span>
//             </HeaderText>
//             <BodyCopyText className="space-y-4 w-full text-left font-bold">
//               In case of a fall, our anchor activates its innovative DecoTECH Energy Dissipating Technology.
//             </BodyCopyText>
//             <BodyCopyText className="space-y-4 w-full text-left mt-4">
//               This technology effectively absorbs and dissipates forces, ensuring that the impact on the roof structure is minimal, reducing it to less than 6 kN. This impressive force reduction makes our anchor suitable for installation on various roof profiles.
//             </BodyCopyText>
//           </div>

//           {/* Two Green Images (Right) */}
//           <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4">
//             <div className="flex flex-col gap-2">
//               <Image
//                 src={`/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Roof Integrity With DecoTECH copy_silver.jpg`}
//                 alt="High Stress"
//                 width={1000}
//                 height={1000}
//                 className="w-full h-auto object-contain rounded-sm bg-green-50"
//               />
//               <p className="text-xs text-[#d42225] font-semibold">Ordinary engineering</p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <Image
//                 src={`/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Roof Integrity With DecoTECH green.jpg`}
//                 alt="DecoTECH"
//                 width={1000}
//                 height={1000}
//                 className="w-full h-auto object-contain rounded-sm bg-green-50"
//               />
//               <p className="text-xs text-[#489949] font-semibold">DecoTECH Technology</p>
//             </div>
//           </div>
//         </div>

//         {/* SECTION 4: Structural Load Analysis (Videos Top, Image Left/Text Right Bottom) */}
//         <div className="mb-10 border-t pt-10 border-gray-100">
//           <div className="text-center md:text-left mb-8">
//             <HeaderText className="text-left mb-[25px]">Structural Load Analysis</HeaderText>
//           </div>

//           {/* Yellow Area: Two Videos Side by Side */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
//             <div className="w-full aspect-video bg-yellow-100 flex items-center justify-center rounded-sm relative overflow-hidden">
//               {/* Placeholder for Video 1 */}
//               <video className="w-full h-full object-cover" controls poster="https://placehold.co/600x400/fff9c4/000000?text=Video+1+Placeholder">
//                 <source src="movie.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <div className="w-full aspect-video bg-yellow-100 flex items-center justify-center rounded-sm relative overflow-hidden">
//               {/* Placeholder for Video 2 */}
//               <video className="w-full h-full object-cover" controls poster="https://placehold.co/600x400/fff9c4/000000?text=Video+2+Placeholder">
//                 <source src="movie.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>

//           {/* Bottom Row: Green Image Left, Text Right */}
//           <div className="grid grid-cols-12 gap-8 items-center">
//             <div className="col-span-12 md:col-span-6 lg:col-span-5">
//               <Image
//                 src={`/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/2.jpg`}
//                 alt="Load Analysis"
//                 width={1000}
//                 height={1000}
//                 className="w-full h-auto object-contain rounded-sm bg-green-50"
//               />
//             </div>
//             <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:px-[93.5px]">
//               <BodyCopyText className="space-y-4 w-full text-left font-bold">
//                 When a fall happens on a lifeline system, the force travels directly into the roof structure.
//               </BodyCopyText>
//               <BodyCopyText className="space-y-4 w-full text-left mt-4">
//                 DecoTECH keeps the load consistently below 6 kN through its engineered energy-dissipating mechanism. Instead of a sharp shock, the force is smoothly absorbed, controlled, and dissipated.
//               </BodyCopyText>
//             </div>
//           </div>
//         </div>

//       </ContainerSection>
//     </MainPage>
//   );
// }

"use client";
import Image from "next/image";
import { BodyCopyText } from "@/components/views/BodyCopyText";
import { HeaderText } from "@/components/views/HeaderText";
import MainPage from "@/components/views/MainPage";
import ContainerSection from "@/components/views/ContainerSection";
import { motion } from "framer-motion";
import { container, containerLeft, fadeLeft, fadeUp } from "../_components/fadeUp";
// --- CUSTOM VIEWPORT CONFIGURATION ---
// You can adjust these pixel values to control when the layout switches
// from mobile (stacked) to desktop (overlay).
const customBreakpoints = {
  desktop: "min-[1024px]", // Triggers the side-by-side/overlay view
};

const Feature = [
  { name: "360-degree energy dissipation" },
  { name: "Maintains integrity of structure" },
  { name: "Absorbs forces & brings them down to less than 6 KN" },
  { name: "Tested & compliant for multi-user protection" },
  { name: "Worry free rooftop experience" }
];

export default function DecotechPage() {
  return (
    <MainPage noGapTop className="mb-0 overflow-x-hidden">

      <section
        className="w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/new changes/decotech slider 1.jpg')",
        }}
      ></section>

      {/* ================= DECOTECH SECTION ================= */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center -mt-32 lg:-mt-40"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/new changes/decotech slider.jpg')",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 xl:px-32 grid lg:grid-cols-2 gap-10 items-center">

          {/* ================= LEFT IMAGE ================= */}
          {/* LEFT IMAGE */}
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
flex justify-center lg:justify-start
lg:-mt-[320px]
lg:-ml-[80px]
xl:-ml-[120px]
2xl:-ml-[160px]
"
          >
            <Image
              src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/new changes/decotech Product image.png"
              alt="SafePro"
              width={450}
              height={650}
              className="
      object-contain
      w-[320px]        /* mobile */
      md:w-[380px]
      lg:w-[620px]     /* bigger desktop image */
      xl:w-[720px]     /* even bigger on large screens */
      mx-auto lg:mx-0
    "
            />
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[600px] lg:max-w-[560px] mt-8 lg:mt-0 px-2 sm:px-0"
          >

            {/* TITLE */}


            {/* PARAGRAPHS */}
            <p className=" text-gray-700 font-raleway leading-relaxed text-[14px] sm:text-[15px] md:text-[16px]">
              Our roof anchors are designed to enhance fall protection systems
              on roofs by dissipating and reducing the forces generated during
              a fall. These anchors are crucial for maintaining the structural
              integrity of the roof and protecting individuals working at heights.
            </p>

            <p className="mt-4 text-gray-700 font-raleway leading-relaxed text-[14px] sm:text-[15px] md:text-[16px]">
              Our posts typically consist of a sturdy structure that can securely
              anchor a worker's fall protection device, and they incorporate
              force absorbing and dissipating mechanisms.
            </p>

            {/* FEATURES */}
            <ul className="mt-6 space-y-2">
              {Feature.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-[14px] sm:text-[15px] md:text-[16px]"
                >
                  <span className="text-black font-bold">•</span>
                  {item.name}
                </li>
              ))}
            </ul>

          </motion.div>

        </div>
      </section>


      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-start lg:items-center pt-20 lg:pt-0"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/new changes/decotech slider 2.jpg')",
        }}
      >
        <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-20 xl:px-32 grid lg:grid-cols-5 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="lg:col-span-2 max-w-[520px] lg:max-w-[500px]"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[30px] md:text-[34px] lg:text-[40px] font-raleway font-bold leading-tight">
              Fall Protection <br />
              From <span className="text-red-500">Any Angle</span>
            </h2>

            <p className="mt-6 text-gray-700 font-raleway leading-relaxed text-[15px] md:text-[16px]">
              Regardless of the direction or angle from which a fall occurs,
              the 360-degree energy dissipating deploying feature ensures that
              the forces are dissipated protecting the user and the roof
              structure. This is crucial because falls can occur in various
              orientations, and the anchor needs to be effective regardless
              of the fall angle.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="lg:col-span-3 flex justify-center lg:justify-end mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[620px] md:max-w-[680px] lg:max-w-[720px] h-[320px] md:h-[380px] lg:h-[520px]">
              <Image
                src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/new changes/Fall Protection from any angle.png"
                alt="360 protection"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

        </div>
      </section>

      <section
        className="relative w-full min-h-[700px] bg-cover bg-center flex items-start lg:items-center pt-16 lg:pt-0"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/new changes/Roof Inegrity With DecoTech.jpg')",
        }}
      >
        <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-20 xl:px-32 grid lg:grid-cols-5 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="lg:col-span-2 max-w-[520px] lg:max-w-[500px]"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[30px] md:text-[34px] lg:text-[40px] font-bold font-raleway leading-tight mt-6 lg:mt-0">
              Roof Integrity With <br />
              <span className="text-red-500">DecoTECH™</span>
            </h2>

            <p className="mt-6 text-gray-700 font-raleway leading-relaxed text-[15px] md:text-[16px]">
              In case of a fall, our anchor activates its innovative DecoTECH
              Energy Dissipating Technology. This technology effectively absorbs
              and dissipates forces, ensuring that the impact on the roof structure
              is minimal, reducing it to less than 6 kN.
            </p>

            <p className="mt-4 text-gray-700 font-raleway leading-relaxed text-[15px] md:text-[16px]">
              This impressive force reduction makes our anchor suitable for
              installation on various roof profiles – be they old or new.
              This versatility enhances safety and minimizes the risk to the
              structural integrity of the roof.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="lg:col-span-3 flex justify-center lg:justify-end mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[620px] md:max-w-[680px] lg:max-w-[720px] h-[320px] md:h-[380px] lg:h-[520px]">
              <Image
                src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/new changes/Roof Inegrity With DecoTechtm.png"
                alt="Roof integrity comparison"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

        </div>
      </section>
      {/* <section
        className="relative w-full min-h-[700px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/test-bg.jpg')",
        }}
      >
        <div className="max-w-[1400px] mx-auto w-full px-6 grid lg:grid-cols-2 gap-10 items-center">

        
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[650px] h-[420px] lg:h-[500px]">
              <Image
                src="/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/drop-test-left.png"
                alt="DecoTECH vs Competitor"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

      
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[650px] h-[420px] lg:h-[500px]">
              <Image
                src="/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/drop-test-right.png"
                alt="Dynamic Drop Test"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

        </div>
      </section> */}


      <section
        className="relative w-full min-h-[650px] bg-cover bg-center flex items-center py-20"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/new changes/decotech slider.jpg')",
        }}
      >
        <div className="max-w-[1400px] mx-auto w-full px-6">

          {/* TEXT BELOW IMAGES */}
          <div className="mt-8 max-w-[700px] mx-auto text-center mb-10">

            <h2 className="text-[40px] font-bold font-raleway">
              Dynamic <span className="text-red-500 font-raleway">Drop Test</span>
            </h2>

            <p className="mt-4  text-[18px] font-raleway">
              When a dynamic drop test is conducted,
              these forces are generated:
            </p>

          </div>

          {/* IMAGE ROW */}
          <div className="grid lg:grid-cols-2 gap-14">

            {/* IMAGE 1 */}
            <div className="w-full rounded-md overflow-hidden shadow-lg  flex items-center justify-center p-4 lg:h-[480px]">
              <img
                src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/new changes/Graph left.jpg"
                alt="Dynamic Test 1"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="w-full rounded-md overflow-hidden shadow-lg flex items-center justify-center p-4 lg:h-[480px]">
              <img
                src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/new changes/Graph Right.jpg"
                alt="Dynamic Test 2"
                className="w-full h-auto object-contain"
              />
            </div>

          </div>


          {/* TEXT BELOW IMAGES */}


        </div>
      </section>





      {/* <section
        className="relative w-full min-h-[650px] bg-cover bg-center flex items-center py-20"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/new changes/Video slider.jpg')",
        }}
      >
        <div className="max-w-[1400px] mx-auto w-full px-6 grid lg:grid-cols-2 gap-14">

         
          <div className="w-full h-[380px] lg:h-[420px] rounded-md overflow-hidden shadow-lg bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://placehold.co/600x400/fff9c4/b7a300?text=Video+1+Placeholder"
            >
              <source src="/video/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-full h-[380px] lg:h-[420px] rounded-md overflow-hidden shadow-lg bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://placehold.co/600x400/fff9c4/b7a300?text=Video+2+Placeholder"
            >
              <source src="/video/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </section> */}

    </MainPage>
  );
}