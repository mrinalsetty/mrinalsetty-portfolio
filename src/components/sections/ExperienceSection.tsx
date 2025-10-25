import { experiences } from "@/data/constants";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-scroll-target container-narrow py-16 sm:py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
          Professional Experience
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Building the future with Generative AI and Full-Stack Engineering
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-card">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-300 font-semibold whitespace-nowrap">
                    {exp.company}
                  </div>
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium
                                   bg-slate-800/40 text-slate-300 border border-blue-600/20
                                   hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30
                                   transition-all duration-200 cursor-default backdrop-blur-sm whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-blue-300 font-semibold text-sm bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/30 whitespace-nowrap">
                {exp.period}
              </div>
            </div>

            {exp.achievements ? (
              <ul className="space-y-2 text-slate-300">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-2 text-xs">▶</span>
                    <span
                      className="text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: achievement }}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
