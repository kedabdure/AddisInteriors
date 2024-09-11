"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbArrowUpRight } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import logo from "../public/logo.png";


import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navigation({ showSidebar, toggleSidebar }) {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar for Small Devices */}
      <div
        className={`fixed top-0 right-0 h-screen overflow-y-hidden bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out ${showSidebar ? "translate-x-0" : "translate-x-full"
          } w-full lg:hidden`}
        style={{ zIndex: 100000 }}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-6 xs:p-6 sm:p-8 md:p-10">
            <img src={logo.src} alt="Logo" className="w-32 h-auto filter invert" />
            <button onClick={toggleSidebar} className="text-white">
              <IoMdClose size={30} />
            </button>
          </div>
          <div className="flex flex-col flex-grow justify-center items-center">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`py-3 px-6 text-gray-300 hover:bg-gray-700 transition-colors rounded-full ${pathname === href ? "font-semibold text-white bg-gray-800" : ""
                  }`}
                onClick={toggleSidebar}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center px-6 py-3 font-medium border rounded-full shadow text-white border-white hover:bg-white hover:text-gray-900 transition-colors"
              onClick={toggleSidebar}
            >
              Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation for Larger Devices */}
      <nav className="hidden lg:flex gap-6 items-center">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`relative text-gray-600 hover:text-gray-900 transition-colors ${pathname === href ? "font-semibold text-gray-900" : ""
              }`}
          >
            {label}
            {pathname === href && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-all duration-300"></span>
            )}
          </Link>
        ))}
        <Link
          href="/contact"
          className="inline-flex items-center px-5 py-2 font-medium border rounded-full shadow text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
        >
          Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
        </Link>
      </nav>
    </>
  );
}
