import { BodyCopyText } from "@/components/views/BodyCopyText";
import { HeaderText } from "@/components/views/HeaderText";
import Image from "next/image";

import BannerImage from "@/components/views/BannerImage";

import TechnicalSpecification from "./_component/TechnicalSpecification";
import FeaturesAndAdvantages from "./_component/FeaturesAndAdvantages";
import Projects from "./_component/Projects";
import ContainerSection from "@/components/views/ContainerSection";
import Link from "next/link";
import InstallationMethodologySection from "./_component/InstallationMethodology";
import MainPage from "@/components/views/MainPage";
import { ConstructionFallProtection } from "@/data/ConstructionFallProtection";


export async function generateStaticParams() {
  // Generate paths for all categories
  return ConstructionFallProtection.map((product) => ({
    slug: product.slug,
  }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params; // Destructure slug from params
  const Product = ConstructionFallProtection.find((product) => product.slug === slug);

  const otherProducts = ConstructionFallProtection
  // const otherProducts = ConstructionFallProtection.filter((product) => product.slug !== slug);

  if (!Product) {
    return <div>Product not found!</div>;
  }

  return (
    <MainPage>
      <BannerImage
        image={`${Product.BannerImage}`}
        text={`${Product.Name}`}
        mobileImage={`${Product.MobileBannerImage}`}
        subheading="Construction Fall Protection"
      />

      <ContainerSection>
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
        <div className="block md:hidden relative  w-full overflow-hidden rounded-md shadow-sm">
          <Image
            src={`${Product.MobileHeroImage}`}
            alt={`${Product.Name} `}
            width={1000}
            height={100}
            className="rounded-md object-center w-full" // Prevents vertical stretching
          />
        </div>
      </ContainerSection>
      {
        Product.InstallationMethodology &&
        <InstallationMethodologySection InstallationMethodology={Product.InstallationMethodology} />
      }
      <section className="space-y-8 py-10 bg-gray-100">
        <ContainerSection>
          <div className="space-y-8 ">
            <div className="space-y-4 ">
              <HeaderText>{Product.Name === "Vertical Enveloping" ? "Design Details" : "Technical Specifications"}</HeaderText>
              <BodyCopyText className={"text-center"}>
                {Product.TechnicalSpecification.content}
              </BodyCopyText>
            </div>
            <div className="overflow-x-auto flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Image Container */}
              <div className="w-full lg:w-1/2 overflow-hidden border border-gray-300 rounded-lg flex">
                <Image
                  src={`${Product.TechnicalSpecification.Image}`}
                  alt="Technical Specification"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Technical Specification Table */}
              <div className="w-full lg:w-1/2 overflow-hidden border border-gray-300  h-fit flex">
                <TechnicalSpecification data={Product.TechnicalSpecification.Tabledata} />
              </div>
            </div>
          </div>
        </ContainerSection>
      </section>
      <ContainerSection>
        <div className="space-y-8">
          <HeaderText>Features & Advantages</HeaderText>

          <FeaturesAndAdvantages features={Product.FeaturesAndAdvantages} />
        </div>
      </ContainerSection>
      {
        Product.Projects.length > 0 &&
        <ContainerSection>
          <div className="space-y-8 ">
            <HeaderText>Projects</HeaderText>
            <Projects projects={Product.Projects} />
          </div>
        </ContainerSection>
      }

      <ContainerSection>
        <section className="mt-6 mb-2">
          <div className="flex flex-col md:flex-row items-center md:justify-center text-sm font-medium w-full">
            {otherProducts.map((item, index) => (
              <Link
                key={index}
                href={`/products/Construction_Fall_Protection/${item.slug}`}
                className={`group relative p-2  md:w-auto text-center md:text-left 
          ${index !== otherProducts.length - 1 ? "border-b md:border-b-0 w-fit md:border-r border-black" : ""} 
          ${item.slug === slug ? "text-[#f97316] font-bold" : ""}`}
              >
                <span className="transition-colors duration-300 group-hover:text-[#f97316] group-hover:scale-110">
                  {item.Name}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </ContainerSection>

    </MainPage >
  );
}