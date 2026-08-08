"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  // Contact info
  const myEmail = "jahidsharuar2021@gmail.com";
  const myLocation = "Netrokona, Dhaka, Bangladesh";
  const myWork = "Web design & builds, consulting & collaboration";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#050811] px-4 py-16 text-slate-200 md:px-8 md:py-24 flex items-center justify-center"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Contact
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Let&apos;s work together.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
            Have a project, a performance problem, or just want to talk shop?
            Drop me a line.
          </p>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid w-full gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* LEFT COLUMN / INFO CARDS */}
          <div className="flex flex-col gap-4">
            {/* Card 1: Email */}
            <div className="group flex items-center justify-between rounded-2xl border border-slate-800/80 bg-[#0b1120] p-5 transition-all hover:border-slate-700">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    EMAIL
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {myEmail}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                type="button"
                title="Copy Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/40 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"
              >
                {copied ? (
                  <span className="text-[10px] text-emerald-400 font-medium">
                    Copied!
                  </span>
                ) : (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Card 2: Location */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-800/80 bg-[#0b1120] p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  LOCATION
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  {myLocation}
                </p>
              </div>
            </div>

            {/* Card 3: Work */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-800/80 bg-[#0b1120] p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  WORK
                </p>
                <p className="mt-0.5 text-sm font-semibold leading-snug text-white">
                  {myWork}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN / FORM */}
          <div className="rounded-2xl border border-slate-800/80 bg-[#0b1120] p-6 md:p-8">
            <form onSubmit={sendEmail} className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[11px] font-mono uppercase tracking-wider text-slate-400"
                >
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-800 bg-[#060a14] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-mono uppercase tracking-wider text-slate-400"
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-800 bg-[#060a14] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11px] font-mono uppercase tracking-wider text-slate-400"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className="h-36 w-full resize-none rounded-xl border border-slate-800 bg-[#060a14] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all"
                  minLength={10}
                  maxLength={1000}
                  required
                />
                <p className="mt-2 text-[11px] text-slate-500">
                  10–1000 characters.
                </p>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00d2b4] py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/10 transition-all hover:bg-[#00e6c5] active:scale-[0.99]"
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
