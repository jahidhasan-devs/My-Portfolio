"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/jahidhasan-devs",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .269.18.58.688.481A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/md-jahid-hasan-306700292",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.849 3.37-1.849 3.604 0 4.267 2.372 4.267 5.456v6.285ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.564V8.999H3.555v11.453Z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/jahid.hasan.551668",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
        </svg>
      ),
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
                    flex
                    items-center
                    gap-2
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
                  {social.icon}
                  <span>{social.name}</span>
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
