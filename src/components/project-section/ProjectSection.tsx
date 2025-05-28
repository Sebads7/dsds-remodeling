import React from "react";
import LinkButton from "../LinkButton";
import useInViewAnimation from "@/hooks/useView";
import { motion } from "framer-motion";
import ProjectGrid from "../ProjectGrid";

const ProjectSection = () => {
  const { ref: projectsRef, mainControls: projectsControls } =
    useInViewAnimation();
  return (
    <>
      <section className=" relative w-full h-full py-10 md:py-32  text-main-dark bg-light-bg">
        {/* TITLE */}
        <h3 className="text-center font-bold text-3xl md:text-5xl mb-5 ">
          OUR PROJECTS
        </h3>
        <p className="text-center  text-base md:text-lg px-10 pb-10 md:pb-20 max-w-3xl mx-auto">
          Take a look at some of our completed projects that showcase our
          commitment to quality and attention to detail.
        </p>
        <motion.div ref={projectsRef}>
          {/* PROJECT GRID COMPONENT */}
          <ProjectGrid projectsControls={projectsControls} />
        </motion.div>

        {/* LEARN MORE BUTTON */}
        <div className="w-full  h-full flex  justify-center items-center pt-10 lg:pt-20">
          <LinkButton
            href="ourprojects"
            name=" Learn More About Our Projects"
            className="bg-amber-600 hover:shadow-xl text-white hover:bg-amber-600/90"
          />
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
