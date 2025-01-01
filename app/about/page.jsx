"use client"

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/Button';
import Teams from '@/components/hero/Teams';

// Motion variants for animations on scroll
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const imageVariants = {
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

export default function About() {
  return (
    <AnimatePresence>
      <motion.div
        className="bg-gray-100 text-gray-900"
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {/* Hero Section */}
        <div className="relative bg-[url('/image/about.jpg')] bg-center bg-cover mt-16">
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.h1
            className="relative container py-32 text-4xl font-extrabold tracking-wide text-center text-white md:py-64 md:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            About Us
          </motion.h1>
        </div>

        {/* About Section */}
        <motion.div
          className="container py-12 lg:py-20"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        >
          <div className="text-center space-y-6 lg:space-y-8">
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900 lg:text-5xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Crafting Timeless Interior Designs with Purpose
            </motion.h2>
            <motion.p
              className="mt-4 text-lg leading-relaxed text-gray-700 lg:text-xl lg:w-2/3 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              At Addis Interior Design, we transform spaces into timeless works of art. Whether it’s your home, office, or commercial property, our expert team blends functionality with creativity to craft interiors that inspire and captivate. Experience bespoke designs tailored to your unique needs.
            </motion.p>
          </div>

          <div className="w-full h-full flex flex-col mt-8 lg:flex-row items-center justify-between gap-8 lg:gap-12 lg:mt-16">
            {/* Image Section */}
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-lg w-full lg:w-1/2"
              whileHover="hover"
              variants={imageVariants}
            >
              <Image
                src="/image/gallery1123.jpg"
                width={700}
                height={700}
                alt="Addis Interior Design"
                className="transition-transform duration-300 transform hover:scale-105"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="flex flex-col justify-center w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
            >
              <motion.h3
                className="text-2xl font-semibold text-gray-900 lg:text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                Transforming Spaces with Elegance
              </motion.h3>
              <motion.p
                className="mt-3 text-xl font-medium text-gray-600 lg:text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Designing Interiors That Inspire
              </motion.p>
              <motion.p
                className="mt-8 text-lg leading-relaxed text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                Addis Interior Design Company specializes in crafting sophisticated and functional spaces that reflect your personality and needs. With a team of experienced designers, we turn your vision into reality using innovative ideas and meticulous attention to detail.
                <br />
                <br />
                <span className="font-medium text-gray-900">
                  Elevate your home or workspace with our bespoke designs and let us create the ambiance you've always dreamed of.
                </span>
              </motion.p>
              <div className="mt-12">
                <Button href={'/contact'} title={'Contact Us'} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Teams Section */}
        <motion.div
          className="container py-16"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        >
          <Teams />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
