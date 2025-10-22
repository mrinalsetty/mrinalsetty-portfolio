import { education } from "@/data/constants";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="section-scroll-target container-narrow py-16 sm:py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
          Education
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Academic foundation in Computer Science and Artificial Intelligence
        </p>
      </div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="timeline-card">
            <div className="flex flex-wrap justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  {edu.institution}
                </h3>
                <p className="text-slate-300 mb-2">{edu.degree}</p>
                <div className="text-sm text-slate-400">{edu.location}</div>
              </div>
              <div className="text-right">
                <div className="text-blue-300 font-semibold text-sm bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/30 whitespace-nowrap">
                  {edu.period}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
