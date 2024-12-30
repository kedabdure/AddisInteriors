"use client";

import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname()
  const [mobileActive, setMobileActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleSidebar = () => {
    setMobileActive((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setIsHeaderVisible(currentPosition <= scrollPosition);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-500 ease-in-out ${scrollPosition === 0 && pathname === '/' ? "bg-transparent" : "bg-white shadow-sm"
        } ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="mx-auto flex items-center justify-between py-5 lg:py-5 px-4 sm:px-14 md:px-32 lg:px-14">
        {/* Logo */}
        <div className={`relative text-2xl font-medium tracking-tight ${scrollPosition === 0 && pathname === '/' ? "text-gray-300" : "text-gray-600"}`}>
          AddisInterior
        </div>

        {/* Main Navigation */}
        <div className="hidden lg:flex">
          <TopBar navLinks={navLinks} scrollPosition={scrollPosition} />
        </div>

        {/* Hamburger Icon for Small Devices */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleSidebar}
            className={`${scrollPosition === 0 && pathname === '/'? "text-gray-300" : "text-gray-600"}  transition-colors duration-300`}
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>

        {/* Sidebar */}
        <SideBar sidebarOpen={mobileActive} toggleSidebar={toggleSidebar} navLinks={navLinks} />
      </div>
    </header>
  );
}
