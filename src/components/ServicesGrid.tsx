import React from "react";

import Image from "next/image";
import { FaDollarSign } from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  image: string;
}

const ServicesGrid = ({
  service,
  descriptionClass,
}: {
  service: Service;
  descriptionClass?: string;
}) => {
  return (
    <>
      <div className="flex flex-col  h-full border-2 bg-white">
        <div className="relative overflow-hidden">
          <Image
            className="w-full h-[18rem] hover:scale-110 image-hover hover:opacity-90  "
            src={service.image}
            width={200}
            height={200}
            alt="image-1"
          />
          <h3 className="text-center bg-black/60 text-white p-5 absolute w-full bottom-0 ">
            {service.title}
          </h3>
        </div>

        <p
          className={`px-5 h-[8rem] pt-5 border-b-2 text-center text-sm md:text-base ${descriptionClass}`}
        >
          {service.description}
        </p>

        <ul className="flex justify-center items-center mx-auto  py-3 text-sm md:text-base">
          <li className="flex gap-2 items-center pr-10 ">
            <FaDollarSign className="text-green-500" />
            We beat any price
          </li>
          <Image
            src="/icons/100-percent.png"
            alt="100-Percent"
            width={30}
            height={30}
            className=" mr-3"
          />
          <li>Customer Satisfaction</li>
        </ul>
      </div>
    </>
  );
};

export default ServicesGrid;
