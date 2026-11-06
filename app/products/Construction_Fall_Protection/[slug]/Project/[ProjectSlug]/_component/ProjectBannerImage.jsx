
// import Image from "next/image";
// import React from "react";

// export default function ProjectBannerImage({ image, mobileImage, text }) {
//   return (
//     <div className="relative w-full h-96 border-2 border-black md:h-auto">
//       {/* Desktop Image (Shown if no mobile image is provided) */}
//       <div className="">
//         <Image
//           src={image} // Default image
//           alt={text}
//           width={1200}
//           height={400}
//           className="w-full h-auto"
//           loading="eager"
//         />
//       </div>

      

//       {/* Overlay Text */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-end pb-8 uppercase flex-col space-y-4">
//         <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide drop-shadow-lg text-center">
//           {text}
//         </h1>
//       </div>
//     </div>
//   );
// }


import Image from "next/image";
import React from "react";

export default function ProjectBannerImage({ image, text }) {
  return (
    <div className="relative w-full h-[200px] sm:h-[500px] md:h-auto ">
      {/* Image */}
      <Image
        src={image} // Default image
        alt={text}
        width={1200}
        height={600}
        className="w-full h-full object-cover object-center"
        loading="eager"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-end pb-8 uppercase flex-col space-y-4">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide drop-shadow-lg text-center">
          {text}
        </h1>
      </div>
    </div>
  );
}
