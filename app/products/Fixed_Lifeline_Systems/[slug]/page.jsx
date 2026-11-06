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
import Video from './_components/Video'
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

      <ContainerSection>
        <div className="space-y-4 w-full lg:w-4/5 lg:mx-auto text-center">
          {Product.intro.split('/n').map((para, index) => (
            <BodyCopyText key={index}>{para.trim()}</BodyCopyText>
          ))}
        </div>
      </ContainerSection>

      {Product?.nomenclature && (
        <Nomenclature
          image={`${Product.nomenclature.image}`}
          pulseButtonConfig={Product.nomenclature.desktopConfig || Product.nomenclature.pulseButtonConfig}
          mobileConfig={Product.nomenclature.mobileConfig}
          tabletConfig={Product.nomenclature.tabletConfig}
          desktopConfig={Product.nomenclature.desktopConfig}
          Extra={Product.nomenclature.Extra}
        />
      )}
      {Product.Components && <ContainerSection>
        <Components1 Components={Product.Components} />
      </ContainerSection>}

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

      <ContainerSection>
        <div className="space-y-8">
          <HeaderText>Features</HeaderText>
          <FeaturesAndAdvantages features={Product.Features} />
        </div>
      </ContainerSection>


      {Product.compatibility && <ContainerSection>
        <Compatibility compatibility={Product.compatibility} />
      </ContainerSection>}

      {Product?.video && (
        <ContainerSection>
          <Video
            video={`${Product.video}`}
            poster={Product.videoPoster ? `${Product.videoPoster}` : null}
            title="See It In Action"
          />
        </ContainerSection>
      )}

      <ContainerSection>
        <section className="mt-6 mb-2">
          <div className="flex flex-col md:flex-row items-center md:justify-center text-sm font-medium w-full">
            {otherProducts.map((item, index) => (
              <Link
                key={index}
                href={`/products/Fixed_Lifeline_Systems/${item.slug}`}
                className={`group relative p-2 md:w-auto text-center md:text-left 
    ${index !== otherProducts.length - 1 ? "border-b md:border-b-0 w-fit md:border-r border-black" : ""} 
    ${item.slug === slug ? "text-[#f97316] font-bold" : ""}`}
              >
                <span className="transition-colors duration-300 group-hover:text-[#f97316] group-hover:scale-110">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </ContainerSection>
    </MainPage >
  )
}