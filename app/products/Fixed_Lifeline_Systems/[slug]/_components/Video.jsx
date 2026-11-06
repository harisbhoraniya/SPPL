'use client'
import React from 'react'
import { HeaderText } from '@/components/views/HeaderText'

export default function Video({ video, poster, title }) {
  if (!video) return null

  return (
    <div className="w-full flex flex-col items-center">
      {title && (
        <div className="text-center mb-[30px]">
          <p className="text-[#d42225] text-sm opacity-60 font-normal uppercase tracking-wide mb-[8px]">
            Watch
          </p>
          <HeaderText className="text-center">
            {title}
          </HeaderText>
        </div>
      )}

     <div
  className="group relative w-full lg:w-4/5 mx-auto aspect-video rounded-lg overflow-hidden
             border border-gray-200 shadow-md hover:shadow-2xl
             transition-shadow duration-300 ease-in-out bg-black"
>
  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#d42225] z-10" />

        <video
          className="w-full h-full object-cover object-top scale-105"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    poster={poster || undefined}
  >
    <source src={video} type="video/mp4" />
  </video>
</div>
    </div>
  )
}