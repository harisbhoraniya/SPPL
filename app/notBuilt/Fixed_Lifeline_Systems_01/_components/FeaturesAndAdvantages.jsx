"use client"

import React, { useState } from 'react'

export default function FeaturesAndAdvantages({ features }) {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8 lg:max-h-[500px]">

      <ul className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-6 overflow-y-auto min-h-60 max-h-96 no-scrollbar">
        {features.map((feature, index) => (
          <li
            key={index}
            onClick={() => setSelectedFeature(feature)}
            className={`cursor-pointer p-3 rounded-lg text-gray-800
            ${selectedFeature.name === feature.name
                ? "bg-[#d42225] text-white"
                : "hover:bg-gray-200 bg-gray-100"
              }`}
          >
            {feature.name}
          </li>
        ))}
      </ul>


      <div className="w-full lg:w-1/3 h-full md:h-80 lg:h-96">
        <img
          src={selectedFeature.image}
          alt={selectedFeature.name}
          className="w-full h-full object-cover rounded-lg shadow-lg  lg:aspect-auto"
        />
      </div>
    </div>
  )
}
