import React from 'react';
import { careerMetrics } from '../data/cvData';
import { TrendingUp, ShieldCheck, Users, Clock, Award, Zap } from 'lucide-react';

const metricIcons = [
  <Clock className="w-5 h-5 text-teal-600" key="clock" />,
  <ShieldCheck className="w-5 h-5 text-teal-600" key="shield" />,
  <Zap className="w-5 h-5 text-teal-600" key="zap" />,
  <TrendingUp className="w-5 h-5 text-teal-600" key="trend" />,
  <Award className="w-5 h-5 text-teal-600" key="award" />,
  <Users className="w-5 h-5 text-teal-600" key="users" />,
];

export const Metrics: React.FC = () => {
  return (
    <section id="impact" className="py-14 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 inline-block mb-3">
            Quantifiable Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Key Career Highlights & Metrics
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A track record of turning complex technical challenges, customer friction, and organizational hurdles into measurable, lasting value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {careerMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-teal-500/40 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs group-hover:scale-105 transition-transform">
                  {metricIcons[index % metricIcons.length]}
                </span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Impact
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors">
                {metric.value}
              </div>
              <div className="text-base font-bold text-slate-800 mt-1">
                {metric.label}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
