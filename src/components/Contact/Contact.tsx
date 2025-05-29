import React from "react";
import ContactInfo from "@/app/(site)/contact/ContactInfo";
import useInViewAnimation from "@/hooks/useView";

const Contact = () => {
  const { ref: contactRef, mainControls: contactControls } =
    useInViewAnimation();
  return (
    <>
      <section
        className="relative  w-full h-full bg-white py-16 md:py-32  lg:pr-10 overflow-hidden "
        ref={contactRef}
      >
        <h3 className="text-center font-bold text-3xl md:text-5xl mb-5 text-main-dark ">
          Get Your Free Estimate
        </h3>
        <p className="font-semibold text-center md:text-start text-xl md:text-3xl  pb-5  mx-auto max-w-md md:max-w-2xl text-banner-color  ">
          Ready to start your home renovation project? Contact us today for a
          free, detailed estimate.
        </p>

        <ContactInfo contactControls={contactControls} />
      </section>
    </>
  );
};

export default Contact;
