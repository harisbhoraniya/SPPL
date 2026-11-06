// "use client"
import BannerImage from '@/components/views/BannerImage';
import { BodyCopyText } from '@/components/views/BodyCopyText';
import ContainerSection from '@/components/views/ContainerSection';
import MainPage from '@/components/views/MainPage';
import { PPEData } from '@/data/PPE';
import React from 'react'
import PPETechnicalSpecification from '../components/PPETechnicalSpecification';
import Image from "next/image";
import { HeaderText } from '@/components/views/HeaderText';
import { ApplicationProjects } from '../components/ApplicationProjects';
import PPESwiper from '../components/PPESwiper';

export async function generateStaticParams() {
  // Generate paths for all categories
  return PPEData.map((product) => ({
    slug: product.slug,
  }));
}


export default async function PPE_Component({ params }) {
  const { slug } = await params; // Destructure slug from params
  const Product = PPEData.find((product) => product.slug === slug);

  const PPEProjects = [
    {
      image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASAHI INDIA GLASS PLANT TALOJA 1/Hero.jpg",
      title: "Construction"
    },
    {
      image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
      title: "AutoMobile"
    },
    {
      image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
      title: "Hotel"
    },
    {
      image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
      title: "Construction"
    },
    {
      image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
      title: "Mehanical"
    },
    {
      image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
      title: "Electrical"
    },
    {
      image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
      title: "Telicom"
    },
    {
      image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
      title: "Oil & Gas"
    },
    {
      image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
      title: "Lab"
    },
    {
      image: "/img/Products/Fixed Lifeline System/Fixed Lifeline System/Projects/1 ROOF LIFELINE/ASB INTERNATIONAL PLANT AMBERNATH/Hero.jpg",
      title: "Pharmacy"
    },

  ]



  return (
    <MainPage>
      <BannerImage
        image={`${Product.BannerImage}`}
        text={`${Product.name}`}
        mobileImage={`${Product.MobileBannerImage}`}
        subheading="Construction Fall Protection"
      />

      <ContainerSection>
        <div className="space-y-2 w-full lg:w-[70%] lg:mx-auto">
          {Product?.Content
            ?.split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map((content, index) => (
              <BodyCopyText key={index} className="text-center">
                {content}
              </BodyCopyText>
            ))}

        </div>

        {/* Desktop Image – always show */}
        {Product?.HeroImage && (
          <div className="hidden md:block relative w-full overflow-hidden rounded-md shadow-sm">
            <Image
              src={Product.HeroImage}
              alt="About Us Image"
              width={1000}
              height={100}
              className="rounded-md object-center w-full"
            />
          </div>
        )}

        {/* Mobile Image – show ONLY if MobileHeroImage exists */}
        {Product?.MobileHeroImage && (
          <div className="block md:hidden relative w-full overflow-hidden rounded-md shadow-sm">
            <Image
              src={Product.MobileHeroImage}
              alt={Product?.name || "Product Image"}
              width={1000}
              height={100}
              className="rounded-md object-center w-full"
            />
          </div>
        )}
      </ContainerSection>


      {/* <ContainerSection>
        <div className="space-y-2 w-full lg:w-[70%] lg:mx-auto">
          {Product.Content.split("\n").map((content, index) => (
            <BodyCopyText key={index} className={"text-center "}>
              {content}
            </BodyCopyText>
          ))}
        </div>
        <div className="hidden md:block relative  w-full overflow-hidden rounded-md shadow-sm">
          <Image
            src={`${Product.HeroImage}`}
            alt={`About Us Image `}
            width={1000}
            height={100}
            className="rounded-md object-center w-full" // Prevents vertical stretching
          />
        </div>
        {Product.MobileHeroImage && <div className="block md:hidden relative  w-full overflow-hidden rounded-md shadow-sm">
          <Image
            src={`${Product.MobileHeroImage}`}
            alt={`${Product.name} `}
            width={1000}
            height={100}
            className="rounded-md object-center w-full" // Prevents vertical stretching
          />
        </div>}
      </ContainerSection> */}
      {
        Product.InstallationMethodology &&
        <InstallationMethodologySection InstallationMethodology={Product.InstallationMethodology} />
      }

      {
        Product.TechnicalSpecification &&
        <section className="space-y-8 py-10 bg-gray-100">
          <ContainerSection>
            <div className="space-y-8 ">
              <div className="space-y-4 ">
                <HeaderText>
                  Anatomy of {Product?.slug}
                </HeaderText>

                <BodyCopyText className={"text-center"}>
                  {Product.TechnicalSpecification.content}
                </BodyCopyText>
              </div>
              {/* <div className="overflow-x-auto flex flex-col lg:flex-row gap-8">
                 <div className="w-full lg:w-1/2 overflow-hidden border border-gray-300 rounded-lg ">
                   <Image
                     src={`${Product.TechnicalSpecification.Image}`} // Replace with actual image path
                     alt="Technical Specification"
                     // layout="responsive"
                     width={400}
                     height={300}
                     className="object-cover h-full w-full "
                   />
                 </div>
                 <div className=" w-full lg:w-1/2 h-fit overflow-hidden border border-gray-300 rounded-lg">
                   <TechnicalSpecification data={Product.TechnicalSpecification.Tabledata} />
                 </div>
               </div> */}

              <div className="overflow-x-auto flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Image Container */}
                <div className="w-full lg:w-1/2 overflow-hidden border border-gray-300 rounded-lg flex">
                  <Image
                    src={`${Product.TechnicalSpecification.Image1}`}
                    alt="Technical Specification"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Technical Specification Table */}
                <div className="w-full  lg:w-1/2 overflow-hidden border border-gray-300  h-fit flex">
                  <PPETechnicalSpecification
                    data={Product.TechnicalSpecification.Tabledata1}
                    leftHeader={
                      ["head", "eye"].includes(Product?.slug?.toLowerCase())
                        ? "Outer Shell Material"
                        : Product?.slug?.toLowerCase() === "respiratory"
                          ? "Respiratory Protection"
                          : "Outer Shell Material"
                    }
                    rightHeader={
                      ["head", "eye"].includes(Product?.slug?.toLowerCase())
                        ? "Class"
                        : Product?.slug?.toLowerCase() === "respiratory"
                          ? "Protection Against"
                          : "Class"
                    }
                  />

                </div>
              </div>


              {/* Table 2 Data */}
              {Product?.slug?.toLowerCase() !== "respiratory" && (
                <div className="overflow-x-auto flex flex-col lg:flex-row gap-8 items-stretch">
                  {/* Image Container */}
                  <div className="w-full lg:w-1/2 overflow-hidden border border-gray-300 rounded-lg flex">
                    <Image
                      src={`${Product.TechnicalSpecification.Image2}`}
                      alt="Technical Specification"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Technical Specification Table */}
                  <div className="w-full lg:w-1/2 overflow-hidden border border-gray-300  h-fit flex">
                    <PPETechnicalSpecification
                      data={Product.TechnicalSpecification.Tabledata2}
                      leftHeader={
                        ["head", "eye"].includes(Product?.slug?.toLowerCase())
                          ? "Inner Fitting Material"
                          : Product?.slug?.toLowerCase() === "respiratory"
                            ? "Respiratory Protection"
                            : "Inner Fitting Material"
                      }
                      rightHeader={
                        ["head", "eye"].includes(Product?.slug?.toLowerCase())
                          ? "Class"
                          : Product?.slug?.toLowerCase() === "respiratory"
                            ? "Protection Against"
                            : "Class"
                      }
                    />

                  </div>
                </div>
              )}
            </div>
          </ContainerSection>
        </section>
      }
      {Product.Types && (
        <PPESwiper data={Product.Types}/>
      )}

      {/* <ContainerSection> */}
      {Product?.slug === "Respiratory" && (
        <ContainerSection>
          <ApplicationProjects projects={PPEProjects || []} />
        </ContainerSection>
      )}




    </MainPage>
  )
}
