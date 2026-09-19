import React from 'react';
import { personalInterests } from '../data/cvData';
import { Mountain, Compass, Shield, Flame } from 'lucide-react';

export const EnduranceSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-800/90 via-slate-800/60 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-700/50 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                  <Mountain className="w-3.5 h-3.5 text-amber-400" />
                  Personal Discipline & Mindset
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personalInterests.title} (100-Mile Distances)
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInterests.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 text-xs sm:text-sm leading-relaxed">
                <span className="font-bold text-teal-300 block mb-1">
                  How This Translates to Leadership & Technical Work:
                </span>
                {personalInterests.takeaway}
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                <Flame className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white">100 Miles</div>
                <div className="text-xs text-slate-400 mt-1">Multi-day mountain races</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                <Compass className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white">Mental Grit</div>
                <div className="text-xs text-slate-400 mt-1">Real-time troubleshooting</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center col-span-2">
                <Shield className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-sm font-bold text-white">High-Stakes Resilience</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Staying calm when missions face critical headwinds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
