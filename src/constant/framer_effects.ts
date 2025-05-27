export const LeftLoading = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

export const RightLoading = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

export const Scale_1 = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const Scale_2 = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
  },
};

export const Scale_delay1 = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
  },
};

export const Scale_delay2 = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 1 },
  },
};
