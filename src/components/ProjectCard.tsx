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
    <div className="modern-card p-6 hover:scale-[1.02] transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-start gap-2 mb-4">
        <div className="flex flex-wrap gap-2">
          {tags.split(" · ").map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-md
                       bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300
                       border border-blue-200/50 dark:border-blue-800/50"
            >
              {tag}
            </span>
          ))}
        </div>
        {period && (
          <div
            className="text-xs font-medium text-slate-500 dark:text-slate-400 
                        px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800"
          >
            {period}
          </div>
        )}
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 
                   hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
        {description}
      </p>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            {...(link.disabled
              ? {
                  "aria-disabled": "true",
                  className: "opacity-50 cursor-not-allowed",
                }
              : { target: "_blank", rel: "noopener noreferrer" })}
            className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200 ${
              link.disabled
                ? "text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800"
                : "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/30"
            }`}
          >
            {link.label}
            {!link.disabled && (
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
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
