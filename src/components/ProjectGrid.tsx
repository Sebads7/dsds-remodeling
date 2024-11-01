import React from "react";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS_PAGE } from "@/constant/projects-data";
import { AnimationControls, motion } from "framer-motion";

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
    <div className=" md:px-20">
      {/* BUTTONS */}
      <ul className="w-full flex gap-5 text-center md:text-start justify-center items-center pt-10 bg-[#b6b1a4] text-xs sm:text-sm md:text-base px-5 md:px-0 ">
        {PROJECTS_PAGE.map((project, index) => (
          <motion.div
            onClick={() => handleImage(index)}
            key={index}
            className={`  md:border py-1 md:p-2 cursor-pointer md:text-white  hover:bg-yellow-600 hover:border-yellow-600 hover:text-white ${
              isSelectedImage === index &&
              "bg-yellow-600 border-yellow-600 border-2 "
            } `}
            variants={Scale_1}
            initial="initial"
            animate={projectsControls}
          >
            {project.title}
          </motion.div>
        ))}
      </ul>

      {/* IMAGES GRID */}
      <div className="grid grid-cols-3 grid-rows-3 container mx-auto p-5 md:p-10 gap-4 md:gap-8 bg-[#b6b1a4] ">
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
                width={200}
                height={200}
                alt="image"
                className="object-cover w-full h-[13rem]"
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
