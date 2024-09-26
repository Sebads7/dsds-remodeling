import React from "react";
import Image from "next/image";

const Logo = ({ imgSize, src }: { imgSize?: string; src: string }) => {
  return (
    <div>
      <div className="flex justify-center items-center  ">
        <Image
          className={` ${imgSize} scale-105 transition-all duration-300 ease-in-out`}
          src={src}
          alt="logo"
          width={200}
          height={200}
        ></Image>
        {/* <div className="flex  ">
          <p className="bg-blue-950 text-white px-2 py-2">DS & DS</p>
          <p className="bg-orange-400 text-white px-2 py-2">Remodeling</p>
        </div> */}
      </div>
      <p></p>
    </div>
  );
};

export default Logo;
