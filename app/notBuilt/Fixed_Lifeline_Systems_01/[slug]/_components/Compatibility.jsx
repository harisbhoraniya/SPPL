//  <div className="relative">
//         <button
//           ref={prevRef}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           ref={nextRef}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
//         >
//           <ChevronRight size={24} />
//         </button>
//         <Swiper
//           modules={[Autoplay, Navigation]}
//           navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//           slidesPerView={1.5}
//           spaceBetween={30}
//           loop={true}
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 2000,
//             pauseOnMouseEnter: true
//           }}
//           speed={1500}
//           breakpoints={{
//             640: { slidesPerView: 1.5 },
//             768: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 3.5 },
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//         >
//           {compatibility.map((com, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="relative group block overflow-hidden rounded-lg"
//               >
//                 <Image
//                   src={com.img}
//                   alt={com.name}
//                   loading="lazy"
//                   width={1000}
//                   height={1000}
//                   className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
//                 />

//                 <div className="absolute bottom-0 left-0 w-full h-12  bg-gray-700 bg-opacity-90 px-4 text-white flex items-center transition-all duration-300 group-hover:bg-[#d42225] text-left">
//                   <BodyCopyText
//                     className={"text-white font-bold text-[15px]"}
//                   >
//                     {com.name}
//                   </BodyCopyText>

//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div> 




// "use client";

// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useRef } from "react";

// import { Pagination, Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // 

// export const Compatibility = ({ compatibility }) => {

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="space-y-8">
//       <HeaderText className={"text-center"}>Compatibility</HeaderText>

//       <div className="relative">

//         <button
//           ref={prevRef}
//           className="absolute -left-16 top-[42.5%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           ref={nextRef}
//           className="absolute -right-16 top-[42.5%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
//         >
//           <ChevronRight size={24} />
//         </button>
//         {/* <Swiper
//           modules={[Autoplay, Navigation]}
//           navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//           slidesPerView={1.5}
//           spaceBetween={30}
//           loop={true}
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 2000,
//             pauseOnMouseEnter: true
//           }}
//           speed={1500}
//           breakpoints={{
//             640: { slidesPerView: 1.5 },
//             768: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 3.5 },
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//         >
//           {compatibility.map((com, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="relative group block overflow-hidden hover:cursor-pointer"
//               >
//                 <div className='h-full w-full overflow-hidden'>
//                   <img
//                     src={com.img}
//                     alt={com.name}
//                     className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16 ">
//                   <BodyCopyText className="text-black font-bold text-[12px] w-full text-center uppercase mb-[5px]">
//                     {com.name}
//                   </BodyCopyText>

//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper> */}
//         <Swiper
//           modules={[Autoplay, Navigation]}
//           navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//           slidesPerView={1.5}
//           spaceBetween={30}
//           loop={true}
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 2000,
//             pauseOnMouseEnter: true
//           }}
//           speed={1500}
//           breakpoints={{
//             640: { slidesPerView: 1.5 },
//             768: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 3.5 },
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//         >
//           {compatibility.map((com, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative group block overflow-hidden hover:cursor-pointer">
//                 {/* Main image always visible */}
//                 <div className='h-full w-full overflow-hidden'>
//                   <img
//                     src={com.img}
//                     alt={com.name}
//                     className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   {/* If a hover image is available, overlay it with opacity transition */}
//                   {com.img2 && (
//                     <img
//                       src={com.img2}
//                       alt={com.name + " hover"}
//                       className="w-full h-auto object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                     />
//                   )}
//                 </div>
//                 <div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16">
//                   <BodyCopyText className="text-black font-bold text-[12px] w-full text-center uppercase mb-[5px]">
//                     {com.name}
//                   </BodyCopyText>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </div>
//   );
// };




// "use client";

// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import { HeaderText } from "@/components/views/HeaderText";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useRef } from "react";

// import { Pagination, Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // 

// export const Compatibility = ({ compatibility }) => {

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="space-y-8">
//       <HeaderText className={"text-center"}>Compatibility</HeaderText>

//       <div className="relative">

//         <button
//           ref={prevRef}
//           className="absolute -left-16 top-[42.5%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           ref={nextRef}
//           className="absolute -right-16 top-[42.5%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
//         >
//           <ChevronRight size={24} />
//         </button>
//         <Swiper
//           modules={[Autoplay, Navigation]}
//           navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//           slidesPerView={1.5}
//           spaceBetween={30}
//           loop={true}
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 2000,
//             pauseOnMouseEnter: true
//           }}
//           speed={1500}
//           breakpoints={{
//             640: { slidesPerView: 1.5 },
//             768: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 3.5 },
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//         >
//           {compatibility.map((com, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative group block overflow-hidden hover:cursor-pointer">
//                 <div className='h-full w-full overflow-hidden'>
//                   <img
//                     src={com.img}
//                     alt={com.name}
//                     className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   {com.img2 && (
//                     <img
//                       src={com.img2}
//                       alt={com.name + " hover"}
//                       className="w-full h-auto object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                     />
//                   )}
//                 </div>
//                 <div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16">
//                   <BodyCopyText className="text-black font-bold text-[12px] w-full text-center uppercase mb-[5px]">
//                     {com.name}
//                   </BodyCopyText>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </div>
//   );
// };


"use client";

import { BodyCopyText } from "@/components/views/BodyCopyText";
import { HeaderText } from "@/components/views/HeaderText";
import React, { useRef } from "react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Compatibility = ({ compatibility }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!compatibility || !Array.isArray(compatibility) || compatibility.length === 0) {
    return null;
  }

  const IMAGE_WRAPPER =
    "w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px]";

  const isLessImages = compatibility.length < 3;

  // check if any slide has img2
  const hasImg2 = compatibility.some((c) => c.img2);

  const renderImageBlock = (com) => (
    <div
      className="overflow-hidden"
    >
      {com.img2 ? (
        <div className="grid grid-cols-2 w-full h-full overflow-hidden">
          <img
            src={com.img}
            alt={com.name}
            className={`${IMAGE_WRAPPER} object-cover transition-transform duration-300 group-hover:scale-105`}
          />
          <img
            src={com.img2}
            alt={com.name + " secondary"}
            className={`${IMAGE_WRAPPER} object-cover transition-transform duration-300 group-hover:scale-105`}
          />
        </div>
      ) : (
        <img
          src={com.img}
          alt={com.name}
          className={`${IMAGE_WRAPPER} object-cover transition-transform duration-300 group-hover:scale-105`}
        />
      )}
    </div>
  );

  if (isLessImages) {
    return (
      <div className="space-y-8">
        <HeaderText className="text-center">Structural Compatibility</HeaderText>
        <div className="flex gap-8 justify-center items-center">
          {compatibility.map((com, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 hover:cursor-pointer group overflow-hidden"
            >
              {renderImageBlock(com)}
              <div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16">
                <BodyCopyText className="text-black font-bold text-[12px] w-full text-center uppercase mb-[5px]">
                  {com.name}
                </BodyCopyText>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Swiper config:
  // - if any img2 exists: 1 slide on small screens, 2 on large
  // - otherwise: your original 2/3/4 layout
  const baseSlidesPerView = hasImg2 ? 1 : 1;
  const breakpoints = hasImg2
    ? {
      640: { slidesPerView: 1 },
      1024: { slidesPerView: 2 },
    }
    : {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    };

  return (
    <div className="space-y-8">
      <HeaderText className="text-center">Structural Compatibility</HeaderText>

      <div className="relative w-full mx-auto">
        <button
          ref={prevRef}
          className="hidden md:block absolute -left-16 top-[42.5%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          ref={nextRef}
          className="hidden md:block absolute -right-16 top-[42.5%] -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          <ChevronRight size={24} />
        </button>
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          slidesPerView={baseSlidesPerView}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          speed={1200}
          breakpoints={breakpoints}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {compatibility.map((com, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-3 hover:cursor-pointer py-4  group ">
                {renderImageBlock(com)}
                <div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16">
                  <BodyCopyText className="text-black font-bold text-[12px] w-full text-center uppercase mb-[5px]">
                    {com.name}
                  </BodyCopyText>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


