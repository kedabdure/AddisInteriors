"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineCloseCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from "react-icons/ai";
import { galleryImages } from "@/constants";
import { frame } from "framer-motion";

const ProjectGallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [imagesWithDimensions, setImagesWithDimensions] = useState([]);
  const [gridRowEndValue, setGridRowEndValue] = useState(25); // Default value for large screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setGridRowEndValue(25);
      } else if (window.innerWidth >= 768) {
        setGridRowEndValue(20);
      } else {
        setGridRowEndValue(15);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        galleryImages.map((image) =>
          new Promise((resolve) => {
            const img = new window.Image();
            img.src = image.src;
            img.onload = () => {
              resolve({
                ...image,
                width: img.width,
                height: img.height,
              });
            };
          })
        )
      );
      setImagesWithDimensions(loadedImages);
    };

    loadImages();
  }, []);


  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [openModal])

  // Open Modal
  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    setSlideNumber((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  // Next Image
  const nextSlide = () => {
    setSlideNumber((prev) =>
      prev + 1 === galleryImages.length ? 0 : prev + 1
    );
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 30,
        duration: 0.6,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  const imageMotionProps = {
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    variants: modalVariants,
  };


  return (
    <div className="w-full c-space">
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-40"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <AiOutlineCloseCircle
              className="absolute top-4 right-4 text-4xl text-white cursor-pointer hover:opacity-80 z-50"
              onClick={handleCloseModal}
            />
            <AiOutlineLeftCircle
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer hover:opacity-80 z-50"
              onClick={prevSlide}
            />
            <AiOutlineRightCircle
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer hover:opacity-80 z-50"
              onClick={nextSlide}
            />
            <motion.div
              className="relative w-full max-w-screen-md h-[95vh]"
              {...imageMotionProps}
            >
              <Image
                src={galleryImages[slideNumber].src}
                alt={`Slide ${slideNumber + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Responsive Masonry Gallery */}
      <motion.div
        className="grid gap-4 mt-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imagesWithDimensions.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md"
            style={{
              gridRowEnd: `span ${Math.ceil(
                (image.height / image.width) * gridRowEndValue
              )}`,
            }}
            onClick={() => handleOpenModal(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: .2 }}
            variants={itemVariants}
          >
            <Image
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectGallery;
