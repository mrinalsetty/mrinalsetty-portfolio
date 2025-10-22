import Card from "@/components/ui/Card";
import { certifications } from "@/data/constants";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="container-narrow py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold">Certifications</h2>
      <Card className="mt-6">
        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-slate-400 mt-1">•</span>
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
