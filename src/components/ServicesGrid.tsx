import React from "react";

import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
  image2: string;
}

const ServicesGrid = ({
  service,
  descriptionClass,
  imageTitle,
  imageSrc,
}: {
  service: Service;
  descriptionClass?: string;
  imageTitle: boolean;
  imageSrc: string;
}) => {
  return (
    <>
      <div className="flex flex-col w-full  h-full shadow-xl rounded-md bg-white  text-slate-800 xl:max-w-lg">
        <div className="overflow-hidden rounded-t-md">
          <Image
            className={`w-full h-[13rem] sm:h-[15rem] md:h-[15rem]  lg:h-[16rem] hover:scale-[1.01] image-hover hover:opacity-90   `}
            src={imageSrc}
            width={1200}
            height={1200}
            alt="image-1"
          />
        </div>
        {imageTitle && (
          <h3 className="text-center text-lg mt-3  font-bold  ">
            {service.title}
          </h3>
        )}

        <p
          className={`px-5 sm:mt-2 mb-5 md:mb-0 md:pb-5 h-[5rem]text-sm text-center ${descriptionClass}`}
        >
          {service.description}
        </p>
      </div>
    </>
  );
};

export default ServicesGrid;
