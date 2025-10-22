"use client";

import { skillCategories } from "@/data/constants";

export default function SkillsSection() {
  const getSkillsArray = (skillsString: string) => {
    return skillsString.split(", ").map((skill) => skill.trim());
  };

  // Separate categories into different rows
  const aiDataCategory = skillCategories.find(
    (cat) => cat.title === "AI & Data"
  );
  const softSkillsCategory = skillCategories.find(
    (cat) => cat.title === "Soft Skills"
  );
  const webDevCategory = skillCategories.find(
    (cat) => cat.title === "Web Development"
  );
  const cloudDevOpsCategory = skillCategories.find(
    (cat) => cat.title === "Cloud & DevOps"
  );
  const otherCategories = skillCategories.filter(
    (cat) =>
      cat.title !== "AI & Data" &&
      cat.title !== "Soft Skills" &&
      cat.title !== "Web Development" &&
      cat.title !== "Cloud & DevOps"
  );

  return (
    <section
      id="skills"
      className="section-scroll-target container-narrow py-16 sm:py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
          Technical Skills & Expertise
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Comprehensive technical proficiency across modern technologies,
          frameworks, and methodologies
        </p>
      </div>

      {/* First Row: 75% AI & Data, 25% Soft Skills */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {/* AI & Data - 75% width (3 columns) */}
        {aiDataCategory && (
          <div className="col-span-3 modern-card p-6 hover-lift">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {aiDataCategory.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {getSkillsArray(aiDataCategory.skills).map(
                (skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium
                           bg-slate-800/40 text-slate-300 border border-blue-600/20
                           hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30
                           transition-all duration-200 cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        )}

        {/* Soft Skills - 25% width (1 column) */}
        {softSkillsCategory && (
          <div className="col-span-1 modern-card p-6 hover-lift">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {softSkillsCategory.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {getSkillsArray(softSkillsCategory.skills).map(
                (skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium
                           bg-slate-800/40 text-slate-300 border border-blue-600/20
                           hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30
                           transition-all duration-200 cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        )}
      </div>

      {/* Second Row: Other categories in wider grid (2 columns max) */}
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        {otherCategories.map((category, index) => {
          const allSkills = getSkillsArray(category.skills);

          return (
            <div key={index} className="modern-card p-6 hover-lift">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium
                             bg-slate-800/40 text-slate-300 border border-blue-600/20
                             hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30
                             transition-all duration-200 cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Last Row: Web Development and Cloud & DevOps */}
      <div className="grid gap-6 md:grid-cols-2">
        {webDevCategory && (
          <div className="modern-card p-6 hover-lift">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {webDevCategory.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {getSkillsArray(webDevCategory.skills).map(
                (skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium
                             bg-slate-800/40 text-slate-300 border border-blue-600/20
                             hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30
                             transition-all duration-200 cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        )}

        {cloudDevOpsCategory && (
          <div className="modern-card p-6 hover-lift">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {cloudDevOpsCategory.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {getSkillsArray(cloudDevOpsCategory.skills).map(
                (skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium
                             bg-slate-800/40 text-slate-300 border border-blue-600/20
                             hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30
                             transition-all duration-200 cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
