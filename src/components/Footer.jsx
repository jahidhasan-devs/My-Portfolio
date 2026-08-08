"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/Aswincloud",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#030811]">
      {/* Subtle glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[180px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-emerald-400/[0.04]
          blur-[100px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        {/* Main footer */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-6
            py-8
            md:flex-row
          "
        >
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3">
            {/* Logo */}
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-emerald-400/20
                bg-emerald-400/[0.05]
                text-xs
                font-black
                text-emerald-400
                transition-all
                duration-300
                group-hover:border-emerald-400/40
                group-hover:bg-emerald-400/[0.1]
                group-hover:shadow-[0_0_20px_rgba(52,211,153,0.12)]
              "
            >
              &lt;/&gt;
            </div>

            {/* Name */}
            <div className="leading-none">
              <p
                className="
                  text-[15px]
                  font-black
                  tracking-tight
                  text-white
                  transition-colors
                  group-hover:text-emerald-300
                "
              >
                Jahid <span className="text-emerald-400">Hasan</span>
              </p>

              <p
                className="
                  mt-1
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-slate-600
                "
              >
                Junior Web Developer
              </p>
            </div>
          </Link>

          {/* Copyright */}
          <p
            className="
              text-center
              text-[9px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-slate-600
            "
          >
            © 2026 Jahid Hasan
            <span className="mx-2 text-emerald-400/40">•</span>
            All rights reserved.
          </p>

          {/* Social links */}
          <nav className="flex items-center gap-2">
            {socials.map((social) => (
              <motion.div
                key={social.name}
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-3
                    py-2
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.12em]
                    text-slate-500
                    transition-all
                    duration-300
                    hover:border-emerald-400/25
                    hover:bg-emerald-400/[0.05]
                    hover:text-emerald-300
                  "
                >
                  {social.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Bottom line */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-3
            border-t
            border-white/[0.05]
            py-4
          "
        >
          <span className="h-px w-8 bg-emerald-400/20" />

          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-slate-700
            "
          >
            Built with passion & code
          </span>

          <span className="h-px w-8 bg-emerald-400/20" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
