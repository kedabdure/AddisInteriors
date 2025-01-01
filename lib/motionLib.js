export const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      delay: 0.3,
      duration: 1,
    }
  }
}

export const imageVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1, x: 0,
    transition: {
      delay: 0.3,
      duration: 1,
    }
  }
}

export const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      delay: 0.3,
      duration: 1,
    }
  }
}

export const motionBoxProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport:{ once: true, amount: 0.2 },
  variants: sectionVariants
}

export const motionTextProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport:{ once: true, amount: 0.2 },
  variants: textVariants
}

export const motionImageProps = {
  viewport:{ once: true, amount: 0.2 },
  initial: "hidden",
  whileInView: "visible",
  variants: imageVariants
}