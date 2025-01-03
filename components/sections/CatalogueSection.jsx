"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";
import { motion } from "framer-motion"
import { motionBoxProps } from "@/lib/motionLib";


import { catalogs } from "@/constants";

export default function CatalogueSection() {

  return (
    <motion.div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2 c-space md:px-0">
      {catalogs.map((item) => (
        <motion.div {...motionBoxProps} key={item.id} className="relative overflow-hidden group rounded-smw">
          <div>
            <Image src={item.image} width={380} height={100} alt="" className="w-full" />
          </div>
          <motion.div {...motionBoxProps} className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur rounded-md">
            <div className="flex justify-between pb-4 ">
              <p className="text-sm">{item.catagory}</p>
              <span className="text-sm ">{item.id}</span>
            </div>
            <a className="block text-xl font-semibold" href="">{item.title}</a>
            <p className="py-4 text-gray-500">{item.description}</p>
            <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a>
          </motion.div>

          <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
            <p className="tracking-wider -rotate-90 ">{item.catagory} </p>
            <span className="">
              {item.id}
            </span>

          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
