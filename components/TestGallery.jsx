"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  AiOutlineCloseCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from "react-icons/ai";
import { galleryImages } from "@/constants";

const ProjectGallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [imagesWithDimensions, setImagesWithDimensions] = useState([]);

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

  return (
    <div className="w-full p-4">
      {/* Modal for Full-Screen Image */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-all duration-300">
          <AiOutlineCloseCircle
            className="absolute top-5 right-5 text-4xl text-white cursor-pointer hover:opacity-80"
            onClick={handleCloseModal}
          />
          <AiOutlineLeftCircle
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer hover:opacity-80"
            onClick={prevSlide}
          />
          <AiOutlineRightCircle
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-4xl text-white cursor-pointer hover:opacity-80"
            onClick={nextSlide}
          />
          <div className="w-[600px] max-w-screen-md max-h-[95vh] flex items-center justify-center">
            <div className="relative w-full h-[90vh] transition-transform duration-300">
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
      <div
        className="grid gap-4 mt-12"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gridAutoRows: "10px", // Base row height
        }}
      >
        {imagesWithDimensions.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md"
            style={{
              gridRowEnd: `span ${Math.ceil(
                (image.height / image.width) * 20
              )}`, // Adjust multiplier to base row height
            }}
            onClick={() => handleOpenModal(index)}
          >
            <Image
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
