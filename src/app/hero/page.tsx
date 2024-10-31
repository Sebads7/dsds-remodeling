"use client";

import LinkButton from "@/components/LinkButton";
import ProjectGrid from "@/components/ProjectGrid";

import SectionDivider from "@/components/SectionDivider";
import ServicesGrid from "@/components/ServicesGrid";

import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import React from "react";
import { DIVIDER_DATA } from "@/constant/divider";
import Review from "@/components/Review";
import { BANNER } from "@/constant/banner";
import { SERVICES_DATA } from "@/constant/services-data";
import ContactInfo from "../contact/ContactInfo";

const HeroPage = () => {
  return (
    <div className="w-full h-full relative">
      {/* BANNER */}
      <div className="bg-yellow-500 z-[10] text-slate-700 py-4 text-center font-bold text-sm md:text-lg overflow-hidden ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "linear",
            delay: 1,
          }}
        >
          <div className=" flex gap-[20rem]  whitespace-nowrap animate-marque hover:pause ">
            {BANNER.map((banner, index) => (
              <div key={index} className="flex  ">
                <p>{banner.title}</p>
                <Link href="contact" className="underline px-2">
                  {banner.contact}
                </Link>
                <p>{banner.more}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* IMAGE BACKGROUND */}
      <div className="absolute top-10 left-0 w-full h-auto -z-10  opacity-20 ">
        <Image
          src="/images/hero-bg.webp"
          width={2000}
          height={2000}
          alt="hero-background"
          className="h-screen object-cover"
        />
      </div>

      {/* TITLE SECTION */}
      <header className=" flex flex-col items-center justify-center md:h-[30rem] lg:h-[85svh]  text-center bg-[#F6F5F2] bg-opacity-20 ">
        <div className="bg-gray-50/50 p-10 md:py-36 shadow-sm w-10/12 md:w-8/12 md:-translate-y-10 text-slate-700">
          <h1 className="text-2xl md:text-3xl  xl:text-6xl font-bold mb-5 ">
            Transforming Atlanta Homes with Expert Craftsmanship
          </h1>
          <h2 className="text-lg md:text-2xl bg-yellow-600 text-white p-2 w-fit mx-auto translate-x-10 ">
            We Offer The Best Remodeling Services Shaped to Fit Your Needs
          </h2>
        </div>
      </header>

      <main className="w-full h-full bg-white">
        {/* SERVICE SECTION */}
        <section className=" w-full h-full  bg-[#F6F5F2] md:py-32 z-[10] text-slate-800">
          <h2 className="text-center font-bold text-xl md:text-4xl md:pb-32 py-10  ">
            OUR SERVICES
          </h2>
          <div className="container px-10 md:px-0   mx-auto md:grid grid-cols-3 ">
            <div className="h-full md:grid grid-cols-3  gap-10 overflow-hidden   w-full col-span-3 space-y-6 md:space-y-0 ">
              {SERVICES_DATA.map((service, index) => (
                <ServicesGrid service={service} key={index} imageTitle={true} />
              ))}

              <div className="md:h-[23rem]  w-full col-span-3 border-2   bg-white overflow-hidden text-slate-800 ">
                <div className="flex h-full  items-center">
                  <div className="flex flex-col items-center py-5 md:py-0 gap-5 w-full  text-center  ">
                    <h3 className="text-center  w-full text-xl md:text-3xl font-bold ">
                      GET A FREE ESTIMATE
                    </h3>
                    <p className="px-20  text-sm md:text-base">
                      Contact us today for a free consultation! We&apos;ll work
                      with you to create a plan that fits your budget and
                      timeline.
                    </p>
                    <div className=" gap-5">
                      <LinkButton
                        href="ourservices"
                        name=" Learn More About Our Services"
                      />
                    </div>
                  </div>
                  <Image
                    className="w-full hidden md:block right-0 hover:scale-110 image-hover bg-black hover:opacity-90 "
                    src="/images/home-remo/home-rem1.jpg"
                    alt="image-1"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className=" relative w-full h-full py-32 bg-[#F6F5F2]">
          {/* SECTION DIVIDER */}
          <SectionDivider
            imageSrc="/images/hero-bg.webp"
            arrayData={DIVIDER_DATA[1]}
          />
          {/* TITLE */}
          <h2 className="text-center font-bold text-xl md:text-4xl py-10 md:py-32 ">
            OUR PROJECTS
          </h2>
          {/* PROJECT GRID COMPONENT */}
          <ProjectGrid />

          {/* LEARN MORE BUTTON */}
          <div className="w-full  h-full flex  justify-center items-center pt-20">
            <LinkButton
              href="ourprojects"
              name=" Learn More About Our Projects"
            />
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="w-full full px-5 md:px-0  bg-[#F6F5F2]">
          <SectionDivider
            imageSrc="/images/hero-bg.webp"
            arrayData={DIVIDER_DATA[0]}
          />

          <h2 className="text-center font-bold text-2xl lg:text-4xl py-10 lg:py-32 ">
            WHAT OUR CLIENTS SAY ABOUT US
          </h2>
          <div className=" pb-20 ">
            <Review
              mainContainer="items-center justify-center flex-col"
              containerReview="flex-row"
              linkButton={true}
            />
          </div>
        </section>
        {/* CONTACT SECTION */}
        <section className="relative  w-full h-full bg-[#F6F5F2] py-32  lg:pr-10 overflow-hidden">
          <div className="absolute top-0 h-[2rem] w-full bg-yellow-600/80 z-[2]"></div>
          <h2 className="text-center font-bold text-2xl md:text-4xl pb-10 md:pb-12 col-span-2  ">
            CONTACT US TO GET A FREE QUOTE
          </h2>
          <ContactInfo />
        </section>
      </main>
    </div>
  );
};

export default HeroPage;
