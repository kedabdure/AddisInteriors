"use client"

import Button from "../Button";
import { motion } from "framer-motion";
import { motionBoxProps } from "@/lib/motionLib";

export default function ContactSection() {
  return (
    <motion.div {...motionBoxProps} className="bg-zinc-100">
      <div className="container items-center text-center lg:justify-between lg:flex py-16">
        <motion.div {...motionBoxProps} className="py-4">
          <p className="text-2xl">Let's</p>
          <h1 className="text-3xl font-bold lg:text-5xl">Get in touch</h1>
        </motion.div>

        <motion.div {...motionBoxProps}>
          <Button href={'/contact'} title={'Contact Us'} />
        </motion.div>
      </div>
    </motion.div>
  )
}