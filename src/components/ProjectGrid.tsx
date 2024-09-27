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
    <div>
      <ul className="w-full flex gap-5 justify-center items-center pb-10 cursor-pointer ">
        {PROJECTS.map((project, index) => (
          <li
            onClick={() => handleImage(index)}
            key={index}
            className={`border-yellow-600 border p-2 hover:bg-yellow-600 hover:text-white ${
              isSelectedImage === index && "bg-yellow-600 text-white"
            } `}
          >
            {project.button}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-3 grid-rows-3 container mx-auto px-40 gap-8">
        {PROJECTS[isSelectedImage]?.image.map((imgSrc, index) => (
          <div
            key={index}
            className={` w-full  bg-red-400 h-[10rem] overflow-hidden  col-span-${PROJECTS[isSelectedImage].colSpan[index]}  `}
          >
            <Image
              src={imgSrc}
              width={200}
              height={200}
              alt="image"
              className="object-cover w-full h-[10rem]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
