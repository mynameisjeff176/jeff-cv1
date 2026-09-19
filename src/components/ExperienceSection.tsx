import React, { useState } from 'react';
import { experienceData } from '../data/cvData';
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'tech-ops' | 'leadership' | 'consulting'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('shopify'); // Default open Shopify for tech depth

  const filteredList = experienceData.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-block mb-2">
              Career History
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Professional Experience
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              Over two decades of proven impact across technical platforms, M&A operations, and organizational leadership.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="no-print flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Roles' },
              { id: 'tech-ops', label: 'Technical & Ops' },
              { id: 'leadership', label: 'Executive & M&A' },
              { id: 'consulting', label: 'Advisory & Growth' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline list */}
        <div className="space-y-6">
          {filteredList.map((job) => {
            const isExpanded = expandedId === job.id;

            return (
              <div
                key={job.id}
                className="print-break-inside-avoid bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:border-teal-500/40 transition-all overflow-hidden"
              >
                {/* Card Header (clickable) */}
                <div
                  onClick={() => toggleExpand(job.id)}
                  className="p-6 cursor-pointer hover:bg-slate-50/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 mt-1 flex-shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                          {job.role}
                        </h3>
                        {job.id === 'shopify' && (
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                            Featured Tech Role
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs sm:text-sm text-slate-600">
                        <span className="font-semibold text-teal-800">{job.company}</span>
                        <span className="text-slate-300">•</span>
                        <span className="inline-flex items-center gap-1 text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {job.period}
                    </span>
                    <button
                      className="no-print p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                      aria-label={isExpanded ? 'Collapse role' : 'Expand role'}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Summary bar */}
                {job.summary && (
                  <div className="px-6 pb-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {job.summary}
                  </div>
                )}

                {/* Expanded achievements & skills */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/40 space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Key Achievements & Responsibilities
                      </h4>
                      <ul className="space-y-2.5">
                        {job.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skill chips */}
                    <div className="pt-3 border-t border-slate-200/60">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Demonstrated Skills & Tools
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
