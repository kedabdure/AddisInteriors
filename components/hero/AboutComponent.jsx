import Image from "next/image";
import Button from "../Button"

export default function AboutComponent() {
  return (
    <div className="container py-16">
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-16">
        <div className="relative w-full md:w-1/2 h-auto">
          <Image
            src="/image/gallery1123.jpg"
            alt="Gallery image"
            blurDataURL="/image/gallery1123.jpg"
            className="object-cover"
            fill
            placeholder="blur"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="">
            <p className="text-3xl font-semibold text-gray-800 lg:text-[2.5rem]" style={{ lineHeight: '3rem' }}>Designing Your Dream With Brilliance</p>
          </div>

          <div className="my-8 flex flex-col gap-4 justify-start text-left md:items-start">
            <p className="px-12 pb-4 md:px-0">
              Elevate your spaces with Addis Interiors interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience.
            </p>
            <div className="flex px-12 gap-x-4 md:px-0">
              <Image src="/image/awards.png" width={100} height={80} alt="Award 1" className="h-[100px]" />
              <Image src="/image/awards1.png" width={100} height={80} alt="Award 2" className="h-[100px]" />
            </div>
          </div>

          <Button href={'/contact'} title={'Contact Us'} />
        </div>
      </div>
    </div>
  );
}