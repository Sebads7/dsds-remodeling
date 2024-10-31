import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="absolute z-0 top-0 opacity-10 h-full  w-full">
        <Image
          src="/images/hero-bg.webp"
          width={2000}
          height={2000}
          alt="hero-background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center   md:grid grid-cols-2 pt-20 pl-20 z-10 ">
        <div className=" text-black w-full h-full z-10 flex flex-col justify-center items-center   ">
          <h3 className="font-extrabold text-xl md:text-3xl pb-10   w-7/12  mx-auto">
            We are located in Lawrenceville and serving all the Greater
            <strong className="text-yellow-500 pl-1">Atlanta Area!</strong>
          </h3>

          <div className="flex justify-between items-center   w-3/6 mx-auto  opacity-95">
            <div>
              <p className="flex flex-col justify-center h-full items-center gap-2 text-sm md:text-lg ">
                <MdOutlinePhoneIphone className=" text-4xl" />
                <strong className="">(678) 226-5000</strong>
              </p>
            </div>
            <div>
              <p className="flex flex-col justify-center items-center h-full gap-2 text-sm md:text-lg ">
                <MdEmail className="t text-4xl" />
                <strong className="">ds&ds@gmail.com</strong>
              </p>
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
