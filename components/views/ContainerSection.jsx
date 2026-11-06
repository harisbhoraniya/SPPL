import { cn } from '@/lib/utils'
import React from 'react'

export default function ContainerSection({ children, className }) {
  return (
    // <div className='container mx-auto px-8'>

    <div className={cn(`container mx-auto px-8 space-y-8 md:space-y-16, ${className}`)}>{children}</div>
    // </div>
  )
}
