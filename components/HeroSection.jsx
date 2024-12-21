"use client";

import Link from "next/link";
import { TbArrowUpRight } from 'react-icons/tb';
import { usePathname } from "next/navigation";
import { Suspense } from 'react';
import { useMediaQuery } from "react-responsive";

import { Canvas } from '@react-three/fiber';
import { Center, PerspectiveCamera, OrbitControls } from '@react-three/drei';

import SofaModel from './SofaModel';
import LampModel from './LampModel';
import PalmPlantModel from './PalmPlantModel';
import CarpetModel from './CarpetModel';
import Loading from './Loading';

import { calculateSizes } from "@/constants";


const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export default function HeroSection() {
  const pathname = usePathname();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between h-screen px-5 lg:px-20">
      <div className='absolute inset-0 z-[-1]'>
        <img src="/hero2.jpeg" alt="hero image" className='w-full h-full object-cover brightness-75' />
      </div>

      {/* Left Content: Navigation + Hero Text */}
      <div className="w-full h-full flex flex-col lg:w-1/2 text-center lg:text-left mt-28 lg:mt-0">
        <nav className="hidden justify-center lg:justify-start gap-6 mb-20 mt-10 md:flex">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative pr-2 py-1 text-[16px] transition-colors duration-300 hover:text-white ${pathname === href ? "font-semibold text-white" : "text-gray-400"
                }`}
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Hero Text */}
        <div className="">
          <p className="text-gray-200 tracking-widest font-thin text-sm md:text-lg mb-2 lg:mb-6">ADDISINTERIOR</p>
          <h1 className="text-gray-100 text-3xl font-semibold mb-4 lg:mb-6 lg:text-5xl" style={{ lineHeight: "1.2" }}>
            Interior Design Expert In Ethiopia
          </h1>
          <p className="text-gray-300 mb-4 lg:mb-12 text-sm lg:text-1xl">
            Discover exceptional interior design.
            Transform your home with our stylish and functional solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-2 md:gap-4 md:flex-row justify-center lg:justify-start mt-0 md:mt-24">
            <Link
              href="/contact"
              className="inline-flex mx-auto sm:mx-0 max-w-[170px] items-center px-6 py-2.5 md:px-6 md:py-3 font-medium bg-white text-black border border-transparent rounded-full shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Contact Us
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex mx-auto sm:mx-0 max-w-[170px] items-center px-6 py-2 md:px-6 md:py-3 font-medium text-white border border-white rounded-full shadow-md transition-transform duration-300 ease-in-out hover:bg-gray-950 hover:text-white hover:scale-105"
            >
              Our Works
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Content: 3D Model */}
      <div className="w-full lg:w-[700px] h-[600px] lg:h-full flex items-center justify-center">
        <Canvas className="w-full h-full">
          <ambientLight intensity={1} />
          <directionalLight intensity={4} position={[-10, 10, 5]} />
          <PerspectiveCamera makeDefault position={[0, 5, 23]} />

          {/* OrbitControls attached to the camera */}
          <Suspense fallback={<Loading />}>
            <group>
              {/* <OrbitControls /> */}
              <SofaModel
                position={sizes.sofaPosition}
                rotation={sizes.sofaRotation}
                scale={sizes.sofaScale}
              />
            </group>
            <group>
              <LampModel
                position={[-2, 3.2, -4]}
                rotation={[0, 0, 0]}
                scale={5}
                autoRotate
              />
              <PalmPlantModel
                position={[5.5, -2.5, 7]}
                rotation={[0, 1, 0]}
                scale={4}
              />
              <CarpetModel
                position={[.05, -7, -5]}
                rotation={[-0.2, -0.5, -0.01]}
                scale={11}
              />
            </group>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
