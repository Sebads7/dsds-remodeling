import ContactForm from "@/components/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <div className="h-full pt-20 pb-32 bg-[#F6F5F2] ">
      <h1 className=" text-center font-bold text-4xl pb-20">CONTACT</h1>

      <div className="  mx-auto p-10">
        <h2 className="text-2xl font-semibold text-center  px-10 ">
          Are You Looking For Highly Rated Home Remodeling Contractors Near You?
        </h2>
        <p className="text-lg  text-center w-2/4 mx-auto pt-10">
          DS&DS Home Remodeling is exactly what you&apos;re looking for. Reach
          out to us today to bring your vision to life with expert craftsmanship
          and personalized service.
        </p>
      </div>

      <div className="px-40 w-3/4 mx-auto">
        <ContactForm showTextInput={true} />
      </div>
    </div>
  );
};

export default ContactPage;
