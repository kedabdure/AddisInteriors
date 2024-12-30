"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Sphere, OrbitControls, useTexture } from "@react-three/drei";
import Loading from "../Loading";
import { FaVrCardboard } from "react-icons/fa";
import Image from "next/image";

// Assets
const expand = "/icons/expand.svg";
const shrink = "/icons/shrink.svg";
const right = "/icons/right.svg";
const left = "/icons/left.svg";
const panoImage = "/360/panoramic2.jpeg";
const panoImage2 = "/360/panoramic1.jpg";

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
      className='c-space'
    >
      <div className="w-full text-center md:text-center mb-16">
        <div className="flex flex-col md:flex-col justify-left items-center gap-3 mb-4">
          <FaVrCardboard className="text-6xl text-black" />
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800">
            Explore Our Projects in 360° VR
          </h1>
        </div>
        <h2 className="text-md md:text-lg font-medium text-gray-700">
          Immerse yourself in stunning panoramic VR views of our completed works.
        </h2>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${isExpanded
          ? "fixed inset-0 z-50 w-screen h-screen"
          : "relative mx-auto w-full h-[600px] md:h-screen"
          } flex items-center justify-center`}
      >
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />

          <OrbitControls
            ref={orbitControlsRef}
            enableZoom
            zoomSpeed={0.8}
            minDistance={1}
            maxDistance={2}
            enablePan={true}
            autoRotate={isAutoRotate}
            autoRotateSpeed={0.5}
            enableDamping
            dampingFactor={0.06}
          />

          <Suspense fallback={<Loading />}>
            <PanoramaSphere panoramicImage={panoImages[currentImageIndex]} />
          </Suspense>
        </Canvas>

        {/* Expand/Collapse Button */}
        <div className="absolute top-[3%] right-[3%] z-10">
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="bg-black bg-opacity-20 p-3 rounded-full hover:bg-opacity-80 transition"
          >
            {isExpanded ? (
              <Image src={shrink} alt="shrink" width={20} height={20} />
            ) : (
              <Image src={expand} alt="expand" width={20} height={20} />
            )}
          </button>
        </div>

        {/* Left and Right Arrows */}
        <div className="absolute top-[49%] left-[3%] z-10">
          <button
            onClick={handlePrev}
            className=" w-12 h-12 flex items-center justify-center bg-black bg-opacity-20 rounded-full hover:bg-opacity-80 transition"
          >
            <Image src={left} alt="previous" width={28} height={28} />
          </button>
        </div>
        <div className="absolute top-[49%] right-[3%] z-10">
          <button
            onClick={handlePrev}
            className=" w-12 h-12 flex items-center justify-center bg-black bg-opacity-20 rounded-full hover:bg-opacity-80 transition"
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
    <Sphere args={[15, 60, 40]} scale={[-1, 1, 1]}>
      <meshBasicMaterial map={texture} side={2} />
    </Sphere>
  );
}
