import Card from "@/components/ui/Card";
import LinkButton from "@/components/ui/LinkButton";
import { personalInfo } from "@/data/constants";

export default function HeroSection() {
  return (
    <section className="container-narrow py-16 sm:py-24 grid md:grid-cols-3 gap-10 items-center">
      <div className="md:col-span-2">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          {personalInfo.name}
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {personalInfo.title}
          <br />
          {personalInfo.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={`mailto:${personalInfo.email}`}>Email</LinkButton>
          <LinkButton href={personalInfo.linkedin} external>
            LinkedIn
          </LinkButton>
          <LinkButton href={personalInfo.github} external>
            GitHub
          </LinkButton>
          <LinkButton href="#projects">View projects</LinkButton>
        </div>
      </div>
      <div className="md:col-span-1">
        <Card>
          <h3 className="font-semibold mb-3">Quick facts</h3>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {personalInfo.quickFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
