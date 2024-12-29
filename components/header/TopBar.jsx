"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbArrowUpRight } from "react-icons/tb";

export default function TopBar({ navLinks, scrollPosition }) {
  const pathname = usePathname();

  return (
    <nav className="w-full flex gap-6 md:gap-10 items-center">
      <div className="flex gap-7">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          const isAtTop = scrollPosition === 0 && pathname === '/';

          return (
            <Link
              key={href}
              href={href}
              className={`relative 
          ${isActive && isAtTop ? "text-white font-normal" : ""}
          ${isActive && !isAtTop ? "text-black font-normal" : ""}
          ${!isActive && isAtTop ? "text-gray-300 hover:text-white" : ""}
          ${!isActive && !isAtTop ? "text-gray-600 hover:text-black" : ""}
          font-medium transition-colors`}
            >
              {label}
            </Link>
          );
        })}
      </div>

      <Link
        href="/contact"
        className={`inline-flex items-center px-5 py-1.5 font-medium border rounded-sm shadow ${scrollPosition === 0 && pathname === '/' ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-950 hover:bg-gray-200"} text-gray-300 border-gray-400  hover:text-white transition-colors`}
      >
        Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
      </Link>
    </nav>
  );
}
