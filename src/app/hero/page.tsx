"use client";

import { BANNER } from "@/constant";
import { motion } from "framer-motion";

import Link from "next/link";
import React from "react";

const HeroPage = () => {
  return (
    <section className="w-full h-svh ">
      {/* BANNER */}
      <div className="bg-yellow-500 text-black py-3 text-center font-bold text-lg overflow-hidden ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "linear",
            delay: 1,
          }}
        >
          <div className=" flex gap-[20rem]  whitespace-nowrap animate-marque hover:pause ">
            {BANNER.map((banner, index) => (
              <div key={index} className="flex  ">
                <p>{banner.title}</p>
                <Link href="contact" className="underline px-2">
                  {banner.contact}
                </Link>
                <p>{banner.more}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className=" flex flex-col items-center justify-center h-[80vh]  text-center px-4 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Building Atlanta&apos;s Future with Precision & Excellence
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Leading Construction Services Tailored to Your Needs
        </p>
        <div className="flex space-x-4">
          <a
            href="#quote"
            className="bg-yellow-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-yellow-600"
          >
            See Our Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
