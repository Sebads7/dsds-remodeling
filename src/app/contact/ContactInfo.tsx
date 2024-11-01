import Image from "next/image";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import React from "react";
import ContactForm from "@/components/FormComponents/ContactForm";
import { AnimationControls, motion } from "framer-motion";

interface ContactInfoProps {
  contactControls: AnimationControls;
}

export const LeftLoading = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

export const RightLoading = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

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

      <div className="md:grid grid-cols-2 md:pt-20 xl:pl-20 z-10 b ">
        {/* LEFT SIDE */}
        <motion.div
          className=" text-slate-700 w-full h-full  flex flex-col justify-center items-center  z-10  "
          variants={LeftLoading}
          initial="initial"
          animate={contactControls}
        >
          <h3 className="font-extrabold text-xl md:text-3xl pb-10 w-10/12 md:w-7/12 lg:w-9/12  2xl:w-7/12  mx-auto ">
            We are located in Lawrenceville and serving all the Greater
            <strong className="text-yellow-500 pl-1">Atlanta Area!</strong>
          </h3>

          <div className="flex flex-col md:flex-row justify-center   items-center  gap-5   w-full mx-auto  opacity-95 z-10 ">
            <div>
              <p className="flex flex-col justify-center h-full items-center gap-2 text-sm md:text-lg ">
                <span className="flex justify-center items-center text-xl md:text-2xl">
                  <MdOutlinePhoneIphone className=" text-2xl md:text-4xl" />
                  Phone
                </span>
                <strong>404-641-2994</strong>
              </p>
            </div>
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
          className="z-10 pt-10 md:pt-0  "
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
