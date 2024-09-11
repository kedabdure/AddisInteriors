"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../public/logo.png";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const pathname = usePathname();
  const [showMainNavigation, setShowMainNavigation] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0); // Initialize with 0 or a default value

  const isHomePage = pathname === "/";

  useEffect(() => {
    // Check if running on the client
    if (typeof window !== "undefined") {
      // Set the initial screen width
      setScreenWidth(window.innerWidth);

      // Update screen width on resize
      const handleResize = () => setScreenWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (isHomePage && screenWidth >= 1024) { // Only run scroll effect on large screens
      const handleScroll = () => {
        const heroSectionHeight = 80; // Adjust as needed
        const scrollPosition = window.scrollY;
        setShowMainNavigation(scrollPosition > heroSectionHeight);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setShowMainNavigation(true);
    }
  }, [isHomePage, screenWidth]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-transform duration-500 ease-in-out bg-white ${showMainNavigation ? "translate-y-0 shadow-md" : "-translate-y-24"
        }`}
      style={{ backgroundColor: "white" }}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        {/* Logo */}
        <Image src={logo} alt="logo" className="w-32 h-auto sm:w-40" />

        {/* Hamburger Icon for Small Devices */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleSidebar} className="text-black">
            <GiHamburgerMenu size={30} />
          </button>
        </div>

        {/* Main Navigation */}
        <Navigation showSidebar={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </header>
  );
}
