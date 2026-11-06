

// "use client"
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from "framer-motion";
// import ContainerSection from "@/components/views/ContainerSection";
// import MainPage from "@/components/views/MainPage";
// import { HeaderText } from "@/components/views/HeaderText";
// import { BodyCopyText } from "@/components/views/BodyCopyText";

// const mainImage = "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/wireframe.jpg";
// const originalImage = "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/original.png";

// const features = [
//   {
//     title: "Energy Absorber",
//     description: "A critical safety device engineered to dissipate and reduce the forces generated during a fall, helping to minimize impact on both the user and the anchorage point.",
//     x: 58,
//     y: 45,
//     image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/Energy absorber.png"
//   },
//   {
//     title: "Tensioner",
//     description: "A precision mechanism designed to keep the horizontal lifeline properly taut, maintaining the correct tension required for safe and efficient system performance.",
//     x: 20,
//     y: 45,
//     image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/Tensioner.png"
//   },
//   {
//     title: "Tension Indicator",
//     description: "A monitoring feature that ensures the lifeline remains correctly tensioned over time. It provides a clear visual alert to users or safety personnel whenever tension levels fall outside the safe range and require adjustment.",
//     x: 50,
//     y: 45,
//     image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/tension indicator.png"
//   },
//   {
//     title: "Fall Indicator",
//     description: "A safety mechanism that activates and provides a visible alert when a fall has occurred, helping users quickly identify whether the system has been subjected to fall impact.",
//     x: 83,
//     y: 45,
//     image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/fall indicator.png"
//   },
//   {
//     title: "End Cable Termination",
//     description: "A secure method of anchoring the horizontal lifeline at its end post extremity, ensuring structural stability and reliable load transfer throughout the system.",
//     x: 90,
//     y: 45,
//     image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/End cable termination.png"
//   },
// ];

// const overlayVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
// };

// export default function ZoomScrollImagePage() {
//   const [activeFeature, setActiveFeature] = useState(null);
//   const [scrollY, setScrollY] = useState(0);
//   const [viewportWidth, setViewportWidth] = useState(0);
//   const [xValue, setXValue] = useState(0);

//   const maxScroll = 1200;
//   const maxZoom = 3;
//   const imageOriginalWidth = 1000;
//   const dotVisibleThreshold = maxZoom - 0.05;
//   const zoomScrollMargin = 800;

//   const x = useMotionValue(0);
//   const overlayRef = useRef(null);

//   useEffect(() => {
//     setViewportWidth(window.innerWidth);
//     const onResize = () => setViewportWidth(window.innerWidth);
//     window.addEventListener("resize", onResize);

//     const onScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", onScroll, { passive: true });

//     return () => {
//       window.removeEventListener("resize", onResize);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   useAnimationFrame(() => {
//     setXValue(x.get());
//   });

//   useEffect(() => {
//     if (
//       activeFeature &&
//       (scrollY < -zoomScrollMargin || scrollY > maxScroll + zoomScrollMargin)
//     ) {
//       setActiveFeature(null);
//     }
//   }, [scrollY, activeFeature]);

//   useEffect(() => {
//     if (!activeFeature) return;
//     function handleClickOutside(event) {
//       if (
//         overlayRef.current &&
//         !overlayRef.current.contains(event.target)
//       ) {
//         setActiveFeature(null);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [activeFeature]);

//   const scrollPercent = Math.min(scrollY / maxScroll, 1);
//   const fadePercent = Math.min(Math.max(scrollPercent, 0), 1); // safeguard
//   const scale = 1 + scrollPercent * (maxZoom - 1);
//   const scaledWidth = imageOriginalWidth * scale;
//   const maxDrag = Math.max((scaledWidth - viewportWidth) / 2, 0);

//   useEffect(() => {
//     if (scale < dotVisibleThreshold) {
//       x.set(0);
//     }
//   }, [scale, dotVisibleThreshold, x]);

//   const isWithinZoomScroll =
//     scrollY >= -zoomScrollMargin && scrollY <= maxScroll + zoomScrollMargin;

//   const showDots = scale >= dotVisibleThreshold && isWithinZoomScroll;

//   const getFeatureStyle = (feat) => {
//     const featureLeftPx = (feat.x / 100) * scaledWidth;
//     const centerOffset = viewportWidth / 2;
//     const imageLeft = centerOffset - scaledWidth / 2 + xValue;
//     const leftPosition = imageLeft + featureLeftPx;
//     return {
//       position: "fixed",
//       left: leftPosition,
//       top: `calc(${feat.y}%)`,
//       transform: "translate(-50%, -50%)",
//       cursor: "pointer",
//       zIndex: 20,
//       userSelect: "none",
//       pointerEvents: showDots ? "auto" : "none",
//       opacity: showDots ? 1 : 0,
//       transition: "opacity 0.3s ease",
//     };
//   };

//   return (
//     <MainPage>
//       <div className="relative w-full flex items-center overflow-hidden">
//         <div className="w-full relative z-0">
//           <Image
//             src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Slider.jpg"
//             alt="Distinctive Innovation Background"
//             width={1920}
//             height={900}
//             priority={true}
//             className="w-full h-auto block object-cover"
//           />
//         </div>

//         <ContainerSection className="absolute inset-0 z-10 w-full h-full pointer-events-none">
//           <div className={`grid grid-cols-1 md:grid-cols-12 h-full items-center `}>
//             <div className={`hidden md:block col-span-8`}></div>
//             <div className={`col-span-1 md:col-span-4 pointer-events-auto `}>
//               <div className="text-center">
//                 {/* <p className="text-[#d42225] text-sm opacity-80 font-bold uppercase tracking-wide mb-3">
//                   All In One
//                 </p> */}
//                 <HeaderText className="text-left mb-5 text-gray-900">
//                   All In One
//                 </HeaderText>
//                 <BodyCopyText className="space-y-4 w-full text-left mb-6 text-gray-800">
//                   The All In One is a fully integrated horizontal lifeline component engineered to combine multiple critical safety functions into a single, compact unit. Designed to simplify installation and enhance system reliability, it incorporates essential elements such as energy absorption, tensioning, tension monitoring, end termination, and fall indication within one streamlined device. By unifying these key features, the All-In-One ensures consistent performance, easier maintenance, and superior fall protection for workers operating at height.
//                 </BodyCopyText>

//               </div>
//             </div>
//           </div>
//         </ContainerSection>


//       </div>

//       <div style={{ height: maxScroll + 1200 }}>
//         <div
//           className="sticky top-0 w-full h-[90vh] overflow-hidden flex justify-center items-center"
//           style={{ cursor: "grab", zIndex: 10 }}
//         >
//           <motion.div
//             drag="x"
//             dragConstraints={{ left: -maxDrag, right: maxDrag }}
//             dragElastic={0.2}
//             dragMomentum={false}
//             dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
//             style={{
//               width: imageOriginalWidth,
//               height: "100%",
//               scale,
//               originX: 0.5,
//               originY: 0.5,
//               willChange: "transform",
//               x,
//               position: "relative",
//               userSelect: "none",
//             }}
//           >
//             {/* Crossfade: Both images stacked with animated opacity */}
//             <motion.div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 width: "100%",
//                 height: "100%",
//                 opacity: 1 - fadePercent,
//               }}
//               transition={{ duration: 0.25 }}
//             >
//               <Image
//                 src={originalImage}
//                 alt="Original"
//                 width={imageOriginalWidth}
//                 height={1000}
//                 quality={90}
//                 priority
//                 style={{
//                   objectFit: "contain",
//                   width: "100%",
//                   height: "100%",
//                   userSelect: "none",
//                   pointerEvents: "none",
//                 }}
//               />
//             </motion.div>
//             <motion.div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 width: "100%",
//                 height: "100%",
//                 opacity: fadePercent,
//               }}
//               transition={{ duration: 0.25 }}
//             >
//               <Image
//                 src={mainImage}
//                 alt="Main Wireframe"
//                 width={imageOriginalWidth}
//                 height={1000}
//                 quality={90}
//                 priority
//                 style={{
//                   objectFit: "contain",
//                   width: "100%",
//                   height: "100%",
//                   userSelect: "none",
//                   pointerEvents: "none",
//                 }}
//               />
//             </motion.div>
//           </motion.div>

//           {features.map((feat, i) => (
//             <div
//               key={i}
//               style={getFeatureStyle(feat)}
//               onClick={() =>
//                 setActiveFeature(activeFeature === feat ? null : feat)
//               }
//               role="button"
//               tabIndex={0}
//               aria-label={`Show details for ${feat.title}`}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") setActiveFeature(feat);
//               }}
//               className="select-none"
//             >
//               <div className="w-10 h-10 bg-yellow-400 border-4 border-white rounded-full shadow-lg flex items-center justify-center font-bold text-gray-900">
//                 {i + 1}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-8 max-w-3xl mx-auto">
//           <AnimatePresence>
//             {activeFeature && (
//               <motion.div
//                 ref={overlayRef}
//                 key={activeFeature.title}
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//                 variants={overlayVariants}
//                 className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-6 max-w-xl w-[90vw] z-50"
//                 role="dialog"
//                 aria-modal="true"
//                 aria-labelledby="feature-title"
//                 aria-describedby="feature-desc"
//               >
//                 <h2 id="feature-title" className="text-xl font-bold mb-2">
//                   {activeFeature.title}
//                 </h2>
//                 <div className="relative w-full h-40 mb-4">
//                   <Image
//                     src={activeFeature.image}
//                     alt={activeFeature.title}
//                     fill
//                     style={{ objectFit: "contain" }}
//                   />
//                 </div>
//                 <p id="feature-desc">{activeFeature.description}</p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>

//     </MainPage>
//   );
// }




// "use client";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import ContainerSection from "@/components/views/ContainerSection";
// import MainPage from "@/components/views/MainPage";
// import { HeaderText } from "@/components/views/HeaderText";
// import { BodyCopyText } from "@/components/views/BodyCopyText";

// // Only using the original image as requested
// const originalImage = "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/original.png";

// const features = [
//   {
//     title: "Tensioner",
//     description: "A precision mechanism designed to keep the horizontal lifeline properly taut, maintaining the correct tension required for safe and efficient system performance.",
//     x: 20,
//     y: 50,
//     image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/Tensioner.png"
//   },
//   {
//     title: "Tension Indicator",
//     description: "A monitoring feature that ensures the lifeline remains correctly tensioned over time. It provides a clear visual alert to users or safety personnel whenever tension levels fall outside the safe range and require adjustment.",
//     x: 50,
//     y: 50,
//     image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/tension indicator.png"
//   },
//   {
//     title: "Energy Absorber",
//     description: "A critical safety device engineered to dissipate and reduce the forces generated during a fall, helping to minimize impact on both the user and the anchorage point.",
//     x: 58,
//     y: 50,
//     image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/Energy absorber.png"
//   },
//   {
//     title: "Fall Indicator",
//     description: "A safety mechanism that activates and provides a visible alert when a fall has occurred, helping users quickly identify whether the system has been subjected to fall impact.",
//     x: 83,
//     y: 50,
//     image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/fall indicator.png"
//   },
//   {
//     title: "End Cable Termination",
//     description: "A secure method of anchoring the horizontal lifeline at its end post extremity, ensuring structural stability and reliable load transfer throughout the system.",
//     x: 90,
//     y: 50,
//     image: "/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/End cable termination.png"
//   },
// ];

// // Animation variants for the modal
// const modalVariants = {
//   hidden: { opacity: 0, scale: 0.9, y: 20 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { type: "spring", damping: 25, stiffness: 300 }
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.95,
//     y: 10,
//     transition: { duration: 0.2 }
//   }
// };

// const backdropVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
//   exit: { opacity: 0 }
// };

// export default function InteractiveImagePage() {
//   const [activeFeature, setActiveFeature] = useState(null);
//   const overlayRef = useRef(null);

//   // Close modal when clicking outside
//   useEffect(() => {
//     if (!activeFeature) return;
//     function handleClickOutside(event) {
//       if (overlayRef.current && !overlayRef.current.contains(event.target)) {
//         setActiveFeature(null);
//       }
//     }
//     // Using mousedown to catch clicks anywhere
//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("touchstart", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("touchstart", handleClickOutside);
//     };
//   }, [activeFeature]);

//   return (
//     <MainPage>

//       <div className="relative w-full flex items-center overflow-hidden">

//         <div className="w-full relative z-0">
//           <Image
//             src="/img/Products/Fixed Lifeline System/Roof Lifeline/03 Decotech/Slider.jpg"
//             alt="Distinctive Innovation Background"
//             width={1920}
//             height={900}
//             priority={true}
//             className="w-full h-auto block object-cover min-h-[500px]" 
//           />
//         </div>
//         <ContainerSection className="absolute inset-0 z-10 w-full h-full pointer-events-none">
//           <div className="grid grid-cols-1 md:grid-cols-12 h-full items-center">
//             <div className="hidden md:block col-span-8"></div>

//             <div className="col-span-1 md:col-span-4 pointer-events-auto h-full flex flex-col justify-center bg-white/30 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none p-6 md:p-0">
//               <div className="text-center md:text-left ">
//                 <HeaderText className="text-left mb-5 text-gray-900">
//                   All In One
//                 </HeaderText>
//                 <BodyCopyText className="space-y-4 w-full text-left mb-6 text-gray-800">
//                   The All In One is a fully integrated horizontal lifeline component engineered to combine multiple critical safety functions into a single, compact unit. Designed to simplify installation and enhance system reliability, it incorporates essential elements such as energy absorption, tensioning, tension monitoring, end termination, and fall indication within one streamlined device. By unifying these key features, the All-In-One ensures consistent performance, easier maintenance, and superior fall protection for workers operating at height.
//                 </BodyCopyText>
//               </div>
//             </div>
//           </div>
//         </ContainerSection>
//       </div>
//       <div className="relative w-full mx-auto select-none rounded-xl overflow-hidden ">

//         <div className="relative w-full">
//           <Image
//             src={originalImage}
//             alt="All In One System Original"
//             width={1920}
//             height={1000}
//             quality={95}
//             className="w-full h-auto object-contain block"
//           />

//           {features.map((feat, i) => (
//             <motion.button
//               key={i}
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 0.2 + (i * 0.1), type: "spring" }}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={(e) => {
//                 e.stopPropagation(); // Prevent closing immediately
//                 setActiveFeature(activeFeature === feat ? null : feat);
//               }}
//               style={{
//                 position: "absolute",
//                 left: `${feat.x}%`,
//                 top: `${feat.y}%`,
//                 transform: "translate(-50%, -50%)", // Center the dot on the coordinate
//                 zIndex: 20,
//               }}
//               className="group focus:outline-none"
//               aria-label={`Show details for ${feat.title}`}
//             >
//               <div className={`w-2 md:w-4 h-2 md:h-4 bg-[#d42225] rounded-full animate-ping absolute`}></div>
//             </motion.button>
//           ))}
//         </div>

//       </div>
//       <AnimatePresence>
//         {activeFeature && (
//           <>
//             <motion.div
//               key="backdrop"
//               variants={backdropVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
//               onClick={() => setActiveFeature(null)} // Click background to close
//             />
//             <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
//               <motion.div
//                 ref={overlayRef}
//                 key="modal"
//                 variants={modalVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 className="bg-white rounded-2xl shadow-2xl p-0 w-full max-w-lg pointer-events-auto overflow-hidden flex flex-col"
//               >
//                 <div className="relative w-full h-56 bg-gray-100">
//                   <Image
//                     src={activeFeature.image}
//                     alt={activeFeature.title}
//                     fill
//                     className="object-contain p-4"
//                   />
//                   <button
//                     onClick={() => setActiveFeature(null)}
//                     className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-sm transition-all"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>
//                 <div className="p-6 md:p-8">
//                   <div className="flex items-center gap-3 mb-3">
//                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold text-sm">
//                       {features.indexOf(activeFeature) + 1}
//                     </span>
//                     <h2 className="text-2xl font-bold text-gray-900">
//                       {activeFeature.title}
//                     </h2>
//                   </div>
//                   <p className="text-gray-600 leading-relaxed">
//                     {activeFeature.description}
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </>
//         )}
//       </AnimatePresence>
//     </MainPage>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ContainerSection from "@/components/views/ContainerSection";
import MainPage from "@/components/views/MainPage";
import { HeaderText } from "@/components/views/HeaderText";
import { BodyCopyText } from "@/components/views/BodyCopyText";

export default function InteractiveImagePage() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <MainPage noGapTop>

      {/* ================= BANNER SECTION ================= */}
      <section
        className="w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/All in one  slider 1.jpg')",
        }}
      ></section>

      {/* ================= CONTENT SECTION ================= */}
      <section
        className="relative w-full min-h-[700px] md:min-h-[650px] bg-cover bg-center flex items-center py-12 md:py-0"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/All in one  slider 2.jpg')",
        }}
      >
        <div className="max-w-[1600px] mx-auto w-full px-6 md:px-10 lg:px-20 xl:px-32 flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <Image
              src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/All in one  product.jpg"
              alt="SafePro Device"
              width={900}
              height={600}
              className="
                object-contain
                w-[280px]
                sm:w-[380px]
                md:w-[460px]
                lg:w-[760px]
                xl:w-[880px]
                lg:-ml-32
                xl:-ml-40
              "
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="max-w-[600px] md:max-w-[680px] lg:max-w-[560px] mx-auto lg:mx-0  lg:mt-0">
            <p className=" text-gray-700 font-raleway leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] text-center lg:text-left">
              The All In One is a fully integrated horizontal lifeline component engineered to combine multiple critical safety functions into a single, compact unit. Designed to simplify installation and enhance system reliability, it incorporates essential elements such as energy absorption, tensioning, tension monitoring, end termination, and fall indication within one streamlined device.
            </p>

            <p className="mt-4 text-gray-700 font-raleway leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] text-center lg:text-left">
              By unifying these key features, the All-In-One ensures consistent performance, easier maintenance, and superior fall protection for workers operating at height.
            </p>
          </div>

        </div>
      </section>

      {/* ================= IMAGE SLIDER SECTION ================= */}
      {/* Banner Image */}
      {/* <section className="w-full h-[40vh] sm:h-[60vh] md:h-[75vh] lg:h-screen relative overflow-hidden">

        
        <img
          src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/new/allinone_slider.jpg"
          alt="Banner background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/new/allinone.png"
            alt="Product"
            className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[70%] h-auto object-contain"
          />
        </div>

      </section> */}
      <section className="w-full min-h-[320px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative overflow-hidden">

        {/* Mobile image */}
        <img
          src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/new/allinone_slider.jpg"
          alt="Banner background"
          className="absolute inset-0 w-full h-full object-cover object-top md:hidden"
        />

        {/* Tablet image */}
        <img
          src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/new/allinone_tablet_01.jpg"
          alt="Banner background"
          className="absolute inset-0 w-full h-full object-cover object-top hidden md:block lg:hidden"
        />

        {/* Desktop image */}
        <img
          src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/new/allinone_slider.jpg"
          alt="Banner background"
          className="absolute inset-0 w-full h-full object-cover object-top hidden lg:block"
        />

        {/* Single centered product image */}
        <div className="absolute inset-0 flex items-center justify-center px-2 md:px-4">
          <img
            src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/new/allinone_2.png"
            alt="Product"
            className="w-full max-w-3xl md:max-w-4xl lg:max-w-6xl object-contain"
          />
        </div>

      </section>
      {/* ================= FEATURE CARDS SECTION ================= */}
      <section
        className="relative w-full min-h-[700px] py-12 md:py-16 lg:py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/All in one  slider 4.jpg')",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20 xl:px-32">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

            {/* CARD 1 */}
            <div className="flex flex-col">
              <div className="bg-gray-700 rounded-xl h-[160px] md:h-[180px] flex items-center justify-center p-4">
                <Image
                  src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/Energy absorber.png"
                  alt="Energy Absorber"
                  width={400}
                  height={250}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-[16px] md:text-[18px] font-bold font-raleway">
                <span className="text-red-500">1. Energy Absorber</span>
              </h3>
              <p className="text-gray-700 text-[13px] md:text-[14px] mt-2 font-raleway leading-relaxed">
                A device designed to dissipate and reduce the forces generated during
                a fall and to minimize the impact on the user and anchorage point.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col">
              <div className="bg-gray-700 rounded-xl h-[160px] md:h-[180px] flex items-center justify-center p-4 overflow-hidden">
                <Image
                  src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/Tensioner.png"
                  alt="Tensioner"
                  width={500}
                  height={300}
                  className="object-contain scale-75"
                />
              </div>
              <h3 className="mt-4 text-[16px] md:text-[18px] font-bold font-raleway">
                <span className="text-red-500">2. Tensioner</span>
              </h3>
              <p className="text-gray-700 text-[13px] md:text-[14px] mt-2 font-raleway leading-relaxed">
                A tensioner is used to keep the horizontal lifeline taut and at the
                appropriate level of tension.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col">
              <div className="bg-gray-700 rounded-xl h-[160px] md:h-[180px] flex items-center justify-center p-4">
                <Image
                  src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/tension indicator.png"
                  alt="Tension Indicator"
                  width={400}
                  height={250}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-[16px] md:text-[18px] font-bold font-raleway">
                <span className="text-red-500">3. Tension Indicator</span>
              </h3>
              <p className="text-gray-700 text-[13px] md:text-[14px] mt-2 font-raleway leading-relaxed">
                A tension indicator helps ensure that the lifeline remains properly
                tensioned over time.
              </p>
            </div>

            {/* CARD 4 */}
         

            {/* CARD 5 */}
            <div className="flex flex-col">
              <div className="bg-gray-700 rounded-xl h-[160px] md:h-[180px] flex items-center justify-center p-4">
                <Image
                  src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/Real time fall alert mechanism.png"
                  alt="Fall Indicator"
                  width={400}
                  height={250}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-[16px] md:text-[18px] font-bold font-raleway">
                <span className="text-red-500">4. Fall Indicator</span>
              </h3>
              <p className="text-gray-700 text-[13px] md:text-[14px] mt-2 font-raleway leading-relaxed">
                A fall indicator is a mechanism that triggers an alert when a fall occurs.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="bg-gray-700 rounded-xl h-[160px] md:h-[180px] flex items-center justify-center p-4">
                <Image
                  src="/img/Products/Fixed Lifeline System/Roof Lifeline/04 All In One/End cable termination.png"
                  alt="End Cable Termination"
                  width={400}
                  height={250}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-[16px] md:text-[18px] font-bold font-raleway">
                <span className="text-red-500">5. End Cable Termination</span>
              </h3>
              <p className="text-gray-700 text-[13px] md:text-[14px] mt-2 font-raleway leading-relaxed">
                The end cable termination is the way of anchoring the horizontal
                lifeline at its end post extremity.
              </p>
            </div>

          </div>
        </div>
      </section>

    </MainPage>
  );
}