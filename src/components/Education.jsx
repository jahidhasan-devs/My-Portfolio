"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Education = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const educationData = [
    {
      year: "2028",
      status: "Currently Enrolled",
      degree: "Bachelor of Science (BSc)",
      field: "Computer Science & Engineering",
      institution: "Uttara University",
      description:
        "Pursuing BSc in CSE with strong academic focus and continuous improvement in programming skills.",
      icon: "01",
    },
    {
      year: "2025",
      status: "Completed",
      degree: "Computer Science & Engineering (CSE)",
      field: "Diploma / Technical Education",
      institution: "Rumdo Institute of Modern Technology",
      description:
        "Achieved a CGPA of 3.89 out of 4. Built responsive web projects using HTML, CSS and JavaScript while continuously improving problem-solving skills.",
      icon: "02",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(".education-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Timeline line
      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          end: "bottom 30%",
          scrub: true,
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
      });

      // Cards
      gsap.from(".education-card", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        },
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="
        relative
        overflow-hidden
        bg-[#030811]
        px-5
        py-24
        md:px-8
        md:py-32
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-400/5
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ================= HEADER ================= */}

        <div className="education-heading mb-14">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-400" />

            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.25em]
                text-emerald-400
              "
            >
              Education
            </span>
          </div>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2
              className="
                text-4xl
                font-black
                tracking-tight
                text-white
                md:text-5xl
              "
            >
              My academic{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-emerald-400
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                "
              >
                journey.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Building a strong foundation in computer science while
              continuously developing practical skills.
            </p>
          </div>
        </div>

        {/* ================= TIMELINE ================= */}

        <div ref={timelineRef} className="relative space-y-8 md:space-y-12">
          {/* Timeline line */}
          <div
            className="
              timeline-line
              absolute
              left-[19px]
              top-5
              bottom-5
              w-px
              bg-gradient-to-b
              from-emerald-400/60
              via-emerald-400/20
              to-transparent
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {educationData.map((item, index) => (
            <div
              key={item.institution}
              className="
                education-card
                relative
                flex
                items-start
                gap-5
                md:gap-0
              "
            >
              {/* Timeline dot */}
              <div
                className="
                  relative
                  z-20
                  mt-7
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-400/30
                  bg-[#07121f]
                  text-[9px]
                  font-black
                  text-emerald-400
                  shadow-[0_0_25px_rgba(52,211,153,0.12)]
                  md:absolute
                  md:left-1/2
                  md:-translate-x-1/2
                "
              >
                {item.icon}
              </div>

              {/* Card */}
              <div
                className={`
                  w-full
                  md:w-[calc(50%-45px)]
                  ${index === 1 ? "md:ml-auto" : ""}
                `}
              >
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[#07111e]/80
                    p-6
                    shadow-xl
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-400/25
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                    md:p-7
                  "
                >
                  {/* Hover glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-emerald-400/[0.06]
                      via-transparent
                      to-cyan-400/[0.03]
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">
                    {/* Year + status */}
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="
                          text-xs
                          font-black
                          tracking-[0.15em]
                          text-emerald-400
                        "
                      >
                        {item.year}
                      </span>

                      <span
                        className="
                          rounded-full
                          border
                          border-white/[0.07]
                          bg-white/[0.03]
                          px-2.5
                          py-1
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-slate-500
                        "
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Degree */}
                    <h3
                      className="
                        mt-4
                        text-xl
                        font-black
                        leading-tight
                        text-white
                        transition-colors
                        group-hover:text-emerald-300
                      "
                    >
                      {item.degree}
                    </h3>

                    {/* Field */}
                    <p className="mt-1 text-sm font-semibold text-cyan-400/80">
                      {item.field}
                    </p>

                    {/* Institution */}
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-emerald-400">◆</span>

                      <span className="text-sm font-bold text-slate-300">
                        {item.institution}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className="
                        mt-4
                        text-sm
                        leading-6
                        text-slate-500
                      "
                    >
                      {item.description}
                    </p>

                    {/* CGPA badge */}
                    {index === 1 && (
                      <div
                        className="
                          mt-5
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-emerald-400/15
                          bg-emerald-400/[0.05]
                          px-3
                          py-2
                        "
                      >
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                          Result
                        </span>

                        <span className="text-sm font-black text-emerald-400">
                          3.89 / 4.00
                        </span>
                      </div>
                    )}

                    {/* Bottom accent */}
                    <div
                      className="
                        mt-6
                        h-px
                        w-0
                        bg-gradient-to-r
                        from-emerald-400
                        to-transparent
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <div
          className="
            education-heading
            mt-14
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-12 bg-white/[0.07]" />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-slate-600
            "
          >
            Learning never stops
          </span>

          <span className="h-px w-12 bg-white/[0.07]" />
        </div>
      </div>
    </section>
  );
};

export default Education;
