import React from "react";
import { PROJECTS } from "@/constant/index";
import { useState } from "react";
import Image from "next/image";

const ProjectGrid = () => {
  const [isSelectedImage, setIsSelectedImage] = useState(0);

  const handleImage = (index: number) => {
    setIsSelectedImage(index);
  };
  return (
    <div className="px-20">
      {/* BUTTONS */}
      <ul className="w-full flex gap-5 justify-center items-center pt-10 bg-[#e2e1de] ">
        {PROJECTS.map((project, index) => (
          <li
            onClick={() => handleImage(index)}
            key={index}
            className={`border-yellow-600 border p-2 cursor-pointer  hover:bg-yellow-600 hover:text-white ${
              isSelectedImage === index && "bg-yellow-600 text-white"
            } `}
          >
            {project.button}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-3 grid-rows-3 container mx-auto p-10 gap-8 bg-[#e2e1de]">
        {PROJECTS[isSelectedImage]?.image.map((imgSrc, index) => (
          <div
            key={index}
            className={` w-full   h-[13rem] hover:h-full overflow-hidden  col-span-${PROJECTS[isSelectedImage].colSpan[index]}  `}
          >
            <Image
              src={imgSrc}
              width={200}
              height={200}
              alt="image"
              className="object-cover w-full h-[13rem]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
