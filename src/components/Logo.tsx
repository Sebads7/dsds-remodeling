import React from "react";
import Image from "next/image";

const Logo = ({ imgSize, src }: { imgSize?: string; src: string }) => {
  return (
    <div>
      <div className="flex justify-center items-center  ">
        <Image
          className={` ${imgSize} scale-[1.2] transition-all duration-300 ease-in-out`}
          src={src}
          alt="logo"
          width={200}
          height={200}
        ></Image>
      </div>
      <p></p>
    </div>
  );
};

export default Logo;
