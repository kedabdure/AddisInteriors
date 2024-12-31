"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  AiOutlineCloseCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from "react-icons/ai";
import { motion } from "framer-motion";


import { galleryImages } from "@/constants";

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
      damping: 10,
      duration: 0.6,
    },
  },
};

  return (
    <div className="w-full p-4">
      {/* Modal for Full-Screen Image */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-all duration-300">
          <AiOutlineCloseCircle
            className="absolute z-[51] top-[3%] right-[3%] text-4xl text-white cursor-pointer hover:opacity-80"
            onClick={handleCloseModal}
          />
          <AiOutlineLeftCircle
            className="absolute z-[51] left-[3%] top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer hover:opacity-80"
            onClick={prevSlide}
          />
          <AiOutlineRightCircle
            className="absolute z-[51] right-[3%] top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer hover:opacity-80"
            onClick={nextSlide}
          />
          <div className="w-[600px] max-w-screen-md max-h-[95vh] flex items-center justify-center">
            <div className="relative w-full h-[95vh] transition-transform duration-300">
              <Image
                src={galleryImages[slideNumber].src}
                alt={`Slide ${slideNumber + 1}`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Responsive Masonry Gallery */}
      <motion.div
        className="grid gap-4 mt-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imagesWithDimensions.map((image, index) => (
          <div
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
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <Image
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectGallery;
