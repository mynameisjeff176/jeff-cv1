import React from 'react';
import { skillCategories } from '../data/cvData';
import { Cpu, Compass, Briefcase, HeartHandshake } from 'lucide-react';

const categoryIcons = [
  <Cpu className="w-5 h-5 text-teal-600" key="cpu" />,
  <Compass className="w-5 h-5 text-teal-600" key="compass" />,
  <Briefcase className="w-5 h-5 text-teal-600" key="briefcase" />,
  <HeartHandshake className="w-5 h-5 text-teal-600" key="heart" />,
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="strengths" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full border border-teal-200 inline-block mb-3">
            Core Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Key Strengths & Functional Domains
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A balanced synthesis of technical troubleshooting depth, executive leadership, commercial growth, and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3.5 mb-4">
                <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-100 flex-shrink-0 mt-0.5">
                  {categoryIcons[index % categoryIcons.length]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
