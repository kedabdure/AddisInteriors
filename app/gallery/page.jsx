"use client";

import Image from "next/image";
import { galleryImages } from "@/constants";
import { useEffect, useState } from "react";

export default function PinterestGallery() {
  const [imagesWithDimensions, setImagesWithDimensions] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Handle the click event to select an image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Close the gallery when the overlay is clicked
  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Gallery */}
      <div
        className="grid gap-4 c-space mt-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{
          gridAutoRows: "minmax(200px, auto)",
        }}
      >
        {imagesWithDimensions.map((image) => (
          <div
            key={image.id}
            className="w-full relative overflow-hidden rounded-lg shadow-md"
            style={{
              gridRowEnd: `span ${Math.ceil(image.height / image.width * 1)}`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {/* Overlay and Full Image */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50 transition-all duration-500 ease-in-out"
          onClick={handleOverlayClick}
          style={{
            cursor: "pointer",
          }}
        >
          <div
            className="relative transition-all duration-500 ease-in-out transform"
            style={{
              maxWidth: "80vw", // Ensures the image doesn't take up the full width
              maxHeight: "80vh",
              objectFit: "contain" // Ensures the image doesn't take up the full height
            }}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="rounded-lg object-contain" // Keeps the aspect ratio intact
            />
            {/* Close button */}
            <button
              onClick={handleOverlayClick}
              className="absolute top-4 right-4 text-white text-2xl bg-transparent border-none cursor-pointer"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
