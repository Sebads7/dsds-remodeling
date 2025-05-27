"use client";

import "./hero.css";
import LinkButton from "@/components/LinkButton";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import {
  LeftLoading,
  Scale_delay1,
  Scale_delay2,
} from "@/constant/framer_effects";
import Rating from "@mui/material/Rating";
import { Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroImages = ["/hero/hero.jpg", "/hero/hero2.jpg", "/hero/hero3.jpg"];

const Hero = () => {
  return (
    <>
      <section className="  h-full lg:mt-10 pb-20 mx-4 xl:px-20">
        <div className="flex ml-4 sm:ml-0 justify-between xl:container  md:mx-4 xl:mx-auto text-zinc-700 bg-">
          <motion.div
            className="mt-10  "
            variants={LeftLoading}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-5xl w-full  md:text-6xl lg:max-w-xl  font-extrabold md:font-bold mb-5 flex flex-col  "
              variants={Scale_delay1}
              initial="initial"
              animate="animate"
            >
              <span className=" flex flex-col">
                <span className="max-w-sm  md:max-w-lg">
                  Transform Your{" "}
                  <span className="lg:hidden ">
                    Home <span className="lg:hidden"> With</span>
                  </span>
                </span>

                <span className="hidden lg:block">Home with</span>
              </span>
              <span className=" max-w-sm lg:w-3/4 text-amber-600">
                Professional Renovation
              </span>
            </motion.h1>
            <div className="flex justify-between sm:justify-normal">
              <div className="pr-2">
                <motion.h2
                  className="text-xl max-w-sm lg:max-w-xl ml-1 md:ml-0"
                  variants={Scale_delay2}
                  initial="initial"
                  animate="animate"
                >
                  From kitchen remodeling to complete home makeovers, DS&DS
                  Remodeling LLC. brings over 10 years of expertise to every
                  project. We turn your vision into reality with quality
                  craftsmanship and attention to detail.
                </motion.h2>

                <div className="mt-5 ml-1 md:ml-0 flex flex-col-reverse lg:flex-row gap-5">
                  <p className="flex items-center gap-2 font-semibold">
                    <Rating name="read-only" value={5} readOnly />
                    +500 projects
                  </p>
                  <p className="flex items-center gap-2 font-semibold">
                    <Users className="text-amber-600" /> +500 satisfied
                    customers
                  </p>
                </div>
                <div className="mt-5 ml-1 md:ml-0 flex gap-5 items-center">
                  <LinkButton
                    href="contact"
                    name="Contact Us"
                    className="bg-amber-600 hover:shadow-xl text-white hover:bg-amber-600/90"
                  />

                  <LinkButton
                    href="ourprojects"
                    name="View Our Work"
                    className=" border  hover:border-white/40 hover:bg-amber-50 border-amber-500 text-dark"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <div className="hidden md:block">
            <Carousel
              className=" rounded-md shadow-2xl mt-20 md:mt-0  md:w-[20rem] md:h-[35rem] xl:w-[35rem] xl:h-[39rem]"
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            >
              <CarouselContent>
                {HeroImages.map((image, i) => (
                  <CarouselItem key={i}>
                    <div className="md:w-[20rem] md:h-[35rem] xl:w-[35rem] xl:h-[39rem]">
                      <Image
                        src={image}
                        width={1200}
                        height={1200}
                        alt="hero-background"
                        loading="eager"
                        className="h-full w-full rounded-md object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-4">
                <CarouselDots />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
