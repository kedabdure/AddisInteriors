"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import image3601 from "../../public/image3601.jpeg";

const ThreeDViewer = () => {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      imageContainerRef.current.appendChild(renderer.domElement);

      // Sphere geometry
      const geometry = new THREE.SphereGeometry(500, 60, 40);
      geometry.scale(-1, 1, 1); // Invert the geometry on the x-axis

      // Texture loader
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(image3601.src); // Use the .src property

      const material = new THREE.MeshBasicMaterial({ map: texture });

      // Mesh
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      // Camera position
      camera.position.set(0, 0, 0.1);

      // Orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = true;
      controls.enablePan = true;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // Handle window resize
      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', onWindowResize, false);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener('resize', onWindowResize);
        controls.dispose();
        renderer.dispose();
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>3D Viewer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Container for the 3D viewer */}
      <div className="flex items-center justify-center h-[75vh] w-[75vw] bg-black mx-auto my-8">
        <div ref={imageContainerRef} className="relative w-full h-full"></div>
      </div>
    </>
  );
};

export default ThreeDViewer;
