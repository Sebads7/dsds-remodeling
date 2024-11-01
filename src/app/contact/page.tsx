"use client";
import useInViewAnimation from "@/hooks/useView";
import ContactInfo from "./ContactInfo";

import Image from "next/image";
import { motion } from "framer-motion";

const ContactPage = () => {
  const { ref: contactRef, mainControls: contactControls } =
    useInViewAnimation();
  return (
    <div className="h-full pt-10 bg-[#F6F5F2] px-5">
      <div className=" lg:ml-[10rem]  lg:grid grid-cols-2  relative h-svh  md:h-[70rem] xl:h-[49rem]   ">
        {/* LEFT SIDE */}
        <div className="flex flex-col   pt-10 max-w-lg lg:max-w-fit mx-auto  lg:w-[35rem] lg:px-10 h-full  lg:z-10 bg-yellow-600 md:translate-x-16 lg:translate-x-2 ">
          <h1 className="text-white font-extrabold text-2xl md:text-4xl pb-10 z-10 text-center  drop-shadow-[0_.2px_.6px_rgba(0,0,0,0.8)]   ">
            CONTACT
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold drop-shadow-[0_.2px_.6px_rgba(0,0,0,0.8)]   md:leading-[3.5rem]  text-white z-10 pl-5">
            Are You Looking For Highly Rated Home Remodeling Contractor Near
            You?
          </h2>
        </div>

        <div className="absolute top-[22rem] left-[5rem] md:left-[-3rem] lg:left-[1rem]  z-10 hidden xl:block ">
          <Image
            src="/images/remo-contractor.jpg"
            width={450}
            height={550}
            alt="image"
            className="border-[1rem] rounded-bl-[10rem]  border-gray-200 w-[33rem] h-[22rem]"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="z-10 md:translate-x-5  2xl:-translate-x-10 absolute max-w-sm md:max-w-md lg:max-w-lg top-[13rem] md:top-[19rem] md:left-[10rem] lg:left-[20rem] ml-2   xl:static h-fit">
          <Image
            src="/images/contractor.jpeg"
            width={300}
            height={800}
            alt="hero-background"
            className="w-full md:h-[25rem] border-[10px] md:border-[1rem] border-gray-200 rounded-tr-[10rem] z-10"
          />
          <div className=" px-10 py-5 bg-gray-200 ">
            <p className="text-xl md:text-2xl font-extralight md:leading-[2.8rem]   bg-gray-200">
              We offer a wide range of services. Our Home Remodeling services is
              exactly what you&apos;re looking for.
              <span className=" text-yellow-600 font-extrabold ml-1  ">
                Reach out to us today to bring your vision to life with out
                expert craftsmanship and personalized service.
              </span>
            </p>
          </div>
        </div>
      </div>

      <motion.div
        className="relative pt-20 md:pt-10 py-10 h-full lg:h-[40rem] "
        ref={contactRef}
        initial="initial"
        animate={contactControls}
      >
        <ContactInfo contactControls={contactControls} />
      </motion.div>
    </div>
  );
};

export default ContactPage;
