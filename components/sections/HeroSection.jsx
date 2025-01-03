"use client";

import Link from "next/link";
import { TbArrowUpRight } from 'react-icons/tb';
import { Suspense } from 'react';
import { useMediaQuery } from "react-responsive";
import { motion } from 'framer-motion';
import { motionImageProps, motionTextProps, motionBoxProps } from "@/lib/motionLib";

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

import SofaModel from '../3D/SofaModel';
import LampModel from '../3D/LampModel';
import PalmPlantModel from '../3D/PalmPlantModel';
import CarpetModel from '../3D/CarpetModel';
import Loading from '../Loading';
import SofaCamera from "../3D/SofaCamera";

import { calculateSizes } from "@/constants";

export default function HeroSection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <motion.div className="relative flex flex-col lg:flex-row items-center justify-between h-screen px-5 sm:px-14 md:px-32 lg:px-14">
      <div className='absolute inset-0 z-[-1]'>
        <img src="/hero2.jpeg" alt="hero image" className='w-full h-full object-cover brightness-75' />
      </div>

      {/* Left Content: Navigation + Hero Text */}
      <div className="w-full h-full flex flex-col sm lg:w-1/2 text-center justify-center lg:text-left mt-28 lg:mt-0">
        <div className="w-full h-full flex flex-col gap-12 lg:gap-4 justify-center">
          {/* Separate animations for text elements */}
          <motion.div>
            <motion.p
              className="text-gray-200 tracking-widest font-thin text-sm md:text-lg mb-6 lg:mb-6"
              {...motionTextProps}
            >
              ADDISINTERIOR
            </motion.p>
            <motion.h1
              className="text-gray-100 text-3xl md:text-4xl lg:text-5xl max-w-[90%] mx-auto sm:mx-0 font-semibold mb-4 lg:mb-6"
              style={{ lineHeight: "1.4" }}
              {...motionTextProps}
            >
              Interior Design Expert In Ethiopia
            </motion.h1>
            <motion.p
              className="text-gray-300 max-w-[80%] mx-auto lg:mx-0 mb-5 lg:mb-12 text-xs lg:text-1xl"
              {...motionTextProps}
            >
              Discover exceptional interior design.
              Transform your home with our stylish and functional solutions.
            </motion.p>
          </motion.div>

          {/* Separate animations for buttons */}
          <motion.div
            className="flex flex-col gap-4 md:gap-4 md:flex-row justify-center lg:justify-start"
            {...motionBoxProps}
          >
            <motion.div
              {...motionBoxProps}
            >
              <Link
                href="/contact"
                className="inline-flex mx-auto md:mx-0 max-w-[170px] items-center px-5 py-2 md:px-6 md:py-3 text-sm font-medium bg-white text-black border border-transparent rounded-sm shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
              >
                Contact Us
                <TbArrowUpRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              {...motionBoxProps}
            >
              <Link
                href="/projects"
                className="inline-flex mx-auto md:mx-0 max-w-[170px] items-center px-5 py-2 md:px-6 md:py-3 text-sm font-medium text-white border border-white rounded-sm shadow-md transition-transform duration-300 ease-in-out hover:bg-gray-950 hover:text-white hover:scale-105"
              >
                Our Works
                <TbArrowUpRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* Right Content: 3D Model */}
      <div
        className="w-full lg:w-[550px] xl:w-[670px] h-[600px] md:h-[300px] lg:h-full flex items-center justify-center"
      >
        <Canvas className="w-full h-full">
          <ambientLight intensity={1} />
          <directionalLight intensity={4} position={[-10, 10, 5]} />
          <PerspectiveCamera makeDefault position={[0, 5, 23]} />
          <Suspense fallback={<Loading />}>
            <SofaCamera>
              <SofaModel
                position={sizes.sofaPosition}
                rotation={sizes.sofaRotation}
                scale={sizes.sofaScale}
                isMobile={isMobile}
              />
            </SofaCamera>

            <group>
              <LampModel
                position={sizes.lampPosition}
                rotation={[0, 0, 0]}
                scale={sizes.lampScale}
                autoRotate
              />
              <SofaCamera>
                <PalmPlantModel
                  position={sizes.plantPosition}
                  rotation={sizes.plantRotation}
                  scale={sizes.plantScale}
                />
              </SofaCamera>
              <CarpetModel
                position={sizes.carpetPosition}
                rotation={sizes.carpetRotation}
                scale={sizes.carpetScale}
              />
            </group>
          </Suspense>
        </Canvas>
      </div>
    </motion.div>
  );
}
