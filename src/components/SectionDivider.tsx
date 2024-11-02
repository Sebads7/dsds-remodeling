import React from "react";
import Image from "next/image";

type Data = {
  title: string;
  icon: string;
};

const SectionDivider = ({
  imageSrc,
  sectionClass,
  arrayData,
  imgClass,
}: {
  imageSrc: string;
  sectionClass?: string;
  arrayData: Data[];
  imgClass?: string;
}) => {
  return (
    <>
      <div
        className={`relative w-full h-[10rem]  overflow-hidden ${sectionClass} `}
      >
        <div className={`absolute top-0 inset-x-0 h-[10rem] overflow-hidden  `}>
          <Image
            src={imageSrc}
            width={2000}
            height={2000}
            alt={`hero-background ${imgClass}`}
          />
          <div className=" absolute bg-black/70 top-0 h-full  w-full text-white flex justify-between sm:justify-evenly   items-center  ">
            {Array.isArray(arrayData) &&
              arrayData.map((item, index) => (
                <div
                  className="flex flex-col justify-center items-center h-full  "
                  key={index}
                >
                  <Image
                    className="w-9 h-9 md:w-10 md:h-10 lg:w-14 lg:h-14 icon-white"
                    width={200}
                    height={200}
                    alt={item.title}
                    src={item.icon}
                    color="white"
                  ></Image>

                  <h3 className="text-center text-sm lg:text-xl font-semibold pt-2 w-10/12 md:w-full ">
                    {item.title}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionDivider;
