"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectDetail = ({ project }) => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      // Immersive Hero Parallax
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 200,
        scale: 1.15,
        ease: "none",
      });

      // Text reveal animations
      gsap.from(".reveal-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Section animations
      gsap.utils.toArray(".content-section").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#050811] p-8 text-white">
        <h1 className="mb-2 text-7xl font-extrabold text-emerald-400">404</h1>
        <p className="mb-8 text-slate-400">Project not found</p>
        <Link
          href="/#projects"
          className="rounded-xl bg-emerald-400 px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-950 hover:bg-emerald-300"
        >
          Back to Workspace
        </Link>
      </div>
    );
  }

  // Feature Card Icons Array
  const featureIcons = [
    <svg
      key="1"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>,
    <svg
      key="2"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>,
    <svg
      key="3"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>,
  ];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#050811] text-slate-200 selection:bg-emerald-400 selection:text-slate-950"
    >
      {/* Immersive Hero Header */}
      <section
        ref={heroRef}
        className="relative flex h-[85vh] w-full items-center justify-center overflow-hidden"
      >
        <div ref={imageRef} className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover brightness-[0.35]"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050811]/40 via-[#050811]/70 to-[#050811]"></div>

        <div className="relative z-20 max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/#projects"
              className="group mb-8 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 transition-colors hover:text-white"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Back to Workspace
            </Link>
          </motion.div>

          <h1 className="reveal-item mb-8 text-5xl font-extrabold tracking-tight text-white md:text-8xl">
            {project.title}
          </h1>

          <div className="reveal-item mb-10 flex flex-wrap justify-center gap-2.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-emerald-300 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="reveal-item flex flex-wrap justify-center gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-emerald-400 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-slate-950 shadow-lg shadow-emerald-500/10 transition-all hover:bg-emerald-300 hover:scale-105 active:scale-95"
            >
              View Live Demo
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:border-emerald-500/40 hover:bg-slate-800/80"
            >
              Source Code
              <svg
                className="h-4 w-4 text-slate-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Narrative Content */}
      <div className="mx-auto max-w-5xl px-6 py-20 space-y-28">
        {/* Project Brief & Sidebar */}
        <section className="content-section grid gap-10 md:grid-cols-12 items-start">
          {/* Left Metadata Sidebar */}
          <div className="md:col-span-4 sticky top-28 rounded-2xl border border-slate-800/80 bg-[#0b1120] p-6 shadow-xl space-y-6 backdrop-blur-xl">
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                MY ROLE
              </h4>
              <p className="mt-1 text-base font-bold text-white">
                {project.role || "Lead Developer"}
              </p>
            </div>
            <div className="border-t border-slate-800/80 pt-5">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                TIMELINE
              </h4>
              <p className="mt-1 text-base font-bold text-white">
                {project.year || "2026"}
              </p>
            </div>
            <div className="border-t border-slate-800/80 pt-5">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                TECH STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] text-emerald-400"
                  >
                    #{tag.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Narrative Description */}
          <div className="md:col-span-8 rounded-2xl border border-slate-800/80 bg-[#0b1120]/60 p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-emerald-400"></span>
              <h2 className="text-2xl font-extrabold text-white">
                The Mission
              </h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-slate-300">
              {project.fullDescription}
            </p>
          </div>
        </section>

        {/* Feature Grid / Core Pillars */}
        <section className="content-section">
          <div className="mb-12 text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400">
              Highlights
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">
              Core Architecture & Pillars
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Strategic Architecture",
                desc: "Built for scalability and modularity from the ground up, utilizing modern software design patterns.",
              },
              {
                title: "Fluid Experience",
                desc: "Leveraging Framer Motion and GSAP libraries for smooth micro-interactions and page transitions.",
              },
              {
                title: "Performance First",
                desc: "Optimized asset delivery, server-side rendering, and caching for lightning-fast speeds.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0b1120] p-7 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                {/* Background Ambient Glow on Hover */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Index & Icon Row */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                    {featureIcons[i]}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-600 group-hover:text-emerald-400/80">
                    0{i + 1} /
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-emerald-300">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="content-section relative overflow-hidden rounded-3xl border border-slate-800/80 bg-[#0b1120] p-10 text-center md:p-16">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />

          <h2 className="relative z-10 text-3xl font-extrabold text-white md:text-5xl">
            Ready to explore more?
          </h2>
          <p className="relative z-10 mx-auto mt-3 max-w-md text-sm text-slate-400">
            Check out other featured applications and projects in the main
            workspace.
          </p>

          <div className="relative z-10 mt-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-3 rounded-xl bg-emerald-400 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-slate-950 shadow-lg shadow-emerald-500/10 transition-all hover:bg-emerald-300 hover:scale-105 active:scale-95"
            >
              Explore All Projects
              <span className="text-base">→</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetail;
