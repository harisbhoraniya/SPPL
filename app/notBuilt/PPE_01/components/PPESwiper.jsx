"use client"
import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { BodyCopyText } from '@/components/views/BodyCopyText';
import { HeaderText } from '@/components/views/HeaderText';
export default function PPESwiper({data}) {
  


  return (
    <div className="px-[15px] py-0">
      <HeaderText className={"text-center mb-[25px]"}>Type of Respiratory Protection</HeaderText>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4.5 },
        }}
        speed={1500}
        className="h-full"
        style={{
          "--swiper-pagination-color": "#d42225",
          "--swiper-pagination-bullet-size": "5px",
          "--swiper-pagination-bottom": "-6px",
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Link
              href={item.link}
              className="relative group block overflow-hidden hover:cursor-pointer w-full"
            >
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#d42225]  opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <BodyCopyText className=" text-[12px] w-full uppercase text-white text-center font-bold px-4">
                    {item.title}
                  </BodyCopyText>

                </div>
              </div>
              <div className="relative w-full flex items-center px-4 text-black py-[35px] transition-all duration-300 text-center h-16 group-hover:opacity-0">
                <BodyCopyText className="font-bold text-[12px] w-full text-center uppercase">
                  {item.title}
                </BodyCopyText>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
