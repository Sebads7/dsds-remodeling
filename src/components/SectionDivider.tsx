import React from "react";
import Image from "next/image";

const SectionDivider = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <>
      <div className="relative w-full h-[10rem]  overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[10rem] overflow-hidden  ">
          <Image
            src={imageSrc}
            width={2000}
            height={2000}
            alt="hero-background"
          />
          <div className=" absolute bg-black/70 top-0 h-full w-full"></div>
        </div>
      </div>
    </>
  );
};

export default SectionDivider;
