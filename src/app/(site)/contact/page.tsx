"use client";
import useInViewAnimation from "@/hooks/useView";
import ContactInfo from "./ContactInfo";

import Image from "next/image";
import { motion } from "framer-motion";
import { LeftLoading, RightLoading } from "@/constant/framer_effects";

const ContactPage = () => {
  const { ref: contactRef, mainControls: contactControls } =
    useInViewAnimation();
  return (
    <div className="h-full pt-10 bg-[#F6F5F2] px-5">
      <div className=" xl:ml-[15rem] grid xl:grid-cols-2  relative lg:h-svh   xl:h-[49rem]">
        {/* LEFT SIDE */}
        <div className="flex flex-col lg:pt-10 lg:px-10 mx-auto max-w-lg lg:max-w-fit  lg:w-[35rem]  h-full  lg:z-10 xl:bg-banner-color  text-main-dark ">
          <h1 className="xl:text-white font-extrabold text-2xl md:text-4xl  z-10 text-center  xl:drop-shadow-[0_.2px_.6px_rgba(0,0,0,0.8)] pb-3 lg:pb-10  ">
            CONTACT
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold xl:drop-shadow-[0_.2px_.6px_rgba(0,0,0,0.8)]   lg:leading-[3.5rem]  xl:text-white z-10 pl-5 pb-3 text-center md:text-start">
            Are You Looking For Highly Rated Home Remodeling Contractor Near
            You?
          </h2>

          <motion.div
            className="absolute top-[22rem] left-[5rem] md:left-[-3rem] lg:left-[-6rem]  z-10 hidden xl:block "
            variants={LeftLoading}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/images/remo-contractor.jpg"
              width={450}
              height={550}
              alt="image"
              className="border-[1rem] rounded-bl-[10rem]  border-gray-200/30 w-[30rem] h-[21rem]"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="w-full max-w-xl md:max-w-3xl  lg:max-w-5xl mx-auto"
          variants={RightLoading}
          initial="initial"
          animate="animate"
        >
          <div className="z-10 xl:max-w-lg  lg:h-full flex flex-col md:flex-row-reverse xl:flex-col  items-center ">
            <Image
              src="/images/contractor.jpeg"
              width={300}
              height={800}
              alt="hero-background"
              className="w-[20rem] md:w-[23rem] lg:w-[30rem] h-[13rem] md:h-[20rem] lg:h-[25rem] border-[10px] md:border-[1rem] r  lg:rounded-tr-[10rem] border-transparent z-10"
            />
            <div className="px-3 md:px-10 lg:py-5 text-center md:text-start ">
              <p className="sm:text-xl md:text-2xl font-extralight lg:leading-[2.8rem] ">
                We offer a wide range of services. Our Home Remodeling services
                is exactly what you&apos;re looking for.
                <span className=" text-yellow-600 font-extrabold ml-1  ">
                  Reach out to us today to bring your vision to life with out
                  expert craftsmanship and personalized service.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative py-10 h-full lg:h-[40rem] "
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
