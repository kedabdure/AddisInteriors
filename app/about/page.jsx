"use client"

import Image from 'next/image';
import Button from '@/components/Button';
import Teams from '@/components/sections/Teams';
import { motion } from 'framer-motion';
import { motionTextProps, motionImageProps, motionBoxProps } from '@/lib/motionLib';

export default function About() {
  return (
    <motion.div
      className="bg-gray-100 text-gray-900"
    >
      {/* Hero Section */}
      <div className="relative bg-[url('/image/about.jpg')] bg-center bg-cover flex items-center justify-center h-[65vh] mt-16">
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          className="relative text-4xl font-extrabold tracking-wide text-white md:text-5xl"
          {...motionTextProps}
        >
          About Us
        </motion.h1>
      </div>

      {/* About Section */}
      <motion.div
        className="container py-12 lg:py-20"
        {...motionBoxProps}
      >
        <div className="text-center space-y-6 lg:space-y-8">
          <motion.h2
            className="text-2xl md:text-4xl font-extrabold tracking-wide text-gray-900 lg:text-4xl"
            {...motionTextProps}
          >
            Crafting Timeless Interior Designs with Purpose
          </motion.h2>
          <motion.p
            className="mt-4 text-md leading-relaxed text-gray-700 lg:text-xl lg:w-2/3 mx-auto"
            {...motionTextProps}
          >
            At Addis Interior Design, we transform spaces into timeless works of art. Whether it’s your home, office, or commercial property, our expert team blends functionality with creativity to craft interiors that inspire and captivate. Experience bespoke designs tailored to your unique needs.
          </motion.p>
        </div>

        <div className="w-full h-full flex flex-col mt-8 lg:flex-row items-center justify-between gap-8 lg:gap-12 lg:mt-16">
          {/* Image Section */}
          <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg w-full lg:w-1/2"
            {...motionImageProps}
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
          <motion.div className="flex flex-col justify-center w-full lg:w-1/2">
            <motion.h3
              className="text-2xl font-bold text-gray-900 lg:text-4xl"
              {...motionTextProps}
            >
              Transforming Spaces with Elegance
            </motion.h3>
            <motion.p
              className="mt-3 text-xl font-medium text-gray-600 lg:text-2xl"
              {...motionTextProps}
            >
              Designing Interiors That Inspire
            </motion.p>
            <motion.p
              className="mt-8 text-lg leading-relaxed text-gray-800"
              {...motionTextProps}
            >
              Addis Interior Design Company specializes in crafting sophisticated and functional spaces that reflect your personality and needs. With a team of experienced designers, we turn your vision into reality using innovative ideas and meticulous attention to detail.
              <br />
              <br />
              <span className="font-medium text-gray-900">
                Elevate your home or workspace with our bespoke designs and let us create the ambiance you've always dreamed of.
              </span>
            </motion.p>
            <motion.div {...motionBoxProps} className="mt-12">
              <Button href={'/contact'} title={'Contact Us'} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Teams Section */}
      <motion.div
        className="container py-16"
        {...motionBoxProps}
      >
        <Teams />
      </motion.div>
    </motion.div>
  );
}
