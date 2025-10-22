export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 glassmorphism border-b border-white/10 dark:border-white/5">
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
          >
            mrinalsetty.dev
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "#education", label: "Education" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#certifications", label: "Certifications" },
            ].map((item) => (
                                       transition-colors duration-200 relative">
                {item.label}
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="btn-modern btn-primary text-sm"
          >
            <span className="relative z-10">Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
}