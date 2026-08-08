"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050811] text-slate-200 selection:bg-emerald-400 selection:text-slate-950">
      <Navbar />

      <main className="relative flex flex-grow items-center justify-center overflow-hidden px-6 py-32">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            404 — Page Not Found
          </motion.div>

          {/* Big 404 Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="select-none text-[11rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-200/20 via-slate-500/10 to-transparent sm:text-[16rem] md:text-[20rem]">
              404
            </h1>

            <div className="mt-[-4.5rem] sm:mt-[-6.5rem] md:mt-[-8rem]">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Lost in <span className="text-emerald-400">Cyberspace?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-slate-400 sm:text-base leading-relaxed">
                The destination you are looking for has been moved or drifted
                into the digital void.
              </p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-400 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-slate-950 shadow-lg shadow-emerald-500/10 transition-all hover:bg-emerald-300 hover:scale-105 active:scale-95"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Return to Base
            </Link>

            <Link
              href="/#projects"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:border-emerald-500/40 hover:bg-slate-800/80"
            >
              View Workspace
              <span className="text-base">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Dynamic Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            className="absolute hidden md:block rounded-full bg-emerald-400/40 blur-[1px]"
            style={{
              width: `${(i % 3) + 3}px`,
              height: `${(i % 3) + 3}px`,
              top: `${15 + i * 18}%`,
              left: `${12 + i * 20}%`,
            }}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}
