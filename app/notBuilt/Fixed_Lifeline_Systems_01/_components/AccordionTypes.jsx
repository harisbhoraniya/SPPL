// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState } from "react";

// export default function AccordionTypes({ types = [] }) {
//   const [openIndex, setOpenIndex] = useState(null);

//   const accordionVariants = {
//     hidden: { opacity: 0, height: 0, y: -15 },
//     visible: {
//       opacity: 1,
//       height: "auto",
//       y: 0,
//       transition: { duration: 0.5, ease: "easeInOut" },
//     },
//   };

//   return (
//     <div>
//       {types.map((item, index) => (
//         <div
//           key={index}
//           className="border-b border-black border-opacity-20 pb-2 mb-6 last:border-b-0 cursor-pointer"
//           onClick={() => setOpenIndex(index)}
//         >
//           <p className="font-semibold ">{item.title}</p>
//           <AnimatePresence>
//             {openIndex === index && (
//               <motion.p
//                 key="desc"
//                 className="pl-2 text-gray-700 overflow-hidden"
//                 variants={accordionVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//               >
//                 {item.desc}
//               </motion.p>
//             )}
//           </AnimatePresence>
//         </div>
//       ))}
//     </div>
//   );
// }


import { BodyCopyText } from "@/components/views/BodyCopyText";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export default function AccordionTypes({ types = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionVariants = {
    hidden: { opacity: 0, height: 0, y: -15 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-2">
      {types.map((item, index) => (
        <div
          key={index}
          className="border-b border-black border-opacity-20 last:border-b-0 cursor-pointer"
          onClick={() => toggleIndex(index)}
        >
          <BodyCopyText className="font-semibold mb-2 mt-2">{item.title}</BodyCopyText>
          <AnimatePresence>
            {openIndex === index && (
              <motion.p
                key="desc"
                className="pl-2 text-gray-700 overflow-hidden text-[14px]"
                variants={accordionVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {item.desc}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
