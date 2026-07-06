export const easePremium = [0.16, 1, 0.3, 1];

export const sectionReveal = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: easePremium },
  },
};

export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, delay, ease: easePremium },
  },
});

export const maskReveal = {
  hidden: { y: "115%" },
  visible: {
    y: 0,
    transition: { duration: 0.82, ease: easePremium },
  },
};

export const staggerContainer = (delayChildren = 0, staggerChildren = 0.09) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren, staggerChildren },
  },
});
