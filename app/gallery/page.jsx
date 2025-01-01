"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineCloseCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from "react-icons/ai";
import { galleryImages } from "@/constants";

const ProjectGallery = () => {
  const overlayRef = useRef();
  const imageRef = useRef();

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [imagesWithDimensions, setImagesWithDimensions] = useState([]);
  const [gridRowEndValue, setGridRowEndValue] = useState(25);
  const [isDragging, setIsDragging] = useState(false)

  // Handle screen resize for responsive grid
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

  // Preload images to calculate dimensions
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

  // Handle clicking outside the modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.dataset.overlay) {
        setOpenModal(false);
      }
    };

    if (openModal) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

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

  // Framer Motion variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
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
            className="fixed inset-0 flex items-center justify-center z-40"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black ${isDragging ? 'opacity-30' : 'opacity-80'
                } transition-opacity duration-100 z-[-1]`}
              ref={overlayRef}
              data-overlay="true"
            />

            {/* Close Button */}
            <AiOutlineCloseCircle
              className="absolute top-4 right-4 text-4xl text-white cursor-pointer hover:opacity-80 z-50"
              onClick={handleCloseModal}
            />

            {/* Previous Button */}
            <AiOutlineLeftCircle
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer hover:opacity-80 z-50"
              onClick={prevSlide}
            />

            {/* Next Button */}
            <AiOutlineRightCircle
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer hover:opacity-80 z-50"
              onClick={nextSlide}
            />

            {/* Image */}
            <motion.div
              ref={imageRef}
              drag
              dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
              dragElastic={1}
              onDragStart={() => {
                setIsDragging(true)
              }}
              onDragEnd={(event, info) => {
                setIsDragging(false)
                if (info.offset.y > 100 || info.offset.y < -100) {
                  handleCloseModal();
                }
              }}
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
      <motion.div className="grid gap-4 mt-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
            viewport={{ once: true, amount: 0.2 }}
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
