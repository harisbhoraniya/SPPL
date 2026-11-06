"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const safeUrl = (url) => encodeURI(url);
export default function FeaturesAndAdvantages({ features }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div>
      <div className="w-full h-full">
        <div className="w-full h-full">
          {/* Mobile Image Only */}
          <img
            src={safeUrl(features[0].mobileImage || features[0].image)}
            alt={features[0].name}
            className="block md:hidden w-full object-cover h-full"
          />

          {/* Tablet & Desktop Image */}
          <img
            src={safeUrl(features[0].image)}
            alt={features[0].name}
            className="hidden md:block w-full object-cover h-full"
          />
        </div>
      </div>
      <div
        className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
          border-l border-opacity-5
          overflow-hidden bg-gray-100
        "
      >
        {features.map((feature, index) => {
          const isHovered = hoverIndex === index;
          return (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`
                cursor-pointer flex flex-col items-center justify-start text-center align-top
                p-4 h-40
                border-r border-b border-opacity-5
                transition-colors duration-300 ease-in-out
              `}
              style={{ minHeight: "6rem" }}
            >
              <motion.div
                layout
                initial={{ y: 0, color: isHovered ? "#fff" : "#000" }}
                animate={isHovered ? { color: "#f97316" } : { color: "#000" }}
                transition={{ type: "spring", stiffness: 300, damping: 40 }}
                className="text-[14px] z-10 pointer-events-none font-bold"
              >
                {feature.name}
              </motion.div>
              <AnimatePresence>
                <motion.div
                  key="desc"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, color: "#000" }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="z-0 text-[12px]"
                  style={{ color: "#000" }}
                >
                  {feature.desc}
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}