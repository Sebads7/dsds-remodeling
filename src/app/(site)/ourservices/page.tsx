import React from "react";

import ServicesGrid from "@/components/ServicesGrid";
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
      <h2 className="text-center font-bold text-xl md:text-4xl pt-10">
        OUR SERVICES
      </h2>

      <div className=" px-10 lg:pl-28  ">
        <h3 className=" font-extralight text-lg md:text-3xl capitalize mt-10  md:mt-20 bg-yellow-600 md:mr-auto md:w-fit p-2 text-white  ">
          Why Select <span className="font-light">DS&DS</span> Remodeling for
          Your Next Renovation?
        </h3>
        <div className="md:pr-40 mt-5 py-8 space-y-5  sm:text-lg text-muted-foreground">
          <p>
            <strong className="text-lg md:text-xl underline underline-offset-4  decoration-yellow-500 pr-1">
              Expert Craftsmanship:
            </strong>
            Our experienced team brings exceptional skill and attention to
            detail to every project, ensuring top-tier results that stand the
            test of time.
          </p>
          <p className="pt-2">
            <strong className="text-lg md:text-xl underline underline-offset-4 decoration-yellow-500 pr-1">
              Tailored Solutions:
            </strong>
            At DS&DS Remodeling, we understand that no two projects are alike.
            We take the time to listen to your needs and collaborate with you to
            create a custom renovation plan that perfectly aligns with your
            style and vision.
          </p>
        </div>
      </div>

      {/* SERVICES INFO */}
      <section className="flex flex-col gap-20 py-20 lg:pl-28 lg:pr-20 px-5 md:px-28 ">
        {/* FIRST SERVICE */}
        <div className="flex flex-col gap-10 max-w-xs sm:max-w-md mx-auto md:max-w-lg lg:max-w-full   bg-white/40 ">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={index}
              className={`flex  ${
                service.title === "BATHROOM REMODELING"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } flex-col`}
            >
              <div className="lg:w-2/4 bg-blue-300 ">
                <ServicesGrid
                  service={service}
                  descriptionClass="hidden"
                  imageTitle={false}
                  imageSrc={service.image2}
                />
              </div>

              <div className="grid 2xl:grid-rows-3 place-items-center   lg:w-8/12 xl:w-10/12 border-2  ">
                <h3 className="font-bold xl:my-5 pt-5 xl:pt-10 text-lg md:text-xl  lg:text-2xl  ">
                  {service.title}
                </h3>
                <p className="mb-5 md:mb-0 h-full mx-5 lg:mx-14 text-center pt-5 text-sm md:text-base  lg:text-lg  ">
                  {service.service_description}
                </p>
                <div className=" h-full flex flex-col lg:flex-row  items-start gap-2 my-5 lg:my-0 pt-3  ">
                  <LinkButton
                    href={service.link}
                    name={service.linkName}
                    className="w-[14rem]  xl:w-full "
                  />
                  {service.linkName2 && (
                    <LinkButton
                      href={service.link2}
                      name={service.linkName2}
                      className="w-[14rem] xl:w-full"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider
        imageSrc="/images/hero-bg.webp"
        arrayData={DIVIDER_DATA[1]}
      />

      {/* WHY CHOOSE US */}
      <section className="flex flex-col items-center justify-center lg:items-start px-5 md:px-10 lg:pr-20  lg:pl-28 pt-20  pb-20">
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-dark-gray mb-5 ">
          Ready to Transform Your Home?
        </h3>
        <div className="flex flex-col-reverse xl:grid grid-cols-2  ">
          {/* LEFT COLUMN */}
          <div className="px-5 space-y-5 ">
            <p className="pt-10 text-muted-foreground  md:text-lg ">
              <strong> Experienced Craftsmanship: </strong>
              Our team of skilled professionals is committed to delivering
              superior quality workmanship on every project.
            </p>
            <p className="pt-2 text-muted-foreground md:text-lg ">
              <strong>Personalized Service: </strong>
              At DS&DS Remodeling, we believe every project is unique. We work
              closely with you to understand your vision and preferences,
              ensuring the final result exceeds your expectations.
            </p>
            <div className="pt-10 flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-10 ">
              <LinkButton
                href="/contact"
                name="CONTACT US"
                icon={<MdEmail className="text-xl " />}
              />
              <div className="flex gap-5 text-lg text-muted-foreground ">
                <p className="flex items-center font-bold  gap-2 ">
                  <FaPhoneAlt />
                  404-661-2994
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full px-5 sm:p-10 md:p-0 lg:p-24 xl:p-0 ">
            <Image
              src="/images/hero-bg.webp"
              width={2000}
              height={2000}
              alt="hero-background"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
