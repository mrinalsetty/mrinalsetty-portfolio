import Card from "@/components/ui/Card";
import { education } from "@/data/constants";

export default function EducationSection() {
  return (
    <section id="education" className="container-narrow py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold">Education</h2>
      <div className="mt-6 space-y-6">
        {education.map((edu, index) => (
          <Card key={index}>
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <h3 className="font-semibold">{edu.institution}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {edu.degree}
                </p>
              </div>
              <div className="text-right text-sm text-slate-500">
                <div>{edu.period}</div>
                <div>{edu.location}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
