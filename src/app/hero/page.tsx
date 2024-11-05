"use client";

import "./hero.css";

import LinkButton from "@/components/LinkButton";
import ProjectGrid from "@/components/ProjectGrid";

import SectionDivider from "@/components/SectionDivider";
import ServicesGrid from "@/components/ServicesGrid";

import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import React from "react";
import { DIVIDER_DATA } from "@/constant/divider";

import { BANNER } from "@/constant/banner";
import { SERVICES_DATA } from "@/constant/services-data";
import ContactInfo from "../contact/ContactInfo";
import Review from "@/components/ReviewComponents/Review";
import useInViewAnimation from "@/hooks/useView";
import {
  LeftLoading,
  Scale_1,
  Scale_2,
  Scale_delay1,
  Scale_delay2,
} from "../../constant/framer_effects";

const HeroPage = () => {
  const { ref: gridRef, mainControls: gridControls } = useInViewAnimation();
  const { ref: projectsRef, mainControls: projectsControls } =
    useInViewAnimation();

  const { ref: testimonialsRef, mainControls: testimonialControls } =
    useInViewAnimation();

  const { ref: contactRef, mainControls: contactControls } =
    useInViewAnimation();

  return (
    <div className="w-full h-full relative">
      {/* BANNER */}
      <div className="bg-yellow-500 z-[10] text-banner-color py-4 text-center font-bold text-sm md:text-lg overflow-hidden ">
        <motion.div variants={Scale_1} initial="initial" animate="animate">
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
          className="h-screen lg:h-[65rem] object-cover"
        />
      </div>

      {/* TITLE SECTION */}
      <header className="display-column h-[33rem]  md:h-[40rem] lg:h-[60rem]  px-5  sm:px-20  ">
        <motion.div
          className="display-column px-5 md:px-10 w-full lg:w-[60rem] h-[22rem] lg:h-[26rem] shadow-sm  lg:-translate-y-10 text-main-dark  my-5  bg-gray-50/50 border-2 border-gray-50"
          variants={LeftLoading}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-3xl md:text-5xl  xl:text-6xl font-extrabold md:font-bold mb-5 "
            variants={Scale_delay1}
            initial="initial"
            animate="animate"
          >
            Transforming Atlanta Homes with Expert Craftsmanship
          </motion.h1>
          <div className="relative">
            <motion.h2
              className="text-xl md:text-2xl md:bg-yellow-600 text-yellow-600 md:text-light-color sm:px-5 md:p-2 w-full lg:w-fit mx-auto lg:translate-x-10 md:text-center font-light md:font-bold ml-3 "
              variants={Scale_delay2}
              initial="initial"
              animate="animate"
            >
              Offering The Best Remodeling Services Shaped to Fit Your Needs
            </motion.h2>
            <div className="h-14 w-2 bg-light-bg border shadow-sm absolute left-0 top-0 md:hidden "></div>
          </div>
        </motion.div>
      </header>

      <main className="w-full h-full bg-light-bg">
        {/* SERVICE SECTION */}
        <section className=" w-full h-full  bg-light-bg md:py-32 z-[10] text-main-dark">
          <h2 className="text-center font-bold text-xl md:text-4xl md:pb-32 py-10  ">
            OUR SERVICES
          </h2>

          <div className="px-5  md:px-10 max-w-md md:max-w-lg lg:max-w-fit  2xl:w-[90%]   mx-auto lg:grid grid-cols-3 ">
            <motion.div
              className="h-full lg:grid grid-cols-3  gap-10 overflow-hidden   w-full col-span-3 space-y-6 lg:space-y-0 "
              ref={gridRef}
              variants={Scale_1}
              initial="initial"
              animate={gridControls}
            >
              {SERVICES_DATA.map((service, index) => (
                <ServicesGrid
                  service={service}
                  key={index}
                  imageTitle={true}
                  imageSrc={service.image}
                />
              ))}

              <motion.div
                className="md:h-[23rem]  w-full col-span-3 border-2   bg-white overflow-hidden text-main-dark "
                variants={Scale_2}
                initial="initial"
                animate={gridControls}
              >
                <div className="flex h-full  items-center">
                  <div className="flex flex-col items-center py-5 md:py-0 gap-5 w-full  text-center  text-main-dark ">
                    <h3 className="text-center  w-full text-xl md:text-3xl font-bold ">
                      GET A FREE ESTIMATE
                    </h3>
                    <p className="px-5 md:px-20  text-sm md:text-base">
                      Call us today at <strong> 404-641-2994</strong> for a free
                      consultation! We&apos;ll work with you to create a plan
                      that fits your budget and timeline.
                    </p>
                    <div className=" gap-5">
                      <LinkButton
                        href="ourservices"
                        name=" Learn More About Our Services"
                      />
                    </div>
                  </div>
                  <Image
                    className="w-full hidden lg:block right-0 hover:scale-110 image-hover bg-black hover:opacity-90 "
                    src="/images/home-remo/home-rem1.jpg"
                    alt="image-1"
                    width={200}
                    height={200}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className=" relative w-full h-full py-32 bg-light-bg">
          {/* SECTION DIVIDER */}
          <SectionDivider
            imageSrc="/images/hero-bg.webp"
            arrayData={DIVIDER_DATA[1]}
          />
          {/* TITLE */}
          <h2 className="text-center font-bold text-xl md:text-4xl py-10 md:py-32 text-main-dark ">
            OUR PROJECTS
          </h2>
          <motion.div ref={projectsRef}>
            {/* PROJECT GRID COMPONENT */}
            <ProjectGrid projectsControls={projectsControls} />
          </motion.div>

          {/* LEARN MORE BUTTON */}
          <div className="w-full  h-full flex  justify-center items-center pt-20">
            <LinkButton
              href="ourprojects"
              name=" Learn More About Our Projects"
            />
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="w-full full md:px-0  bg-light-bg">
          <SectionDivider
            imageSrc="/images/hero-bg.webp"
            arrayData={DIVIDER_DATA[0]}
          />

          <motion.h2
            className="text-center font-bold text-2xl lg:text-4xl py-10 lg:py-32 px-5 text-main-dark"
            ref={testimonialsRef}
            variants={Scale_1}
            initial="initial"
            animate={testimonialControls}
          >
            WHAT OUR CLIENTS SAY ABOUT US
          </motion.h2>
          <motion.div
            className=" pb-20 "
            variants={Scale_2}
            initial="initial"
            animate={testimonialControls}
          >
            <Review
              mainContainer="items-center justify-center flex-col"
              containerReview="flex-col lg:flex-row"
              linkButton={true}
              arrayData={true}
            />
          </motion.div>
        </section>
        {/* CONTACT SECTION */}
        <section
          className="relative  w-full h-full bg-light-bg py-16 md:py-32  lg:pr-10 overflow-hidden"
          ref={contactRef}
        >
          <div className="absolute top-0 h-[2rem] w-full bg-yellow-600/80 z-[2]"></div>
          <h2 className="text-center font-bold text-2xl md:text-4xl pb-10 md:pb-12 col-span-2 text-main-dark ">
            CONTACT US TO GET A FREE QUOTE
          </h2>
          <ContactInfo contactControls={contactControls} />
        </section>
      </main>
    </div>
  );
};

export default HeroPage;
