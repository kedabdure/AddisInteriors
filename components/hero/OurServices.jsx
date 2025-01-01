"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Opacity } from '@mui/icons-material'

const OurServices = () => {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        delay: 0.3,
        duration: 1,
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        delay: 0.3,
        duration: 1,
        ease: 'easeOut'
      }
    }
  }

  // create a props for the motion.div
  const motionBoxProps = {
    initial: "hidden",
    whileInView: "visible",
    variants: sectionVariants
  }

  return (
    <section className="w-full bg-zinc-50">
      <motion.div
        className="flex justify-left sm:justify-normal gap-3 items-center mb-10 md:mb-16"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        <div className="w-12 md:w-16 lg:w-18 h-[3px] bg-black"></div>
        <h1 className="title-text">Our Services</h1>
      </motion.div>

      <div className="flex flex-wrap justify-center lg:justify-between gap-8">
        <motion.div className="w-full sm:max-w-[350px] flex items-start gap-4"
          {...motionBoxProps}
        >
          <Image src={'/image/icons/interior-design.png'} width={98} height={98} alt="Our Services" />
          <div className="flex flex-col items-start gap-4">
            <h2 className="subtitle-text">Interior Design</h2>
            <p className="text-base">
              Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full sm:max-w-[350px] flex items-start gap-4"
          {...motionBoxProps}
        >
          <Image src={'/image/icons/lighting-design.png'} width={98} height={98} alt="Our Services" />
          <div className="flex flex-col items-start gap-4">
            <h2 className="subtitle-text">Lighting Design</h2>
            <p className="text-base">

              Create the ideal mix of ambient, task, and accent lighting for a practical setting.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full sm:max-w-[350px] flex items-start gap-4"
          {...motionBoxProps}
        >
          <Image src={'/image/icons/outdoor-design.png'} width={98} height={98} alt="Our Services" />
          <div className="flex flex-col items-start gap-4">
            <h2 className="subtitle-text">Outdoor Design</h2>
            <p className="text-base">
              Celebrate the changing seasons with our seasonal outdoor decor services
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurServices
