"use client"

import Image from 'next/image';
import React, { useState } from 'react'

export default function FeaturesAndAdvantages({ features }) {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8 lg:max-h-[360px] ">

      <ul className="w-full lg:w-auto grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-6 overflow-y-auto min-h-60 max-h-[360px] no-scrollbar ">
        {features.map((feature, index) => (
          <li
            key={index}
            onClick={() => setSelectedFeature(feature)}
            className={`cursor-pointer p-3 rounded-lg text-gray-800
            ${selectedFeature.name === feature.name
                ? "bg-[#f97316] text-white"
                : "hover:bg-gray-200 bg-gray-100"
              }`}
          >
            {feature.name}
          </li>
        ))}
      </ul>


      <div className="w-full h-full lg:min-w-[360px] lg:max-w-[360px] lg:min-h-[360px] lg:max-h-[360px] ">
        <Image
          src={selectedFeature.image}
          alt={selectedFeature.name}
          height={1000}
          width={1000}
          className="w-full h-full object-fit rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}