import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="container-narrow py-16 sm:py-24 grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-2">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Mrinal Srinath Setty
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            GenAI Engineer @ Deloitte USI · MSCS @ Northeastern &apos;27
            <br />
            Building <strong>Agentic AI</strong>, <strong>LLM</strong> and{" "}
            <strong>full-stack</strong> systems that ship.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:mrinalsetty2000@gmail.com"
              className="px-3 py-1.5 rounded-lg border border-slate-300/70 dark:border-slate-700/70 hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/mrinalsetty"
              target="_blank"
              className="px-3 py-1.5 rounded-lg border border-slate-300/70 dark:border-slate-700/70 hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mrinalsetty"
              target="_blank"
              className="px-3 py-1.5 rounded-lg border border-slate-300/70 dark:border-slate-700/70 hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
            >
              GitHub
            </a>
            <a
              href="#projects"
              className="px-3 py-1.5 rounded-lg border border-slate-300/70 dark:border-slate-700/70 hover:bg-slate-100/70 dark:hover:bg-slate-800/70"
            >
              View projects
            </a>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="card">
            <h3 className="font-semibold mb-3">Quick facts</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>Agentic AI · LangGraph · LangChain · CrewAI</li>
              <li>Python · TypeScript · React/Next.js</li>
              <li>Azure · Docker · Kubernetes · CI/CD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container-narrow py-8 sm:py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Selected Projects
          </h2>
          <a
            href="https://github.com/mrinalsetty?tab=repositories"
            target="_blank"
            className="text-sm underline"
          >
            All repos →
          </a>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {/* SocialCrew AI */}
          <article className="card hover:shadow-lg transition">
            <div className="text-xs uppercase tracking-wide text-slate-500">
              CrewAI · RAG · Next.js
            </div>
            <h3 className="mt-2 text-lg font-semibold">SocialCrew AI</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Autonomous social media team: agents research trends, generate
              posts, and analyze performance in real time.
            </p>
            <div className="mt-3 flex gap-3 text-sm">
              <a className="underline" href="#" aria-disabled="true">
                Demo (coming soon)
              </a>
              <a className="underline" href="#" aria-disabled="true">
                Source
              </a>
            </div>
          </article>

          {/* Survey Analysis Agent */}
          <article className="card hover:shadow-lg transition">
            <div className="text-xs uppercase tracking-wide text-slate-500">
              LangGraph · Flask · React
            </div>
            <h3 className="mt-2 text-lg font-semibold">
              Survey Analysis Agent (Deloitte R&D)
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Full-stack GenAI app with LLM reasoning, RAG retrieval, and
              agentic orchestration. Deployed on Azure.
            </p>
            <div className="mt-3 flex gap-3 text-sm">
              <a className="underline" href="#" aria-disabled="true">
                Case study
              </a>
            </div>
          </article>

          {/* TechNexus */}
          <article className="card hover:shadow-lg transition">
            <div className="text-xs uppercase tracking-wide text-slate-500">
              Next.js · MongoDB
            </div>
            <h3 className="mt-2 text-lg font-semibold">TechNexus</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Social network for innovators: role-based access, dynamic feeds,
              and real-time search.
            </p>
            <div className="mt-3 flex gap-3 text-sm">
              <a className="underline" href="#" aria-disabled="true">
                Demo (coming soon)
              </a>
              <a className="underline" href="#" aria-disabled="true">
                Source
              </a>
            </div>
          </article>

          {/* Sound Share */}
          <article className="card hover:shadow-lg transition">
            <div className="text-xs uppercase tracking-wide text-slate-500">
              IEEE · C++ · Python · Go
            </div>
            <h3 className="mt-2 text-lg font-semibold">Sound Share (IEEE)</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              P2P file-sharing over sound frequencies — published at IEEE GCAT
              2022.
            </p>
            <div className="mt-3 flex gap-3 text-sm">
              <a
                className="underline"
                href="https://ieeexplore.ieee.org/document/9972172"
                target="_blank"
              >
                Paper
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="container-narrow py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card">
            <h4 className="font-semibold">AI & Data</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Agentic AI, LLMs, RAG, LangGraph, LangChain, CrewAI, ML, NLP, Data
              Science
            </p>
          </div>
          <div className="card">
            <h4 className="font-semibold">Web & Systems</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Next.js, React, Node, Flask, REST APIs, MongoDB, SQL
            </p>
          </div>
          <div className="card">
            <h4 className="font-semibold">Cloud & DevOps</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Azure, GCP, Docker, Kubernetes, Jenkins, CI/CD
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="container-narrow py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-6">
          <div className="card">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold">GenAI Engineer — Deloitte USI</h3>
              <span className="text-sm text-slate-500">
                Jan 2023 – Aug 2025
              </span>
            </div>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <li>
                Built multi-agent GenAI applications in the Agentic AI Global
                Incubator.
              </li>
              <li>
                Led Survey Analysis Agent (LangGraph, RAG, Flask + React).
              </li>
              <li>
                Data/ML pipelines on Azure; productionizing models and ETL.
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold">
                Full-Stack Intern — CAST Software
              </h3>
              <span className="text-sm text-slate-500">
                Feb 2022 – Aug 2022
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Shipped features across React, Redux-Saga, Docker, Cypress and
              OGMA graph visualizations.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container-narrow py-16 sm:py-20">
        <div className="card text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Let’s build something intelligent.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Open to internships, research, and builder roles in AI/ML and
            full-stack engineering.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:mrinalsetty2000@gmail.com"
              className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900"
            >
              Email me
            </a>
            <a
              href="https://linkedin.com/in/mrinalsetty"
              target="_blank"
              className="px-4 py-2 rounded-xl border border-slate-300/70 dark:border-slate-700/70"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mrinalsetty"
              target="_blank"
              className="px-4 py-2 rounded-xl border border-slate-300/70 dark:border-slate-700/70"
            >
              GitHub
            </a>
          </div>
        </div>
        <footer className="mt-12 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Mrinal Srinath Setty.
        </footer>
      </section>
    </>
  );
}
