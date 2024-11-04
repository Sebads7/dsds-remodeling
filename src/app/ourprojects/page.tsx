"use client";

import Image from "next/image";

import SectionDivider from "@/components/SectionDivider";

import Carousel from "@/components/Carousel/Carousel";
import { PROJECTS_PAGE } from "@/constant/projects-data";
import { DIVIDER_DATA } from "@/constant/divider";
import useScreen from "@/hooks/useScreenSize";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useBodyOverflow } from "@/hooks/useBodyOverflow";
import LeftButton from "@/components/Carousel/LeftButton";
import RightButton from "@/components/Carousel/RightButton";

const ProjectPage = () => {
  const [isGalleyOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [totalImages, setTotalImages] = useState<number | null>(null);

  const { isMobile } = useScreen();

  useBodyOverflow(isGalleyOpen);

  const handlePrevClick = () => {};

  const handleNextClick = () => {};

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  return (
    <div className="w-full h-full pb-20  bg-page-bg/50 text-main-dark relative">
      <div className="fixed top-0 left-0 w-full h-full -z-10  opacity-20">
        <Image
          src="/images/hero-bg.webp"
          width={200}
          height={200}
          className="h-full w-full object-cover"
          alt="hero-background "
        />
      </div>
      <div className=" lg:pt-20  ">
        <motion.div
          className="xl:text-center my-12 mx-4 md:mx-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
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
            <div className="mr-auto ml-10 md:ml-[4.5rem] w-4/5 md:w-fit bg-yellow-600 p-2">
              <p className=" text-lg md:text-2xl font-extralight text-white ">
                We specialize in various home remodeling services to meet all
                your needs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <section className="mb-20 ">
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
                <p className="px-5 md:pl-0 md:w-6/12">{service.description}</p>
                <div className="flex  items-center justify-center overflow-x-hidden ">
                  <Carousel
                    data={service}
                    elmPerPge={isMobile ? 3 : 4}
                    controlButtons={true}
                    dots={true}
                    setIsGalleryOpen={setIsGalleryOpen}
                    setSelectedImage={setSelectedImage}
                    setSelectedIndex={setSelectedIndex}
                    setTotalImages={setTotalImages}
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

          {isGalleyOpen && selectedImage && (
            <div className="fixed  top-0 left-0 bg-black/95 w-full h-full  z-[99999] flex items-center justify-center ">
              <div className="flex flex-col gap-5  w-5/6 md:w-3/4 ">
                <div className="w-full flex items-center justify-between text-white">
                  {/* IMAGE COUNT */}
                  <p>
                    {selectedIndex !== null && totalImages !== null
                      ? `${selectedIndex + 1} of ${totalImages}`
                      : ""}
                  </p>

                  {/* CLOSE BUTTON */}
                  <div
                    className="  flex justify-center items-center gap-2  hover:bg-white/20 text-white  rounded-md w-24 h-8 cursor-pointer transition-all duration-200 ease-in-out"
                    onClick={closeGallery}
                  >
                    <MdClose className="w-5 h-5 " />
                    <p className="text-sm ">Close</p>
                  </div>
                </div>
                <div className="flex w-full h-full  items-center">
                  {/* LEFT BUTTON */}
                  <div className="hidden">
                    <LeftButton
                      activeIndex={selectedIndex as number}
                      handlePrevClick={handlePrevClick}
                    />
                  </div>

                  <div className="  bg-black/90 md:w-[60%] mx-auto h-[40rem] md:h-[50rem]   z-10  ">
                    <Image
                      src={selectedImage}
                      alt="gallery-image"
                      width={1000}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* RIGHT BUTTON */}
                  <div className="hidden">
                    <RightButton
                      activeIndex={selectedIndex as number}
                      handleNextClick={handleNextClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
