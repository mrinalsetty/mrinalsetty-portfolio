import Card from "@/components/ui/Card";
import { skillCategories } from "@/data/constants";

export default function SkillsSection() {
  return (
    <section id="skills" className="container-narrow py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <h4 className="font-semibold">{category.title}</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {category.skills}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
