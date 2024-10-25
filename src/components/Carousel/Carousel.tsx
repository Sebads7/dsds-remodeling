import { PROJECTS_PAGE } from "@/constant/projects-data";
import Image from "next/image";
import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

import Dots from "./Dots";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

interface CarouselProps {
  data: {
    id: string;
    title: string;
    images: string[];
  };
  dots?: boolean;
  controlButtons?: boolean;
  elmPerPge: number;
}

const Carousel: React.FC<CarouselProps> = ({
  data,
  dots,
  controlButtons,
  elmPerPge,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index * elmPerPge);
  };

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - elmPerPge);
    }
  };

  const handleNextClick = () => {
    if (activeIndex < data.images.length - elmPerPge) {
      setActiveIndex((prevIndex) => prevIndex + elmPerPge);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between ">
        {/* IMAGES - DATA IS PASSED AS PROPS TO THE CAROUSEL */}
        <div className="flex justify-center  w-[90%] sm:w-full  mx-auto gap-3 md:px-10 pt-14 pb-24  transition-all duration-500 ease-in-out overflow-hidden">
          {data.images
            .slice(activeIndex, activeIndex + elmPerPge)
            .map((image, index) => (
              <div
                key={index}
                className={`relative flex items-center group  border-white border-[6px] h-[25rem] md:h-[30rem] md:hover:h-[32rem] w-[8rem] hover:w-[9rem] md:w-[10rem] md:hover:w-[30rem]  hover:scale-110 transition-all  duration-300 ease-in-out   md:hover:mx-10  hover:z-10   shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] `}
              >
                <Image
                  src={image}
                  width={2000}
                  height={2000}
                  alt={data.title}
                  className="w-full h-full object-cover"
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
      </div>

      {/* Custom Navigation Dots */}
      {dots && (
        <div className="flex justify-center items-center gap-2 md:gap-28 -translate-y-10">
          {/* LEFT BUTTON */}
          {controlButtons && (
            <LeftButton
              activeIndex={activeIndex}
              handlePrevClick={handlePrevClick}
            />
          )}

          <div className="flex justify-center items-center gap-3 pt-1  ">
            {Array.from(
              {
                length: Math.ceil(PROJECTS_PAGE[0].images.length / elmPerPge),
              },
              (_, index) => (
                <Dots
                  key={index}
                  index={index}
                  activeIndex={activeIndex}
                  elmPerPge={elmPerPge}
                  handleDotClick={handleDotClick}
                />
              )
            )}
          </div>
          {/* RIGHT BUTTON */}
          {controlButtons && (
            <RightButton
              activeIndex={activeIndex}
              handleNextClick={handleNextClick}
              elmPerPge={elmPerPge}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Carousel;
