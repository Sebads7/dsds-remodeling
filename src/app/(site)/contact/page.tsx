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
    <div className="h-full pt-10 bg-light-bg px-5">
      <h1 className=" font-extrabold text-3xl md:text-5xl  z-10 text-center text-neutral-800 mb-5 lg:mb-20  ">
        CONTACT
      </h1>
      <div>
        <motion.div
          className="flex flex-col lg:flex-row lg:gap-20 items-center w-full max-w-6xl md:mx-auto lg:pl-10"
          variants={LeftLoading}
          initial="initial"
          animate="animate"
        >
          <div className="lg:z-10    text-main-dark ">
            <h2 className="text-xl max-w-md md:text-5xl font-semibold   md:pl-5 pb-3 text-center lg:text-start ">
              Are You Looking For Highly Rated Home Remodeling Contractor Near
              You?
            </h2>
          </div>
          <Image
            src="/images/contractor.jpeg"
            width={300}
            height={800}
            alt="hero-background"
            className="w-full rounded-lg max-w-sm lg:max-w-md "
          />
        </motion.div>

        <motion.div
          className="w-full mt-5 lg:mt-10 md:max-w-6xl mx-auto  "
          variants={RightLoading}
          initial="initial"
          animate="animate"
        >
          <div className="z-10  ">
            <div className="px-3 md:px-10 lg:py-5  ">
              <p className="sm:text-xl md:text-2xl font-extralight lg:leading-[2.8rem]">
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
        className="mx-auto mt-10 lg:mt-0  lg:-translate-x-16 pb-20 h-full "
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
