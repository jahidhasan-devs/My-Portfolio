"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = ({ projectsData = [] }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!projectsData || projectsData.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      gsap.to(".projects-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -20,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [projectsData]);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32"
      id="projects"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[140px]" />

      {/* Header Section */}
      <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
            <span className="h-px w-6 bg-emerald-400"></span>
            <span>03 / Selected Works</span>
          </div>
          <h2 className="projects-title text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-slate-400">
          A showcase of full-stack web applications, interactive portals, and
          modern digital experiences.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData && projectsData.length > 0 ? (
          projectsData.map((project, index) => (
            <motion.div
              key={project.id || index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0b1120] shadow-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Background Glow on Hover */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />

                {/* Number Badge */}
                <span className="absolute left-4 top-4 rounded-lg border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-400 backdrop-blur-md">
                  0{index + 1}
                </span>

                {/* Hover Details Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <Link
                    href={`/projects/${project.id}`}
                    className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-md transition-all hover:bg-emerald-400 hover:text-slate-950 hover:shadow-lg hover:shadow-emerald-400/20"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <Link href={`/projects/${project.id}`}>
                  <h3 className="text-xl font-bold text-white transition-colors hover:text-emerald-400">
                    {project.title}
                  </h3>
                </Link>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags &&
                    project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-400"
                      >
                        #{tag.toLowerCase()}
                      </span>
                    ))}
                </div>

                {/* Live Preview Button */}
                <div className="mt-7 pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/40 py-3 text-xs font-extrabold uppercase tracking-widest text-slate-200 transition-all hover:border-emerald-500/50 hover:bg-emerald-400/10 hover:text-emerald-300"
                  >
                    Live Preview
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
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
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 py-20 text-center font-mono text-sm text-slate-500">
            No projects found in database.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
