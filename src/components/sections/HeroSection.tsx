"use client";

import { personalInfo } from "@/data/constants";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isImageModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isImageModalOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isImageModalOpen) {
        setIsImageModalOpen(false);
      }
    };

    if (isImageModalOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isImageModalOpen]);

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16">
      <div className="container-narrow">
        {/* Mobile-first responsive layout */}
        <div className="space-y-6 lg:space-y-8">
          {/* ROW 1 - Mobile: Stack vertically, Desktop: 2x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group">
            {/* Profile Picture + Contact - Mobile: Full width, Desktop: 4 cols */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-3 lg:space-y-4 text-center transition-all duration-700 ease-out">
              <div className="relative mt-6 lg:mt-10 picture-hover-container group/pic">
                <div className="absolute -inset-1 bg-sky-500/20 rounded-full blur-lg group-hover/pic:bg-sky-400/25 transition-all duration-700"></div>
                <Image
                  src="/images/professionalpic.jpg"
                  alt={personalInfo.name}
                  width={280}
                  height={280}
                  className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover border-2 border-sky-500/30 shadow-xl mx-auto cursor-pointer hover:scale-102 hover:shadow-2xl hover:border-sky-400/35 transition-all duration-700 ease-out transform hover:translate-x-1"
                  priority
                  onClick={() => setIsImageModalOpen(true)}
                />
              </div>

              {/* Contact Info and Social Links - Mobile optimized */}
              <div className="w-full flex flex-col items-center space-y-2">
                <div className="text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-sky-400 transition-colors cursor-hover break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {personalInfo.phone}
                </div>
                {/* Mobile: 2x2 grid for social links, Desktop: horizontal */}
                <div className="grid grid-cols-2 gap-2 sm:flex sm:justify-center sm:gap-3 lg:gap-4 text-xs sm:text-sm">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon cursor-hover flex items-center gap-1 sm:gap-2 justify-center sm:justify-start"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="hidden sm:inline">LinkedIn</span>
                    <span className="sm:hidden">LI</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon cursor-hover flex items-center gap-1 sm:gap-2 justify-center sm:justify-start"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="hidden sm:inline">GitHub</span>
                    <span className="sm:hidden">GH</span>
                  </a>
                  <a
                    href={personalInfo.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon cursor-hover flex items-center gap-1 sm:gap-2 justify-center sm:justify-start"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                    </svg>
                    <span className="hidden sm:inline">Scholar</span>
                    <span className="sm:hidden">GS</span>
                  </a>
                  <a
                    href={personalInfo.hackerrank}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon cursor-hover flex items-center gap-1 sm:gap-2 justify-center sm:justify-start"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12C21.75 19.114 13.287 24 12 24s-9.75-4.886-10.392-6C1.002 16.885 1.002 7.115 1.608 6 2.25 4.886 10.715 0 12 0z" />
                      <text
                        x="12"
                        y="15"
                        fontSize="6"
                        textAnchor="middle"
                        fill="black"
                        fontWeight="bold"
                      >
                        HR
                      </text>
                    </svg>
                    <span className="hidden sm:inline">HackerRank</span>
                    <span className="sm:hidden">HR</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Name, Title, Seeking, About - Mobile: Full width, Desktop: 8 cols */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4 transition-all duration-700 ease-out group-hover:scale-101">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center lg:text-left">
                <span className="bg-linear-to-t from-blue-600 to-cyan-300 bg-clip-text text-transparent hover:from-blue-500 hover:to-cyan-200 hover:scale-100.5 hover:tracking-wide transition-all duration-2000 ease-out inline-block">
                  {personalInfo.name}
                </span>
              </h1>

              <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
                <h2 className="text-base sm:text-lg lg:text-xl text-slate-300 font-medium">
                  {personalInfo.title}
                </h2>

                {/* 2026 Summer Internships Banner - Mobile optimized */}
                <div className="glassmorphism rounded-xl p-3 sm:p-4 border border-blue-600/20">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="text-blue-300 font-semibold text-base sm:text-lg">
                      Seeking 2026 Summer Internships
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2">
                    AI/ML Engineering, Full-Stack Development, and GenAI
                    Research positions
                  </p>
                </div>

                <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl text-justify">
                  {personalInfo.description}
                </p>
              </div>
            </div>
          </div>

          {/* ROW 2 - Mobile: Stack vertically, Desktop: 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch transition-all duration-700 ease-out group-hover:scale-101">
            {/* Quick Actions - Mobile: Full width, Desktop: 4 cols */}
            <div className="lg:col-span-4">
              <div className="modern-card p-4 sm:p-6 h-full flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">
                  Quick Actions
                </h3>
                <div className="space-y-2 sm:space-y-3 flex-1 flex flex-col justify-center">
                  <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-lg bg-linear-to-r from-blue-600 to-blue-700 px-3 py-2 sm:px-4 sm:py-3 text-center text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:scale-[1.02] cursor-hover block"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      View Resume
                    </span>
                  </a>

                  <a
                    href="https://ieeexplore.ieee.org/document/9972172"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-lg bg-linear-to-r from-blue-600 to-blue-700 px-3 py-2 sm:px-4 sm:py-3 text-center text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:scale-[1.02] cursor-hover block"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      IEEE Research Paper
                    </span>
                  </a>

                  <a
                    href="#projects"
                    className="group relative overflow-hidden rounded-lg bg-linear-to-r from-blue-500/10 to-blue-600/10 px-4 py-3 text-center text-sm font-medium text-blue-300 border border-blue-500/30 transition-all duration-200 hover:bg-linear-to-r hover:from-blue-500/20 hover:to-blue-600/20 hover:border-blue-400/50 hover:scale-[1.02] cursor-hover block"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                      View Projects
                    </span>
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="group relative overflow-hidden rounded-lg bg-linear-to-r from-slate-700/50 to-slate-600/50 px-4 py-3 text-center text-sm font-medium text-slate-300 border border-slate-600/30 transition-all duration-200 hover:bg-linear-to-r hover:from-slate-600/60 hover:to-slate-500/60 hover:border-slate-500/50 hover:text-white hover:scale-[1.02] cursor-hover block"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Get in Touch
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Row 2, Col 2 - Core Expertise */}
            <div className="lg:col-span-8">
              <div className="modern-card p-6 h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Core Expertise
                </h3>
                <div className="space-y-4 flex-1 flex flex-col justify-center">
                  {/* AI/ML & Agentic AI */}
                  <div>
                    <h4 className="text-sm font-medium text-blue-300 mb-2">
                      AI/ML & Agentic AI
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Agentic AI",
                        "AI Agents",
                        "GenAI",
                        "LangGraph",
                        "LangChain",
                        "AI/ML",
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-blue-500/10 rounded-lg text-xs font-medium text-blue-300 
                                   border border-blue-500/20 hover:bg-blue-500/15 transition-all duration-200 cursor-hover"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Programming & Technologies */}
                  <div>
                    <h4 className="text-sm font-medium text-blue-300 mb-2">
                      Development Focus
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Full-stack GenAI applications",
                        "Multi-agent systems",
                        "Research & Innovation",
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-blue-500/10 rounded-lg text-xs font-medium text-blue-300 
                                   border border-blue-500/20 hover:bg-blue-500/15 transition-all duration-200 cursor-hover"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Development Focus */}
                  <div>
                    <h4 className="text-sm font-medium text-blue-300 mb-2">
                      Programming & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Python",
                        "ReactJS",
                        "JavaScript",
                        "LLM",
                        "Azure",
                        "Azure ML Studio",
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-blue-500/10 rounded-lg text-xs font-medium text-blue-300 
                                   border border-blue-500/20 hover:bg-blue-500/15 transition-all duration-200 cursor-hover"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Picture Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div
            className="relative max-w-2xl max-h-[80vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-3 -right-3 z-10 bg-slate-800/90 hover:bg-slate-700 border border-slate-600 rounded-full p-2.5 shadow-xl transition-all duration-200 hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-slate-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              src="/images/professionalpic.jpg"
              alt={personalInfo.name}
              width={600}
              height={600}
              className="rounded-xl shadow-2xl max-w-full max-h-full object-contain border border-slate-700/50"
            />
          </div>
        </div>
      )}
    </section>
  );
}
