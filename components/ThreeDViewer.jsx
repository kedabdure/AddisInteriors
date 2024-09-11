"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Image from 'next/image';

// Images
import panoramic1 from "../public/360/panoramic1.jpg";
import panoramic2 from "../public/360/panoramic2.jpeg";
import Icon360 from "../public/360/Icon360.svg";
import { fontGrid } from '@mui/material/styles/cssUtils';

// List of images
const images = [panoramic1, panoramic2];

const ThreeDViewer = () => {
  const imageContainerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sphereRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const fovRef = useRef(75); // Reference to store the current FOV value

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Clear any existing renderer
      if (rendererRef.current) {
        imageContainerRef.current.removeChild(rendererRef.current.domElement);
      }

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        imageContainerRef.current.clientWidth / imageContainerRef.current.clientHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(
        imageContainerRef.current.clientWidth,
        imageContainerRef.current.clientHeight
      );
      rendererRef.current = renderer;
      imageContainerRef.current.appendChild(renderer.domElement);

      // Sphere geometry
      const geometry = new THREE.SphereGeometry(500, 60, 40);
      geometry.scale(-1, 1, 1);

      // Texture loader
      const textureLoader = new THREE.TextureLoader();
      const material = new THREE.MeshBasicMaterial({
        map: textureLoader.load(images[currentImageIndex].src),
      });

      // Mesh
      const sphere = new THREE.Mesh(geometry, material);
      sphereRef.current = sphere;
      scene.add(sphere);

      // Camera position
      camera.position.set(0, 0, 0.1);

      // Orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);

      controls.enableZoom = true;
      controls.zoomSpeed = 0.5;
      controls.minDistance = 100;
      controls.maxDistance = 250;

      controls.enablePan = true;
      controls.autoRotate = true;

      controls.autoRotateSpeed = 1;

      controls.enableDamping = true;
      controls.dampingFactor = 0.1;

      controls.rotateSpeed = 0.3;
      controls.panSpeed = 0.4;
      controlsRef.current = controls;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Smoothly interpolate FOV changes
        camera.fov += (fovRef.current - camera.fov) * 0.1;
        camera.updateProjectionMatrix();

        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // Handle window resize
      const onWindowResize = () => {
        camera.aspect =
          imageContainerRef.current.clientWidth /
          imageContainerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          imageContainerRef.current.clientWidth,
          imageContainerRef.current.clientHeight
        );
      };
      window.addEventListener("resize", onWindowResize, false);

      // Custom zoom handling within the image container
      const handleZoom = (event) => {
        if (imageContainerRef.current.contains(event.target)) {
          event.preventDefault();

          // Smooth zoom effect
          fovRef.current += event.deltaY * 0.05;
          fovRef.current = THREE.MathUtils.clamp(fovRef.current, 10, 75);
        }
      };
      imageContainerRef.current.addEventListener("wheel", handleZoom, {
        passive: false,
      });

      // Pause auto-rotation on click and resume after 5 seconds
      const handleClick = () => {
        controls.autoRotate = false;
        clearTimeout(controlsRef.current);
        controlsRef.current = setTimeout(() => {
          controls.autoRotate = true;
        }, 5000); // Auto-rotate resumes after 5 seconds
      };
      imageContainerRef.current.addEventListener("click", handleClick);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener("resize", onWindowResize);
        imageContainerRef.current.removeEventListener("wheel", handleZoom);
        imageContainerRef.current.removeEventListener("click", handleClick);
        controls.dispose();
        renderer.dispose();
      };
    }
  }, [currentImageIndex]);

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
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <Box
        className="flex flex-col items-center justify-center mx-auto relative overflow-hidden"
        sx={{
          mt: 5,
          mb: 10,
          height: "auto",
          width: { xs: '85%', md: '75%%' },
        }}
      >
        {/* Title and Icon */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            my: 4,
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
              flexWrap: 'wrap',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: 80, sm: 100, md: 110 },
                height: { xs: 80, sm: 100, md: 110 },
              }}
            >
              <Image
                src={Icon360}
                width="100%"
                height="100%"
                alt="Icon360"
                objectFit="cover"
              />
            </Box>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', sm: '2.5', md: '3rem', lg: '3.5rem' },
                color: '#333',
              }}
            >
              Panoramas
            </Typography>
          </Box>
          <Typography
            sx={{
              color: '#555',
              fontSize: { xs: '1', sm: '1.2', md: '1.5rem' },
              mb: 5,
              maxWidth: '90%',
            }}
          >
            Experience complete immersion with breathtaking 360-degree panoramas.
          </Typography>
        </Box>

        {/* Panorama box */}
        <Box ref={imageContainerRef} className="relative w-full"
          sx={{
            height: { xs: '100vh', md: '115vh' }
          }}
        >
          {/* Navigation arrows */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              px: 15,
            }}
          >
            <IconButton
              onClick={handlePrevImage}
              sx={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                position: "absolute",
                left: 20,
                transform: "translateY(-50%)",
              }}
            >
              <ArrowLeftIcon
                sx={{
                  width: { xs: 25, sm: 30, md: 50, lg: 60 },
                  height: { xs: 25, sm: 30, md: 50, lg: 60 },
                }}
              />
            </IconButton>
            <IconButton
              onClick={handleNextImage}
              sx={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                position: "absolute",
                right: 20,
                transform: "translateY(-50%)",
              }}
            >
              <ArrowRightIcon
                sx={{
                  width: { xs: 25, sm: 30, md: 50, lg: 60 },
                  height: { xs: 25, sm: 30, md: 50, lg: 60 },
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>

    </>
  );
};

export default ThreeDViewer;
