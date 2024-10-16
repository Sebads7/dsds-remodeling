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
          <div className=" absolute bg-black/70 top-0 h-full  w-full text-white flex justify-center items-center gap-60">
            {Array.isArray(arrayData) &&
              arrayData.map((item, index) => (
                <div
                  className="flex flex-col justify-center items-center h-full "
                  key={index}
                >
                  <Image
                    className="w-14 h-14 text-white fill-white icon-white "
                    width={2000}
                    height={2000}
                    alt={item.title}
                    src={item.icon}
                  ></Image>

                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionDivider;
