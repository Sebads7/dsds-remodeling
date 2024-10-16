"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { PROJECTS_PAGE } from "@/constant";
import SectionDivider from "@/components/SectionDivider";
import { LiaHammerSolid, LiaHandshakeSolid } from "react-icons/lia";
import { TbChecks } from "react-icons/tb";

import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";

const ITEMS_PER_PAGE = 4;

const ProjectPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveIndex(index * ITEMS_PER_PAGE);
  };

  const handleNextClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (activeIndex < PROJECTS_PAGE[0].images.length - ITEMS_PER_PAGE) {
      setActiveIndex((prevIndex) => prevIndex + ITEMS_PER_PAGE);
    }
  };

  const handlePrevClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="w-full h-full bg-page-bg/50 text-dark-gray">
      <div className="fixed top-0 left-0 w-full h-full -z-10  opacity-20">
        <Image
          src="/images/hero-bg.webp"
          width={2000}
          height={2000}
          alt="hero-background"
        />
      </div>
      <div className=" pt-20 ">
        <div className="text-center mt-10 mb-12">
          <h2 className="text-4xl font-bold mb-4 ">
            Welcome To Our
            <span className="text-yellow-600 p-2  ml-1">
              Remodeling Gallery
            </span>
          </h2>
          <div className="flex flex-col gap-2 mt-10 mb-20  mx-auto w-3/4  ">
            <p className="text-3xl font-bold ">
              Take a look at some of the beautiful transformations we&apos;ve
              done for our clients.
            </p>
            <p className="bg-yellow-600 text-2xl font-extralight text-white p-2  mr-auto ml-20  ">
              We specialize in various home remodeling services to meet all your
              needs.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="mb-20">
          {PROJECTS_PAGE.map((service, index) => (
            <div key={index}>
              <div className="bg-page-bg/70 p-10 mx-20 border-white border-[1px] py-10">
                <h2
                  className="py-10 text-2xl font-bold underline underline-offset-4 decoration-yellow-500"
                  id={service.id}
                >
                  {service.title}
                </h2>
                <p className="w-6/12">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Error quia quam odit iste magnam modi consectetur sequi.
                  Obcaecati laborum deleniti iste, officia reiciendis sunt,
                  fugiat tempore repudiandae, maxime vel repellendus!
                </p>
                <div className="flex  items-center justify-between">
                  {/* LEFT BUTTON */}
                  <button
                    type="button"
                    title="Previous"
                    onClick={(event) => handlePrevClick(event)}
                    className={`text-5xl mr-10 ml-auto  ${
                      activeIndex === 0
                        ? "disabled text-gray-400/50 cursor-default"
                        : "hover:scale-105 cursor-pointer hover:text-yellow-700 text-gray-600"
                    } `}
                  >
                    <MdOutlineArrowCircleLeft />
                  </button>
                  {/* IMAGES */}
                  <div className="flex justify-center   mx-auto gap-3 py-14 hover:pb-24 transition-all duration-500 ease-in-out overflow-hidden ">
                    {service.images
                      .slice(activeIndex, activeIndex + ITEMS_PER_PAGE)
                      .map((image, index) => (
                        <div
                          key={index}
                          className={`relative flex items-center group  border-white border-[6px]   hover:scale-110 transition-all  duration-500 ease-in-out w-[10rem] hover:w-[50vw] hover:h-[32rem]  hover:mx-10  hover:z-10 h-[30rem]  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]  `}
                        >
                          <Image
                            src={image}
                            width={2000}
                            height={2000}
                            alt={service.title}
                            className="w-full h-full object-cover "
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 ">
                            <div className="text-center flex flex-col items-center gap-1 text-white px-4">
                              <p className="">Click to View Image</p>
                              <FaCirclePlus className="text-xl  cursor-pointer hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg hover:text-yellow-400 " />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <button
                    type="button"
                    title="Next"
                    className={`text-5xl ml-10 mr-auto   ${
                      activeIndex ===
                      PROJECTS_PAGE[0].images.length - ITEMS_PER_PAGE
                        ? "disabled text-gray-400/50 cursor-default "
                        : "hover:scale-105 cursor-pointer hover:text-yellow-700 text-gray-600"
                    } `}
                    onClick={(event) => handleNextClick(event)}
                  >
                    <MdOutlineArrowCircleRight />
                  </button>
                </div>

                {/* Custom Navigation Dots */}
                <div className="flex justify-center items-center gap-3 pt-1 w-full  ">
                  {Array.from(
                    {
                      length: Math.ceil(
                        PROJECTS_PAGE[0].images.length / ITEMS_PER_PAGE
                      ),
                    },
                    (_, index) => (
                      <div
                        key={index}
                        className={` rounded-full cursor-pointer ${
                          activeIndex === index * ITEMS_PER_PAGE
                            ? "bg-yellow-600 w-8 h-4"
                            : "bg-gray-300 w-7 h-3"
                        }`}
                        onClick={(event) => handleDotClick(index, event)}
                      />
                    )
                  )}
                </div>
              </div>
              {index < PROJECTS_PAGE.length - 1 && (
                <div className="my-20">
                  <SectionDivider imageSrc="/images/hero-bg.webp">
                    <div className="flex flex-col justify-center items-center h-full ">
                      <LiaHandshakeSolid className=" text-7xl" />
                      <h3 className="text-xl font-semibold">
                        Customer Satisfaction
                      </h3>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <TbChecks className="text-7xl" />

                      <h3 className="text-xl font-semibold">
                        High-Quality Workmanship
                      </h3>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <LiaHammerSolid className="text-7xl" />
                      <h3 className="text-xl font-semibold">Built to Last</h3>
                    </div>
                  </SectionDivider>
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
