import Card from "@/components/ui/Card";
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
    <Card hover>
      <div className="flex justify-between items-start gap-2 mb-2">
        <div className="text-xs uppercase tracking-wide text-slate-500">
          {tags}
        </div>
        {period && (
          <div className="text-xs text-slate-500 font-medium">{period}</div>
        )}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>
      <div className="mt-3 flex gap-3 text-sm">
        {links.map((link, index) => (
          <a
            key={index}
            className="underline"
            href={link.href}
            {...(link.disabled
              ? { "aria-disabled": "true" }
              : { target: "_blank" })}
          >
            {link.label}
          </a>
        ))}
      </div>
    </Card>
  );
}
