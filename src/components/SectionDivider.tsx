import React from "react";
import Image from "next/image";

const SectionDivider = ({
  imageSrc,
  sectionClass,
  children,
  imgClass,
}: {
  imageSrc: string;
  sectionClass?: string;
  children?: React.ReactNode;
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
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionDivider;
