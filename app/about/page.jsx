import Image from 'next/image';
import Button from '@/components/Button';
import Teams from '@/components/hero/Teams';


export default function About() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="relative bg-[url('/image/about.jpg')] bg-center bg-cover mt-16">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative container py-32 text-4xl font-extrabold tracking-wide text-center text-white md:py-64 md:text-6xl">
          About Us
        </h1>
      </div>

      {/* About Section */}
      <div className="container py-12 lg:py-20">
        <div className="text-center space-y-6 lg:space-y-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-gray-900 lg:text-4xl">
            Crafting Timeless Interior Designs with Purpose
          </h2>
          <p className="mt-4 text-md leading-relaxed text-gray-700 lg:text-lg lg:w-2/3 mx-auto">
            At Addis Interior Design, we transform spaces into timeless works of art. Whether it’s your home, office, or commercial property, our expert team blends functionality with creativity to craft interiors that inspire and captivate. Experience bespoke designs tailored to your unique needs.
          </p>
        </div>


        <div className="w-full h-full flex flex-col mt-8 lg:flex-row items-center justify-between gap-8 lg:gap-12 lg:mt-16">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-xl shadow-lg w-full lg:w-1/2">
            <Image
              src="/image/gallery1123.jpg"
              width={700}
              height={700}
              alt="Addis Interior Design"
              className="transition-transform duration-300 transform hover:scale-105"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900 lg:text-4xl">
              Transforming Spaces with Elegance
            </h2>
            <p className="mt-3 text-xl font-medium text-gray-600 lg:text-2xl">
              Designing Interiors That Inspire
            </p>
            <p className="mt-8 text-base leading-relaxed text-gray-800">
              Addis Interior Design Company specializes in crafting sophisticated and functional spaces that reflect your personality and needs. With a team of experienced designers, we turn your vision into reality using innovative ideas and meticulous attention to detail.
              <br />
              <br />
              <span className="font-medium text-gray-900">
                Elevate your home or workspace with our bespoke designs and let us create the ambiance you've always dreamed of.
              </span>
            </p>
            <div className="mt-12">
              <Button href={'/contact'} title={'Contact Us'} />
            </div>
          </div>
        </div>
      </div>
      <Teams />
    </div>
  );
}
