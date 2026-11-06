"use client"

import BannerImage from '@/components/views/BannerImage'
import { BodyCopyText } from '@/components/views/BodyCopyText'
import ContainerSection from '@/components/views/ContainerSection'
import MainPage from '@/components/views/MainPage'
import Link from 'next/link'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { ApplicationProjects } from './components/ApplicationProjects'

const PPESlider = [
  {
    title: "Head Protection",
    link: "/products/Fixed_Lifeline_Systems/Roof_Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Roof Lifeline.jpg",
  },
  {
    title: "Eye Protection",
    link: "/products/Fixed_Lifeline_Systems/Vertical_Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Vertical Lifeline.jpg",
  },
  {
    title: "Respiratory Protection",
    link: "/products/Fixed_Lifeline_Systems/Overhead_Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Overhead Lifeline.jpg",
  },
  {
    title: "Face Protection",
    link: "/products/Fixed_Lifeline_Systems/Vertical_Access_System",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Vertical Access System.jpg",
  },
  {
    title: "Hearing Protection",
    link: "/products/Fixed_Lifeline_Systems/Anchor_Points",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Anchor Point.jpg",
  },
  {
    title: "Body Protection",
    link: "/products/Fixed_Lifeline_Systems/Skylight_Protector",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Skylight Protectors.jpg",
  },
  {
    title: "Hand Protection",
    link: "/products/Fixed_Lifeline_Systems/Edge_Protection",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Edge Protection.jpg",
  },
  {
    title: "Feet Protection",
    link: "/products/Fixed_Lifeline_Systems/Walkway",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Walkway.jpg",
  },
  {
    title: "Fall Protection Equipment",
    link: "/products/Fixed_Lifeline_Systems/Walkway",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Walkway.jpg",
  },
];

const PPEProjects = [
  {
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASAHI INDIA GLASS PLANT TALOJA 1/Hero.jpg",
    title: "Construction"
  },
  {
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
    title: "AutoMobile"
  },
  {
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
    title: "Hotel"
  },
  {
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
    title: "Construction"
  },
  {
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
    title: "Mehanical"
  },
  {
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
    title: "Electrical"
  },
  {
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
    title: "Telicom"
  },
  {
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
    title: "Oil & Gas"
  },
  {
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
    title: "Lab"
  },
  {
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
    title: "Pharmacy"
  },

]

export default function PPEPage() {
  return (
    <MainPage>
      <BannerImage
        image="/img/Products/Fixed Lifeline System/Fixed Lifeline System/banner.jpg"
        text="Personal Protective Equipment"
        subheading="PPE Page Made"
      />

      <ContainerSection>

        <BodyCopyText className="space-y-4 w-full lg:w-4/5 lg:mx-auto text-center">
          <p>
            Personal Protective Equipment
            No matter which industry you are associated with, the safety of the workers should be of prime importance. Our focus at SPPL is to ensure that every worker is well protected from potential risks with our PPE (Personal Protective Equipment). Our PPE includes a range of products that prevent occupational injuries, illnesses from constant exposure to chemicals and gasses, and any untoward fatalities that may result from unsafe working conditions. In most cases, the PPE we design not only just prevent danger but also eliminates them completely.
          </p>
        </BodyCopyText>
      </ContainerSection>

      {/* Slider */}

      <div className="px-[15px] py-0">
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
            "--swiper-pagination-color": "#f97316",
            "--swiper-pagination-bullet-size": "5px",
            "--swiper-pagination-bottom": "-6px",
          }}
        >
          {PPESlider.map((item, index) => (
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
                  <div className="absolute inset-0 bg-[#f97316]  opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
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

      <ContainerSection>
        <ApplicationProjects projects={PPEProjects || []} />
      </ContainerSection>
    </MainPage>
  )
}