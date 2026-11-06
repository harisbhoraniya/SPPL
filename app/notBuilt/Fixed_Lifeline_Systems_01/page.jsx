"use client"

import AnimatedButton from "@/components/views/AnimatedButton";
import BannerImage from "@/components/views/BannerImage";
import { BodyCopyText } from "@/components/views/BodyCopyText";
import ContainerSection from "@/components/views/ContainerSection";
import { HeaderText } from "@/components/views/HeaderText";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import MainPage from "@/components/views/MainPage";
import ApplicationStd from "./_components/ApplicationStd";
import { Projects1 } from "./_components/Projects1";

const protections = [
  {
    title: "Roof Lifeline",
    link: "/products/Fixed_Lifeline_Systems/Roof_Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Roof Lifeline.jpg",
  },
  {
    title: "Vertical Lifeline",
    link: "/products/Fixed_Lifeline_Systems/Vertical_Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Vertical Lifeline.jpg",
  },
  {
    title: "Overhead Lifeline",
    link: "/products/Fixed_Lifeline_Systems/Overhead_Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Overhead Lifeline.jpg",
  },
  {
    title: "Vertical Access System",
    link: "/products/Fixed_Lifeline_Systems/Vertical_Access_System",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Vertical Access System.jpg",
  },
  {
    title: "Anchor Points",
    link: "/products/Fixed_Lifeline_Systems/Anchor_Points",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Anchor Point.jpg",
  },
  {
    title: "Skylight Protector",
    link: "/products/Fixed_Lifeline_Systems/Skylight_Protector",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Skylight Protectors.jpg",
  },
  {
    title: "Edge Protection",
    link: "/products/Fixed_Lifeline_Systems/Edge_Protection",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Edge Protection.jpg",
  },
  {
    title: "Walkway",
    link: "/products/Fixed_Lifeline_Systems/Walkway",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Walkway.jpg",
  },
];

const importanceItems = [
  {
    title: "Worker Safety",
    content:
      "Falls are the leading cause of fatalities in the construction industry. Implementing robust fall protection systems can significantly reduce the risk of severe injuries or deaths, ensuring a safer work environment for construction workers.",
  },
  {
    title: "Regulatory Compliance",
    content:
      "Adhering to OSHA standards and regulations is crucial for construction companies. Compliance not only avoids hefty fines but also promotes a culture of safety, protecting the workforce and enhancing the company's reputation.",
  },
  {
    title: "Equipment Reliability",
    content:
      "Using high-quality fall protection equipment, such as harnesses and safety nets, is essential. Regular inspections and maintenance ensure that these tools remain effective, providing reliable protection against falls and other hazards.",
  },
  {
    title: "Training & Awareness",
    content:
      "Continuous training programs are vital in educating workers about the proper use of fall protection equipment. Raising awareness about the risks and reinforcing safety protocols help prevent complacency and ensure a proactive approach to on-site safety.",
  },
];

const projects = [
  {
    title: "Asahi India Glass",
    Plant: "Taloja",
    Product: "Roof Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASAHI INDIA GLASS PLANT TALOJA 1/Hero.jpg",
  },
  {
    title: "ASB International",
    Plant: "Ambernath",
    Product: "Roof Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
  },
  {
    title: "Avient Materials",
    Plant: "Bhiwandi",
    Product: "Roof Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/AVIENT MATERIALS INDIA PLANT BHIWANDI/Hero.jpg",
  },
  {
    title: "Maruti Suzuki",
    Plant: "Nagpur",
    Product: "Roof Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/MARUTI SUZUKI PLANT NAGPUR/Hero.jpg",
  },
  {
    title: "Paradeep Phosphates",
    Plant: "Bhubaneshwar",
    Product: "Roof Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/PARADEEP PHOSPHATES PLANT BHUBANESWAR/Hero.jpg",
  },
  {
    title: "Rane Steering Systems",
    Plant: "Chennai",
    Product: "Roof Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/RANE STEERING SYSTEMS PLANT CHENNAI 1/Hero.jpg",
  },
  {
    title: "Saint Gobain",
    Plant: "Bangalore",
    Product: "Roof Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/SAINT GOBAIN PLANT BANGALORE/Hero.jpg",
  },
  {
    title: "Sandoz India",
    Plant: "Kalwa",
    Product: "Roof Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/SANDOZ INDIA PLANT KALWA/Hero.jpg",
  },
  {
    title: "Asahi India Glass",
    Plant: "Taloja",
    Product: "Vertical Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/2 VERTICAL LIFELINE/ASAHI INDIA GLASS PLANT TALOJA 2/Hero.jpg",
  },
  {
    title: "Luminous Power Technologies",
    Plant: "Hosur",
    Product: "Vertical Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/2 VERTICAL LIFELINE/LUMINOUS POWER TECHNOLOGIES PLANT HOSUR/Hero.jpg",
  },
  {
    title: "Rane Steering Systems",
    Plant: "Chennai",
    Product: "Vertical Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/2 VERTICAL LIFELINE/RANE STEERING SYSTEMS PLANT CHENNAI 2/Hero.jpg",
  },
  {
    title: "Sandoz India",
    Plant: "Navi Mumbai",
    Product: "Vertical Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/2 VERTICAL LIFELINE/SANDOZ INDIA PLANT NAVI MUMBAI/Hero.jpg",
  },
  {
    title: "AMNS",
    Plant: "Gandhidham",
    Product: "Overhead Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/3 OVERHEAD LIFELINE/AMNS PLANT GANDHIDHAM/Hero.jpg",
  },
  {
    title: "Atul Limited",
    Plant: "Ahmedabad",
    Product: "Overhead Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/3 OVERHEAD LIFELINE/ATUL LIMITED PLANT AHMEDABAD/Hero.jpg",
  },
  {
    title: "IG Petrochemicals",
    Plant: "Taloja",
    Product: "Overhead Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/3 OVERHEAD LIFELINE/IG PETROCHEMICALS PLANT TALOJA/Hero.jpg",
  },
  {
    title: "Indian Oil Corporation",
    Plant: "Paradip",
    Product: "Overhead Lifeline",
    image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/3 OVERHEAD LIFELINE/INDIAN OIL CORPORATION PLANT PARADIP/Hero.jpg",
  },


  // {
  //   title: "Sandoz India",
  //   slug: "Sandoz_India",
  //   BannerImage: "/img/Products/Construction Fall Protections/Vertical Enveloping/05 Projects/01 Gulita/Gulita_Banner.jpg",
  //   ProjectData: [
  //     {
  //       "Project Name": "Sandoz India",
  //       "Plant": "Plant Kalwa",
  //     },
  //   ],
  //   Plant: "Plant Kalwa",
  //   image: "/img/Products/Fixed Lifeline System/Roof Lifeline/10 Projects/ASAHI TALOJA/hero.jpg",
  //   link: "/products/Fixed_Lifeline_Systems/Roof_Lifeline/projects/Sandoz_India",
  //   ThumbnailImages: [
  //     "/img/Products/Fixed Lifeline System/Roof Lifeline/10 Projects/ASAHI TALOJA/1.jpg",
  //     "/img/Products/Fixed Lifeline System/Roof Lifeline/10 Projects/ASAHI TALOJA/2.jpg",
  //     "/img/Products/Fixed Lifeline System/Roof Lifeline/10 Projects/ASAHI TALOJA/3.jpg",
  //     "/img/Products/Fixed Lifeline System/Roof Lifeline/10 Projects/ASAHI TALOJA/4.jpg",
  //     "/img/Products/Fixed Lifeline System/Roof Lifeline/10 Projects/ASAHI TALOJA/5.jpg",
  //     "/img/Products/Fixed Lifeline System/Roof Lifeline/10 Projects/ASAHI TALOJA/6.jpg",
  //     "/img/Products/Fixed Lifeline System/Roof Lifeline/10 Projects/ASAHI TALOJA/7.jpg",
  //     "/img/Products/Fixed Lifeline System/Roof Lifeline/10 Projects/ASAHI TALOJA/8.jpg",
  //   ]
  // },
]

const FallProtection = () => {
  return (
    <MainPage>
      <BannerImage
        image="/img/Products/Fixed Lifeline System/Fixed Lifeline System/banner.jpg"
        mobileImage={`/img/Products/Fixed Lifeline System/Fixed Lifeline System/banner_mob.jpg`}
        text="Fixed Lifeline Systems"
        subheading="Engineering Fall Protection"
      />




      <ContainerSection>
        <BodyCopyText className="space-y-4 w-full lg:w-4/5 lg:mx-auto text-center">
          <p>
            A Fixed Lifeline System is a permanent and highly reliable fall-protection solution used wherever work at height is performed - such as on rooftops, industrial plants, warehouses, construction sites, and maintenance areas. These systems offer a secure anchorage point that keeps workers protected throughout their tasks, making them an essential safety component for any height-related operation.
          </p>
          <p>
            Installed as horizontal or vertical stainless - steel cables or rigid rails, fixed lifelines are mounted onto roofs, walkways, gantries, and various elevated structures. Workers connect their full-body harnesses, lanyards, or fall-arrest devices to the line, allowing them to move freely and safely. In the event of a slip or fall, the system instantly arrests the fall, preventing serious injuries and ensuring continuous protection.
          </p>
          <p>
            For employers, fixed lifeline systems act as a proactive safety investment, reducing fall-related risks, ensuring compliance with safety regulations, and supporting a safer, more efficient workplace. Whether for routine maintenance or high-risk industrial work, a well-designed fixed lifeline system provides dependable, compliant, and long-term fall protection for the entire team.
          </p>
        </BodyCopyText>
      </ContainerSection>
      {/* <ContainerSection>
        <div className="grid grid-cols-12 gap-4 items-center">

          <div className="col-span-12 md:col-span-6 lg:col-span-5  flex justify-center md:justify-start">
            <Image
              src={"/img/Products/Fixed Lifeline System/Fixed Lifeline System/Intro/Intro.jpg"}
              alt="Fixed Lifeline System"
              width={1000}
              height={1000}
              className="w-full md:max-w-[457px] h-auto object-contain rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:px-[93.5px]">
            <p className="text-[#d42225] text-sm opacity-60 font-normal drop-shadow-lg mb-[10px]">
              Engineering Fall Protection
            </p>
            <HeaderText className="text-left mb-[25px]">Fixed Lifeline Systems</HeaderText>
            <BodyCopyText className="space-y-4 w-full text-left">
              A fixed lifeline system is a crucial component of fall protection in various industries, such as construction, roofing, and maintenance. This system is designed to provide a secure anchor point for workers who perform tasks at heights. It typically consists of a permanent horizontal or vertical cable or rail that is securely installed on structures like rooftops, industrial equipment, or buildings. The fixed lifeline system serves as a lifeline for workers, enabling them to attach their fall protection equipment, such as harnesses and lanyards, to the line. This ensures that in the event of a fall, the worker is safely secured, preventing them from plummeting to the ground. Fixed lifeline systems are a proactive safety measure, designed to mitigate the risks associated with working at heights. They offer peace of mind to both employees and employers by reducing the potential for accidents and injuries, ensuring compliance with safety regulations, and promoting a safer work environment. SafePro Fixed Lifeline systems are tested and certified as per work at height regulations.
            </BodyCopyText>
          </div>
        </div>
      </ContainerSection> */}

      {/* <div className="px-[15px] py-0 ">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          loop={true}
          // pagination={{ clickable: true }}
          modules={[Autoplay]}
          // modules={[Autoplay, Pagination]}
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
            "--swiper-pagination-bottom": "-6px"
          }}
        >
          {protections.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Link
                href={item.link}
                className="relative group block overflow-hidden hover:cursor-pointer"
              >
                <div className='h-full w-full overflow-hidden'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="relative w-full flex items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16 ">
                  <BodyCopyText className="text-black font-bold text-[12px] w-full text-center uppercase">
                    {item.title}
                  </BodyCopyText>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
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
            "--swiper-pagination-color": "#d42225",
            "--swiper-pagination-bullet-size": "5px",
            "--swiper-pagination-bottom": "-6px",
          }}
        >
          {protections.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Link
                href={item.link}
                className="relative group block overflow-hidden rounded-lg hover:cursor-pointer w-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full flex items-center bg-gray-700 bg-opacity-90 px-4 text-white py-4 transition-all duration-300 group-hover:bg-[#d42225] text-left h-16">
                  <BodyCopyText className="text-white font-bold text-[12px] uppercase">
                    {item.title}
                  </BodyCopyText>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      <div className="bg-gray-100  -mt-[130px] py-[130px]">
        <ContainerSection>
          <ApplicationStd />
        </ContainerSection>
      </div>
      <ContainerSection>
        <Projects1 projects={projects || []} />
      </ContainerSection>

    </MainPage>
  );
};

export default FallProtection;