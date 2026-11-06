"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BodyCopyText } from "@/components/views/BodyCopyText";
import { HeaderText } from "@/components/views/HeaderText";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nomenclature({
  image,
  pulseButtonConfig,
  mobileConfig,
  tabletConfig,
  desktopConfig,
  Extra = []
}) {
  const [activeConfig, setActiveConfig] = useState(pulseButtonConfig);

  useEffect(() => {
    const updateConfig = () => {
      const w = window.innerWidth;
      if (w < 768 && mobileConfig?.length) {
        setActiveConfig(mobileConfig);
      } else if (w < 1024 && tabletConfig?.length) {
        setActiveConfig(tabletConfig);
      } else if (desktopConfig?.length) {
        setActiveConfig(desktopConfig);
      } else {
        setActiveConfig(pulseButtonConfig);
      }
    };

    updateConfig();
    window.addEventListener("resize", updateConfig);
    return () => window.removeEventListener("resize", updateConfig);
  }, [pulseButtonConfig, mobileConfig, tabletConfig, desktopConfig]);

  return (
    <div className="relative w-full flex flex-col">
      <HeaderText className="mb-6">Terminology</HeaderText>
      <div className="relative w-full">
        <Image
          src={image}
          alt="Nomenclature"
          width={1270}
          height={953}
          className="w-full h-auto"
        />
        {activeConfig.map((button, index) => (
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
                <div className="w-2 md:w-4 h-2 md:h-4 bg-[#f97316] rounded-full animate-ping absolute"></div>
                <div className="w-2 md:w-4 h-2 md:h-4 bg-[#f97316] rounded-full"></div>
              </PopoverTrigger>
              <PopoverContent className="mt-4 p-2 text-sm flex flex-col gap-2 items-center w-fit">
                {button.img && (
                  <Image
                    src={button.img}
                    alt="image"
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="h-20 w-20 object-center object-cover"
                  />
                )}
                <BodyCopyText className="hover:text-[#d42225]">{button.content}</BodyCopyText>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
}