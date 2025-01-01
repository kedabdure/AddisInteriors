"use client"

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { motionBoxProps } from "@/lib/motionLib";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  return (
    <motion.footer {...motionBoxProps} className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 text-gray-300">
      <div className="container mx-auto grid gap-8 py-14 px-6 lg:grid-cols-4">
        {/* Newsletter Section */}
        <div className="min:w-[350px] text-center lg:text-left lg:max-w-md">
          <h2 className="text-xl font-semibold text-white mb-4">Stay Updated</h2>
          <div className="relative">
            <input
              className="w-full px-4 pr-20 border-2 border-gray-700 bg-gray-800 rounded-full h-14 focus:outline-none focus:border-gray-500"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="absolute top-2 right-2 h-10 px-4 text-sm text-white bg-zinc-500 rounded-full hover:bg-zinc-700">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Subscribe to receive updates and offers. Unsubscribe anytime.
          </p>
        </div>

        {/* Company Links */}
        <div className="sm:ml-0 md:ml-16">
          <h2 className="text-xl font-semibold text-white mb-4">Company</h2>
          <div className="space-y-1 flex flex-col text-md">
            <Link className="hover:underline" href="/about">
              About Us
            </Link>
            <Link className="hover:underline" href="/press">
              Press
            </Link>
            <Link className="hover:underline" href="/careers">
              Careers
            </Link>
            <Link className="hover:underline" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        {/* Development Links */}
        <div className="sm:ml-0 md:ml-16">
          <h2 className="text-xl font-semibold text-white mb-4">Development</h2>
          <div className="space-y-1 flex flex-col text-md">
            <Link className="hover:underline" href="/documentation">
              Documentation
            </Link>
            <Link className="hover:underline" href="/api">
              API Reference
            </Link>
            <Link className="hover:underline" href="/changelog">
              Changelog
            </Link>
            <Link className="hover:underline" href="/status">
              Status
            </Link>
          </div>
        </div>

        {/* Connect Links */}
        <div className="sm:ml-0 md:ml-16">
          <h2 className="text-xl font-semibold text-white mb-4">Connect</h2>
          <div className="space-y-1 flex flex-col text-md">
            <Link className="hover:underline" href="/instagram">
              Instagram
            </Link>
            <Link className="hover:underline" href="/linkedin">
              LinkedIn
            </Link>
            <Link className="hover:underline" href="/twitter">
              Twitter
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-4 text-center text-gray-400 lg:flex-row lg:space-y-0">
          <p className="text-sm">
            &copy; {currentYear} AddisInterior. All rights reserved.
          </p>
          <div className="text-sm">
            <Link className="mx-2 hover:underline" href="/privacy">
              Privacy
            </Link>
            <Link className="mx-2 hover:underline" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
