"use client";

import Image from "next/image";

import SectionDivider from "@/components/SectionDivider";

import Carousel from "@/components/Carousel/Carousel";
import { PROJECTS_PAGE } from "@/constant/projects-data";
import { DIVIDER_DATA } from "@/constant/divider";
import useScreen from "@/components/hooks/useScreenSize";

const ProjectPage = () => {
  const { isMobile } = useScreen();
  return (
    <div className="w-full h-full pb-20  bg-page-bg/50 text-dark-gray">
      <div className="fixed top-0 left-0 w-full h-full -z-10  opacity-20">
        <Image
          src="/images/hero-bg.webp"
          width={2000}
          height={2000}
          className="0"
          alt="hero-background"
        />
      </div>
      <div className=" lg:pt-20  ">
        <div className="xl:text-center my-12 mx-4 md:mx-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center  ">
            Welcome To Our
            <span className="text-yellow-600 p-2  ml-1">
              Remodeling Gallery
            </span>
          </h2>
          <div className="flex flex-col gap-2 md:mt-10 md:mb-20  mx-auto md:w-3/4">
            <p className="text-xl md:text-3xl md:font-bold ">
              Take a look at some of the beautiful transformations we&apos;ve
              done for our clients.
            </p>
            <p className="bg-yellow-600 text-lg md:text-2xl font-extralight text-white p-2  mr-auto ml-20 w-3/4 md:w-fit    ">
              We specialize in various home remodeling services to meet all your
              needs.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="mb-20">
          {/* RENDERING DATA FROM ARRAY  */}
          {PROJECTS_PAGE.map((service, index) => (
            <div key={index}>
              <div className="bg-page-bg/70  md:p-10 lg:mx-20 border-white border-[1px] py-10">
                <h2
                  className="pl-5 sm:pl-0 py-10 text-2xl font-bold underline underline-offset-4 decoration-yellow-500"
                  id={service.id}
                >
                  {service.title}
                </h2>
                <p className="px-5 md:pl-0 md:w-6/12">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Error quia quam odit iste magnam modi consectetur sequi.
                  Obcaecati laborum deleniti iste, officia reiciendis sunt,
                  fugiat tempore repudiandae, maxime vel repellendus!
                </p>
                <div className="flex  items-center justify-center overflow-x-hidden ">
                  <Carousel
                    data={service}
                    elmPerPge={isMobile ? 3 : 4}
                    controlButtons={true}
                    dots={true}
                  />
                </div>
              </div>
              {/* Section Divider - RENDERS DATA FROM ARRAY IF INDEX IS NOT LAST */}
              {index < PROJECTS_PAGE.length - 1 && (
                <div className="my-20">
                  {/* Section Divider */}
                  <SectionDivider
                    imageSrc="/images/hero-bg.webp"
                    arrayData={DIVIDER_DATA[index % DIVIDER_DATA.length]}
                  />
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
