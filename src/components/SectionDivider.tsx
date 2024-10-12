import React from "react";
import Image from "next/image";
import { LiaHammerSolid, LiaHandshakeSolid } from "react-icons/lia";
import { TbChecks } from "react-icons/tb";

const SectionDivider = ({
  imageSrc,
  sectionClass,
}: {
  imageSrc: string;
  sectionClass?: string;
}) => {
  return (
    <>
      <div
        className={`relative w-full h-[10rem]  overflow-hidden ${sectionClass} `}
      >
        <div className="absolute top-0 inset-x-0 h-[10rem] overflow-hidden  ">
          <Image
            src={imageSrc}
            width={2000}
            height={2000}
            alt="hero-background"
          />
          <div className=" absolute bg-black/70 top-0 h-full  w-full text-white flex justify-center items-center gap-60">
            <div className="flex flex-col justify-center items-center h-full ">
              <LiaHandshakeSolid className=" text-7xl" />
              <h3 className="text-xl font-semibold">Customer Satisfaction</h3>
            </div>

            <div className="flex flex-col justify-center items-center">
              <TbChecks className="text-7xl" />

              <h3 className="text-xl font-semibold">
                High-Quality Workmanship
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center">
              <LiaHammerSolid className="text-7xl" />
              <h3 className="text-xl font-semibold">Built to Last</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionDivider;
