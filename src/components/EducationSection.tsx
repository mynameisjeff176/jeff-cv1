import React from 'react';
import { educationAndCredentials } from '../data/cvData';
import { GraduationCap, Award, Mic, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="credentials" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-block mb-3">
            Academic & Professional Standing
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Formal economic qualifications, governance training, public speaking honors, and continuous executive development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Academic Degrees & Key Certifications */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academic Degrees */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-teal-100 text-teal-800">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Higher Education
                </h3>
              </div>

              <div className="space-y-4">
                {educationAndCredentials.degrees.map((deg) => (
                  <div key={deg.degree} className="border-l-2 border-teal-500 pl-4 py-0.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900">{deg.degree}</h4>
                      {deg.year && (
                        <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {deg.year}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-medium text-teal-800 mt-0.5">{deg.institution}</p>
                    {deg.details && (
                      <p className="text-xs text-slate-500 mt-1">{deg.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Certifications & Workshops */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-teal-100 text-teal-800">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Professional Development & Governance
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {educationAndCredentials.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-teal-400/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-xs font-bold text-slate-900 leading-snug">
                        {cert.title}
                      </h4>
                      {cert.period && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-800 whitespace-nowrap">
                          {cert.period}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] font-semibold text-teal-700 mt-1">{cert.issuer}</p>
                    {cert.notes && (
                      <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                        {cert.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Public Speaking & Toastmasters */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-700 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-teal-600/30 border border-teal-500/40 text-teal-300">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Public Speaking & Toastmasters
                    </h3>
                    <p className="text-xs text-slate-400">Communication & PR Achievements</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Over a decade of dedicated leadership in formal communication, serving as club president and keynote speaker delivering presentations to large audiences of up to 1,000 people.
                </p>

                <div className="space-y-2.5">
                  {educationAndCredentials.publicSpeaking.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700 text-[11px] text-slate-400">
                Toastmasters International honours in advanced communication, humor, and constructive feedback.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
