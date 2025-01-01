"use client"

import Image from "next/image";
import { projects } from "@/constants";
import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function Projects() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    },
    exit: { opacity: 0, y: 50 }
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
        <motion.h1 className="container mx-auto px-4 py-48 mt-12 text-center text-4xl font-extrabold tracking-widest text-white sm:text-5xl md:text-6xl lg:py-72"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Our Projects
        </motion.h1>
      </div>

      {/* Project Showcase */}
      <div className="c-space">
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              key={project.id}
              className="relative overflow-hidden rounded-xl group shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image */}
              <div>
                <Image
                  src={project.image}
                  width={480}
                  height={380}
                  alt={project.name}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay with Details */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full gap-4 p-6 text-center text-white transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent group-hover:translate-y-0 translate-y-full">
                <h2 className="text-lg font-semibold sm:text-xl md:text-2xl">
                  {project.name}
                </h2>
                <p className="text-sm sm:text-base">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="relative bg-gradient-to-r from-purple-200/30 via-pink-100/20 to-indigo-300/30 backdrop-blur-xl text-center c-space mt-8 md:mt-16 flex flex-col gap-5 md:gap-8 rounded-md shadow-lg"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
        >
          <h2 className="text-xl font-semibold md:text-4xl text-gray-900">
            Want to know more about our projects?
          </h2>
          <Button href={'/contact'} title={'Contact Us'} />
        </motion.div>
      </div>
    </div>
  );
}
