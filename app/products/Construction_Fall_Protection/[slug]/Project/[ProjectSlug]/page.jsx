
import { notFound } from "next/navigation";
import Image from "next/image";
import { ConstructionFallProtection } from "@/data/ConstructionFallProtection"; // Adjust the import path accordingly
import BannerImage from "@/components/views/BannerImage";
import { HeaderText } from "@/components/views/HeaderText";
import { BodyCopyText } from "@/components/views/BodyCopyText";
import React from "react";
import ContainerSection from "@/components/views/ContainerSection";
import Projects from "../../_component/Projects";


import ImageComponent from "./_component/ImageComponent";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MainPage from "@/components/views/MainPage";
import ProjectBannerImage from "./_component/ProjectBannerImage";

export function generateStaticParams() {
  const params = [];

  ConstructionFallProtection.forEach((category) => {
    category.Projects.forEach((project) => {
      params.push({
        slug: category.slug,
        ProjectSlug: project.slug,
      });
    });
  });

  return params;
}

export default async function ProjectPage({ params }) {
  const { slug, ProjectSlug } = await params;

  // Find the corresponding product based on slug
  const product = ConstructionFallProtection.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return notFound();
  }

  // Find the corresponding project based on ProjectSlug
  // const project = product.Projects.find(
  //   (proj) => proj.slug === ProjectSlug
  // );

  //   const product = ConstructionFallProtection.find((item) => item.slug === slug);
  //   if (!product) return notFound();

  const projectIndex = product.Projects.findIndex((proj) => proj.slug === ProjectSlug);
  if (projectIndex === -1) return notFound();

  const project = product.Projects[projectIndex];
  const prevProject = product.Projects[projectIndex - 1] || null;
  const nextProject = product.Projects[projectIndex + 1] || null;

  const SimilarProjects = product.Projects.filter(
    (proj) => proj.slug !== ProjectSlug
  );

  if (!project) {
    return notFound();
  }

  return (
    <MainPage>

      <ProjectBannerImage image={`${project.BannerImage}`} text={`${project.title}`} />
      <ContainerSection>
        <div className="space-y-8">

          <HeaderText>Project Details</HeaderText>
          {/* <div className="border rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 table-auto">
              <tbody className="bg-white divide-y divide-gray-200">
                {project.ProjectData.map((data, index) => (
                  <tr
                    key={index}
                    className="grid grid-cols-2  "
                  >
                    {Object.entries(data).map(([key, value]) => (
                      <div key={key} className={`grid grid-cols-2`}>
                        <th
                          scope="row"
                          className={`text-left font-semibold text-gray-900 p-2  border-b border-r ${index % 2 !== 0 ? "bg-gray-300" : "bg-gray-100"}`}
                        >
                          <BodyCopyText className="text-sm">{key}</BodyCopyText>
                        </th>
                        <td className="text-gray-700 p-2 bg-gray-50 border-b border-r">
                          <BodyCopyText className="text-sm">{value}</BodyCopyText>
                        </td>
                      </div>
                    ))}
                  </tr>
                ))}
              </tbody>


            </table>
          </div> */}
          {/* <div className="">
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(project.ProjectData[0])
                .reduce((acc, [key, value], index) => {
                  acc[index % 2].push({ key, value });
                  return acc;
                }, [[], []]) // Splitting into two separate arrays
                .map((tableData, tableIndex) => (
                  <div key={tableIndex} className="border border-[#343a40] rounded-md overflow-hidden">

                    <table key={tableIndex} className="min-w-full table-auto">
                      <tbody className="">
                        {tableData.map(({ key, value }, index) => (
                          <tr key={index} className={`grid grid-cols-2 ${index !== 0 ? 'border-t border-[#343a40]' : ''}`}>
                            <th
                              scope="row"
                              className="text-left font-semibold p-2 bg-[#d42225] text-white border-r border-[#343a40]"
                            >
                              <BodyCopyText className="text-sm text-white">{key}</BodyCopyText>
                            </th>
                            <td className="text-gray-900 p-2 bg-white">
                              <BodyCopyText className="text-sm">{value}</BodyCopyText>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
            </div>
          </div> */}
          {/* <div className="">
            <div className="grid md:grid-cols-2 md:gap-8">
              {Object.entries(project.ProjectData[0])
                .reduce((acc, [key, value], index) => {
                  acc[index % 2].push({ key, value });
                  return acc;
                }, [[], []]) // Splitting into two separate arrays
                .map((tableData, tableIndex) => (
                  <div key={tableIndex} className=" rounded-md overflow-hidden">

                    <table key={tableIndex} className="min-w-full table-auto">
                      <tbody className="">
                        {tableData.map(({ key, value }, index) => (
                          <>
                            <tr key={index} className={`border-b border-gray-400`}>
                              <div className="flex items-center">
                                <th
                                  scope="row"
                                  className={`text-left font-semibold p-2 text-white  w-full
                                
                                `}
                                >
                                  <BodyCopyText className="text-sm text-black">{key}</BodyCopyText>
                                </th>
                                <span className="w-fit font-semibold">:</span>
                                <td className={`text-gray-900 p-2 bg-white w-full `}>
                                 
                                  <BodyCopyText className="text-sm">{value}</BodyCopyText>
                                </td>
                              </div>
                            </tr>
                         
                          </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
            </div>
          </div> */}
          <div className="grid md:grid-cols-2 md:gap-8">
            {Object.entries(project.ProjectData[0])
              .reduce(
                (acc, [key, value], index) => {
                  acc[index % 2].push({ key, value });
                  return acc;
                },
                [[], []]
              ) // Splitting into two separate arrays
              .map((tableData, tableIndex) => (
                <div key={tableIndex} className="rounded-md overflow-hidden">
                  <table className="min-w-full table-auto">
                    <tbody>
                      {tableData.map(({ key, value }, index) => (
                        <tr key={index} className="border-b">
                          {/* Key Column */}
                          <th
                            scope="row"
                            className="text-left font-semibold p-2 text-black w-1/2 "
                          >
                            <BodyCopyText className="text-sm">{key}</BodyCopyText>
                          </th>

                          {/* Separator Column */}
                          <td className="p-2 text-center font-semibold w-4 ">:</td>

                          {/* Value Column */}
                          <td className="text-gray-900 p-2 bg-white w-1/2">
                            <BodyCopyText className="text-sm">{value}</BodyCopyText>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
          </div>
        </div>
      </ContainerSection>
      <ImageComponent images={project.ThumbnailImages || []} />
      {/* <ContainerSection>
        <div className="space-y-4">
          <HeaderText>Similar Projects</HeaderText>
          <Projects projects={SimilarProjects} />
        </div>
      </ContainerSection> */}
      {/* <ContainerSection>
        <div className="flex justify-between mb-4">
         
          {prevProject ? (
            <Link
              className="flex gap-4 px-4 py-2 rounded"
              href={prevProject.link}
            >
              <ArrowLeft /> {prevProject.title}
            </Link>
          ) : (
            <div /> 
          )}

         
          {nextProject ? (
            <Link
              className="flex gap-4 px-4 py-2 rounded"
              href={nextProject.link}
            >
              {nextProject.title} <ArrowRight />
            </Link>
          ) : (
            <div /> 
          )}
        </div>
      </ContainerSection> */}

      {/* <ContainerSection>
        <div className="flex justify-between mb-4">
          {prevProject && (
            <Link
              className="flex gap-2 md:gap-4 px-4 py-2 rounded  items-center"
              href={`${prevProject.link}`}
            >
              <ArrowLeft /> {prevProject.title}
            </Link>
          )}
          {nextProject && (
            <Link
              className="flex gap-2 md:gap-4 px-4 py-2 rounded ml-auto items-center"
              href={`${nextProject.link}`}
            >
              {nextProject.title} <ArrowRight />
            </Link>
          )}
        </div>
      </ContainerSection> */}
      <ContainerSection>
        <div className="flex justify-between mb-4">
          {prevProject && (
            <Link
              className="flex flex-nowrap gap-2 md:gap-4 px-4 py-2 rounded  items-center"
              href={`${prevProject.link}`}
            >
              <ArrowLeft className="h-4 w-4"/>
              <span className="whitespace-nowrap text-sm md:text-base">
                {prevProject.title}
              </span>
            </Link>
          )}
          {nextProject && (
            <Link
              className="flex flex-nowrap gap-2 md:gap-4 px-4 py-2 rounded ml-auto items-center"
              href={`${nextProject.link}`}
            >
              <span className="whitespace-nowrap text-sm md:text-base">
                {nextProject.title}
              </span>
              <ArrowRight className="h-4 w-4"/>
            </Link>
          )}
        </div>
      </ContainerSection>


    </MainPage>
  );
}


// import { notFound, useRouter } from "next/navigation";
// import Image from "next/image";
// import { ConstructionFallProtection } from "@/data/ConstructionFallProtection";
// import BannerImage from "@/components/views/BannerImage";
// import { HeaderText } from "@/components/views/HeaderText";
// import { BodyCopyText } from "@/components/views/BodyCopyText";
// import React from "react";
// import ContainerSection from "@/components/views/ContainerSection";
// import ImageComponent from "./_component/ImageComponent";
// import Link from "next/link";

// export function generateStaticParams() {
//   const params = [];

//   ConstructionFallProtection.forEach((category) => {
//     category.Projects.forEach((project) => {
//       params.push({
//         slug: category.slug,
//         ProjectSlug: project.slug,
//       });
//     });
//   });

//   return params;
// }

// export default async function ProjectPage({ params }) {
//   // const router = useRouter();
//   const { slug, ProjectSlug } = await params;

//   const product = ConstructionFallProtection.find((item) => item.slug === slug);
//   if (!product) return notFound();

//   const projectIndex = product.Projects.findIndex((proj) => proj.slug === ProjectSlug);
//   if (projectIndex === -1) return notFound();

//   const project = product.Projects[projectIndex];
//   const prevProject = product.Projects[projectIndex - 1] || null;
//   const nextProject = product.Projects[projectIndex + 1] || null;

//   return (
//     <div className="space-y-8">
//       <BannerImage image={project.BannerImage} text={project.title} />
//       <ContainerSection>
//         <div className="space-y-4">
//           <HeaderText>Project Details</HeaderText>
//           <div className="border rounded-lg shadow overflow-hidden">
//             <table className="min-w-full divide-y divide-gray-200 table-auto">
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {project.ProjectData.map((data, index) => (
//                   <tr key={index} className="grid grid-cols-2">
//                     {Object.entries(data).map(([key, value]) => (
//                       <div key={key} className="grid grid-cols-2">
//                         <th
//                           scope="row"
//                           className={`text-left font-semibold text-gray-900 p-2 border-b border-r ${index % 2 !== 0 ? "bg-gray-300" : "bg-gray-100"}`}
//                         >
//                           <BodyCopyText className="text-sm">{key}</BodyCopyText>
//                         </th>
//                         <td className="text-gray-700 p-2 bg-gray-50 border-b border-r">
//                           <BodyCopyText className="text-sm">{value}</BodyCopyText>
//                         </td>
//                       </div>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </ContainerSection>
//       <ImageComponent images={project.ThumbnailImages || []} />

//       <ContainerSection>
//         <div className="flex justify-between mb-4">
//           {prevProject && (
//             <Link
//               className="bg-gray-800 text-white px-4 py-2 rounded"
//               href={`${prevProject.link}`}
//             >
//               ← {prevProject.title}
//             </Link>
//           )}
//           {nextProject && (
//             <Link
//               className="bg-gray-800 text-white px-4 py-2 rounded ml-auto"
//               href={`${nextProject.link}`}
//             >
//               {nextProject.title} →
//             </Link>
//           )}
//         </div>
//       </ContainerSection>
//     </div>
//   );
// }


// ${ index % 2 === 0 ? 'bg-[#8f9aa5]' : 'bg-[#b5bec9]' }