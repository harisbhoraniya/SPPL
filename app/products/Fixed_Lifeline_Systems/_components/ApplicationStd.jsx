// import { HeaderText } from '@/components/views/HeaderText'
// import React from 'react'

// export default function ApplicationStd() {
//   return (
//     <div className='space-y-4'>
//       <HeaderText>Application Standards</HeaderText>
//       <div>
//         <p>
//           <span className='font-bold'>EN </span>
//           <span>795:2012</span>
//         </p>
//         <p>
//           This European standard specifies the requirements for performance and associated test method for single user anchor devices. The standard distinguishes 5 types of anchor devices.
//         </p>
//       </div>
//       <div className="grid lg:grid-cols-12 justify-center">
//         <div className="hidden lg:block"></div>

//         {[
//           {
//             title: 'Type A:',
//             desc: 'Single anchorage points which are firmly anchored to the substructure',
//           },
//           {
//             title: 'Type B:',
//             desc: 'Temporary anchorage points that can be removed again after usage without leaving any traces',
//           },
//           {
//             title: 'Type C:',
//             desc: 'Flexible anchor which deviates horizontally by not more than 15° (Lifeline Systems)',
//           },
//           {
//             title: 'Type D:',
//             desc: 'A rigid anchor which deviates horizontally by not more than 15° (Rigid Rail safety systems)',
//           },
//           {
//             title: 'Type E:',
//             desc: 'Anchorage devices that are held in place by their own weight',
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className={`
//         col-span-full lg:col-span-2 
//         space-y-2 px-0 lg:px-4 py-4 
//         border-black
//         ${index !== 4 ? 'border-b lg:border-b-0 lg:border-r' : ''}
//       `}
//           >
//             <p className="font-semibold">{item.title}</p>
//             <p>{item.desc}</p>
//           </div>
//         ))}

//         <div className="hidden lg:block"></div>
//       </div>
//       <div>
//         <p>
//           <span className='font-bold'>CEN/TS </span>
//           <span>16415:2013</span>
//         </p>
//         <p>
//           This technical specification certifies anchor devices that allow more than one user to be attached at the same time. Since work at height requires at least two workers, SafePro tests all systems for several people.
//         </p>
//       </div>
//       <div>
//         <p>
//           <span className='font-bold'>EN </span>
//           <span>353-1:2018</span>
//         </p>
//         <p>
//           This European standard defines the technical requirements for vertical rigid anchor line (rail or wire rope under tension). The forwardleaning angle and/or sideways leaning angle lies between 85° and 95°. 2006/EC/42:2006
//         </p>
//       </div>
//       <div>
//         <p>
//           <span className='font-bold'>EN </span>
//           <span>13374:2013+A1:2018</span>
//         </p>
//         <p>
//           This European standard applies to edge protection systems intended to prevent persons or objects from falling to a lower level during construction or maintenance activities. It includes design requirements, material specifications, and test methods to ensure safety and durability.
//         </p>
//       </div>
//       <div>
//         <p>
//           <span className='font-bold'>EN </span>
//           <span>ISO 1873:2014 Part2</span>
//         </p>
//         <p>
//           This European standard specifies requirements for roof assemblies designed to withstand impact loads and prevent falls through skylights, ensuring certified protection for fragile roof areas.
//         </p>
//       </div>
//       <div>
//         <p>
//           <span className='font-bold'>ACR[M]001 </span>
//           <span>“Red Book”</span>
//         </p>
//         <p>
//           This European standard specifies requirements for roof assemblies designed to withstand impact loads and prevent falls through skylights, ensuring certified protection for fragile roof areas.
//         </p>
//       </div>
//       <div>
//         <p>
//           <span className='font-bold'>EN </span>
//           <span>516:2006 Class 1 – Type C</span>
//         </p>
//         <p>
//           This European standard defines prefabricated accessories for roofing, specifically walkways. This classification ensures the system provides a safe, non-slip walking surface for access on sloped or flat roofs, without the need for fastening to the roof structure (freestanding design), thereby supporting safe movement during inspection, maintenance, or emergency access.
//         </p>
//       </div>
//     </div>
//   )
// }

"use client";

import { HeaderText } from "@/components/views/HeaderText";
import React from "react";
import AccordionTypes from "./AccordionTypes";
import { BodyCopyText } from "@/components/views/BodyCopyText";

export default function ApplicationStd() {
  const types = [
    { title: "Type A:", desc: "Single anchorage points which are firmly anchored to the substructure." },
    {
      title: "Type B:", desc: "Temporary anchorage points that can be removed again after usage without leaving any traces."
    },
    {
      title: "Type C:",
      desc: "Flexible anchor which deviates horizontally by not more than 15° (Lifeline Systems).",
    },
    {
      title: "Type D:",
      desc: "A rigid anchor which deviates horizontally by not more than 15° (Rigid Rail safety systems).",
    },
    { title: "Type E:", desc: "Anchorage devices that are held in place by their own weight." },
  ];

  // Data for desktop top and bottom rows (titles + text)
  const topItems = [
    {
      code1: "EN",
      code2: "795:2012",
      description:
        "This European standard specifies the requirements for performance and associated test method for single user anchor devices. The standard distinguishes 5 types of anchor devices.",
      showAccordion: true,
    },
    {
      code1: "CEN/TS",
      code2: "16415:2013",
      description:
        "This technical specification certifies anchor devices that allow more than one user to be attached at the same time. Since work at height requires at least two workers,  we test all systems for several people.",
    },
    {
      code1: "EN",
      code2: "353-1:2018",
      description:
        "This European standard defines the technical requirements for rigid vertical  anchor lines (rail or wire rope under tension). The forward leaning angle and/or sideways leaning angle lies between 85° and 95°- 2006/EC/42:2006.",
    },
    {
      code1: "EN",
      code2: "13374:2013 + A1:2018",
      description:
        "This European standard applies to edge protection systems intended to prevent persons or objects from falling to a lower level during construction or maintenance activities. It includes design requirements, material specifications, and test methods to ensure safety and durability.",
    },
  ];

  const bottomItems = [
    {
      code1: "EN",
      code2: "ISO 1873:2014 Part 2",
      description:
        "This European standard specifies requirements for roof assemblies designed to withstand impact loads and prevent falls through skylights, ensuring certified protection for fragile roof areas.",
    },
    {
      code1: "ACR[M]001",
      code2: "“Red Book”",
      description:
        "This standard sets out test methods and performance criteria for assessing the non-fragility of roof assemblies and protective systems, ensuring skylight protectors can resist impact and prevent fall-through incidents.",
    },
    {
      code1: "EN",
      code2: "516:2006 Class 1–Type C",
      description:
        "This European standard defines prefabricated accessories for roofing, specifically walkways. This classification ensures the system provides a safe, non-slip walking surface for access on sloped or flat roofs, without the need for fastening to the roof structure (freestanding design), thereby supporting safe movement during inspection, maintenance, or emergency access.",
    },
    // {
    //   code1: "IS",
    //   code2: "3521:2021 (Part 4 & 8)",
    //   description:
    //     "These Indian Standards define the essential safety and performance requirements for vertical and horizontal lifeline systems. Part 4 covers vertical lifelines with guided-type fall arresters, ensuring safe climbing on ladders, towers, and other vertical structures. Part 8 focuses on flexible horizontal lifeline systems, outlining strength, design, and testing criteria for safe movement along rooftops and elevated work areas.",
    // },
  ];

  return (
    <div className="">
      <HeaderText className={"mb-[45px]"}>Engineering Standards & Compliance Framework</HeaderText>
      {/* <div className="space-y-8">
        <div className="block md:hidden space-y-8">
          {topItems.map((item, idx) => (
            <div key={idx} className="border-b border-black border-opacity-20 pb-6 last:border-b-0">
              <p className="border border-black rounded-3xl border-opacity-20 mb-4 h-[96px] w-[96px] text-center flex flex-col items-center justify-center mx-auto">
                <span className="block font-bold">{item.code1}</span>
                <span className="block font-normal text-xs">{item.code2}</span>
              </p>
              <BodyCopyText className="text-center">{item.description}</BodyCopyText>
              {item.showAccordion && <AccordionTypes types={types} />}
            </div>
          ))}
          {bottomItems.map((item, idx) => (
            <div key={idx} className="border-b border-black border-opacity-20 pb-6 last:border-b-0">
              <p className="border border-black rounded-3xl border-opacity-20 mb-4 h-[96px] w-[96px] text-center flex flex-col items-center justify-center mx-auto">
                <span className="block font-bold">{item.code1}</span>
                <span className="block font-normal text-xs">{item.code2}</span>
              </p>
              <BodyCopyText className="text-center">{item.description}</BodyCopyText>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <div className="flex flex-wrap divide-x divide-black divide-opacity-20 ">
            {topItems.map((item, idx) => (
              <div
                key={idx}
                className={`w-[25%] px-4 border-b  
                ${idx > 3 - 4 ? "border-b-0" : ""} 
                ${(idx + 1) % 4 === 0 ? "border-r-0" : ""}`}
              >
                <p className="border border-black rounded-3xl border-opacity-20 mb-4 h-[96px] w-[96px] text-center flex flex-col items-center justify-center mx-auto">
                  <span className="block font-bold">{item.code1}</span>
                  <span className="block font-normal text-xs">{item.code2}</span>
                </p>
                <BodyCopyText className="text-left ">{item.description}</BodyCopyText>
                {item.showAccordion && <AccordionTypes types={types} />}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-start divide-x divide-black divide-opacity-20 mt-10">
            {bottomItems.map((item, idx) => (
              <div
                key={idx}
                className={`w-[25%] px-4 border-b  
                ${idx > 2 - 3 ? "border-b-0" : ""} 
                ${(idx + 1) % 3 === 0 ? "border-r-0" : ""}`}
              >
                <p className="border border-black rounded-3xl border-opacity-20 mb-4 h-[96px] w-[96px] text-center flex flex-col items-center justify-center mx-auto">
                  <span className="block font-bold">{item.code1}</span>
                  <span className="block font-normal text-xs">{item.code2}</span>
                </p>
                <BodyCopyText className="text-left">{item.description}</BodyCopyText>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="space-y-8">
        <div className="block md:hidden space-y-8">
          {topItems.map((item, idx) => (
            <div key={idx} className="border-b border-black border-opacity-20 pb-6 last:border-b-0">
              <p className="text-center lg:text-left">
                <span className="block font-bold">{item.code1}{" "}{item.code2}</span>
              </p>
              <BodyCopyText className="text-center">{item.description}</BodyCopyText>
              {item.showAccordion && <AccordionTypes types={types} />}
            </div>
          ))}
          {bottomItems.map((item, idx) => (
            <div key={idx} className="border-b border-black border-opacity-20 pb-6 last:border-b-0">
              <p className="text-center lg:text-left">
                <span className="block font-bold">{item.code1}{" "}{item.code2}</span>
              </p>
              <BodyCopyText className="text-center">{item.description}</BodyCopyText>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <div className="flex flex-wrap divide-x divide-black divide-opacity-20 ">
            {topItems.map((item, idx) => (
              <div
                key={idx}
                className={`w-[25%] px-4 border-b  
                ${idx > 3 - 4 ? "border-b-0" : ""} 
                ${(idx + 1) % 4 === 0 ? "border-r-0" : ""}`}
              >
                <p className="">
                  <span className="block font-bold">{item.code1}{" "}{item.code2}</span>
                </p>
                <BodyCopyText className="text-left ">{item.description}</BodyCopyText>
                {item.showAccordion && <AccordionTypes types={types} />}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-start divide-x divide-black divide-opacity-20 mt-10">
            {bottomItems.map((item, idx) => (
              <div
                key={idx}
                className={`w-[25%] px-4 border-b  
                ${idx > 2 - 3 ? "border-b-0" : ""} 
                ${(idx + 1) % 3 === 0 ? "border-r-0" : ""}`}
              >
                <p className="">
                  <span className="block font-bold">{item.code1}{" "}{item.code2}</span>
                </p>
                <BodyCopyText className="text-left">{item.description}</BodyCopyText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
