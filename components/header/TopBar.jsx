"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbArrowUpRight } from "react-icons/tb";

export default function TopBar({ navLinks }) {
  const pathname = usePathname();

  return (
    <nav className="w-full flex gap-6 md:gap-10 items-center">
      <div className="flex gap-6">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`relative text-gray-300 hover:text-white transition-colors ${
              pathname === href ? "font-semibold text-white" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <Link
        href="/contact"
        className="inline-flex items-center px-5 py-1.5 font-medium border rounded-md shadow text-gray-300 border-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
      >
        Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
      </Link>
    </nav>
  );
}
