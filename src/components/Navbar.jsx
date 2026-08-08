"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  const driveViewUrl =
    "https://drive.google.com/file/d/1ND7eRXVOv0TngezGneN9ofd0AknNP4Mm/preview";
  const driveDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1ND7eRXVOv0TngezGneN9ofd0AknNP4Mm";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#education" },
    { name: "Skills", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.08] bg-[#030811]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="h-[78px] flex items-center justify-between">
            {/* ================= LOGO ================= */}
            <Link href="/" className="group flex items-center gap-3">
              {/* Terminal Logo */}
              <motion.div
                whileHover={{ rotate: -4, scale: 1.05 }}
                className="
                  relative w-11 h-11 rounded-xl
                  flex items-center justify-center
                  border border-emerald-400/30
                  bg-emerald-400/[0.06]
                  shadow-[0_0_25px_rgba(52,211,153,0.08)]
                  overflow-hidden
                "
              >
                <span className="text-emerald-400 text-xl font-bold">
                  &gt;_
                </span>

                <span
                  className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-emerald-400/10
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                "
                />
              </motion.div>

              {/* Name */}
              <div className="flex flex-col leading-none">
                <span
                  className="
                  text-[17px]
                  font-black
                  tracking-tight
                  text-white
                  group-hover:text-emerald-300
                  transition-colors
                "
                >
                  Jahid <span className="text-emerald-400">Hasan</span>
                </span>

                <span
                  className="
                  mt-1.5
                  text-[9px]
                  font-bold
                  tracking-[0.28em]
                  uppercase
                  text-slate-500
                "
                >
                  Junior Web Developer
                </span>
              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden lg:flex items-center">
              <div
                className="
                flex items-center gap-1
                p-1.5
                rounded-2xl
                border border-white/[0.07]
                bg-white/[0.025]
              "
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Link
                      href={link.href}
                      className="
                        relative
                        block
                        px-5 py-2.5
                        rounded-xl
                        text-[13px]
                        font-extrabold
                        tracking-wide
                        text-slate-400
                        hover:text-white
                        transition-all
                        duration-300
                        group
                      "
                    >
                      {link.name}

                      {/* Hover underline */}
                      <span
                        className="
                        absolute
                        left-1/2
                        -translate-x-1/2
                        bottom-1
                        h-[2px]
                        w-0
                        rounded-full
                        bg-emerald-400
                        shadow-[0_0_10px_rgba(52,211,153,0.8)]
                        group-hover:w-5
                        transition-all
                        duration-300
                      "
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex items-center gap-3">
              {/* Location */}
              <div className="hidden md:flex items-center gap-2 mr-2">
                <span
                  className="
                  w-2 h-2
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_10px_rgba(52,211,153,0.8)]
                  animate-pulse
                "
                />

                <span
                  className="
                  text-[10px]
                  font-bold
                  tracking-[0.18em]
                  uppercase
                  text-slate-500
                "
                >
                  Bangladesh
                </span>
              </div>

              {/* CV Button */}
              <motion.button
                onClick={() => setIsCvOpen(true)}
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  group
                  relative
                  hidden sm:flex
                  items-center
                  gap-2.5
                  overflow-hidden
                  px-5 py-2.5
                  rounded-xl

                  border
                  border-emerald-400/40

                  bg-emerald-400/[0.08]

                  text-emerald-300
                  text-[12px]
                  font-black
                  tracking-[0.12em]

                  shadow-[0_0_20px_rgba(52,211,153,0.06)]

                  hover:bg-emerald-400
                  hover:text-[#03100c]
                  hover:border-emerald-300

                  transition-all
                  duration-300
                "
              >
                {/* shine */}
                <span
                  className="
                  absolute
                  inset-0
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform
                  duration-700
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                "
                />

                <span className="relative">CV</span>

                <span
                  className="
                  relative
                  text-base
                  group-hover:translate-x-1
                  transition-transform
                "
                >
                  ↗
                </span>
              </motion.button>

              {/* Mobile Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                  lg:hidden
                  w-10 h-10
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  text-white
                  flex items-center justify-center
                  hover:border-emerald-400/40
                  hover:text-emerald-400
                  transition-all
                "
                aria-label="Toggle menu"
              >
                <div className="space-y-1.5">
                  <span
                    className={`
                      block w-5 h-[2px] bg-current transition-transform
                      ${isOpen ? "rotate-45 translate-y-[4px]" : ""}
                    `}
                  />

                  <span
                    className={`
                      block w-5 h-[2px] bg-current transition-opacity
                      ${isOpen ? "opacity-0" : ""}
                    `}
                  />

                  <span
                    className={`
                      block w-5 h-[2px] bg-current transition-transform
                      ${isOpen ? "-rotate-45 -translate-y-[4px]" : ""}
                    `}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              top-[88px]
              left-4
              right-4
              z-40
              lg:hidden

              rounded-2xl
              border border-white/[0.08]

              bg-[#07101c]/95
              backdrop-blur-2xl

              shadow-2xl
              shadow-black/40

              p-3
            "
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      flex items-center justify-between
                      px-4 py-3.5
                      rounded-xl

                      text-sm
                      font-extrabold
                      text-slate-400

                      hover:text-white
                      hover:bg-emerald-400/[0.07]

                      transition-all
                    "
                  >
                    <span>{link.name}</span>

                    <span className="text-emerald-400">↗</span>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CV */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsCvOpen(true);
                }}
                className="
                  mt-2
                  flex items-center justify-center
                  gap-2
                  rounded-xl
                  py-3

                  bg-emerald-400
                  text-[#02110c]

                  text-sm
                  font-black

                  hover:bg-emerald-300
                  transition-colors
                  w-full
                "
              >
                DOWNLOAD CV
                <span>↗</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CV PREVIEW MODAL ================= */}
      <AnimatePresence>
        {isCvOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCvOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="
                relative w-full max-w-4xl h-[85vh] flex flex-col rounded-2xl
                border border-white/10 bg-[#07101c] shadow-2xl overflow-hidden z-10
              "
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#030811]/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <h3 className="text-white text-sm md:text-base font-bold tracking-wide">
                    Curriculum Vitae Preview
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={driveDownloadUrl}
                    download
                    className="
                      px-3.5 py-1.5 rounded-lg border border-emerald-400/40 bg-emerald-400/10
                      text-emerald-400 text-xs font-bold hover:bg-emerald-400 hover:text-[#030811]
                      transition-all duration-300
                    "
                  >
                    Download PDF 📥
                  </a>
                  <button
                    onClick={() => setIsCvOpen(false)}
                    className="
                      w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-400
                      hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center
                    "
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="flex-1 w-full bg-black/40 relative">
                <iframe
                  src={driveViewUrl}
                  className="w-full h-full border-none"
                  title="CV Preview"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
