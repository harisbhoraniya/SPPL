// "use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BodyCopyText } from "@/components/views/BodyCopyText";
import { HeaderText } from "@/components/views/HeaderText";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

export default function Nomenclature({ image, pulseButtonConfig, Extra = [] }) {
  if (!pulseButtonConfig || !Array.isArray(pulseButtonConfig) || pulseButtonConfig.length === 0) {
    return null;
  }

  return (
    // <div className="relative h-full w-full ">

    //   <HeaderText className="text-center mb-6">Terminology</HeaderText>

    //   <Image
    //     src={image}
    //     alt={"Nomenclature"}
    //     width={1000}
    //     height={1000}
    //     loading="eager"
    //     className="object-cover w-full h-full"
    //   />

    <div className="relative w-full flex flex-col">

      <HeaderText className="mb-6">
        Terminology
      </HeaderText>

      <Image
        src={image}
        alt="Nomenclature"
        width={1000}
        height={1000}
        className="object-cover w-full"
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
              <div className="w-2 md:w-4 h-2 md:h-4 bg-[#d42225] rounded-full animate-ping absolute"></div>
              <div className="w-2 md:w-4 h-2 md:h-4 bg-[#d42225] rounded-full"></div>
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
      {/* {Extra.length > 0 && Extra.map((button, index) => (
        <div
          key={index}
          className="absolute flex items-center justify-center z-20"
          style={{
            top: button.position.top,
            left: button.position.left,
          }}
        >
          <div className="bg-white/90 rounded-lg shadow-xl p-2 flex flex-col items-center w-fit">
            {button.img && (
              <Image
                src={button.img}
                alt="image"
                width={1000}
                height={1000}
                loading="lazy"
                className="h-[96px] w-[96px] object-center object-cover rounded-md mb-2"
              />
            )}
            <BodyCopyText className="hover:text-[#d42225] max-w-[96px] text-center">{button.content}</BodyCopyText>
          </div>
        </div>
      ))} */}

    </div>
  );
}



// // "use client"

// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import Image from "next/image";
// import Link from "next/link";
// // import { useState } from "react";

// export default function Nomenclature({ image, pulseButtonConfig, Extra }) {
//   return (
//     <div className="relative h-full w-full ">
//       <Image
//         src={image}
//         alt={"Nomenclature"}
//         width={1000}
//         height={1000}
//         loading="eager"
//         className="object-cover w-full h-full"
//       />

//       {pulseButtonConfig.map((button, index) => (
//         <div
//           key={index}
//           className="absolute flex items-center justify-center"
//           style={{
//             top: button.position.top,
//             left: button.position.left,
//           }}
//         >
//           <Popover>
//             <PopoverTrigger className="relative">
//               <div className={`w-2 md:w-4 h-2 md:h-4 bg-[#d42225] rounded-full animate-ping absolute`}></div>

//             </PopoverTrigger>
//             <PopoverContent className="mt-4 p-2 text-sm flex flex-col gap-2 items-center w-fit">
//               {button.img &&
//                 <Image
//                   src={button.img}
//                   alt="image"
//                   width={1000}
//                   height={1000}
//                   loading="lazy"
//                   className="w-20 h-20 md:w-40 md:h-40 object-center object-cover rounded-md"
//                 />}
//               <BodyCopyText className="hover:text-[#d42225]">{button.content}</BodyCopyText>
//               {/* <Link href={button.link} className="hover:text-red-500">{button.content}</Link> */}
//             </PopoverContent>
//           </Popover>
//         </div>
//       ))}
//       {Extra.map((button, index) => (
//         <div
//           key={index}
//           className="absolute flex items-center justify-center z-20"
//           style={{
//             top: button.position.top,
//             left: button.position.left,
//           }}
//         >
//           <div className="bg-white/90 rounded-lg shadow-xl p-2 flex flex-col items-center w-fit">
//             {button.img && (
//               <Image
//                 src={button.img}
//                 alt="image"
//                 width={1000}
//                 height={1000}
//                 loading="lazy"
//                 className="w-20 h-20 md:w-40 md:h-40 object-center object-cover rounded-md mb-2"
//               />
//             )}
//             <BodyCopyText className="hover:text-[#d42225] max-w-20 md:max-w-40 text-center">{button.content}</BodyCopyText>
//           </div>
//         </div>
//       ))}

//     </div>
//   );
// }
