"use client";

import Link from "next/link";
import { TbArrowUpRight } from 'react-icons/tb';
import { usePathname } from "next/navigation";
import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { Center, PerspectiveCamera, OrbitControls } from '@react-three/drei';

import SofaModel from './SofaModel';
import LampModel from './LampModel';
import PalmPlantModel from './PalmPlantModel';
import CarpetModel from './CarpetModel';

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export default function HeroSection() {
  const pathname = usePathname();

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between h-screen px-5 lg:px-20">
      <div className='absolute inset-0 z-[-1]'>
        <img src="/home.jpg" alt="hero image" className='w-full h-full object-cover brightness-75' />
      </div>

      {/* Left Content: Navigation + Hero Text */}
      <div className="w-full h-full flex flex-col lg:w-1/2 text-center lg:text-left">
        <nav className="flex justify-center lg:justify-start gap-6 mb-20 mt-10">
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
          <p className="text-gray-200 tracking-widest font-thin mb-4 lg:mb-6">ADDISINTERIOR</p>
          <h1 className="text-gray-100 text-3xl font-semibold leading-tight mb-4 lg:mb-6 lg:text-5xl">
            INTERIOR DESIGN EXPERTS
          </h1>
          <p className="text-gray-300 mb-8 lg:mb-12 text-sm lg:text-1xl">
            Discover exceptional interior design. <br />
            Transform your home with our stylish and functional solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 md:flex-row justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex max-w-[170px] items-center px-6 py-2.5 md:px-6 md:py-3 font-medium bg-white text-black border border-transparent rounded-full shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Contact Us
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex max-w-[170px] items-center px-6 py-2 md:px-6 md:py-3 font-medium text-white border border-white rounded-full shadow-md transition-transform duration-300 ease-in-out hover:bg-gray-950 hover:text-white hover:scale-105"
            >
              Our Works
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Content: 3D Model */}
      <div className="w-full lg:w-[700px] h-[400px] lg:h-full flex items-center justify-center">
        <Canvas className="w-full h-full">
          <ambientLight intensity={1} />
          <directionalLight intensity={4} position={[-10, 10, 5]} />
          <PerspectiveCamera makeDefault position={[0, 5, 23]} />

          {/* OrbitControls attached to the camera */}
          <Suspense fallback={<p>Loading...</p>}>
            <Center>
              <group>
                {/* <OrbitControls /> */}
                <SofaModel
                  position={[-1.5, -2.2, .5]}
                  rotation={[-0.17, -0.7, -.02]}
                  scale={5}
                />
              </group>
            </Center>
          </Suspense>

          <group>
            <LampModel
              position={[-5, 2.5, -4]}
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
              position={[0, -7, -4]}
              rotation={[-0.2, -0.65, -0.01]}
              scale={15}
            />
          </group>
        </Canvas>
      </div>
    </div>
  );
}
