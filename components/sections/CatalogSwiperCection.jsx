"use client";
import Image from "next/image";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from "../Button";
import { motion } from "framer-motion";
import { motionImageProps, motionTextProps, motionBoxProps } from "@/lib/motionLib";


export default function CatalogSwiperSection() {
  const settings = {
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    autoplay: { delay: 5000, disableOnInteraction: false },
    modules: [Autoplay],
  }

  return (
    <motion.div {...motionBoxProps} className="c-space">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="w-full md:max-w-[500px]">
          <motion.div {...motionBoxProps} className="flex justify-left sm:justify-normal gap-4 items-center mb-6 md:mb-10">
            <div className="w-14 md:w-16 lg:w-18 h-[3px] bg-black"></div>
            <h1 className="title-text">Our Products</h1>
          </motion.div>
          <div className="flex flex-col gap-3 text-center md:text-left">
            <motion.h2 {...motionTextProps} className="text-xl md:text-left lg:text-2xl font-semibold tracking-normal text-gray-700">
              Luxury Decor to Create Comfort in Your Home
            </motion.h2>
            <motion.p {...motionTextProps} className="text-gray-700 leading-relaxed">
              Our distinctive and unique designs are inspired by the latest trends in interior design and fashion.
            </motion.p>
          </div>
        </div>

        <motion.div
          {...motionBoxProps}
        >
          <Button href={'/gallery'} title={'Gallery'} />
        </motion.div>
      </div>

      <div className="w-full mt-10">
        <Swiper {...settings}>
          <SwiperSlide>
            <Image src="/image/swiper1.jpg" alt="LOGO" width={520} height={220} className="w-full md:w-[90%]" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/image/swiper2.jpg" alt="LOGO" width={520} height={220} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/image/swiper3.jpg" alt="LOGO" width={520} height={220} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/image/swiper4.jpg" alt="LOGO" width={520} height={220} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/image/swiper5.jpg" alt="LOGO" width={520} height={220} className="w-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  )
}