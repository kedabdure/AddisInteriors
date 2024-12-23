"use client";

import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const [mobileActive, setMobileActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleSidebar = () => {
    setMobileActive((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setIsHeaderVisible(currentPosition < scrollPosition || currentPosition === 0);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-transform duration-300 ease-in-out ${
        scrollPosition === 0 ? "bg-transparent" : "bg-gray-950"
      } ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-12">
        {/* Logo */}
        <div className="relative text-2xl font-bold tracking-widest text-gray-200">
          Abdu K.
        </div>

        {/* Main Navigation */}
        <div className="hidden lg:flex">
          <TopBar navLinks={navLinks} />
        </div>

        {/* Hamburger Icon for Small Devices */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleSidebar} className="text-gray-200">
            <GiHamburgerMenu size={24} />
          </button>
        </div>

        {/* Sidebar */}
        <SideBar sidebarOpen={mobileActive} toggleSidebar={toggleSidebar} navLinks={navLinks} />
      </div>
    </header>
  );
}
