import type { ProjectLink } from "@/types";

interface ProjectCardProps {
  tags: string;
  title: string;
  description: string;
  period?: string;
  links: ProjectLink[];
}

export default function ProjectCard({
  tags,
  title,
  description,
  period,
  links,
}: ProjectCardProps) {
  return (
    <div className="modern-card p-6 hover-lift cursor-hover">
      {/* Header */}
      <div className="flex justify-between items-start gap-2 mb-4">
        <div className="flex flex-wrap gap-2">
          {tags.split(" · ").map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-lg
                       bg-blue-500/10 text-blue-300 border border-blue-500/20
                       hover:bg-blue-500/15 transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
        {period && (
          <div className="text-xs font-medium text-slate-400 px-2 py-1 rounded-lg bg-slate-800/60">
            {period}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-300 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mb-6">
        {description}
      </p>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-blue-500/15">
        {links.map((link, index) =>
          link.disabled ? (
            <span key={index} className="text-sm text-slate-500">
              {link.label}
            </span>
          ) : (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200 cursor-hover text-blue-300 hover:text-white hover:bg-blue-500/15 border border-blue-500/20 hover:border-blue-400/40"
            >
              {link.label}
              <svg
                className="inline w-3 h-3 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )
        )}
      </div>
    </div>
  );
}
