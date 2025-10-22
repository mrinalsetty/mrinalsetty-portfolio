import Card from "@/components/ui/Card";
import { experiences } from "@/data/constants";

export default function ExperienceSection() {
  return (
    <section id="experience" className="container-narrow py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
      <div className="mt-6 space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold">
                {exp.title} — {exp.company}
              </h3>
              <span className="text-sm text-slate-500">{exp.period}</span>
            </div>
            {exp.achievements ? (
              <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {exp.description}
              </p>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
