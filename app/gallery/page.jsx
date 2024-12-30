"use client";

import Image from "next/image";
import { galleryImages } from "@/constants";
import { useEffect, useState } from "react";

export default function PinterestGallery() {
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

  return (
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
            className="rounded-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
