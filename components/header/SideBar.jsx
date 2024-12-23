"use client";

import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

const SideBar = ({ sidebarOpen, toggleSidebar, navLinks }) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed top-0 right-0 h-screen bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
      } w-4/5 sm:w-2/3 lg:hidden`}
      style={{ zIndex: 100000 }}
    >
      <div className="flex flex-col h-full p-4">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={toggleSidebar} className="text-white">
            <IoMdClose size={30} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`py-3 px-6 text-gray-300 hover:bg-gray-700 transition-colors rounded-full ${
                pathname === href ? "font-semibold text-white bg-gray-800" : ""
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
  );
};

export default SideBar;
