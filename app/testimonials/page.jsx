import BannerImage from '@/components/views/BannerImage'
import { BodyCopyText } from '@/components/views/BodyCopyText';
import ContainerSection from '@/components/views/ContainerSection'
import { HeaderText } from '@/components/views/HeaderText';
import MainPage from '@/components/views/MainPage'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function TestimonialPage() {

  const testimonials = [
    {
      id: 1,
      text: "We have been using this EPS System for the last 4 years and found it very safe and easy to use, it saves a lot of time and requires less manpower.",
      author: "Birla Estates",
      logo: "/img/Home/06 Testimonial Logo/01 Home_Test_Birla estates.png"
    },
    {
      id: 2,
      text: "We congratulate team SAFEPRO / Safety Projects Pvt Ltd, for their wonderful product and services and wish them great success for their future.",
      author: "Larsen & Toubro",
      logo: "/img/Home/06 Testimonial Logo/02 Home_Test_L&T.png"
    },
    {
      id: 3,
      text: "It has Lot many advantages like Fall Indicator, Tension Indicator, Energy Absorbing Post Which indicate healthiness of lifeline system and maintain stability of our structure where Safepro system is installed.",
      author: "AMNS",
      logo: "/img/Home/06 Testimonial Logo/03 Home_Test_AMNS.png"
    },
    {
      id: 4,
      text: "We look forward to continue working with you as our preferred safety partner for all safety items and having a long term relationship of trust and mutual benefit.",
      author: "Siemens",
      logo: "/img/Home/06 Testimonial Logo/04 Home_Test_Siemens.png"
    },
    {
      id: 5,
      text: "We have been using this EPS System for the last 4 years and found it very safe and easy to use, it saves a lot of time and requires less manpower.",
      author: "Birla Estates",
      logo: "/img/Home/06 Testimonial Logo/01 Home_Test_Birla estates.png"
    },
    {
      id: 6,
      text: "We congratulate team SAFEPRO / Safety Projects Pvt Ltd, for their wonderful product and services and wish them great success for their future.",
      author: "Larsen & Toubro",
      logo: "/img/Home/06 Testimonial Logo/02 Home_Test_L&T.png"
    },
    {
      id: 7,
      text: "It has Lot many advantages like Fall Indicator, Tension Indicator, Energy Absorbing Post Which indicate healthiness of lifeline system and maintain stability of our structure where Safepro system is installed.",
      author: "AMNS",
      logo: "/img/Home/06 Testimonial Logo/03 Home_Test_AMNS.png"
    },
    {
      id: 8,
      text: "We look forward to continue working with you as our preferred safety partner for all safety items and having a long term relationship of trust and mutual benefit.",
      author: "Siemens",
      logo: "/img/Home/06 Testimonial Logo/04 Home_Test_Siemens.png"
    },

  ];

  return (
    <MainPage>
      <BannerImage
        image="/img/Products/Fixed Lifeline System/Fixed Lifeline System/banner.jpg"
        // mobileImage={`/img/Products/Fixed Lifeline System/Fixed Lifeline System/mob/banner.jpg`}
        text="Testimonials"
      />
      <ContainerSection>
        <div className="flex items-center justify-center w-full">
          <HeaderText className={"text-center"}>
            They Have Trusted Us
          </HeaderText>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>

          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="h-full">
              <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between min-h-[200px] lg:min-h-[250px]">
                <div className="text-gray-600 ">
                  <BodyCopyText className="line-clamp-4 text-left">
                    “{testimonial.text}”
                  </BodyCopyText>

                </div>
                <div className="text-gray-800 font-semibold justify-between items-center flex items-left gap-4">
                  {/* Logo */}
                  <div className="w-1/2 h-24 md:h-16  overflow-hidden ">
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.author}
                      width={1000}
                      height={1000}
                      loading="lazy"
                      className="object-contain w-fit h-full"
                    />
                  </div>

                  <div className="text-right">
                    <Link
                      href="/testimonials"
                      className="text-gray-400 font-medium text-sm hover:text-[#d42225]"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </ContainerSection>
    </MainPage>
  )
}
