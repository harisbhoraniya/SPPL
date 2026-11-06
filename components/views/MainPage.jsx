// import { cn } from '@/lib/utils'
// import React from 'react'

// export default function MainPage({ children, className }) {
//   return (
//     <div className={cn(`flex flex-col gap-8 md:gap-[130px]  mb-16 ${className}`)}>{children}</div>
//   )
// }

// // space-y-8 md:space-y-12 mb-16
// // flex flex-col gap-8 md:gap-12  mb-16



// import { cn } from '@/lib/utils'
// import React from 'react'

// export default function MainPage({ children, className }) {
//   return (
//     <div
//       className={cn(
//         'flex flex-col gap-8 md:gap-[130px] ',
//         className
//       )}
//     >
//       {children}
//     </div>
//   )
// }



import { cn } from '@/lib/utils'
import React from 'react'

export default function MainPage({ children, className, noGapTop }) {
  return (
    <div
      className={cn(
        'flex flex-col',
        !noGapTop && 'gap-8 md:gap-12 mb-16',
        className
      )}
    >
      {children}
    </div>
  )
}
