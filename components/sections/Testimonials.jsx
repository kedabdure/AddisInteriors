"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { clientReviews } from "@/constants";

const Testimonials = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  return (
    <section className="c-space" id="testimonials">
      <div className="relative flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-5 md:w-1/2 relative">
          <div className="relative w-full h-64 md:h-80 lg:h-[470px] overflow-hidden">
            <Image
              src="/image/gallery1.jpg"
              alt="Gallery Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Slider Controls */}
          <div className="flex items-center gap-5 mt-4">
            <button
              className="arrow-btn px-3 py-2 text-xl bg-gray-200 hover:bg-gray-300 transition"
              onClick={handlePrev}
            >
              ←
            </button>
            <button
              className="arrow-btn px-3 py-2 text-xl bg-gray-200 hover:bg-gray-300 transition"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative md:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl leading-loose font-bold text-gray-800 mb-6">
            What Our Customers Say About Us
          </h1>
        </div>

        {/* Overlapping Slider */}
        <div className="absolute bottom-0 right-0 z-10">
          <div className="relative max-w-[1024px] px-6 pt-6 bg-white">
            <Swiper
              ref={swiperRef}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              modules={[Autoplay]}
              spaceBetween={20}
              speed={1000}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              className="client-container"
            >
              {clientReviews.map((item) => (
                <SwiperSlide key={`review-${item.id}`}>
                  <div className="bg-gray-800 text-white w-[480px] h-[350px] px-8 py-12">
                    <div className="w-8 h-8 mb-8">
                      <Image
                        src="/icons/quote.svg"
                        alt="Quote Icon"
                        width={32}
                        height={32}
                      />
                    </div>
                    <p className="text-sm sm:text-base font-light leading-relaxed">
                      {item.review}
                    </p>
                    <div className="flex items-center gap-3 mt-8">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
