"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'


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
    <div className="c-space">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-5">
          <div className="max-w-[500px]">
            <div className="flex justify-left sm:justify-normal gap-4 items-center mb-8 md:mb-10">
              <div className="w-12 md:w-16 lg:w-20 h-[3px] bg-black"></div>
              <h1 className="title-text">Our Products</h1>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl lg:text-2xl font-semibold tracking-normal text-gray-700">
                Luxury Decor to Create Comfort in Your Home
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our distinctive and unique designs are inspired by the latest trends in interior design and fashion.
              </p>
            </div>
          </div>
          <div className="max-w-[200px]">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 md:px-7 md:py-3 text-md font-medium bg-black text-white border border-transparent rounded-sm shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Contact Us
              <TbArrowUpRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
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
    </div>
  )
}