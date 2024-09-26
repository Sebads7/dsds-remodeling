import ContactForm from "@/components/ContactForm";
import React from "react";

const ContactPage = () => {
  return (
    <div className="h-svh ">
      <h1 className=" text-center font-bold text-4xl py-20">CONTACT</h1>
      <div className="grid grid-cols-2">
        <div className=""></div>

        <div className="">
          <ContactForm showTextInput={true} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
