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
    <section className="c-space min-h-screen" id="testimonials">
      <div className="relative flex flex-col md:flex-row gap-8">
        <div className="hidden lg:flex flex-col gap-5 md:w-1/2">
          <div className="relative hidden lg:flex lg:w-[400px] xl:w-[500px] lg:h-[460px] overflow-hidden">
            <Image
              src="/image/gallery1.jpg"
              alt="Gallery Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Slider Controls */}
          <div className="hidden lg:flex items-center lg:gap-2 xl:gap-5 mt-4">
            <button
              className="arrow-btn lg:px-2 xl:px-3 lg:py-1 xl:py-2 text-xl bg-gray-200 hover:bg-gray-300 transition"
              onClick={handlePrev}
            >
              ←
            </button>
            <button
              className="arrow-btn lg:px-2 xl:px-3 lg:py-1 xl:py-2 text-xl bg-gray-200 hover:bg-gray-300 transition"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full">
          <div className="relative w-full mb-8 md:mb-12">
            <h1 className="w-[90%] mx-auto lg:mx-0 lg:w-[90%] text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center lg:text-left lg:leading-loose font-bold text-gray-800">
              What Our Customers Say About Us
            </h1>
          </div>

          {/* Overlapping Slider */}
          <div className="lg:absolute mx-auto lg:bottom-0 lg:right-0 z-10">
            <div className="relative w-full mx-auto lg:w-[800px] xl:w-[1050px] lg:pl-6 lg:pt-6 bg-white">
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
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
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
                    <div className="bg-gray-800 text-white w-full mx-auto flex flex-col justify-between max-w-[480px] h-[350px] px-6 md:px-8 py-8 lg:py-12">
                      <div className="w-8 h-8">
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
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12">
                          <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="rounded-full object-contain"
                          />
                        </div>
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
              {/* Slider Controls */}
              <div className="flex lg:hidden mx-auto items-center justify-center gap-5 mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
