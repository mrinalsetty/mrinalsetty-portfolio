"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#activities", label: "Activities" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glassmorphism border-b border-blue-500/15">
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="text-lg font-bold text-white">Mrinal Setty</div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-400 hover:text-blue-300 
                         transition-all duration-200 cursor-hover relative group"
              >
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 
                               transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a
            href="#contact"
            className="hidden lg:block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium 
                     rounded-lg transition-all duration-200 cursor-hover hover:shadow-lg 
                     hover:shadow-blue-500/25 border border-blue-500/30 hover:border-blue-400/50"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-blue-500/15">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-blue-300 
                         hover:bg-slate-800/30 rounded-lg transition-all duration-200 cursor-hover"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mx-4 mt-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium 
                       rounded-lg transition-all duration-200 cursor-hover text-center"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
