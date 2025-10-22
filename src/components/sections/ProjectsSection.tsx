import ProjectCard from "@/components/ProjectCard";
import { projects, personalInfo } from "@/data/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="container-narrow py-8 sm:py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Selected Projects
        </h2>
        <a
          href={personalInfo.githubRepos}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline"
        >
          All repos →
        </a>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            tags={project.tags}
            title={project.title}
            description={project.description}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
}
