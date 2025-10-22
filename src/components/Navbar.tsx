export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a className="font-semibold tracking-tight" href="#">
          mrinalsetty.com
        </a>
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#projects" className="hover:opacity-80">
            Projects
          </a>
          <a href="#skills" className="hover:opacity-80">
            Skills
          </a>
          <a href="#experience" className="hover:opacity-80">
            Experience
          </a>
          <a href="#contact" className="hover:opacity-80">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
