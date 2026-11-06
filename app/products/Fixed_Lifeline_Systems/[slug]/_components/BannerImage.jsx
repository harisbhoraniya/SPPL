// import Image from 'next/image'
// import React from 'react'

// export default function BannerImage({ image, text }) {
//   return (
//     <div className="relative w-full h-auto">

//       <Image
//         src={image} // Replace with your image path
//         alt={text}
//         width={1000}
//         height={100}
//         className="w-full h-auto"
//         loading='eager'
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-end pb-8 uppercase flex-col space-y-4 ">

//         <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide drop-shadow-lg">
//           {text}
//         </h1>
//       </div>
//     </div>
//   )
// }




import Image from "next/image";
import React from "react";

export default function BannerImage({ image, mobileImage, text }) {
  return (
    <div className="relative w-full h-auto">
      {/* Desktop Image (Shown if no mobile image is provided) */}
      <div className={mobileImage ? "hidden md:block" : ""}>
        <Image
          src={image} // Default image
          alt={text}
          width={1200}
          height={400}
          className="w-full h-auto"
          loading="eager"
        />
      </div>

      {/* Mobile Image (Only shown if available) */}
      {mobileImage && (
        <div className="md:hidden">
          <Image
            src={mobileImage} // Mobile image
            alt={text}
            width={600}
            height={300}
            className="w-full h-auto"
            loading="eager"
          />
        </div>
      )}

      {/* Overlay Text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-end pb-8 uppercase flex-col space-y-4">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide drop-shadow-lg text-center">
          <span >
            SAFE
          </span>
          <span>
            PRO{" "}
          </span>
          <span>
            {text}
          </span>
        </h1>
      </div>
    </div>
  );
}




// import Image from "next/image";
// import React from "react";

// export default function BannerImage({ image, mobileImage, text, subheading }) {
//   return (
//     <div className="relative w-full h-auto">
   
//       <div className={mobileImage ? "hidden md:block" : ""}>
//         <Image
//           src={image} 
//           alt={text}
//           width={1200}
//           height={400}
//           className="w-full h-auto"
//           loading="eager"
//         />
//       </div>

//       Mobile Image (Only shown if available)
//       {mobileImage && (
//         <div className="md:hidden">
//           <Image
//             src={mobileImage}
//             alt={text}
//             width={600}
//             height={300}
//             className="w-full h-auto"
//             loading="eager"
//           />
//         </div>
//       )}

//       Overlay Text
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-center   flex-col space-y-4">
//         {subheading &&
//           <p className="text-white text-sm opacity-60 font-normal  drop-shadow-lg text-center">
//             {subheading}
//           </p>
//         }
//         {text &&
//           <h1 className="text-white uppercase text-2xl md:text-4xl lg:text-[46px] font-bold tracking-wide drop-shadow-lg text-center">
//             <span >
//               SAFE
//             </span>
//             <span className='text-[#d42225]'>
//               PRO{" "}
//             </span>
//             <span>
//               {text}
//             </span>
//           </h1>
//         }
//       </div>
//     </div>
//   );
// }
