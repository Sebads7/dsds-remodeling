import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <div className="flex justify-center items-center  ">
        <Image
          className="w-[20rem] h-20 hover:scale-105 transition-all duration-300 ease-in-out"
          src="/logo-company5.png"
          alt="logo"
          width={200}
          height={200}
        ></Image>
        {/* <div className="flex  ">
          <p className="bg-blue-950 text-white px-2 py-2">DS & DS</p>
          <p className="bg-orange-400 text-white px-2 py-2">Remodeling</p>
        </div> */}
      </div>
    </div>
  );
};

export default Logo;
