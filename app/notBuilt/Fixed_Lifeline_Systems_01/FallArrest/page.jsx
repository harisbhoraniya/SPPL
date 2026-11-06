
// import { FixedLifeLineSystem } from "@/data/FixedLifeLineSystem";
// import Image from "next/image";
// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import ContainerSection from "@/components/views/ContainerSection";
// import MainPage from "@/components/views/MainPage";
// import { CheckCircle } from "lucide-react"; // Optional: nice icon

// export async function generateStaticParams() {
//   return FixedLifeLineSystem.map((product) => ({
//     slug: product.slug,
//   }));
// }

// export default function FallArrest() {
//   const features = [
//     "Integrated Energy Absorber",
//     "Anti-Inversion Mechanism",
//     "Intermediate Pass-through",
//     "No Maneuvering Required",
//     "One-Hand Operation",
//   ];

//   return (
//     <MainPage className="mt-10">
//       <ContainerSection>
//         <HeaderText variant="h1" className="text-center mb-10">
//           Fall Arrester Device
//         </HeaderText>

//         <div className="flex flex-col lg:flex-row gap-10">
//           <div className="relative w-full lg:w-1/2 aspect-video rounded-lg overflow-hidden shadow-md">
//             <Image
//               src="/img/Products/Fixed Lifeline System/Vertical Lifeline/11 Fall Arrest/Fall Arrest.jpg"
//               alt="Fall Arrest"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="w-full lg:w-1/2 space-y-6">
//             <BodyCopyText>
//               The fall arrester is an advanced safety device
//               designed to protect workers at heights. It locks
//               instantly onto a lifeline during a sudden descent,
//               minimizing the risk of serious injury or fatality.
//             </BodyCopyText>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm"
//                 >
//                   <CheckCircle
//                     className="text-green-600 mt-1"
//                     size={20}
//                   />
//                   <BodyCopyText className="font-medium">
//                     {feature}
//                   </BodyCopyText>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </ContainerSection>
//     </MainPage>
//   );
// }

// const Feature = [
//   {
//     name: "Integrated energy absorber",
//     name1: "Integrated",
//     name2: "Energy Absorber",
//     desc: "",
//   },
//   {
//     name: "Anti-inversion mechanism",
//     name1: "Anti-inversion",
//     name2: "Mechanism",
//     desc: "",
//   },
//   {
//     name: "Intermediate pass through",
//     name1: "Intermediate",
//     name2: "Pass Through",
//     desc: "",
//   },
//   {
//     name: "No maneuvering",
//     name1: "No",
//     name2: "Maneuvering",
//     desc: "",
//   },
//   {
//     name: "Single hand operation",
//     name1: "Single Hand",
//     name2: "Operation",
//     desc: "",
//   }
// ]



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

// const Feature = [
//   {
//     name: "Durable Construction",
//     name1: "Integrated",
//     name2: "Energy Absorber",
//     desc: "Made from corrosion-resistant stainless steel for long-lasting performance in harsh environments",
//   },
//   {
//     name: "Easy Installation",
//     name1: "Anti-inversion",
//     name2: "Mechanism",
//     desc: "Quick, single-hand installation with an integrated mechanism that prevents upside-down mounting",
//   },
//   {
//     name: "Smooth Operation",
//     name1: "Intermediate",
//     name2: "Pass Through",
//     desc: "Hands-free trailing during climbs and descents, automatically bypassing intermediate cable guides",
//   },
//   {
//     name: "Automatic Reset & Dual Locking",
//     name1: "No",
//     name2: "Maneuvering",
//     desc: "Spring-activated mechanisms return the device to its initial position, while dual locks prevent accidental unlocking",
//   },
//   {
//     name: "Enhanced Safety",
//     name1: "Single Hand",
//     name2: "Operation",
//     desc: "Instantly locks in the event of a fall, with a built-in metal shock absorber to reduce impact forces",
//   },
//   {
//     name: "Inspection Friendly",
//     name1: "Single Hand",
//     name2: "Operation",
//     desc: "Equipped with a fall indicator and compatible with 8mm steel vertical lifelines for efficient inspection and use",
//   }
// ]


// export default function FallArrest() {
//   const [hoverIndex, setHoverIndex] = useState(null);
//   return (

//       <MainPage className="">
//         <BannerImage
//           image="https://placehold.co/1400x300?text=Fall Arrest Image"
//         // mobileImage={`https://placehold.co/600x400?text=Decotech Image`}
//         />
//         <ContainerSection>
//           <div className="">
//             <HeaderText className="text-left mb-[25px]">Automatic Pass Through Fall Arrester</HeaderText>
//             <BodyCopyText className="space-y-4 w-full text-left">
//               The Automatic Pass Through Fall Arrester is a perfect solution for vertical lifeline safety. Designed for professional use, it offers smooth, hands-free operation while climbing or descending and locks instantly in the event of a fall. Constructed from corrosion-resistant stainless steel with an integrated shock absorber and fall indicator, it ensures durability, safety, and easy inspection. Compatible with various vertical lifeline systems, this device combines efficiency and protection for work at height.
//             </BodyCopyText>

//           </div>
//           <div className="block md:hidden space-y-8">
//             {Feature.map((feature, index) => (
//               <div
//                 key={index}
//                 onMouseEnter={() => setHoverIndex(index)}
//                 onMouseLeave={() => setHoverIndex(null)}
//                 className="border-b border-black border-opacity-20 pb-6 last:border-b-0 cursor-pointer text-center"
//               >
//                 <motion.div
//                   layout
//                   initial={{ y: 0, color: "#000" }}
//                   animate={hoverIndex === index ? { color: "#d42225" } : { y: 0, color: "#000" }}
//                   transition={{ type: "spring", stiffness: 300, damping: 40 }}
//                   className="text-[18px] z-10 pointer-events-none mb-2 font-bold"
//                 >
//                   {feature.name}
//                 </motion.div>
//                 <motion.div
//                   layout
//                   initial={{ y: 0, color: "#000" }}
//                   animate={hoverIndex === index ? { color: "#d42225" } : { y: 0, color: "#000" }}
//                   transition={{ type: "spring", stiffness: 300, damping: 40 }}
//                   className="text-[14px] z-10 pointer-events-none w-full"
//                 >
//                   {feature.desc}
//                 </motion.div>
//               </div>
//             ))}
//           </div>

//           <div className="hidden lg:block">
//             {/* Desktop: 3 per row */}
//             <div className="grid grid-cols-3 gap-x-4 gap-y-8">
//               {Feature.map((feature, index) => (
//                 <div
//                   key={index}
//                   onMouseEnter={() => setHoverIndex(index)}
//                   onMouseLeave={() => setHoverIndex(null)}
//                   className={`p-4 cursor-pointer flex flex-col items-center justify-center text-center h-40 first:border-r last:border-r-0 border-r border-black border-opacity-20 last-of-type:border-b-0 even:border-b-0 ${index === 2 ? "border-r-0" : ""}`}
//                 >
//                   <motion.div
//                     layout
//                     initial={{ y: 0, color: "#000" }}
//                     animate={hoverIndex === index ? { color: "#d42225" } : { y: 0, color: "#000" }}
//                     transition={{ type: "spring", stiffness: 300, damping: 40 }}
//                     className="text-[18px] z-10 pointer-events-none mb-2 font-bold"
//                   >
//                     {feature.name}
//                   </motion.div>
//                   <motion.div
//                     layout
//                     initial={{ y: 0, color: "#000" }}
//                     animate={hoverIndex === index ? { color: "#d42225" } : { y: 0, color: "#000" }}
//                     transition={{ type: "spring", stiffness: 300, damping: 40 }}
//                     className="text-[14px] z-10 pointer-events-none w-full"
//                   >
//                     {feature.desc}
//                   </motion.div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="hidden md:block lg:hidden">
//             {/* Tablet: 2 per row */}
//             <div className="grid grid-cols-2 gap-x-4 gap-y-8">
//               {Feature.map((feature, index) => (
//                 <div
//                   key={index}
//                   onMouseEnter={() => setHoverIndex(index)}
//                   onMouseLeave={() => setHoverIndex(null)}
//                   className={`p-4 cursor-pointer flex flex-col items-center justify-center text-center h-40 first:border-r last:border-r-0 border-r border-black border-opacity-20  last-of-type:border-b-0 even:border-b-0 even:border-r-0`}
//                 >
//                   <motion.div
//                     layout
//                     initial={{ y: 0, color: "#000" }}
//                     animate={hoverIndex === index ? { color: "#d42225" } : { y: 0, color: "#000" }}
//                     transition={{ type: "spring", stiffness: 300, damping: 40 }}
//                     className="text-[18px] z-10 pointer-events-none mb-2 font-bold"
//                   >
//                     {feature.name}
//                   </motion.div>
//                   <motion.div
//                     layout
//                     initial={{ y: 0, color: "#000" }}
//                     animate={hoverIndex === index ? { color: "#d42225" } : { y: 0, color: "#000" }}
//                     transition={{ type: "spring", stiffness: 300, damping: 40 }}
//                     className="text-[14px] z-10 pointer-events-none w-full"
//                   >
//                     {feature.desc}
//                   </motion.div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </ContainerSection>
//       </MainPage>
//   );
// }


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

// const Feature = [
//   {
//     name: "Durable Construction",
//     image: "https://placehold.co/600x400",
//     desc: "Made from corrosion-resistant stainless steel for long-lasting performance in harsh environments",
//   },
//   {
//     name: "Easy Installation",
//     image: "https://placehold.co/600x400",
//     desc: "Quick, single-hand installation with an integrated mechanism that prevents upside-down mounting",
//   },
//   {
//     name: "Smooth Operation",
//     image: "https://placehold.co/600x400",
//     desc: "Hands-free trailing during climbs and descents, automatically bypassing intermediate cable guides",
//   },
//   {
//     name: "Automatic Reset & Dual Locking",
//     image: "https://placehold.co/600x400",
//     desc: "Spring-activated mechanisms return the device to its initial position, while dual locks prevent accidental unlocking",
//   },
//   {
//     name: "Enhanced Safety",
//     image: "https://placehold.co/600x400",
//     desc: "Instantly locks in the event of a fall, with a built-in metal shock absorber to reduce impact forces",
//   },
//   {
//     name: "Inspection Friendly",
//     image: "https://placehold.co/600x400",
//     desc: "Equipped with a fall indicator and compatible with 8mm steel vertical lifelines for efficient inspection and use",
//   }
// ]


// export default function FallArrest() {
//   const [hoverIndex, setHoverIndex] = useState(null);
//   return (
//     <>
//       <MainPage>
//         <div className="relative w-full flex items-center overflow-hidden">
//           <div className="w-full relative z-0">
//             <Image
//               src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Slider.jpg"
//               alt="Distinctive Innovation Background"
//               width={1920}
//               height={900}
//               priority={true}
//               className="w-full h-auto block object-cover min-h-[500px]"
//             />
//           </div>
//           <ContainerSection className="absolute inset-0 z-10 w-full h-full pointer-events-none">
//             <div className="grid grid-cols-1 md:grid-cols-12 h-full items-center">
//               <div className="hidden md:block col-span-8"></div>
//               <div className="col-span-1 md:col-span-4 pointer-events-auto h-full flex flex-col justify-center bg-white/30 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none p-6 md:p-0">
//                 <div className="text-center md:text-left ">
//                   <HeaderText className="text-left mb-5 text-gray-900">
//                     Automatic Pass Through Fall Arrester
//                   </HeaderText>
//                   <BodyCopyText className="space-y-4 w-full text-left mb-6 text-gray-800">
//                     The Automatic Pass Through Fall Arrester is a perfect solution for vertical lifeline safety. Designed for professional use, it offers smooth, hands-free operation while climbing or descending and locks instantly in the event of a fall. Constructed from corrosion-resistant stainless steel with an integrated shock absorber and fall indicator, it ensures durability, safety, and easy inspection. Compatible with various vertical lifeline systems, this device combines efficiency and protection for work at height.
//                   </BodyCopyText>
//                 </div>
//               </div>
//             </div>
//           </ContainerSection>
//         </div>

//       </MainPage>

//     </>
//   );
// }

"use client";
import Image from "next/image";
import { BodyCopyText } from "@/components/views/BodyCopyText";
import { HeaderText } from "@/components/views/HeaderText";
import MainPage from "@/components/views/MainPage";
import ContainerSection from "@/components/views/ContainerSection";
import { motion } from "framer-motion";
import { useState } from "react";

// const features = [
//   {
//     name: "Durable Construction",
//     image: "/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/Durable_Construction.png",
//     desc: "Made from corrosion-resistant stainless steel for long-lasting performance in harsh environments",
//   },
//   {
//     name: "Easy Installation",
//     image: "/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/Easy_Installation.png",
//     desc: "Quick, single-hand installation with an integrated mechanism that prevents upside-down mounting",
//   },
//   {
//     name: "Smooth Operation",
//     image: "/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/Smooth_Operation.png",
//     desc: "Hands-free trailing during climbs and descents, automatically bypassing intermediate cable guides",
//   },
//   {
//     name: "Automatic Reset & Dual Locking",
//     image: "/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/Automatic_Reset.png",
//     desc: "Spring-activated mechanisms return the device to its initial position, while dual locks prevent accidental unlocking",
//   },
//   {
//     name: "Enhanced Safety",
//     image: "/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/Enhanced_Safety.jpg",
//     desc: "Instantly locks in the event of a fall, with a built-in metal shock absorber to reduce impact forces",
//   },
//   {
//     name: "Inspection Friendly",
//     image: "/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/Inspection_Friendly.jpg",
//     desc: "Equipped with a fall indicator and compatible with 8mm steel vertical lifelines for efficient inspection and use",
//   },
// ];

// const featureSectionVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.3 },
//   },
// };

// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.95, y: 20 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" }
//   },
// };

// const textVariants = {
//   hidden: { opacity: 0, x: 20 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" }
//   },
// };

export default function FallArrest() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <MainPage noGapTop>

      <section
        className="w-full h-[60vh] md:h-[75vh] lg:h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/Fall Arrest 1.jpg')",
        }}
      ></section>


      {/* ================= CONTENT SECTION ================= */}
      <section
        className="relative w-full min-h-[650px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/slider1.png')",
        }}
      >

        <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-20 xl:px-32 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-start">

            <Image
              src="/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/Fall Arrest product.png"
              alt="SafePro Device"
              width={900}
              height={600}
              className="
            object-contain
            w-[420px]
            sm:w-[520px]
            md:w-[620px]
            lg:w-[760px]
            xl:w-[880px]
            -ml-6
            lg:-ml-32
            xl:-ml-40
          "
            />

          </div>


          {/* RIGHT TEXT */}
          <div className="max-w-[560px] ml-auto mt-10 lg:mt-0">

            {/* <h2 className="text-[28px] md:text-[32px] font-bold font-raleway">
              <span className="text-black">SAFE</span>
              <span className="text-red-500">PRO</span>
            </h2> */}

            <h3 className="text-[18px] font-semibold font-raleway mt-2">
              Automatic Pass Through Fall Arrester
            </h3>


            {/* <p className="mt-4 text-gray-700 font-raleway leading-relaxed text-[14px] md:text-[16px]">
              A fall arrester includes a mechanism that locks onto a lifeline
              or anchor point in the event of a sudden drop, thereby protecting
              against serious injuries or fatalities when working at heights.
            </p> */}


            <p className="mt-4 text-gray-700 font-raleway leading-relaxed text-[14px] md:text-[16px]">
              The Automatic Pass Through Fall Arrester is a perfect solution for vertical lifeline safety. Designed for professional use, it offers smooth, hands-free operation while climbing or descending and locks instantly in the event of a fall.
            </p>
            <p className="mt-4 text-gray-700 font-raleway leading-relaxed text-[14px] md:text-[16px]">
              Constructed from corrosion-resistant stainless steel with an integrated shock absorber and fall indicator, it ensures durability, safety, and easy inspection. Compatible with various vertical lifeline systems, this device combines efficiency and protection for work at height.
            </p>

            <h4 className="mt-6 font-semibold font-raleway">
              Automatic Pass Through Fall Arrester
            </h4>

            <ul className="mt-3 space-y-2 text-[14px] text-gray-700 font-extrabold font-raleway">
              <li>• Integrated energy absorber</li>
              <li>• Anti-inversion mechanism</li>
              <li>• Intermediate pass through</li>
              <li>• No manual opening</li>
              <li>• Simple load regulation</li>
            </ul>

          </div>

        </div>
      </section>








      <section
        className="relative w-full bg-no-repeat bg-top bg-cover min-h-[650px] lg:min-h-[800px]"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/Fall Arrest slider.png')",
        }}
      >

        {/* Left Product */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-24">

          {/* Left product */}
          <Image
            src="/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/Fall Arrest product 1.png"
            alt="Energy Absorber"
            width={650}
            height={350}
            className="w-[320px] sm:w-[420px] md:w-[520px] lg:w-[620px]"
          />


          <div className="mt-6 max-w-[260px]">
            <h3 className="text-red-500 font-bold font-raleway">
              Energy Absorber
            </h3>

            <p className="text-gray-700 text-sm font-raleway">
              A device designed to dissipate and reduce the forces generated during a fall.
            </p>
          </div>

        </div>

        {/* Vertical Fall Arrester */}
        <div className="absolute right-0 bottom-0 z-10">

          <Image
            src="/img/Products/Fixed Lifeline System/Vertical Lifeline/03 Decotech/Fall Arrest product 2.png"
            alt="Fall Arrester"
            width={260}
            height={900}
            className="h-[420px] sm:h-[520px] md:h-[650px] lg:h-[780px] w-auto"
          />

        </div>

        {/* Fall Arrester Text */}
        <div className="absolute right-[18%] bottom-[28%] z-20 max-w-[260px]">

          <h3 className="text-red-500 font-bold font-raleway">
            Fall Arrester
          </h3>

          <p className="text-gray-700 text-sm font-raleway">
            Fall Arrester With Webbing Energy Absorber
          </p>

        </div>

      </section>

    </MainPage>
  );
}