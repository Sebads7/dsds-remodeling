import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="absolute z-0 top-2 opacity-10 h-full ">
        <Image
          src="/images/hero-bg.webp"
          width={2000}
          height={2000}
          alt="hero-background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center   md:grid grid-cols-2 ">
        <div className="xl:pl-20 pb-10 md:pb-0  h-full px-3 lg:px-0 ">
          <div className=" text-black w-full h-full pt-10  lg:pl-20">
            <h3 className="font-bold text-xl md:text-3xl pb-10 w-10/12 lg:w-full mx-auto md:text-center sm:text-start">
              We are located in Lawrenceville and serving all the Greater
              <strong className="text-yellow-500 pl-1">Atlanta Area!</strong>
            </h3>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-1 opacity-70 ">
              <div className="bg-yellow-500 text-white w-[15rem] lg:w-[20rem] h-[8rem] lg:h-[10rem] shadow-md rounded-tl-[6rem]">
                <p className="flex flex-col justify-center h-full items-center gap-2 text-sm md:text-lg ">
                  <MdOutlinePhoneIphone className=" text-4xl" />
                  <strong className="">(678) 226-5000</strong>
                </p>
              </div>
              <div className="bg-yellow-500 text-white w-[15rem] lg:w-[20rem] h-[8rem] lg:h-[10rem] shadow-md rounded-br-[6rem]">
                <p className="flex flex-col justify-center items-center h-full gap-2 text-sm md:text-lg ">
                  <MdEmail className="t text-4xl" />
                  <strong className="">ds&ds@gmail.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="z-10 ">
          <ContactForm showTextInput={true} />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
