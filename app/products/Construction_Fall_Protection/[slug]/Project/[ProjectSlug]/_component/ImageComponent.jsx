// "use client";

// import React from 'react'
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import ContainerSection from '@/components/views/ContainerSection';

// export default function ImageComponent({ images }) {
//   return (
//     <div className="py-10 bg-gray-100">
//       <ContainerSection>
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           // navigation
//           pagination={{ clickable: true }}
//           spaceBetween={20} // Space between slides
//           slidesPerView={4} // Display 8 images at a time
//           loop={true} // Enable looping
//           breakpoints={{
//             320: { slidesPerView: 2 }, // For small screens (e.g., mobile)
//             768: { slidesPerView: 3 }, // For large screens
//             1024: { slidesPerView: 4 }, // For very large screens
//           }}
//           autoplay={{ delay: 2000 }}
//         >

//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="rounded-md w-full h-auto flex items-center justify-center">
//                 <img
//                   src={image}
//                   alt={`Client Logo ${index + 1}`}
//                   className="object-contain h-full w-full rounded-lg"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </ContainerSection>
//     </div >
//   )
// }

"use client";

import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContainerSection from "@/components/views/ContainerSection";

export default function ImageComponent({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null); // Track clicked image index

  return (
    <div className="py-10 bg-gray-100">
      <ContainerSection>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2000 }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="rounded-md w-full h-auto flex items-center justify-center "
                    onClick={() => setSelectedIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="object-contain h-full w-full rounded-lg"
                    />
                  </div>
                </DialogTrigger>

                {/* ✅ Modal for Full-Screen Swiper */}
                {/* <DialogContent className="w-full h-auto p-4 bg-white">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    initialSlide={selectedIndex} // Set clicked image as starting slide
                    className="h-full w-full"
                  >
                    {images.map((img, i) => (
                      <SwiperSlide key={i} className="h-full w-full">
                        <img
                          src={img}
                          alt={`Image ${i + 1}`}
                          className="w-full h-auto object-contain rounded-lg"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </DialogContent> */}
              </Dialog>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerSection>
    </div>
  );
}
