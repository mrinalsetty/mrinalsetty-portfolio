import ProjectCard from "@/components/ProjectCard";
import { projects, personalInfo } from "@/data/constants";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-scroll-target container-narrow py-16 sm:py-20"
    >
      <div className="text-center mb-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Projects & Publications
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Innovative solutions in AI/ML, Full-Stack Development, and
              Research
            </p>
          </div>
          <a
            href={personalInfo.githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary cursor-hover hidden sm:flex items-center gap-2"
          >
            <span>All Repos</span>
            <svg
              className="w-4 h-4"
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
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard
              tags={project.tags}
              title={project.title}
              description={project.description}
              period={project.period}
              links={project.links}
            />
          </div>
        ))}
      </div>

      {/* Mobile All Repos Button */}
      <div className="mt-12 text-center sm:hidden">
        <a
          href={personalInfo.githubRepos}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary cursor-hover inline-flex items-center gap-2"
        >
          <span>View All Repositories</span>
          <svg
            className="w-4 h-4"
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
      </div>
    </section>
  );
}
