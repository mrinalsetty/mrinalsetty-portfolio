'use client';

import { useState } from 'react';
import { skillCategories } from '@/data/constants';

export default function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }));
  };

  const getSkillsArray = (skillsString: string) => {
    return skillsString.split(', ').map(skill => skill.trim());
  };

  const getPreviewSkills = (skillsString: string, count: number = 4) => {
    const skills = getSkillsArray(skillsString);
    return skills.slice(0, count);
  };

  return (
    <section id="skills" className="container-narrow py-16 sm:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
          Technical Skills & Expertise
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Comprehensive technical proficiency across modern technologies, frameworks, and methodologies
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const isExpanded = expandedCategories[category.title];
          const allSkills = getSkillsArray(category.skills);
          const previewSkills = getPreviewSkills(category.skills);
          const hasMore = allSkills.length > 4;

          return (
            <div key={index} className="modern-card p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
                {hasMore && (
                  <button
                    onClick={() => toggleCategory(category.title)}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 
                             text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                  >
                    {isExpanded ? 'Show Less' : `+${allSkills.length - 4} more`}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {(isExpanded ? allSkills : previewSkills).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium
                               bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300
                               hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300
                               transition-all duration-200 cursor-default border border-slate-200/50 dark:border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {!isExpanded && hasMore && (
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {allSkills.length - previewSkills.length} more skills available
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Skills Summary Stats */}
      <div className="mt-12 modern-card p-8 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl font-bold gradient-text">
              {skillCategories.reduce((total, category) => 
                total + getSkillsArray(category.skills).length, 0
              )}+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Technologies
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold gradient-text">6</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Skill Categories
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold gradient-text">3+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold gradient-text">5+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Major Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}