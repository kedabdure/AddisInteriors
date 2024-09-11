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
    <div className="relative flex items-center justify-center pt-5 h-[100vh] sm:h-[60vh] md:h-[70vh] lg:h-[100vh] bg-zinc-50">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/image/hero.jpg')`,
          filter: 'brightness(50%)',
        }}
      ></div>

      {/* Navigation */}
      <nav className="absolute top-[10%] left-0 right-0 items-center justify-between px-[9rem] transition-colors duration-300 hidden lg:flex">
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
          className="hidden lg:inline-flex items-center font-semibold text-gray-300 transition-colors duration-300 hover:text-white"
        >
          Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
        </Link>
      </nav>


      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-10 md:px-8 md:py-16 lg:px-16 lg:py-24">
        {/* Content */}
        <p className="text-gray-400 tracking-widest mb-10">INTERIOR DESIGN EXPERTS</p>
        <h1 className="text-2xl letter-spacing-2 leading-tight mb-12 md:text-3xl lg:text-4xl xl:text-6xl">
          BEAUTIFY INTERIORS SIMPLY
        </h1>
        <p className="text-gray-300 mb-16 md:text-lg lg:text-xl xl:text-2xl">
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
            href="/contact"
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
