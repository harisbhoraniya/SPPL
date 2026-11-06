



// "use client";

// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// export default function FeaturesAndAdvantages({ features }) {
//   const [hoverIndex, setHoverIndex] = useState(null);

//   return (
//     <div>
//       <div className="w-full h-full">
//         <img
//           src={features[0].image}
//           alt={features[0].name}
//           className="w-full object-cover h-full"
//         />
//       </div>
//       <div
//         className="
//           grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
//           border-l border-opacity-5
//           overflow-hidden bg-gray-100
//         "
//       >
//         {features.map((feature, index) => {
//           const isHovered = hoverIndex === index;
//           return (
//             <div
//               key={index}
//               onMouseEnter={() => setHoverIndex(index)}
//               onMouseLeave={() => setHoverIndex(null)}
//               className={`
//                 cursor-pointer flex flex-col items-center justify-center text-center align-middle
//                 p-4 h-40
//                 border-r border-b border-opacity-5
//                 transition-colors duration-300 ease-in-out
//                 ${isHovered ? "bg-[#343a40]" : "bg-gray-100"}
//               `}
//               style={{ minHeight: "6rem" }}
//             >
//               <motion.div
//                 layout
//                 initial={{ y: 0, color: isHovered ? "#fff" : "#000" }}
//                 animate={isHovered ? { y: -10, color: "#fff" } : { y: 0, color: "#000" }}
//                 transition={{ type: "spring", stiffness: 300, damping: 40 }}
//                 className="text-[14px] z-10 pointer-events-none"
//               >
//                 {feature.name}
//               </motion.div>
//               <AnimatePresence>
//                 {isHovered && (
//                   <motion.div
//                     key="desc"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0, color: "#fff" }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.25, ease: "easeOut" }}
//                     className="z-0 text-[12px]"
//                     style={{ color: "#fff" }}
//                   >
//                     {feature.desc}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }






"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FeaturesAndAdvantages({ features }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  if (!features || !Array.isArray(features) || features.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="w-full h-full">
        <img
          src={features[0].image}
          alt={features[0].name}
          className="w-full object-cover h-full"
        />
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
              // className={`
              //   cursor-pointer flex flex-col items-center justify-center text-center align-middle
              //   p-4 h-40
              //   border-r border-b border-opacity-5
              //   transition-colors duration-300 ease-in-out

              // `}
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
                animate={isHovered ? { color: "#f00" } : { color: "#000" }}
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
