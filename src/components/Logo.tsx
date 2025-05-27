import React from "react";
import Image from "next/image";

const Logo = ({ imgSize, src }: { imgSize?: string; src: string }) => {
  return (
    <>
      <Image
        className={` ${imgSize} scale-[1.2] `}
        src={src}
        alt="logo"
        width={200}
        height={200}
      ></Image>
    </>
  );
};

export default Logo;
