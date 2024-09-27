import React from "react";

import { SERVICES } from "@/constant/index";
import ServicesGrid from "@/components/ServicesGrid";

const ServicesPage = () => {
  return (
    <div className="w-full h-full bg-[#F6F5F2]">
      <h1 className="text-center font-bold text-4xl pt-10"> OUR SERVICES</h1>

      <div className="flex flex-col gap-20 py-20">
        {/* FIRST SERVICE */}
        <div className="flex pl-40 pr-10">
          <div className="w-2/4">
            {SERVICES.slice(1, 2).map((service, index) => (
              <ServicesGrid service={service} key={index} />
            ))}
          </div>
          <div className="w-full border-2 "></div>
        </div>

        {/* SECOND SERVICE */}

        <div className="flex pr-40 pl-10">
          <div className="w-full border-2"></div>
          <div className="w-2/4">
            {SERVICES.slice(0, 1).map((service, index) => (
              <ServicesGrid service={service} key={index} />
            ))}
          </div>
        </div>

        {/* THIRD SERVICE */}

        <div className="flex pl-40 pr-10">
          <div className="w-2/4">
            {SERVICES.slice(2, 3).map((service, index) => (
              <ServicesGrid service={service} key={index} />
            ))}
          </div>
          <div className="w-full border-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
