import Image from "next/image";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import React from "react";
import ContactForm from "@/components/FormComponents/ContactForm";
import { AnimationControls, motion } from "framer-motion";
import { LeftLoading, RightLoading } from "@/constant/framer_effects";

interface ContactInfoProps {
  contactControls: AnimationControls;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contactControls }) => {
  return (
    <>
      {/* IMAGE BACKGROUND */}
      <div className="absolute -z-0 top-0 inset-0 opacity-10 h-full  w-full hidden md:block">
        <Image
          src="/images/hero-bg.webp"
          width={2000}
          height={2000}
          alt="hero-background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="lg:grid grid-cols-2 lg:pt-20 xl:pl-20 z-10">
        {/* LEFT SIDE */}
        <motion.div
          className=" text-banner-color  z-10  w-9/12 mx-auto "
          variants={LeftLoading}
          initial="initial"
          animate={contactControls}
        >
          <h3 className="font-extrabold text-xl md:text-3xl pt-5 pb-10  mx-auto text-center  ">
            We are located in Lawrenceville and serving all the Greater
            <strong className="text-yellow-500 pl-1">Atlanta Area!</strong>
          </h3>

          <div className="flex flex-col justify-center   items-center  gap-5   w-full   opacity-95 z-10  ">
            {/* PHONE CONTAINER */}
            <div>
              <p className="flex flex-col justify-center h-full items-center gap-2 text-sm md:text-lg ">
                <span className="flex justify-center items-center text-xl md:text-2xl">
                  <MdOutlinePhoneIphone className=" text-2xl md:text-4xl" />
                  Phone
                </span>
                <strong>404-641-2994</strong>
              </p>
            </div>
            {/* EMAIL CONTAINER */}
            <div>
              <p className="flex flex-col justify-center items-center h-full gap-2 text-sm md:text-lg ">
                <span className="flex justify-center items-center text-xl md:text-2xl">
                  <MdEmail className="text-2xl md:text-4xl mr-1" /> Email
                </span>
                <strong>dsdsatlanta@gmail.com</strong>
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="!z-[50] pt-10 lg:pt-0  "
          variants={RightLoading}
          initial="initial"
          animate={contactControls}
        >
          <ContactForm showTextInput={true} />
        </motion.div>
      </div>
    </>
  );
};

export default ContactInfo;
