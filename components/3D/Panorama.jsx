"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Sphere, OrbitControls, useTexture } from "@react-three/drei";
import Loading from "../Loading";
import Image from "next/image";

// Assets
const expand = '/icons/expand.svg';
const shrink = '/icons/shrink.svg';
const right = '/icons/right.svg';
const left = '/icons/left.svg';
const panoImage = '/360/panoramic2.jpeg';
const panoImage2 = '/360/panoramic1.jpg';

const panoImages = [panoImage, panoImage2];

export default function Panorama() {
  const containerRef = useRef(null);
  const orbitControlsRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % panoImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + panoImages.length) % panoImages.length);
  };

  useEffect(() => {
    const handleClick = () => {
      if (orbitControlsRef.current) {
        setIsAutoRotate(false);
      }
      setTimeout(() => {
        if (orbitControlsRef.current) {
          setIsAutoRotate(true);
        }
      }, 5000);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("click", handleClick);
    }

    return () => {
      if (container) {
        container.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${isExpanded
        ? "fixed top-0 left-0 w-full h-full"
        : "flex flex-col lg:flex-row items-center justify-between h-screen px-5 sm:px-14 md:px-32 lg:px-14"
        }`}
    >
      <div
        className={`relative ${isExpanded ? "w-full h-full" : "mx-auto w-full lg:w-[90%] h-[600px] md:h-[300px] lg:h-full"
          } flex items-center justify-center`}
      >
        <div className="flex flex-col items-center my-4 text-center">
          <p className="text-lg font-semibold">
            Discover the art of creating spaces that inspire.
          </p>
          <p className="text-gray-600 mt-2">
            At Addis Interiors, we bring your dream spaces to life with precision and style.
          </p>
        </div>

        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault fov={75} position={[0, -1, 5]} />

          <OrbitControls
            ref={orbitControlsRef}
            enableZoom
            zoomSpeed={0.8}
            minDistance={1}
            maxDistance={3}
            enablePan={true}
            autoRotate={isAutoRotate}
            autoRotateSpeed={0.5}
            enableDamping
            dampingFactor={0.06}
          />

          {/* 360° Sphere with Panoramic Image */}
          <Suspense fallback={<Loading />}>
            <PanoramaSphere panoramicImage={panoImages[currentImageIndex]} />
          </Suspense>
        </Canvas>

        <div className="absolute top-[4%] right-[3%]">
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="bg-black bg-opacity-20 p-2 rounded-full"
          >
            {isExpanded ? (
              <Image src={shrink} alt="shrink" width={20} height={20} />
            ) : (
              <Image src={expand} alt="expand" width={20} height={20} />
            )}
          </button>
        </div>

        {/* Left and Right Arrows */}
        <div className="w-full absolute top-[50%] left-0 flex items-center justify-between z-40 px-3">
          <button
            onClick={handlePrev}
            className={` p-2 rounded-full sm:p-1 md:p-2
              ${currentImageIndex !== 0 ? "bg-black bg-opacity-20" : "bg-gray-300 bg-opacity-50"}
            `}
          >
            <Image src={left} alt="previous" width={28} height={28} />
          </button>
          <button
            onClick={handleNext}
            className={` p-2 rounded-full sm:p-1 md:p-2
              ${currentImageIndex !== panoImages.length - 1 ? "bg-black bg-opacity-20" : "bg-gray-300 bg-opacity-50"}
            `}
          >
            <Image src={right} alt="next" width={28} height={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

function PanoramaSphere({ panoramicImage }) {
  const texture = useTexture(panoramicImage);

  if (!texture) {
    console.error("Texture not loaded");
    return null;
  }

  return (
    <Sphere args={[10, 60, 40]} scale={[-1, 1, 1]}>
      <meshBasicMaterial map={texture} side={2} />
    </Sphere>
  );
}
