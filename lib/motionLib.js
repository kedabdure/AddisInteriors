// Parent Variants for Staggering Animation
export const staggerParentVariants = {
  hidden: { opacity: 0 }, // Initial hidden state for the parent
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children with a delay of 0.2s
      delayChildren: 0.3,   // Initial delay before starting stagger
    },
  },
};

// General Variants for Sections/Boxes
export const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 18,
      duration: 0.8,
    },
  },
};

export const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      delay: 0.2,
      duration: 0.8,
    },
  },
};

export const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      delay: 0.15,
      duration: 0.7,
    },
  },
};

// Props for Parent with Staggering
export const motionParentProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 },
  variants: staggerParentVariants,
};

// Props for Individual Section/Box
export const motionBoxProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 },
  variants: sectionVariants,
};

// Props for Text Animation
export const motionTextProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 },
  variants: textVariants,
};

// Props for Image Animation
export const motionImageProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 },
  variants: imageVariants,
};
