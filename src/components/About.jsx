"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".code-window", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: 70,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
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
          -left-40
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-emerald-400/5
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="about-reveal mb-12">
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
              About Me
            </span>
          </div>

          <h2
            className="
              max-w-2xl
              text-4xl
              font-black
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            Turning ideas into{" "}
            <span
              className="
                bg-gradient-to-r
                from-emerald-400
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              digital experiences.
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* LEFT */}
          <div>
            <p
              className="
                about-reveal
                text-lg
                font-semibold
                leading-8
                text-slate-200
              "
            >
              Hi, I&apos;m <span className="text-emerald-400">Jahid Hasan</span>
              , a Junior Web Developer and CSE student passionate about building
              modern web applications.
            </p>

            <p
              className="
                about-reveal
                mt-5
                text-sm
                leading-7
                text-slate-400
                md:text-base
              "
            >
              I enjoy creating clean, responsive and interactive experiences
              using React, Next.js and modern web technologies. I&apos;m
              continuously learning and improving my skills by building
              real-world projects.
            </p>

            {/* Mini info */}
            <div
              className="
                about-reveal
                mt-8
                grid
                grid-cols-2
                gap-3
              "
            >
              <div
                className="
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-4
                  transition-all
                  hover:border-emerald-400/20
                  hover:bg-emerald-400/[0.03]
                "
              >
                <p className="text-xl font-black text-white">CSE</p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Student
                </p>
              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-4
                  transition-all
                  hover:border-cyan-400/20
                  hover:bg-cyan-400/[0.03]
                "
              >
                <p className="text-xl font-black text-white">MERN</p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Development
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="about-reveal mt-7 flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "Tailwind",
                "MongoDB",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-3
                    py-2
                    text-[10px]
                    font-bold
                    text-slate-400
                    transition-all
                    hover:border-emerald-400/30
                    hover:text-emerald-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT - CODE WINDOW */}
          <div className="code-window relative">
            {/* Glow */}
            <div
              className="
                absolute
                -inset-4
                rounded-3xl
                bg-emerald-400/5
                blur-2xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#07101d]/90
                shadow-2xl
                backdrop-blur-xl
              "
            >
              {/* Window header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.07]
                  px-5
                  py-3.5
                "
              >
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>

                <span
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.2em]
                    text-slate-500
                  "
                >
                  stack.json
                </span>
              </div>

              {/* Code */}
              <div
                className="
                  p-6
                  font-mono
                  text-[12px]
                  leading-7
                  md:p-7
                  md:text-[13px]
                "
              >
                <div className="text-slate-500">{"{"}</div>

                <div className="pl-4">
                  <span className="text-cyan-300">&quot;languages&quot;</span>
                  <span className="text-slate-500">: [</span>

                  <span className="text-emerald-300">
                    &quot;JavaScript&quot;
                  </span>
                  <span className="text-slate-500">, </span>

                  <span className="text-emerald-300">&quot;C++&quot;</span>

                  <span className="text-slate-500">],</span>
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">&quot;frontend&quot;</span>
                  <span className="text-slate-500">: [</span>
                </div>

                <div className="pl-8 text-emerald-300">&quot;React&quot;,</div>

                <div className="pl-8 text-emerald-300">
                  &quot;Next.js&quot;,
                </div>

                <div className="pl-8 text-emerald-300">
                  &quot;Tailwind CSS&quot;
                </div>

                <div className="pl-4 text-slate-500">],</div>

                <div className="pl-4">
                  <span className="text-cyan-300">&quot;backend&quot;</span>
                  <span className="text-slate-500">: [</span>

                  <span className="text-emerald-300">&quot;Node.js&quot;</span>
                  <span className="text-slate-500">, </span>

                  <span className="text-emerald-300">&quot;Express&quot;</span>

                  <span className="text-slate-500">],</span>
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">&quot;database&quot;</span>
                  <span className="text-slate-500">: [</span>

                  <span className="text-emerald-300">&quot;MongoDB&quot;</span>

                  <span className="text-slate-500">],</span>
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">&quot;status&quot;</span>
                  <span className="text-slate-500">: </span>

                  <span className="text-emerald-300">
                    &quot;Always learning&quot;
                  </span>
                </div>

                <div className="text-slate-500">{"}"}</div>
              </div>

              {/* Bottom status */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  border-t
                  border-white/[0.07]
                  px-6
                  py-3
                "
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                  Currently learning & building
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="
            about-reveal
            mt-16
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-emerald-400/20
            to-transparent
          "
        />
      </div>
    </section>
  );
};

export default About;
