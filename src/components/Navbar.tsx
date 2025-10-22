export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 glassmorphism border-b border-blue-500/15">
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16">
          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {[
              { href: "#", label: "Home" },
              { href: "#education", label: "Education" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#certifications", label: "Certifications" },
            ].map((item) => (
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

          {/* CTA Button */}
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium 
                     rounded-lg transition-all duration-200 cursor-hover hover:shadow-lg 
                     hover:shadow-blue-500/25 border border-blue-500/30 hover:border-blue-400/50"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
