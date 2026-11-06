import BannerImage from './_components/BannerImage'
// import BannerImage from '@/components/views/BannerImage'
import ContainerSection from '@/components/views/ContainerSection'
import { HeaderText } from '@/components/views/HeaderText'
import MainPage from '@/components/views/MainPage'
import React from 'react'
import FeaturesAndAdvantages from './_components/FeaturesAndAdvantages'
import AnimatedButton from '@/components/views/AnimatedButton'
import Image from 'next/image'
import { BodyCopyText } from '@/components/views/BodyCopyText'
import { Components1 } from './_components/Components'
import { Projects1 } from './_components/Projects1'
import Link from 'next/link'
import { FixedLifeLineSystem } from '@/data/FixedLifeLineSystem'
import Nomenclature from './_components/Nomenclature'
import ApplicationStd from './_components/ApplicationStd'
import { Compatibility } from './_components/Compatibility'

export async function generateStaticParams() {
  // Generate paths for all categories
  return FixedLifeLineSystem.map((product) => ({
    slug: product.slug,
  }));
}

export default async function RoofLifelineSystem({ params }) {
  const { slug } = await params; // Destructure slug from params
  const Product = FixedLifeLineSystem.find((product) => product.slug === slug);

  const otherProducts = FixedLifeLineSystem
  // const otherProducts = FixedLifeLineSystem.filter((product) => product.slug !== slug);

  if (!Product) {
    return <div>Product not found!</div>;
  }

  const hasDeco = !!Product.decotechTechnology;
  const hasAllInOne = !!Product.AllInOne;
  const hasFall = !!Product.fallArrest;

  const productList = [
    hasDeco && {
      key: "decotech",
      data: Product.decotechTechnology,
      href: "/products/Fixed_Lifeline_Systems/decotech",
    },
    hasAllInOne && {
      key: "allinone",
      data: Product.AllInOne,
      href: "/products/Fixed_Lifeline_Systems/allinone",
    },
    hasFall && {
      key: "fallArrest",
      data: Product.fallArrest,
      href: "/products/Fixed_Lifeline_Systems/FallArrest",
    },
  ].filter(Boolean);

  const productCount = productList.length;

  return (
    <MainPage>
      <BannerImage
        image={`${Product.BannerImage}`}
        // image="https://placehold.co/1000x200?text=Banner+Image"
        mobileImage={Product.MobileBannerImage || null}
        text={`${Product.name}`}
        subheading={"Fixed Lifeline System"}
      />

      {/* <ContainerSection>
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 md:col-span-6 lg:col-span-5  flex justify-center md:justify-start">
            <Image
              src={Product.introImage ? Product.introImage : `https://placehold.co/600x400?text=${Product.name}`}
              alt="Fixed Lifeline System"
              width={1000}
              height={1000}
              className="w-full md:max-w-[457px] h-auto object-contain rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:px-[93.5px]">
            <p className="text-[#d42225] text-sm opacity-60 font-normal drop-shadow-lg mb-[10px]">
              Fixed Lifeline Systems
            </p>
            <HeaderText className="text-left mb-[25px]">
              <span >
                SAFE
              </span>
              <span className='text-[#d42225]'>
                PRO{" "}
              </span>
              <span>
                {Product.name}
              </span>

            </HeaderText>
            <BodyCopyText className="space-y-4 w-full text-left">
              {Product.intro}
            </BodyCopyText>
          </div>
        </div>

      </ContainerSection> */}

      <ContainerSection>
        <div className="space-y-4 w-full lg:w-4/5 lg:mx-auto text-center">
          {/* {Product.intro.split('/n').map((para, index) => (
            <BodyCopyText key={index}>{para.trim()}</BodyCopyText>
          ))} */}
          {(Product.intro || '').split('/n').map((para, index) => (
            <BodyCopyText key={index}>{para.trim()}</BodyCopyText>
          ))}
        </div>
      </ContainerSection>

      {Product?.nomenclature && <Nomenclature image={`${Product.nomenclature.image}`} pulseButtonConfig={Product.nomenclature.pulseButtonConfig} Extra={Product.nomenclature.Extra} />}
      {Product.Components && <ContainerSection>
        <Components1 Components={Product.Components} />
      </ContainerSection>}
      {/* {(Product.decotechTechnology || Product.AllInOne || Product.fallArrest) &&
        <div className='bg-black py-[130px]'>
          <ContainerSection>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
              {Product.decotechTechnology && (<div>
                <Link
                  href={`/products/Fixed_Lifeline_Systems/decotech`}
                  className="relative group block overflow-hidden hover:cursor-pointer"
                >
                  <div className='h-full w-full overflow-hidden'>

                    <img
                      src={`${Product.decotechTechnology.image}`}
                      alt={Product.decotechTechnology.title}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16 ">
                    <BodyCopyText className="text-white font-bold text-[12px] w-full text-center uppercase mb-[5px]">
                      {Product.decotechTechnology.title}
                    </BodyCopyText>

                  </div>
                </Link>
              </div>)}
              {Product.AllInOne && (<div>
                <Link
                  href={`/products/Fixed_Lifeline_Systems/allinone`}
                  className="relative group block overflow-hidden hover:cursor-pointer"
                >
                  <div className='h-full w-full overflow-hidden'>

                    <img
                      src={`${Product.AllInOne.image}`}
                      alt={Product.AllInOne.title}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16 ">
                    <BodyCopyText className="text-white font-bold text-[12px] w-full text-center uppercase mb-[5px]">
                      {Product.AllInOne.title}
                    </BodyCopyText>

                  </div>
                </Link>
              </div>)}
              {Product.fallArrest && (<div>

                <Link
                  href={`/products/Fixed_Lifeline_Systems/FallArrest`}
                  className="relative group block overflow-hidden hover:cursor-pointer"
                >
                  <div className='h-full w-full overflow-hidden'>

                    <img
                      src={`${Product.fallArrest.image}`}
                      alt={Product.fallArrest.title}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16 ">
                    <BodyCopyText className="text-white font-bold text-[12px] w-full text-center uppercase mb-[5px]">
                      {Product.fallArrest.title}
                    </BodyCopyText>

                  </div>
                </Link>
              </div>)}
            </div>
          </ContainerSection>
        </div>
      } */}

      {productCount > 0 && (
        <div className="bg-black py-[130px]">
          <ContainerSection>
            <div
              className={
                productCount === 1
                  ? "flex justify-center" // center single card
                  : "grid grid-cols-1 md:grid-cols-2 gap-8" // normal grid
              }
            >
              {productList.map((item) => (
                <div key={item.key} className={productCount === 1 ? "w-full md:w-1/2" : ""}>
                  <Link
                    href={item.href}
                    className="relative group block overflow-hidden hover:cursor-pointer"
                  >
                    <div className="h-full w-full overflow-hidden">
                      <img
                        src={item.data.image}
                        alt={item.data.title}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="relative w-full flex flex-col items-center px-4 text-white py-[35px] transition-all duration-300 text-center h-16">
                      <BodyCopyText className="text-white font-bold text-[12px] w-full text-center uppercase mb-[5px]">
                        {item.data.title}
                      </BodyCopyText>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </ContainerSection>
        </div>
      )}

      {/* <div className="space-y-8">
          <HeaderText>COMPONENTS</HeaderText>
          <div className='border border-gray-500 bg-slate-300 p-6 rounded-md'></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='border border-gray-500 bg-slate-300 p-6 rounded-md'></div>
            <div className='border border-gray-500 bg-slate-300 p-6 rounded-md'></div>
            <div className='border border-gray-500 bg-slate-300 p-6 rounded-md'></div>
            <div className='border border-gray-500 bg-slate-300 p-6 rounded-md'></div>
            <div className='border border-gray-500 bg-slate-300 p-6 rounded-md'></div>
            <div className='border border-gray-500 bg-slate-300 p-6 rounded-md'></div>
          </div>
        </div> */}
      <ContainerSection>
        <div className="space-y-8">
          <HeaderText>Features</HeaderText>
          <FeaturesAndAdvantages features={Product.Features} />
        </div>
      </ContainerSection>


      {Product.compatibility && <ContainerSection>
        <Compatibility compatibility={Product.compatibility} />
      </ContainerSection>}
    </MainPage >
  )
}


{/* <Link
              href={`/products/Fixed_Lifeline_Systems/${slug}/FallArrest`}
              className="relative group block overflow-hidden rounded-lg"
            >
              <Image
                src={`${Product.fallArrest.image}`}
                alt={Product.fallArrest.title}
                loading="lazy"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 w-full h-20 flex items-center  bg-gray-700 bg-opacity-90 px-4 text-white py-6 transition-all duration-300 group-hover:bg-[#d42225] text-left">
                <HeaderText>
                  {Product.fallArrest.title}
                </HeaderText>
              </div>
            </Link> */}