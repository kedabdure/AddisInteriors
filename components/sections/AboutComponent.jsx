"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../Button";
import { motionImageProps, motionTextProps, motionBoxProps } from "@/lib/motionLib";

export default function AboutComponent() {

  return (
    <div className="c-space">
      <motion.div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-16">
        <motion.div {...motionImageProps} className="relative w-full md:w-1/2 h-[400px] md:h-auto">
          <Image
            src="/image/gallery1123.jpg"
            alt="Gallery image"
            blurDataURL="/image/gallery1123.jpg"
            className="object-cover"
            fill
            placeholder="blur"
          />
        </motion.div>

        <div className="w-full md:w-1/2 flex flex-col gap-0">
          <motion.div {...motionTextProps} className="">
            <h2
              className="text-2xl text-center md:text-left font-semibold text-gray-800 lg:text-[2.5rem] leading-[2rem] md:leading-[3rem]"
            >
              Designing Your Dream With Brilliance
            </h2>
          </motion.div>

          <div className="my-8 flex flex-col gap-4 justify-start text-left md:items-start">
            <motion.p {...motionTextProps} className="pb-4 text-center md:text-left">
              Elevate your spaces with Addis Interiors interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience.
            </motion.p>
            <motion.div {...motionTextProps} className="flex px-12 gap-x-4 md:px-0">
              <Image src="/image/awards.png" width={100} height={80} alt="Award 1" className="h-[100px]" />
              <Image src="/image/awards1.png" width={100} height={80} alt="Award 2" className="h-[100px]" />
            </motion.div>
          </div>

          <motion.div {...motionBoxProps} className="mx-auto md:mx-0 mt-8">
            <Button href={'/contact'} title={'Contact Us'} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}