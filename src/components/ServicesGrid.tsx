import React from "react";

import Image from "next/image";
import { FaDollarSign } from "react-icons/fa";

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
      <div className="flex flex-col  h-full border-2 bg-white text-slate-800">
        <div className="relative overflow-hidden ">
          <Image
            className={`w-full h-[13rem] sm:h-[15rem] md:h-[17rem]  lg:h-[20rem] hover:scale-110 image-hover hover:opacity-90   `}
            src={imageSrc}
            width={200}
            height={200}
            alt="image-1"
          />
          {imageTitle && (
            <h3 className="text-center bg-black/60 text-white p-2 md:p-5 absolute w-full bottom-0 ">
              {service.title}
            </h3>
          )}
        </div>

        <p
          className={`px-5 lg:h-[10rem] xl:h-[8rem] p-3 md:pt-5 border-b-2 text-center text-sm md:text-base ${descriptionClass}`}
        >
          {service.description}
        </p>

        <ul className="flex flex-col-reverse  lg:my-auto lg:h-[4rem]  xl:flex-row justify-center items-center mx-auto  py-3 text-sm 2xl:text-base ">
          <li className="flex gap-2 items-center xl:pr-5 h-full ">
            <FaDollarSign className="text-green-500" />
            Quality On Your Budget
          </li>

          <li className="flex gap-2 items-center h-full ">
            <Image
              src="/images/icons/100-percent.png"
              alt="100-Percent"
              width={30}
              height={30}
            />
            Customer Satisfaction
          </li>
        </ul>
      </div>
    </>
  );
};

export default ServicesGrid;
