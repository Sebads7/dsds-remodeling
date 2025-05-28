import { Scale_1, Scale_2 } from "@/constant/framer_effects";
import { motion } from "framer-motion";
import React from "react";
import Review from "@/components/ReviewComponents/Review";
import useInViewAnimation from "@/hooks/useView";

const Testimonials = () => {
  const { ref: testimonialsRef, mainControls: testimonialControls } =
    useInViewAnimation();
  return (
    <>
      <section className="w-full full md:px-0 pt-10 lg:pt-32 bg-light-bg">
        <motion.h3
          className="text-center max-w-sm md:max-w-lg mx-auto font-bold text-3xl md:text-5xl mb-5 text-main-dark "
          ref={testimonialsRef}
          variants={Scale_1}
          initial="initial"
          animate={testimonialControls}
        >
          WHAT OUR CLIENTS SAY ABOUT US
        </motion.h3>
        <p className=" text-center   mx-auto max-w-2xl text-lg lg:text-xl px-5 mb-10 text-zinc-700">
          We take pride in delivering high-quality craftsmanship and exceptional
          service. But don’t just take our word for it—read what our satisfied
          clients have to say about their experience working with us.
        </p>
        <motion.div
          className=" pb-20 "
          variants={Scale_2}
          initial="initial"
          animate={testimonialControls}
        >
          <Review
            mainContainer="items-center justify-center flex-col"
            containerReview="flex-col lg:flex-row"
            linkButton={true}
            arrayData={true}
          />
        </motion.div>
      </section>
    </>
  );
};

export default Testimonials;
