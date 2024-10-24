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
      mainControls.start("visible");
    } else {
      mainControls.start("hidden"); // Optionally handle hidden state
    }
  }, [isInView, mainControls]);

  return { ref, mainControls };
};

export default useInViewAnimation;
