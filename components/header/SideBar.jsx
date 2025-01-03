"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

const SideBar = ({ sidebarOpen, toggleSidebar, navLinks }) => {
  const pathname = usePathname();
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        toggleSidebar();
      }
    };

    if (sidebarOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen, toggleSidebar]);

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 z-[99999]"></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-screen bg-white text-black shadow-lg transition-transform duration-300 ease-in-out z-[100000] ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } w-4/5 sm:w-2/3 lg:hidden`}
      >
        <div className="flex flex-col h-full p-5">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold text-gray-800">AddisInterior</span>
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-red-500 transition-colors"
            >
              <IoMdClose size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col mt-6 space-y-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block py-2 px-4 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors ${
                  pathname === href
                    ? "font-semibold bg-gray-200 text-gray-900"
                    : ""
                }`}
                onClick={toggleSidebar}
              >
                {label}
              </Link>
            ))}

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center px-4 py-2.5 font-medium border rounded-md shadow text-gray-700 border-gray-300 hover:bg-gray-100 transition-colors"
              onClick={toggleSidebar}
            >
              Contact Us
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
