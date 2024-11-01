"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useInViewAnimation = () => {
  const { inView: isInView, ref } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
      // console.log("Element is in view");
    } else {
      mainControls.start("hidden"); // Optionally handle hidden state
      // console.log("Element is not in view");
    }
  }, [isInView, mainControls]);

  return { ref, mainControls };
};

export default useInViewAnimation;
