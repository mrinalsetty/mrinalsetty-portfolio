import { personalInfo } from "@/data/constants";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Profile Section */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000"></div>
              <Image
                src="/images/professionalpic.jpg"
                alt={personalInfo.name}
                width={280}
                height={280}
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-white dark:border-gray-800"
                priority
              />
            </div>

            {/* Quick Contact */}
            <div className="text-center lg:text-left space-y-2">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {personalInfo.phone}
              </div>
              <div className="flex justify-center lg:justify-start gap-4 text-sm">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
                >
                  GitHub
                </a>
                <a
                  href={personalInfo.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
                >
                  Scholar
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 font-medium">
                  {personalInfo.title}
                </h2>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                  {personalInfo.description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern btn-primary"
              >
                <span className="relative z-10">View Resume</span>
              </a>

              <a href="#projects" className="btn-modern btn-secondary">
                <span className="relative z-10">View Projects</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-modern btn-ghost"
              >
                <span className="relative z-10">Get in Touch</span>
              </a>
            </div>

            {/* Quick Skills Preview */}
            <div className="modern-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {personalInfo.quickFacts.map((fact, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 
                             rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 
                             border border-blue-200/50 dark:border-blue-800/50"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
