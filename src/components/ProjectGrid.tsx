import React from "react";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS_PAGE } from "@/constant/projects-data";
import { AnimationControls, motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "./ui/carousel";

interface ProjectGridProps {
  projectsControls: AnimationControls;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projectsControls }) => {
  const [isSelectedImage, setIsSelectedImage] = useState(0);

  const handleImage = (index: number) => {
    setIsSelectedImage(index);
  };

  const Scale_1 = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="z-10 md:px-20 ">
      <div className="hidden  lg:flex flex-col container mx-auto p-5  md:p-10 border border-neutral-300 bg-neutral-200  shadow-2xl rounded-md max-w-[85rem] ">
        {/* BUTTONS */}
        <ul className="w-full flex z-10  md:gap-5 text-center md:text-start justify-center items-start pb-8  text-xs sm:text-sm md:text-base px-5 md:px-0 ">
          {PROJECTS_PAGE.map((project, index) => (
            <motion.div
              onClick={() => handleImage(index)}
              key={index}
              className={`  rounded-sm  py-1 md:p-2  ${
                isSelectedImage === index
                  ? "md:bg-amber-600 hover:text-white shadow-2xl cursor-default md:border-amber-600 text-white font-semibold "
                  : "md:hover:bg-stone-400/90  border border-neutral-600 hover:text-neutral-100 text-neutral-600  md:hover:border-stone-400/90 cursor-pointer "
              } `}
              variants={Scale_1}
              initial="initial"
              animate={projectsControls}
            >
              {project.title}
            </motion.div>
          ))}
        </ul>
        {/* GRID: Large Screens */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 md:gap-8">
          {PROJECTS_PAGE[isSelectedImage]?.images
            .slice(0, 6)
            .map((imgSrc, index) => (
              <motion.div
                key={index}
                className={` w-full   h-[13rem] hover:h-full overflow-hidden  col-span-${PROJECTS_PAGE[isSelectedImage].colSpan[index]} relative `}
                variants={Scale_1}
                initial="initial"
                animate={projectsControls}
              >
                <Image
                  src={imgSrc}
                  width={1200}
                  height={1200}
                  alt="image"
                  className="object-cover w-full h-[13rem] shadow-xl"
                />
              </motion.div>
            ))}
        </div>
      </div>

      {/* CAROUSEL: ONE SLIDE PER CATEGORY */}
      <div className="lg:hidden border border-neutral-300 max-w-[22rem] sm:max-w-lg md:max-w-2xl  w-full  mx-auto  bg-neutral-200  shadow-3xl rounded-md pb-5 px-3 sm:px-5">
        {/* CAROUSEL: ONE SLIDE PER CATEGORY */}
        <Carousel>
          <CarouselContent>
            {PROJECTS_PAGE.map((project, categoryIndex) => (
              <CarouselItem key={categoryIndex}>
                <div className="text-center mt-5 mb-5 text-neutral-600 font-semibold text-lg">
                  {project.title}
                </div>
                <div className="grid grid-cols-3 grid-rows-3 gap-4 md:gap-8">
                  {project.images.slice(0, 6).map((imgSrc, index) => (
                    <motion.div
                      key={index}
                      className={`w-full h-[13rem] overflow-hidden relative col-span-${project.colSpan[index]}`}
                      variants={Scale_1}
                      initial="initial"
                      animate={projectsControls}
                    >
                      <Image
                        src={imgSrc}
                        width={1200}
                        height={1200}
                        alt="image"
                        loading="eager"
                        className="object-cover w-full h-full shadow-xl"
                      />
                    </motion.div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-4">
            <CarouselDots />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectGrid;
