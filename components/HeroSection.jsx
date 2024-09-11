"use client";

import Image from 'next/image';
import Link from "next/link";
import { TbArrowUpRight } from 'react-icons/tb';
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT US" },
  { href: "/gallery", label: "GALLERY" },
];

export default function HeroSection() {
  const pathname = usePathname();

  return (
    <div className="relative flex items-center justify-center h-screen bg-zinc-50">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/image/hero.jpg')`,
          filter: 'brightness(50%)',
        }}
      ></div>

      {/* Navigation */}
      <nav className="absolute top-10 left-0 right-0 items-center justify-between px-8 lg:px-32 transition-colors duration-300 hidden lg:flex">
        <div className="flex gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-2 py-1 transition-colors duration-300 hover:text-white ${pathname === href ? "font-semibold text-white" : "text-gray-300"
                }`}
            >
              {label}
              {/* Whitish bottom line on hover */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="flex items-center font-semibold text-gray-300 transition-colors duration-300 hover:text-white"
        >
          Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
        </Link>
      </nav>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12 py-16 lg:py-24">
        <p className="text-gray-400 tracking-widest mb-8 md:mb-12">MSOSO</p>
        <h1 className="text-3xl leading-tight mb-4 md:mb-6 lg:mb-8 md:text-5xl lg:text-6xl">
          INTERIOR DESIGN EXPERTS
        </h1>
        <p className="text-gray-300 mb-12 md:mb-16 lg:mb-20 text-base md:text-lg lg:text-xl">
          Discover exceptional interior design. <br />
          Transform your home with our stylish and functional solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 font-medium bg-gray-950 text-white border border-transparent rounded-full shadow-md transition-colors duration-300 ease-in-out hover:bg-transparent hover:border-white hover:text-white"
          >
            Order Now
            <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 font-medium text-gray-950 border border-gray-950 rounded-full shadow-md transition-colors duration-300 ease-in-out hover:bg-gray-950 hover:text-white"
          >
            Projects
            <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
