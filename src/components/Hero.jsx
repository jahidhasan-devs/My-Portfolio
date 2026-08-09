"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const [showCvModal, setShowCvModal] = useState(false);

  // CV Links
  const cvViewLink =
    "https://drive.google.com/file/d/1ND7eRXVOv0TngezGneN9ofd0AknNP4Mm/view?usp=sharing";
  const cvDownloadLink =
    "https://drive.google.com/uc?export=download&id=1ND7eRXVOv0TngezGneN9ofd0AknNP4Mm";

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/jahidhasan-devs",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .269.18.58.688.481A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/md-jahid-hasan-306700292",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.849 3.37-1.849 3.604 0 4.267 2.372 4.267 5.456v6.285ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.564V8.999H3.555v11.453Z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:jahidsharuar2021@gmail.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2Z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal
      gsap.from(".hero-reveal", {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      });

      // Main glow animation
      gsap.to(".hero-glow", {
        scale: 1.15,
        opacity: 0.7,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Small floating dot
      gsap.to(".floating-dot", {
        y: -18,
        x: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Decorative ring
      gsap.to(".hero-ring", {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full max-w-full overflow-hidden bg-[#030811] pt-28 text-white md:pt-32"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.07)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.32]" />
        <div className="absolute -left-60 top-20 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
        <div className="absolute -right-60 top-40 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
        <div className="floating-dot absolute right-[18%] top-[22%] h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.9)]" />
        <div className="absolute left-[18%] top-[35%] h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid min-h-[calc(100vh-128px)] items-center gap-10 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            {/* Available */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="hero-reveal inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2 text-xs font-semibold tracking-wide text-slate-300"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Available for opportunities
            </motion.div>

            {/* Role */}
            <div className="hero-reveal mt-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              <span>Junior Web Developer</span>
              <span className="text-slate-600">•</span>
              <span>Bangladesh</span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-4xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[76px]">
              <div className="overflow-hidden">
                <div className="hero-reveal">Hi, I&apos;m</div>
              </div>
              <div className="overflow-hidden">
                <div className="hero-reveal mt-2 bg-gradient-to-r from-emerald-400 via-cyan-300 to-slate-200 bg-clip-text text-transparent">
                  Jahid Hasan.
                </div>
              </div>
            </h1>

            {/* Description */}
            <p className="hero-reveal mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              I&apos;m a{" "}
              <span className="font-bold text-slate-200">
                Junior Web Developer
              </span>{" "}
              and CSE student focused on building clean, responsive, and modern
              web applications. I enjoy turning ideas into smooth digital
              experiences using{" "}
              <span className="font-semibold text-emerald-400">
                React, Next.js
              </span>{" "}
              and modern web technologies.
            </p>

            {/* Technologies */}
            <div className="hero-reveal mt-6 flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "Tailwind CSS",
                "MongoDB",
                "MERN",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-bold tracking-wide text-slate-400 transition-all hover:border-emerald-400/30 hover:bg-emerald-400/[0.05] hover:text-emerald-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="hero-reveal mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-3.5 text-sm font-black text-[#02110d] shadow-[0_10px_35px_rgba(16,185,129,0.15)]"
              >
                <span className="relative z-10">View My Work</span>
                <span className="relative z-10 text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
                <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover:translate-x-full" />
              </motion.a>

              {/* CV Option Button */}
              <motion.button
                type="button"
                onClick={() => setShowCvModal(true)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-black text-white transition-all hover:border-emerald-400/30 hover:bg-emerald-400/[0.06]"
              >
                <span>Download CV</span>
                <span className="text-emerald-400">↓</span>
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="hero-reveal mt-7 flex items-center gap-3">
              <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Connect
              </span>

              {socialLinks.map((social) => (
                <motion.div
                  key={social.name}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={social.href}
                    target={social.name === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-500 transition-all hover:border-emerald-400/30 hover:bg-emerald-400/[0.05] hover:text-emerald-400"
                  >
                    {social.icon}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT PORTRAIT */}
          <div className="relative flex min-h-[350px] w-full items-end justify-center overflow-hidden sm:min-h-[450px] lg:justify-end">
            <div className="hero-glow absolute bottom-6 left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[80px] sm:h-[320px] sm:w-[320px] sm:blur-[110px]" />
            <div className="absolute bottom-10 left-1/2 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[70px] sm:h-[250px] sm:w-[250px] sm:blur-[90px]" />
            <div className="absolute bottom-0 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full border border-emerald-400/10 bg-gradient-to-b from-emerald-400/[0.04] to-transparent sm:h-[390px] sm:w-[390px]" />
            <div className="hero-ring absolute bottom-[-15px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full border border-dashed border-emerald-400/[0.07] sm:h-[440px] sm:w-[440px]" />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
              className="relative z-10 flex w-full max-w-[280px] items-end justify-center sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px]"
            >
              <Image
                src="/images/circle.png"
                alt="Jahid Hasan - Junior Web Developer"
                width={566}
                height={440}
                priority
                className="h-auto w-full max-w-full object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)] transition-transform duration-700 hover:scale-[1.025]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute right-2 top-4 z-20 flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-[#07121f]/85 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:right-4 sm:top-16 sm:px-4 sm:py-3"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
              <span className="text-[9px] font-black tracking-[0.15em] text-slate-300 sm:text-[10px]">
                AVAILABLE
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="absolute bottom-8 left-0 z-20 hidden items-center gap-3 rounded-xl border border-white/[0.08] bg-[#07121f]/90 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-sm font-black text-emerald-400">
                &lt;/&gt;
              </div>
              <div>
                <p className="text-sm font-black text-white">
                  Building the Web
                </p>
                <p className="text-[9px] font-bold tracking-[0.14em] text-slate-500">
                  ONE PROJECT AT A TIME
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="relative z-20 mx-auto max-w-4xl px-5 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1423]/80 backdrop-blur-xl"
        >
          <div className="flex flex-col items-center justify-center border-r border-white/[0.08] py-5">
            <strong className="text-2xl font-black md:text-3xl">10+</strong>
            <span className="mt-1 text-[8px] font-bold tracking-[0.15em] text-slate-500 md:text-[10px]">
              PROJECTS
            </span>
          </div>

          <div className="flex flex-col items-center justify-center border-r border-white/[0.08] py-5">
            <strong className="text-2xl font-black md:text-3xl">6+</strong>
            <span className="mt-1 text-[8px] font-bold tracking-[0.15em] text-slate-500 md:text-[10px]">
              TECH STACK
            </span>
          </div>

          <div className="flex flex-col items-center justify-center py-5">
            <strong className="text-2xl font-black md:text-3xl">∞</strong>
            <span className="mt-1 text-[8px] font-bold tracking-[0.15em] text-slate-500 md:text-[10px]">
              LEARNING
            </span>
          </div>
        </motion.div>
      </div>

      {/* ================= CV POPUP MODAL ================= */}
      <AnimatePresence>
        {showCvModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative w-full max-w-sm rounded-2xl border border-slate-800 bg-[#0b1120] p-6 shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowCvModal(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700/60 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="mb-6 text-center">
                <h3 className="text-lg font-extrabold text-white">
                  Curriculum Vitae
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Choose how you want to access the file
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                {/* View Link */}
                <a
                  href={cvViewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowCvModal(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:border-emerald-500/40 hover:bg-slate-800"
                >
                  <svg
                    className="h-4 w-4 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  View CV Online
                </a>

                {/* Direct Download Link */}
                <a
                  href={cvDownloadLink}
                  onClick={() => setShowCvModal(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-400 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-emerald-500/10 transition-all hover:bg-emerald-300"
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Direct Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
