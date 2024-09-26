"use client";

import { BANNER, SERVICES } from "@/constant";
import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import React from "react";
import { FaDollarSign } from "react-icons/fa";

const HeroPage = () => {
  return (
    <div className="w-full h-full relative">
      {/* BANNER */}
      <div className="bg-yellow-500 text-slate-700 py-3 text-center font-bold text-lg overflow-hidden ">
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
      <div className="absolute top-10 left-0 w-full h-svh -z-[1] opacity-20">
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

        <section className=" w-full h-full  bg-[#F6F5F2] py-32 ">
          <h2 className="text-center font-bold text-3xl pb-32 ">
            Our Services
          </h2>
          <div className="container  mx-auto grid grid-cols-3  gap-10 ">
            {SERVICES.map((service, index) => (
              <div
                className="flex flex-col  h-[30rem] border-2 bg-white"
                key={index}
              >
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

                <p className="px-5 h-[8rem] pt-5 border-b-2 text-center">
                  {service.description}
                </p>

                <ul className="flex mx-auto gap-10 py-3">
                  <li className="flex gap-2 items-center ">
                    <FaDollarSign className="text-green-500" />
                    Affordable
                  </li>
                  {/* <li className="flex gap-2 items-center ">
                    <FaCheckCircle className="text-black" />
                    High Quality
                  </li>
                  <li className="flex gap-2 items-center ">
                    <FaClock className="text-yellow-500" />
                    On Time
                  </li> */}
                </ul>
              </div>
            ))}

            <div className="h-[20rem]  w-full col-span-3 border-2  bg-white overflow-hidden">
              <div className="flex items-center h-full">
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
                    <Link
                      href="contact"
                      className="bg-yellow-500 text-white py-3 px-6  shadow-md font-semibold hover:bg-yellow-600"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="ourservices"
                      className="bg-yellow-500 text-white py-3 px-6  shadow-md font-semibold hover:bg-yellow-600"
                    >
                      Learn More About our Services
                    </Link>
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
        </section>
        {/* PROJECTS SECTION */}
        <section className="w-full h-[30rem] bg-gray-400"></section>
        {/* TESTIMONIALS SECTION */}
        <section className="w-full h-[30rem] bg-gray-600"></section>
        {/* CONTACT SECTION */}
        <section className="w-full h-[30rem] bg-gray-700"></section>
      </main>
    </div>
  );
};

export default HeroPage;
