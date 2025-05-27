"use client";
import React from "react";
import Hero from "../Hero/Hero";
import Services from "../services-section/Services";
import ProjectSection from "../project-section/ProjectSection";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../Contact/Contact";
import { DIVIDER_DATA } from "@/constant/divider";
import SectionDivider from "../SectionDivider";
import Banner from "../Banner/Banner";

const MainTemplate = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Services />
      <SectionDivider
        imageSrc="/images/hero-bg.webp"
        arrayData={DIVIDER_DATA[1]}
      />
      <ProjectSection />
      <SectionDivider
        imageSrc="/images/hero-bg.webp"
        arrayData={DIVIDER_DATA[0]}
      />
      <Testimonials />
      <Contact />
    </>
  );
};

export default MainTemplate;
