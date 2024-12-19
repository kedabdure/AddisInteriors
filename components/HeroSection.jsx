"use client";

import Image from 'next/image';
import Link from "next/link";
import { TbArrowUpRight } from 'react-icons/tb';
import { usePathname } from "next/navigation";
import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { Center, PerspectiveCamera, OrbitControls } from '@react-three/drei';

import SofaModel from './SofaModel';
import VentilatorModel from './VentilatorModel';
import LampModel from './LampModel';
import FlowerModel from './FlowerModel';

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export default function HeroSection() {
  const pathname = usePathname();

  return (
    <div className=" flex flex-col lg:flex-row items-center justify-between h-screen py-10 px-5 lg:px-20 bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Left Content: Navigation + Hero Text */}
      <div className="relative w-full h-full flex flex-col lg:w-1/2 text-center lg:text-left">
        {/* Navigation */}
        <nav className="flex justify-center lg:justify-start gap-6 mb-20">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-2 py-1 text-[16px] transition-colors duration-300 hover:text-white ${pathname === href ? "font-semibold text-white" : "text-gray-400"
                }`}
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Hero Text */}
        <div className="text-white">
          <p className="text-gray-500 tracking-widest mb-4 lg:mb-6">MSOSO</p>
          <h1 className="text-4xl font-bold leading-tight mb-4 lg:mb-6 lg:text-5xl">
            INTERIOR DESIGN EXPERTS
          </h1>
          <p className="text-gray-400 mb-8 lg:mb-12 text-lg lg:text-xl">
            Discover exceptional interior design. <br />
            Transform your home with our stylish and functional solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 md:flex-row justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 font-medium bg-gradient-to-r from-teal-500 to-blue-600 text-white border border-transparent rounded-full shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Order Now
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 font-medium text-teal-500 border border-teal-500 rounded-full shadow-md transition-transform duration-300 ease-in-out hover:bg-teal-500 hover:text-white hover:scale-105"
            >
              Projects
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Content: 3D Model */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-full flex items-center justify-center">
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.5} />
          <directionalLight intensity={7} position={[10, 10, 10]} />
          <directionalLight intensity={1} position={[-4, 1, -2]} />

          {/* OrbitControls attached to the camera */}
          <Suspense fallback={<p>Loading...</p>}>
            <PerspectiveCamera makeDefault position={[0, 3, 25]} />
            <Center>
              <group>
                {/* <OrbitControls /> */}
                <SofaModel
                  position={[0, -7, 0]}
                  rotation={[0, -0.7, -0.1]}
                  scale={7}
                />
              </group>
            </Center>
          </Suspense>

          {/* VentilatorModel remains static and unaffected by OrbitControls */}
          <group>
            {/* <VentilatorModel
              position={[0, 8, 0]}
              rotation={[-0.1, 0, 0]}
              scale={.07}
            /> */}

            <LampModel
              position={[-4, 1, -2]}
              rotation={[0, 0, 0]}
              scale={5}
              z={10000}
              autoRotate
            />

            <FlowerModel
              position={[5, -4.5, 8]}
              rotation={[0, 0, 0]}
              scale={3}
            />
          </group>
        </Canvas>
      </div>
    </div>
  );
}
