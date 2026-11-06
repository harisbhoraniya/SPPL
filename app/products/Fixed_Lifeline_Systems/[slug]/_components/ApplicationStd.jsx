import { HeaderText } from '@/components/views/HeaderText'
import React from 'react'

export default function ApplicationStd() {
  return (
    <div className=' space-y-4'>
      <HeaderText>Application Standards</HeaderText>
      <div className="text-center lg:text-left">
        <p>
          <span className='font-bold'>EN </span>
          <span>795:2012</span>
        </p>
        <p>
          This European standard specifies the requirements for performance and associated test method for single user anchor devices. The standard distinguishes 5 types of anchor devices.
        </p>
      </div>
      <div className="grid lg:grid-cols-12 justify-center">
        <div className="hidden lg:block"></div>

        {[
          {
            title: 'Type A:',
            desc: 'Single anchorage points which are firmly anchored to the substructure',
          },
          {
            title: 'Type B:',
            desc: 'Temporary anchorage points that can be removed again after usage without leaving any traces',
          },
          {
            title: 'Type C:',
            desc: 'Flexible anchor which deviates horizontally by not more than 15° (Lifeline Systems)',
          },
          {
            title: 'Type D:',
            desc: 'A rigid anchor which deviates horizontally by not more than 15° (Rigid Rail safety systems)',
          },
          {
            title: 'Type E:',
            desc: 'Anchorage devices that are held in place by their own weight',
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`
        col-span-full lg:col-span-2 
        space-y-2 px-0 lg:px-4 py-4 
        border-black
        ${index !== 4 ? 'border-b lg:border-b-0 lg:border-r' : ''}
      `}
          >
            <p className="font-semibold">{item.title}</p>
            <p>{item.desc}</p>
          </div>
        ))}

        <div className="hidden lg:block"></div>
      </div>


      <div>
        <p>
          <span className='font-bold'>CEN/TS </span>
          <span>16415:2013</span>
        </p>
        <p>
          This technical specification certifies anchor devices that allow more than one user to be attached at the same time. Since work at height requires at least two workers, SafePro tests all systems for several people.
        </p>
      </div>
      <div>
        <p>
          <span className='font-bold'>EN </span>
          <span>353-1:2018</span>
        </p>
        <p>
          This European standard defines the technical requirements for vertical rigid anchor line (rail or wire rope under tension). The forwardleaning angle and/or sideways leaning angle lies between 85° and 95°. 2006/EC/42:2006
        </p>
      </div>

      <div>
        <p>
          <span className='font-bold'>EN </span>
          <span>13374:2013+A1:2018</span>
        </p>
        <p>
          This European standard applies to edge protection systems intended to prevent persons or objects from falling to a lower level during construction or maintenance activities. It includes design requirements, material specifications, and test methods to ensure safety and durability.
        </p>
      </div>
      <div>
        <p>
          <span className='font-bold'>EN </span>
          <span>ISO 1873:2014 Part2</span>
        </p>
        <p>
          This European standard specifies requirements for roof assemblies designed to withstand impact loads and prevent falls through skylights, ensuring certified protection for fragile roof areas.
        </p>
      </div>
      <div>
        <p>
          <span className='font-bold'>ACR[M]001 </span>
          <span>“Red Book”</span>
        </p>
        <p>
          This European standard specifies requirements for roof assemblies designed to withstand impact loads and prevent falls through skylights, ensuring certified protection for fragile roof areas.
        </p>
      </div>
      <div>
        <p>
          <span className='font-bold'>EN </span>
          <span>516:2006 Class 1 – Type C</span>
        </p>
        <p>
          This European standard defines prefabricated accessories for roofing, specifically walkways. This classification ensures the system provides a safe, non-slip walking surface for access on sloped or flat roofs, without the need for fastening to the roof structure (freestanding design), thereby supporting safe movement during inspection, maintenance, or emergency access.
        </p>
      </div>
    </div>
  )
}
