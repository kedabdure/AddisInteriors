"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Sphere, OrbitControls, useTexture } from "@react-three/drei";
import Loading from "../Loading";
import Image from "next/image";

// Assets
const expand = '/icons/expand.svg';
const shrink = '/icons/shrink.svg';
const panoImage = '/360/panoramic2.jpeg';

export default function Panorama() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between h-screen px-5 sm:px-14 md:px-32 lg:px-14">
      <div className="relative w-full h-[600px] md:h-[300px] lg:h-full flex items-center justify-center">
        <Canvas className="w-full h-full">
          <ambientLight intensity={1} />
          <directionalLight intensity={1.5} position={[0, 0, 5]} />


          <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />

          <OrbitControls
            enableZoom
            zoomSpeed={0.8}
            minDistance={1}
            maxDistance={5}
            enablePan={true}
            autoRotate
            autoRotateSpeed={0.5}
            enableDamping
            dampingFactor={0.07}
          />

          {/* 360° Sphere with Panoramic Image */}
          <Suspense fallback={<Loading />}>
            <PanoramaSphere panoramicImage={panoImage} />
          </Suspense>
        </Canvas>

        <div className="absolute top-[4%] right-[3%]">
          <button
            onClick={() => setIsExpanded(prev => !prev)}
            className="bg-black bg-opacity-20 p-2 rounded-full"
          >
            {isExpanded ? (
              <Image src={shrink} alt="shrink" width={24} height={24} />
            ) : (
              <Image src={expand} alt="expand" width={24} height={24} />
            )}
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
    // Sphere with adjusted size for realistic projection
    <Sphere args={[10, 60, 40]} scale={[-1, 1, 1]}>
      <meshBasicMaterial map={texture} side={2} /> {/* Ensure inside visibility */}
    </Sphere>
  );
}