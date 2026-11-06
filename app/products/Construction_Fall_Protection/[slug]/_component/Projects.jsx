"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { BodyCopyText } from "@/components/views/BodyCopyText";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <Link
      href={project.link}
      className="relative group block overflow-hidden rounded-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-[#20335C] bg-opacity-90 px-4 text-white py-4 transition-all duration-300 group-hover:bg-[#f97316] text-left">
        <BodyCopyText className="text-white font-bold text-[15px]">
          {project.title}
        </BodyCopyText>
        <BodyCopyText className="text-white text-[13px]">
          {project.Developer}
        </BodyCopyText>
      </div>
    </Link>
  );
}

export default function Projects({ projects }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const handleSlide = (direction) => {
    if (swiperRef.current) {
      swiperRef.current.params.speed = 500;
      direction === "prev"
        ? swiperRef.current.slidePrev()
        : swiperRef.current.slideNext();
      swiperRef.current.params.speed = 1500;
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  // If 2 or fewer projects, show them centered without the swiper/carousel
  if (projects.length <= 2) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {projects.map((project, index) => (
          <div key={index} className="w-full md:w-[380px]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">

      <button
        ref={prevRef}
        className="absolute hidden  md:block left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        ref={nextRef}
        className="absolute hidden  md:block right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <ChevronRight size={30} />
      </button>


      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        slidesPerView={1.5}
        spaceBetween={30}
        loop={projects.length > 4}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1200,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}