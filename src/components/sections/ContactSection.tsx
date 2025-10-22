import Card from "@/components/ui/Card";
import LinkButton from "@/components/ui/LinkButton";
import { personalInfo } from "@/data/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="container-narrow py-16 sm:py-20">
      <Card className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Let&apos;s build something intelligent.
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Open to internships, research, and builder roles in AI/ML and
          full-stack engineering.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 justify-center">
          <LinkButton
            href={`mailto:${personalInfo.email}`}
            variant="primary"
            className="px-4 py-2 rounded-xl"
          >
            Email me
          </LinkButton>
          <LinkButton
            href={personalInfo.linkedin}
            external
            className="px-4 py-2 rounded-xl"
          >
            LinkedIn
          </LinkButton>
          <LinkButton
            href={personalInfo.github}
            external
            className="px-4 py-2 rounded-xl"
          >
            GitHub
          </LinkButton>
        </div>
      </Card>
      <footer className="mt-12 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {personalInfo.name}.
      </footer>
    </section>
  );
}
