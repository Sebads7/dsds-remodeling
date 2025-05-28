import React from "react";

import LinkButton from "@/components/LinkButton";
import SectionDivider from "@/components/SectionDivider";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { DIVIDER_DATA } from "@/constant/divider";
import { SERVICES_DATA } from "@/constant/services-data";

const ServicesPage = () => {
  return (
    <div className="w-full h-full bg-[#F6F5F2] text-main-dark">
      <div className="pt-10 container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-5 lg:mb-12">
          Our Services
        </h1>
        <div className="max-w-7xl px-4 md:px-0 mx-auto">
          <h2 className="text-xl md:text-3xl font-semibold   mb-5 md:mb-10 text-gray-800">
            Why Choose Us for Your Next Renovation?
          </h2>

          <div className="flex flex-col md:flex-row  w-fit gap-5  md:gap-12 mx-auto ">
            {/* Service 1 */}
            <div className="flex items-start gap-4 bg-stone-50 border p-4 rounded-md">
              <div className="px-4 py-1 bg-orange-100 text-orange-500 flex items-center justify-center rounded-full text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold underline underline-offset-4 decoration-orange-500 mb-2">
                  Expert Craftsmanship
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-lg">
                  Our skilled professionals bring unmatched precision and care
                  to every detail. With years of experience, we deliver
                  high-quality results built to last.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-start gap-4 bg-stone-50 border p-4 rounded-md">
              <div className="px-4 py-2 bg-orange-100 text-orange-500 flex items-center justify-center rounded-full text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold underline underline-offset-4 decoration-orange-500 mb-2">
                  Tailored Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-lg">
                  We know that no two renovations are the same. That’s why we
                  collaborate with you to understand your needs and create a
                  personalized plan that aligns with your style and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES INFO */}
      <section className="flex mt-20 flex-col gap-20 px-10 w-full h-[90rem] lg:h-[70rem] mb-20">
        <div className="flex flex-col gap-20 w-full   ">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col  w-full gap-10 lg:gap-20 lg:justify-evenly  lg:h-[18rem] mx-auto   ${
                service.title === "BATHROOM REMODELING"
                  ? "lg:flex-row  "
                  : "lg:flex-row-reverse"
              }`}
            >
              <div
                className={`lg:w-[30rem] lg:h-[20rem] max-w-sm h-[10rem] ${
                  index === 2 && "translate-y-6"
                }`}
              >
                <Image
                  className={`w-full   h-full object-cover shadow-2xl  hover:opacity-90 rounded-md hover:scale-[1.01] image-hover   `}
                  src={service.image2}
                  width={1200}
                  height={1200}
                  alt="image-1"
                />
              </div>

              <div className={`flex flex-col max-w-lg xl:max-w-2xl `}>
                <p className="font-bold lg:mt-10  text-lg md:text-xl  lg:text-3xl  ">
                  {service.title}
                </p>
                <p className=" lg:mt-10 text-sm md:text-base  lg:text-lg  ">
                  {service.service_description}
                </p>
                <div className=" h-full mt-5 lg:items-end flex flex-col lg:flex-row  gap-2   ">
                  <LinkButton
                    href={service.link}
                    name={service.linkName}
                    className="w-[14rem]  xl:w-full text-white bg-amber-500 hover:bg-amber-500/90 "
                  />
                  {service.linkName2 && (
                    <LinkButton
                      href={service.link2}
                      name={service.linkName2}
                      className="w-[14rem] xl:w-full border   hover:border-white/40 hover:bg-amber-100 bg-amber-50 border-amber-50 text-zinc-600"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-white">
        <SectionDivider
          imageSrc="/images/hero-bg.webp"
          arrayData={DIVIDER_DATA[1]}
        />
      </div>

      {/* WHY CHOOSE US */}
      <section className="flex flex-col items-center justify-center lg:items-start px-5 md:px-10 lg:pr-20  lg:pl-28 pt-10 lg:pt-20  pb-20">
        <h3 className="font-bold  mx-auto text-2xl sm:text-3xl text-center md:text-4xl text-dark-gray mb-5 ">
          Ready to Transform Your Home?
        </h3>
        <div className="flex lg:mt-10 flex-col-reverse mx-auto gap-y-5 xl:grid grid-cols-2 lg:items-center  ">
          {/* LEFT COLUMN */}
          <div className="mx-auto">
            <p className="font-semibold text-xl"> Experienced Craftsmanship</p>
            <p className="mt-1 text-muted-foreground  md:text-lg max-w-xl ">
              Our team of skilled professionals is committed to delivering
              superior quality workmanship on every project.
            </p>
            <p className="mt-5 font-semibold text-xl">Personalized Service</p>
            <p className="mt-1 text-muted-foreground md:text-lg max-w-xl">
              At DS&DS Remodeling, we believe every project is unique. We work
              closely with you to understand your vision and preferences,
              ensuring the final result exceeds your expectations.
            </p>
            <div className="pt-10 flex flex-col-reverse sm:flex-row items-center justify-center xl:justify-start  gap-5 md:gap-10 ">
              <LinkButton
                href="/contact"
                name="CONTACT US"
                className="w-[14rem]  xl:w-full text-white bg-amber-500 hover:bg-amber-500/90 "
                icon={<MdEmail className="text-xl " />}
              />
              <div className="flex gap-5 text-lg text-muted-foreground rounded-md border py-2 px-3">
                <p className="flex items-center font-bold  gap-2 ">
                  Call Us:
                  <FaPhoneAlt />
                  404-661-2994
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full  max-w-lg md:max-w-xl ">
            <Image
              src="/images/hero-bg.webp"
              width={2000}
              height={2000}
              alt="hero-background"
              className="border rounded-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
