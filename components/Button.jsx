import React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import Link from "next/link";

const Button = ({ href, title }) => {
  return (
    <div className="inline-block">
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-6 py-3 md:py-4 text-sm md:text-md font-semibold text-white bg-black rounded-sm shadow-md transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
      >
        {title}
        <TbArrowUpRight className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default Button;
