import type { Project, SkillCategory, Experience, PersonalInfo } from "@/types";

// Project data
export const projects: Project[] = [
  {
    id: "sound-share",
    tags: "IEEE · C++ · Python · Go",
    title: "Sound Share: P2P File-Sharing System",
    period: "OCT 2021 – OCT 2022",
    description:
      "IEEE Research Paper (document number 9972172) – Presented in the 3rd Global Conference for Advancement in Technology (GCAT). Web based application to enable users to share data files between devices using sound, with advanced efficiency and security of peer-to-peer file sharing. Developed using C++, Python and Golang.",
    links: [
      {
        label: "IEEE Research Paper",
        href: "https://ieeexplore.ieee.org/document/9972172",
        disabled: false,
      },
    ],
  },
  {
    id: "survey-analysis-agent",
    tags: "LangGraph · Flask · React · RAG",
    title: "Survey Analysis Agent",
    period: "MAR 2025 – MAY 2025",
    description:
      "A full-stack Generative AI application leveraging multiple AI Agents built using the LangGraph Agentic AI Framework. The backend, powered by Flask, integrates LangChain and RAG for intelligent reasoning and contextual retrieval. The system utilizes Vector Databases, Gemini LLM and Guardrails for high-performance, privacy-safe AI automation. The ReactJS frontend delivers an intuitive, responsive interface for insights.",
    links: [
      {
        label: "Deloitte R&D Innovation Initiative Project",
        href: "",
        disabled: true,
      },
    ],
  },
  {
    id: "socialcrew-ai",
    tags: "CrewAI · RAG · Next.js · Tailwind CSS",
    title: "SocialCrew AI",
    period: "OCT 2025 – PRESENT",
    description:
      "A social media automation platform built on the CrewAI Agentic AI framework, where multiple AI Agents collaborate to research trends, recommend niche topics, customize social posts, analyze performance, and suggest optimizations in real time. Leveraging RAG for contextual grounding and personalized content creation. Built with Next.js (frontend), Node.js API routes (backend), and Tailwind CSS for a responsive UI.",
    links: [
      {
        label: "Demo (Available Soon)",
        href: "",
        disabled: true,
      },
    ],
  },
  {
    id: "technexus",
    tags: "Next.js · MongoDB · Node.js · Tailwind CSS",
    title: "TechNexus: Tech Social Network",
    period: "OCT 2025 – PRESENT",
    description:
      "A full-stack Next.js social platform for innovators and developers, enabling them to connect, showcase projects, and network in real time. The platform features dynamic content rendering, role-based access control, and API-powered real-time search, with Tailwind CSS for responsive, modern UI design, and Node.js with MongoDB ensuring secure, scalable, and efficient data management.",
    links: [
      {
        label: "Demo (Available Soon)",
        href: "",
        disabled: true,
      },
    ],
  },
  {
    id: "customer-purchase-prediction",
    tags: "Python · Hadoop · Azure ML Studio",
    title: "Customer Purchase Prediction",
    period: "JAN 2023 – MAR 2023",
    description:
      "Web-based application for customer purchase prediction using Multiple Linear Regression, leveraging product categories and user demographics to help clients target potential buyers with personalized discounts. Built with Python, Hadoop, and Azure ML Studio.",
    links: [{ label: "Deloitte Capstone Project", href: "", disabled: true }],
  },
];

// Skills data
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages & Databases",
    skills: "C, C++, Java, Python, JavaScript, Advanced SQL, Hive, MongoDB",
  },
  {
    title: "AI & Data",
    skills:
      "Agentic AI, AI Agents, Generative AI, LangGraph, LangChain, CrewAI, Large Language Model (LLM), RAG (Retrieval-Augmented Generation), Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing (NLP), Data Science, Data Engineering, Big Data, PySpark, Hadoop, Azure ML Studio, Guardrails and Vector Databases",
  },
  {
    title: "Technical Competencies",
    skills:
      "Advanced Algorithms, Data Structures, Problem Solving, Object-oriented Programming, SDLC",
  },
  {
    title: "Web Development",
    skills:
      "Next.js, ReactJS, Redux, Redux-saga, REST API, Tailwind CSS, Bootstrap, UI & UX, PHP, Cypress, HTML, CSS",
  },
  {
    title: "Cloud & DevOps",
    skills:
      "Cloud Computing, Azure, Google Cloud, Oracle Cloud Infrastructure (OCI), Git, Jenkins, Docker, Kubernetes, Azure DevOps",
  },
  {
    title: "Soft Skills",
    skills: "Effective Communication, Team Management, Leadership",
  },
];

// Experience data
export const experiences: Experience[] = [
  {
    title: "Full-Stack GenAI Engineer",
    company: "Deloitte USI",
    period: "JAN 2023 – AUG 2025",
    achievements: [
      "Spearheaded the Development of full-stack GenAI applications as part of Deloitte's <strong>Agentic AI Global Incubator</strong>.",
      "Co-led the development team to drive the successful completion of Deloitte's <strong>R&D Innovation Initiative Project</strong> — Survey Analysis Agent, a full-stack GenAI application leveraging multiple AI Agents built using the LangGraph Agentic AI framework.",
      "Successfully contributed to multiple projects, demonstrating expertise as a GenAI Engineer, Data Scientist, Data Engineer & Full Stack Developer.",
      "Led the team and played a pivotal role in the implementation and enhancement of the Customer Purchase Prediction ML model.",
      "Designed & implemented an automation solution for Exadata ingestion – significantly improved the overall process efficiency by more than 50%.",
      "Achieved significant milestones playing a key role in the EDP 2.0 & EDW 2.0 initiatives, ingestion of OGG-based source systems and, development of end-to-end ETL & Orchestration pipelines, managing all the processes end-to-end.",
    ],
  },
  {
    title: "Full Stack Engineer Intern",
    company: "CAST Software",
    period: "FEB 2022 – AUG 2022",
    tags: ["French Global Product-based company"],
    achievements: [
      "Collaborated directly with the Director of Product Management to design and deliver key product features and major enhancements in CAST Imaging, significantly improving functionality, product reliability, and user experience.",
      "Developed automation testing scripts and contributed across all phases of the SDLC to ensure smooth, high-quality releases.",
    ],
  },
];

// Personal info
export const personalInfo: PersonalInfo = {
  name: "Mrinal Setty",
  title:
    "Full-Stack GenAI Engineer with a total work experience of about 3+ years",
  description:
    "Spearheaded the Development of full-stack GenAI applications as part of the Deloitte's Agentic AI Global Incubator. Co-led and contributed to the development of Deloitte's multiple R&D innovation initiatives involving full-stack Generative AI applications powered by multi-agent systems built using the Agentic AI Frameworks. Deeply passionate about AI and constantly exploring opportunities to work on projects and roles that push the boundaries of what intelligent systems can do.",
  email: "mrinalsetty2000@gmail.com",
  phone: "+1 (617) 963-9208",
  linkedin: "https://linkedin.com/in/mrinalsetty",
  github: "https://github.com/mrinalsetty",
  githubRepos: "https://github.com/mrinalsetty?tab=repositories",
  googleScholar: "https://scholar.google.com/citations?user=wgU5qAsAAAAJ&hl=en",
  hackerrank: "https://www.hackerrank.com/profile/mrinalsetty",
  resume:
    "https://drive.google.com/file/d/1Lo5yKw0Uns0ajpXkIykLwLjOAMRjDs8_/view?usp=drive_link",
  quickFacts: [
    "Agentic AI, AI Agents, GenAI, LangGraph, LangChain, AI/ML",
    "Python, ReactJS, JavaScript, LLM, Azure, Azure ML Studio",
    "Full-stack GenAI applications · Multi-agent systems",
  ],
};

// Education data
export const education = [
  {
    institution: "Northeastern University, Khoury College of Computer Sciences",
    degree:
      "Master of Science in Computer Science (Focus: Artificial Intelligence)",
    period: "SEP 2025-MAY 2027",
    location: "Boston, MA",
  },
  {
    institution: "The National Institute of Engineering",
    degree:
      "Bachelor of Engineering in Computer Science and Engineering. CGPA: 8.75/10 (Distinction)",
    period: "2018-2022",
    location: "Mysore, India",
  },
];

// Certifications data
export const certifications = [
  "Deloitte AI Certified by the Deloitte AI Academy",
  "IIT Roorkee Certified: Artificial Intelligence and Machine Learning",
  "Oracle Certified: Generative AI Professional",
  "Microsoft Certified: Azure Data Scientist Associate, Azure Data Engineer Associate",
  "Microsoft Certified: Azure AI Fundamentals, Data Fundamentals, Azure Fundamentals",
  "Google Certified: Digital Cloud Leader",
];
