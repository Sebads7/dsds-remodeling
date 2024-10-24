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
  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * ServicesPage is a page component which displays all the services provided by the company.
   * It contains a brief description of each service and a link to view the projects related to each service.
   * The page is divided into sections, each section showcasing a different service.
   * The page also contains a section for "Why Choose Us" which highlights the benefits of choosing the company.
   */
  /******  014d2287-6411-407c-812e-f56eaea0ae72  *******/ return (
    <div className="w-full h-full bg-[#F6F5F2] text-dark-gray">
      <h2 className="text-center font-bold text-xl md:text-4xl pt-10">
        OUR SERVICES
      </h2>

      <div className=" px-10 md:pl-28 md:pt-10 ">
        <h3 className=" font-extralight text-lg md:text-3xl capitalize mt-10  md:mt-20 bg-yellow-600 md:mr-auto md:w-fit p-2 text-white  ">
          Why Select <span className="font-light">DS&DS</span> Remodeling for
          Your Next Renovation?
        </h3>
        <div className="md:pr-40 mt-5 py-8 space-y-5  text-lg">
          <p>
            <strong className="text-xl underline underline-offset-4  decoration-yellow-500 pr-1">
              Expert Craftsmanship:
            </strong>
            Our experienced team brings exceptional skill and attention to
            detail to every project, ensuring top-tier results that stand the
            test of time.
          </p>
          <p className="pt-2">
            <strong className="text-xl underline underline-offset-4 decoration-yellow-500 pr-1">
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
      <section className="flex flex-col gap-20 py-20 md:pl-28 lg:pr-20 px-10">
        {/* FIRST SERVICE */}
        <div className="flex flex-col gap-10   bg-white/40 ">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col  md:${service.flexDirection}  `}
            >
              <div className="md:w-2/4 bg-blue-300 ">
                <ServicesGrid
                  service={service}
                  descriptionClass="hidden"
                  imageTitle={false}
                />
              </div>

              <div className="grid md:grid-rows-3 place-items-center  md:w-10/12 border-2  ">
                <h3 className="font-bold my-5 md:pt-10 text-xl  md:text-2xl  ">
                  {service.title}
                </h3>
                <p className="mb-5 h-full mx-5 md:mx-20 text-center text-lg ">
                  Enhance your home’s curb appeal with our exterior remodeling
                  services. From siding and painting to roofing and gutter
                  installation, we use only the highest quality materials to
                  ensure your home not only looks great but is also protected
                  from the elements.
                </p>
                <div className=" h-full flex flex-col sm:flex-row items-start gap-2 my-5 ">
                  <LinkButton
                    href={service.link}
                    name={service.linkName}
                    className="w-[14rem] md:w-full"
                  />
                  {service.linkName2 && (
                    <LinkButton
                      href={service.link2}
                      name={service.linkName2}
                      className="w-[14rem] md:w-full"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECOND SERVICE */}
        {/* <div className="flex bg-white/40">
          <div className="grid grid-rows-3 place-items-center  w-10/12 border-2">
            <h3 className="font-bold pt-10 text-2xl  ">Kitchen Remodeling</h3>
            <p className="mb-5 h-full px-20 text-center text-lg ">
              Enhance your home’s curb appeal with our exterior remodeling
              services. From siding and painting to roofing and gutter
              installation, we use only the highest quality materials to ensure
              your home not only looks great but is also protected from the
              elements.
            </p>
            <div className="h-full ">
              <LinkButton
                href="/ourprojects#kitchenremodeling"
                name="View Our Kitchen Projects"
              />
            </div>
          </div>
          <div className="w-2/4">
            {SERVICES.slice(0, 1).map((service, index) => (
              <ServicesGrid
                service={service}
                key={index}
                descriptionClass="hidden"
              />
            ))}
          </div>
        </div> */}

        {/* THIRD SERVICE */}
        {/* <div className="flex bg-white/40 ">
          <div className="w-2/4">
            {SERVICES.slice(2, 3).map((service, index) => (
              <ServicesGrid
                service={service}
                key={index}
                descriptionClass="hidden"
              />
            ))}
          </div>
          <div className="grid grid-rows-3 place-items-center  w-10/12 border-2">
            <h3 className="font-bold pt-10 text-2xl  ">
              Residential Remodeling
            </h3>
            <p className="mb-5 h-full px-20 text-center text-lg ">
              Enhance your home’s curb appeal with our exterior remodeling
              services. From siding and painting to roofing and gutter
              installation, we use only the highest quality materials to ensure
              your home not only looks great but is also protected from the
              elements.
            </p>
            <div className=" h-full flex items-start gap-2 ">
              <LinkButton
                href="/ourprojects#exteriorpainting"
                name="View Our Exterior Projects"
              />
              <LinkButton
                href="/ourprojects#interiorpainting"
                name="View Our Interior Projects"
              />
            </div>
          </div>
        </div> */}
      </section>

      <SectionDivider
        imageSrc="/images/hero-bg.webp"
        arrayData={DIVIDER_DATA[1]}
      />

      {/* WHY CHOOSE US */}
      <section className="flex flex-col items-center lg:items-start md:pl-10 lg:pl-28 md:pr-10 lg:pr-20 pt-20  pb-20">
        <h3 className="font-bold text-3xl text-dark-gray mb-5 ">
          Ready to Transform Your Home?
        </h3>
        <div className="flex flex-col-reverse lg:grid grid-cols-2 ">
          {/* LEFT COLUMN */}
          <div className="px-8 md:px-0 md:pr-20 space-y-5 ">
            <p className="pt-10 text-muted-foreground  text-lg ">
              <strong> Experienced Craftsmanship: </strong>
              Our team of skilled professionals is committed to delivering
              superior quality workmanship on every project.
            </p>
            <p className="pt-2 text-muted-foreground  text-lg ">
              <strong>Personalized Service: </strong>
              At DS&DS Remodeling, we believe every project is unique. We work
              closely with you to understand your vision and preferences,
              ensuring the final result exceeds your expectations.
            </p>
            <div className="pt-10 flex items-center justify-center lg:justify-start gap-10">
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
          <div className="w-full p-10 md:p-0 ">
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
