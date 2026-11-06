import { BodyCopyText } from '@/components/views/BodyCopyText'
import React from 'react'

export default function TechnicalSpecification({ data }) {
  return (
    <table className="min-w-full h-fit bg-white">
      <thead>
        <tr>
          <th className="px-2 md:px-6 py-2 md:py-4 text-left font-semibold border-r  border-b border-gray-300 bg-[#f97316]">
            <BodyCopyText className={"text-white"}>
              Specification
            </BodyCopyText>
          </th>
          <th className="px-2 md:px-6 py-2 md:py-4 text-left font-semibold  border-b border-gray-300 bg-[#f97316]">
            <BodyCopyText className={"text-white"}>Details</BodyCopyText>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className={
              index % 2 === 0
                ? "bg-gray-50"
                : ""
            }
          >
            <td className="px-2 md:px-6 py-2 md:py-4 text-gray-700 border-b border-r border-gray-300">
              <BodyCopyText className={"text-left"}>
                {item.specification}
              </BodyCopyText>
            </td>
            <td className="px-2 md:px-6 py-2 md:py-4 text-gray-700 border-b border-gray-300 whitespace-pre-line ">
              <BodyCopyText className={"text-left"}>
                {item.details.split("\n").map((line, index, arr) => (
                  <span key={index}>
                    {line}
                    {index < arr.length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </span>
                ))}
              </BodyCopyText>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}