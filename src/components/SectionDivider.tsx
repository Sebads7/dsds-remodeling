import React from "react";
import Image from "next/image";

type Data = {
  title: string;
  icon: string;
};

const SectionDivider = ({
  sectionClass,
  arrayData,
}: {
  imageSrc: string;
  sectionClass?: string;
  arrayData: Data[];
  imgClass?: string;
}) => {
  return (
    <>
      <div
        className={`relative z-20 w-full py-7 shadow-lg  overflow-hidden ${sectionClass} `}
      >
        <div className="w-full lg:px-32 flex justify-between sm:justify-evenly   items-center  ">
          {Array.isArray(arrayData) &&
            arrayData.map((item, index) => (
              <div
                className="flex flex-col md:flex-row items-center w-[14rem]"
                key={index}
              >
                <div className="bg-light-bg p-3 md:px-8 md:py-8 rounded-full scale-75">
                  <Image
                    className="size-10 md:size-14"
                    width={1200}
                    height={1200}
                    alt={item.title}
                    src={item.icon}
                    loading="eager"
                    color="black"
                  />
                </div>
                <div className="w-2/4   text-center flex justify-center mx-auto ">
                  <p className=" text-sm mx-auto lg:text-xl font-bold   text-zinc-700  ">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SectionDivider;
