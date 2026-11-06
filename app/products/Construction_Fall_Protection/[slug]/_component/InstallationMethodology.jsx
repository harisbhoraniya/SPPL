"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import ContainerSection from "@/components/views/ContainerSection";
import { HeaderText } from "@/components/views/HeaderText";
import { BodyCopyText } from "@/components/views/BodyCopyText";

const InstallationMethodologySection = ({ InstallationMethodology }) => {
  return (
    <ContainerSection>
      <div className="space-y-4">
        <HeaderText>Installation Methodology</HeaderText>
        <BodyCopyText className="text-center">{InstallationMethodology.Content}</BodyCopyText>

        {/* Swiper for Mobile Devices */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={12}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="overflow-hidden border-red-500 border-1 h-full"
          >
            {InstallationMethodology.Methods.map((method, index) => (
              <SwiperSlide key={index} className="p-4 h-full ">
                <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={method.image}
                      alt={method.Content}
                      width={1000}
                      height={600}
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">

                    <BodyCopyText className="text-center flex-grow ">{method.Content}</BodyCopyText>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* Grid for Large Devices */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {InstallationMethodology.Methods.map((method, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col ">
              <div className="w-full h-80 flex items-center justify-center">
                <Image
                  src={method.image}
                  alt={method.Content}
                  width={1000}
                  height={1000}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div className="p-4 flex items-center  h-full">
                <BodyCopyText className="text-center flex-grow ">{method.Content}</BodyCopyText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContainerSection>
  );
};

export default InstallationMethodologySection;
