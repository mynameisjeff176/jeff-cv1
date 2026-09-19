import React from 'react';
import { volunteerLeadership } from '../data/cvData';
import { HeartHandshake, Users, ShieldAlert, CheckCircle } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full border border-teal-200 inline-block mb-3">
            Civic Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Volunteer & Community Engagement
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Dedicated to empowering local communities, mobilizing volunteer teams, and stewarding regional initiatives across New Zealand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {volunteerLeadership.map((item) => (
            <div
              key={item.organization}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-teal-50 text-teal-700 border border-teal-100">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {item.role}
                      </h3>
                      <p className="text-xs font-semibold text-teal-700">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>

                {item.highlights && (
                  <ul className="mt-4 space-y-2 pt-3 border-t border-slate-100">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {item.organization.includes('Parkrun') && (
                <div className="mt-5 p-3 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center gap-2.5 text-xs text-teal-900">
                  <ShieldAlert className="w-4 h-4 text-teal-700 flex-shrink-0" />
                  <span>
                    Holds overall weekly operational safety authority, crowd management, and life-saving AED maintenance.
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
