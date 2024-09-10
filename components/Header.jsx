"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../public/logo.png";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isTransparent, setTransparent] = useState(true);

  const isHomePage = pathname === "/";

  useEffect(() => {
    // Only attach scroll listener if on the homepage
    if (isHomePage) {
      const handleScroll = () => {
        const heroSectionHeight = 600; // Adjust this to match your hero section's height
        const scrollPosition = window.scrollY;

        // Toggle transparency based on scroll position
        setTransparent(scrollPosition < heroSectionHeight);
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // For non-homepage paths, always set the header to not transparent
      setTransparent(false);
    }
  }, [isHomePage]);

  return (
    <header
      className={`sticky top-0 z-10 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent backdrop-blur-none"
          : "bg-white bg-opacity-95 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <Image src={logo} alt="logo" className="w-40 h-6" />
        <Navigation />
      </div>
    </header>
  );
}
