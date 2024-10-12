import Image from "next/image";
import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { PROJECTS_PAGE } from "@/constant";
import SectionDivider from "@/components/SectionDivider";

const ProjectPage = () => {
  return (
    <div className="w-full h-fulls bg-[#F6F5F2]">
      <div className="  ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Remodeling Projects</h2>
          <p className="text-lg text-gray-600">
            Take a look at some of the beautiful transformations we&apos;ve done
            for our clients. We specialize in various home remodeling services
            to meet all your needs.
          </p>
        </div>

        {/* Gallery Grid */}
        <section className="">
          {PROJECTS_PAGE.map((service, index) => (
            <div key={index}>
              <div className="bg-[#e2e1de] p-10">
                <h2 className="py-10 text-2xl font-bold underline underline-offset-4 decoration-yellow-500">
                  {service.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20">
                  {service.images.map((image, index) => (
                    <div
                      className="relative group overflow-hidden   shadow-lg"
                      key={index}
                    >
                      <Image
                        src={image}
                        width={2000}
                        height={2000}
                        alt={service.title}
                        className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center flex flex-col items-center gap-1 text-white px-4">
                          <p className=""> View Image</p>
                          <FaCirclePlus className="text-xl " />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <SectionDivider imageSrc="/images/hero-bg.webp" />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
