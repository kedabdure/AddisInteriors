"use client";

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Box, IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// Images
import image3601 from "../public/image3601.jpeg";
import image3602 from "../public/image3602.jpeg";
// List of images
const images = [image3601, image3602];

const ThreeDViewer = () => {
  const imageContainerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sphereRef = useRef(null); // Ref for the sphere mesh
  const rendererRef = useRef(null); // Ref for the renderer

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Clear any existing renderer
      if (rendererRef.current) {
        imageContainerRef.current.removeChild(rendererRef.current.domElement);
      }

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, imageContainerRef.current.clientWidth / imageContainerRef.current.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(imageContainerRef.current.clientWidth, imageContainerRef.current.clientHeight);
      rendererRef.current = renderer;
      imageContainerRef.current.appendChild(renderer.domElement);

      // Sphere geometry
      const geometry = new THREE.SphereGeometry(500, 60, 40);
      geometry.scale(-1, 1, 1); // Invert the geometry on the x-axis

      // Texture loader
      const textureLoader = new THREE.TextureLoader();
      const material = new THREE.MeshBasicMaterial({ map: textureLoader.load(images[currentImageIndex].src) });

      // Mesh
      const sphere = new THREE.Mesh(geometry, material);
      sphereRef.current = sphere; // Store the sphere mesh in the ref
      scene.add(sphere);

      // Camera position
      camera.position.set(0, 0, 0.1);

      // Orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false; // Disable default zoom to implement custom zoom behavior
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
        camera.aspect = imageContainerRef.current.clientWidth / imageContainerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(imageContainerRef.current.clientWidth, imageContainerRef.current.clientHeight);
      };
      window.addEventListener('resize', onWindowResize, false);

      // Custom zoom handling
      const handleZoom = (event) => {
        if (event.ctrlKey) {
          event.preventDefault(); // Prevent default scroll behavior
          camera.fov += event.deltaY * 0.05; // Zoom in/out
          camera.fov = THREE.MathUtils.clamp(camera.fov, 10, 75); // Clamp zoom level
          camera.updateProjectionMatrix();
        }
      };
      window.addEventListener('wheel', handleZoom, { passive: false });

      // Cleanup on component unmount
      return () => {
        window.removeEventListener('resize', onWindowResize);
        window.removeEventListener('wheel', handleZoom);
        controls.dispose();
        renderer.dispose();
      };
    }
  }, [currentImageIndex]); // Re-run useEffect when the current image index changes

  // Update texture on image change
  useEffect(() => {
    if (sphereRef.current) {
      const textureLoader = new THREE.TextureLoader();
      const newTexture = textureLoader.load(images[currentImageIndex].src);
      sphereRef.current.material.map = newTexture;
      sphereRef.current.material.needsUpdate = true;
    }
  }, [currentImageIndex]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <>
      <Head>
        <title>3D Viewer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex flex-col items-center justify-center h-[75vh] w-[75vw] bg-black mx-auto my-8 relative overflow-hidden">
        <div ref={imageContainerRef} className="relative w-full h-full"></div>

        {/* Navigation arrows */}
        <Box sx={{ position: 'absolute', top: '50%', width: '100%', display: 'flex', justifyContent: 'space-between', px: 2 }}>
          <IconButton 
            onClick={handlePrevImage} 
            sx={{ 
              color: 'white', 
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, 
              position: 'absolute', 
              left: 10, 
              transform: 'translateY(-50%)' 
            }}>
            <ArrowLeftIcon />
          </IconButton>
          <IconButton 
            onClick={handleNextImage} 
            sx={{ 
              color: 'white', 
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, 
              position: 'absolute', 
              right: 10, 
              transform: 'translateY(-50%)' 
            }}>
            <ArrowRightIcon />
          </IconButton>
        </Box>
      </div>
    </>
  );
};

export default ThreeDViewer;
