// General Variants
export const sectionVariants = {
  hidden: { opacity: 0, y: 60 }, // Slightly more pronounced start
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60, // A balanced stiffness value
      damping: 18,   // Smooth stopping
      duration: 0.8, // Shorter duration for snappiness
    },
  },
};

export const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween", // Tween for smoother image entrance
      ease: "easeOut", // Professional easing curve
      delay: 0.2, // Reduced delay for responsiveness
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
      delay: 0.15, // Text appears faster for better readability
      duration: 0.7,
    },
  },
};

// General Props for Reusability
export const motionBoxProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 }, // Trigger when 30% is in view
  variants: sectionVariants,
};

export const motionTextProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 },
  variants: textVariants,
};

export const motionImageProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 },
  variants: imageVariants,
};
