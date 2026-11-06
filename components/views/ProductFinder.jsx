// "use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { HeaderText } from "./HeaderText";
// import { useState } from "react";

export default function ProductFinder() {

  // const [isOpen, setIsOpen] = useState(false)

  const pulseButtonConfig = [
    {
      position: { top: "21%", left: "21%" },
      link: "/products/Construction_Fall_Protection/Safety_Screen_Self-Climb",
      img: "/img/Home/03 Product Finder/Product Finder Poup up Images/Safety Screen Self-Climb Thumbnail/Safety Screen Self-Climb Thumbnail.jpg",
      content: "Safety Screen Self-Climb",
      // color: fff
    },
    {
      position: { top: "35%", left: "77.5%" },
      link: "/products/Construction_Fall_Protection/Edge_Protection",
      img: "/img/Home/03 Product Finder/Product Finder Poup up Images/Edge Protection Thumbnail/Edge Protection Thumbnail.jpg",
      content: "Edge Protection",
    },
    {
      position: { top: "10%", left: "43.5%" },
      link: "/products/Construction_Fall_Protection/Vertical_Enveloping",
      img: "/img/Home/03 Product Finder/Product Finder Poup up Images/Vertical Enveloping Thumbnail/Vertical Enveloping Thumbnail.jpg",
      content: "Vertical Enveloping",
    },
    {
      position: { top: "12%", left: "65.5%" },
      link: "/products/Construction_Fall_Protection/Vertical_Net_Fan_System",
      img: "/img/Home/03 Product Finder/Product Finder Poup up Images/VNF Thumbnail/VNF Thumbnail.jpg",
      content: "Vertical Net Fan System",
    },
    {
      position: { top: "35%", left: "25%" },
      link: "/products/Construction_Fall_Protection/Safety_Net_Fan_System",
      img: "/img/Home/03 Product Finder/Product Finder Poup up Images/SNF Thumbnail/SNF Thumbnail.jpg",
      content: "Safety Net Fan System",
    },
    {
      position: { top: "11%", left: "95%" },
      link: "/products/Fixed_Lifeline_Systems/Vertical_Lifeline",
      img: "/img/Home/03 Product Finder/Product Finder Poup up Images/Vertical Lifeline Thumbnail/Vertical Lifeline Thumbnail.jpg",
      content: "Vertical Lifeline",
    },
    {
      position: { top: "65.5%", left: "27.5%" },
      link: "/products/Fixed_Lifeline_Systems/Walkway",
      img: "img/Products/Fixed Lifeline System/Walkway/Intro/Intro.jpg",
      content: "Walkway",
    },
    {
      position: { top: "63%", left: "20%" },
      link: "/products/Fixed_Lifeline_Systems/Skylight_Protector",
      img: "/img/Home/03 Product Finder/Product Finder Poup up Images/Skylight Protector Thumbnail/Skylight Protector Thumbnail.jpg",
      content: "Skylight Protector",
    },
    {
      position: { top: "62%", left: "33%" },
      link: "/products/Fixed_Lifeline_Systems/Crossover",
      img: "",
      content: "Crossover",
    },
    {
      position: { top: "79.5%", left: "6.2%" },
      // link: "/products/Fixed_Lifeline_Systems/Roof_Lifeline",
      link: "/products/Fixed_Lifeline_Systems/Roof_Lifeline",

      img: "/img/Home/03 Product Finder/Product Finder Poup up Images/Roof Lifeline Thumbnail/Roof Lifeline Thumbnail.jpg",
      content: "Roof Lifeline",
    },
    {
      position: { top: "31%", left: "44%" },
      link: "/products/Fixed_Lifeline_Systems/Lifeline_For_Concrete_Structures",
      img: "",
      content: "Lifeline For Concrete Structures",
    },
    {
      position: { top: "35%", left: "49%" },
      link: "/products/Fixed_Lifeline_Systems/Vertical_Access_System",
      img: "/img/Home/03 Product Finder/Product Finder Poup up Images/Vertical Access System Thumbnail/Vertical Access System Thumbnail.jpg",
      content: "Vertical Access System",
    },
    {
      position: { top: "50%", left: "60%" },
      link: "/products/Fixed_Lifeline_Systems/Anchor_Points",
      img: "/img/Home/03 Product Finder/Product Finder Poup up Images/Anchor Points Thumbnail/Anchor Points Thumbnail.jpg",
      content: "Anchor Points",
    },
    {
      position: { top: "51%", left: "95.5%" },
      link: "/products/Fixed_Lifeline_Systems/Container_Anchor_System",
      img: "",
      content: "Container Anchor System",
    },
    {
      position: { top: "62%", left: "87%" },
      link: "/products/Fixed_Lifeline_Systems/Overhead_Lifelines",
      img: "/img/Home/03 Product Finder/Product Finder Poup up Images/Cranebay Lifeline Thumbnail/Cranebay Lifeline Thumbnail.jpg",
      content: "Cranebay Lifeline",
    },
    {
      position: { top: "77%", left: "66%" },
      link: "/products/Fixed_Lifeline_Systems/Overhead_Lifeline",
      img: "/img/Home/03 Product Finder/Product Finder Poup up Images/Overhead Lifeline Thumbnail/Overhead Lifeline Thumbnail.jpg",
      content: "Overhead Lifeline",
    },
  ];
  return (
    <div className="space-y-8">
      <HeaderText>
        Product Finder
      </HeaderText>
      <div className="relative h-full w-full ">

        {/* Background Image */}
        <Image
          src={"/img/Home/03 Product Finder/Product Finder.jpg"}
          alt={"Product Finder"}
          width={1000}
          height={1000}
          loading="eager"
          className="object-cover w-full h-full"
        />

        {pulseButtonConfig.map((button, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center"
            style={{
              top: button.position.top,
              left: button.position.left,
            }}
          >
            <Popover>
              <PopoverTrigger className="relative">
                <div className={`w-2 md:w-4 h-2 md:h-4 bg-[#f97316] rounded-full animate-ping absolute`}></div>

              </PopoverTrigger>
              <PopoverContent className="mt-4 p-2 text-sm flex gap-2 items-center w-fit">
                {button.img &&
                  <Image
                    src={button.img}
                    alt="image"
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="h-20 w-20 object-center object-cover"
                  />}
                <Link href={button.link} className="hover:text-[#f97316]">{button.content}</Link>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
}