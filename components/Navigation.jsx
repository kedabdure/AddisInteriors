"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT US" },
  { href: "/gallery", label: "GALLERY" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        className="block lg:hidden p-2 focus:outline-none"
        onClick={() => setOpen(!isOpen)}
      >
        {/* Hamburger Menu Icon */}
        <svg
          className={`h-6 w-6 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            // Close Icon
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          ) : (
            // Hamburger Icon
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          )}
        </svg>
      </button>

      <nav
        className={`lg:flex lg:gap-x-6 lg:static lg:translate-x-0 transform transition-all duration-300 ${
          isOpen
            ? "flex flex-col items-center absolute inset-y-0 right-0 bg-white px-8 py-12 gap-y-6 translate-x-0 z-50"
            : "hidden translate-x-full"
        }`}
      >
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${
              pathname === href ? "text-black font-semibold" : "text-gray-600"
            } hover:text-black transition-colors duration-300`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Overlay for mobile nav */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <Link
        href="/contact"
        className="items-center hidden px-5 py-2 font-medium text-gray-800 bg-white border border-gray-600 rounded-full shadow lg:inline-flex hover:bg-gray-100"
      >
        Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
      </Link>
    </>
  );
}
