"use client";

import ContactForm from "@/components/ContactForm";
import LinkButton from "@/components/LinkButton";
import ProjectGrid from "@/components/ProjectGrid";
import Review from "@/components/Review";
import SectionDivider from "@/components/SectionDivider";
import ServicesGrid from "@/components/ServicesGrid";
import { BANNER, SERVICES } from "@/constant";
import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import React from "react";

const HeroPage = () => {
  return (
    <div className="w-full h-full relative">
      {/* BANNER */}
      <div className="bg-yellow-500 z-[10] text-slate-700 py-3 text-center font-bold text-lg overflow-hidden ">
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
      <div className="absolute top-10 left-0 w-full h-svh -z-10  opacity-20">
        <Image
          src="/images/hero-bg.webp"
          width={2000}
          height={2000}
          alt="hero-background"
        />
      </div>

      {/* TITLE SECTION */}
      <header className=" flex flex-col items-center justify-center h-[85svh]  text-center bg-[#F6F5F2] bg-opacity-20 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Building Atlanta&apos;s Future with Precision & Excellence
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Leading Construction Services Tailored to Your Needs
        </p>
        <div className="flex space-x-4">
          <Link
            href="contact"
            className="bg-yellow-500 text-white py-3 px-6  shadow-md font-semibold hover:bg-yellow-600"
          >
            Contact Us
          </Link>
        </div>
      </header>

      <main className="w-full h-full bg-white">
        {/* SERVICE SECTION */}
        <section className=" w-full h-full  bg-[#F6F5F2] py-32 z-[10] ">
          <h2 className="text-center font-bold text-4xl pb-32 ">
            OUR SERVICES
          </h2>
          <div className="container  mx-auto grid grid-cols-3  gap-10 ">
            <div className="h-full grid grid-cols-3  gap-10 overflow-hidden   w-full col-span-3  ">
              {SERVICES.map((service, index) => (
                <ServicesGrid service={service} key={index} />
              ))}

              <div className="h-[23rem]  w-full col-span-3 border-2  bg-white overflow-hidden ">
                <div className="flex h-full  items-center">
                  <div className="flex flex-col items-center  gap-5 w-full    text-center  ">
                    <h3 className="text-center  text-3xl font-bold ">
                      GET A FREE ESTIMATE
                    </h3>
                    <p className="px-20">
                      Contact us today for a free consultation! We&apos;ll work
                      with you to create a plan that fits your budget and
                      timeline.
                    </p>
                    <div className="flex gap-5">
                      <LinkButton href="contact" name="Contact Us" />
                      <LinkButton
                        href="ourservices"
                        name=" Learn More About Our Services"
                      />
                    </div>
                  </div>
                  <Image
                    className="w-full  right-0 hover:scale-110 image-hover bg-black hover:opacity-90 "
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
          <SectionDivider imageSrc="/images/hero-bg.webp" />
          {/* TITLE */}
          <h2 className="text-center font-bold text-4xl py-32 ">
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
        <section className="w-full full  bg-[#F6F5F2]">
          <SectionDivider imageSrc="/images/hero-bg.webp" />

          <h2 className="text-center font-bold text-4xl py-32 ">
            WHAT OUR CLIENT SAY ABOUT US
          </h2>
          <div className=" pb-20 ">
            <Review />
          </div>
        </section>
        {/* CONTACT SECTION */}
        <section className="w-full h-full bg-[#F6F5F2] grid grid-cols-2 py-32 pl-20 pr-10 ">
          <h2 className="text-center font-bold text-3xl pb-32 col-span-2 ">
            CONTACT US TO GET A FREE QUOTE
          </h2>
          <div className=""></div>
          <div className="">
            <ContactForm showTextInput={true} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HeroPage;
