// Project data
export const projects = [
  {
    id: "socialcrew-ai",
    tags: "CrewAI · RAG · Next.js",
    title: "SocialCrew AI",
    description:
      "Autonomous social media team: agents research trends, generate posts, and analyze performance in real time.",
    links: [
      { label: "Demo (coming soon)", href: "#", disabled: true },
      { label: "Source", href: "#", disabled: true },
    ],
  },
  {
    id: "survey-analysis-agent",
    tags: "LangGraph · Flask · React",
    title: "Survey Analysis Agent (Deloitte R&D)",
    description:
      "Full-stack GenAI app with LLM reasoning, RAG retrieval, and agentic orchestration. Deployed on Azure.",
    links: [{ label: "Case study", href: "#", disabled: true }],
  },
  {
    id: "technexus",
    tags: "Next.js · MongoDB",
    title: "TechNexus",
    description:
      "Social network for innovators: role-based access, dynamic feeds, and real-time search.",
    links: [
      { label: "Demo (coming soon)", href: "#", disabled: true },
      { label: "Source", href: "#", disabled: true },
    ],
  },
  {
    id: "sound-share",
    tags: "IEEE · C++ · Python · Go",
    title: "Sound Share (IEEE)",
    description:
      "P2P file-sharing over sound frequencies — published at IEEE GCAT 2022.",
    links: [
      {
        label: "Paper",
        href: "https://ieeexplore.ieee.org/document/9972172",
        disabled: false,
      },
    ],
  },
];

// Skills data
export const skillCategories = [
  {
    title: "AI & Data",
    skills:
      "Agentic AI, LLMs, RAG, LangGraph, LangChain, CrewAI, ML, NLP, Data Science",
  },
  {
    title: "Web & Systems",
    skills: "Next.js, React, Node, Flask, REST APIs, MongoDB, SQL",
  },
  {
    title: "Cloud & DevOps",
    skills: "Azure, GCP, Docker, Kubernetes, Jenkins, CI/CD",
  },
];

// Experience data
export const experiences = [
  {
    title: "GenAI Engineer",
    company: "Deloitte USI",
    period: "Jan 2023 – Aug 2025",
    achievements: [
      "Built multi-agent GenAI applications in the Agentic AI Global Incubator.",
      "Led Survey Analysis Agent (LangGraph, RAG, Flask + React).",
      "Data/ML pipelines on Azure; productionizing models and ETL.",
    ],
  },
  {
    title: "Full-Stack Intern",
    company: "CAST Software",
    period: "Feb 2022 – Aug 2022",
    description:
      "Shipped features across React, Redux-Saga, Docker, Cypress and OGMA graph visualizations.",
  },
];

// Personal info
export const personalInfo = {
  name: "Mrinal Srinath Setty",
  title: "GenAI Engineer @ Deloitte USI · MSCS @ Northeastern '27",
  description: "Building Agentic AI, LLM and full-stack systems that ship.",
  email: "mrinalsetty2000@gmail.com",
  linkedin: "https://linkedin.com/in/mrinalsetty",
  github: "https://github.com/mrinalsetty",
  githubRepos: "https://github.com/mrinalsetty?tab=repositories",
  quickFacts: [
    "Agentic AI · LangGraph · LangChain · CrewAI",
    "Python · TypeScript · React/Next.js",
    "Azure · Docker · Kubernetes · CI/CD",
  ],
};
