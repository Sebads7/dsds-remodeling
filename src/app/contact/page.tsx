import ContactForm from "@/components/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <div className="h-full pt-20 pb-32 bg-[#F6F5F2] ">
      <h1 className=" text-center font-bold text-4xl pb-20">CONTACT</h1>
      <div className="grid grid-cols-2">
        <div className=""></div>

        <div className="px-10">
          <ContactForm showTextInput={true} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
