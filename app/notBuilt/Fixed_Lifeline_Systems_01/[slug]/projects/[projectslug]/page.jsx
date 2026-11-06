
import { notFound } from "next/navigation";
import Image from "next/image";

import BannerImage from "@/components/views/BannerImage";
import { HeaderText } from "@/components/views/HeaderText";
import { BodyCopyText } from "@/components/views/BodyCopyText";
import React from "react";
import ContainerSection from "@/components/views/ContainerSection";


import ImageComponent from "./_component/ImageComponent";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MainPage from "@/components/views/MainPage";
import ProjectBannerImage from "./_component/ProjectBannerImage";
import { FixedLifeLineSystem } from "@/data/FixedLifeLineSystem";

export function generateStaticParams() {
  const params = [];

  FixedLifeLineSystem.forEach((category) => {
    category.projects.forEach((project) => {
      params.push({
        slug: category.slug,
        projectslug: project.slug,
      });
    });
  });

  return params;
}

export default async function ProjectPage({ params }) {
  const { slug, projectslug } = await params;

  // Find the corresponding product based on slug
  const product = FixedLifeLineSystem.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return notFound();
  }


  const projectIndex = product.projects.findIndex((proj) => proj.slug === projectslug);
  if (projectIndex === -1) return notFound();

  const project = product.projects[projectIndex];
  const prevProject = product.projects[projectIndex - 1] || null;
  const nextProject = product.projects[projectIndex + 1] || null;

  const SimilarProjects = product.projects.filter(
    (proj) => proj.slug !== projectslug
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

          <div className="w-full md:w-1/2 md:gap-8">
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

      <ContainerSection>
        <div className="flex justify-between mb-4">
          {prevProject && (
            <Link
              className="flex flex-nowrap gap-2 md:gap-4 px-4 py-2 rounded  items-center"
              href={`${prevProject.link}`}
            >
              <ArrowLeft className="h-4 w-4" />
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
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </ContainerSection>


    </MainPage>
  );
}

