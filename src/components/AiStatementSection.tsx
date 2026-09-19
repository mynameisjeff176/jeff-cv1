import React from 'react';
import { aiLearnings } from '../data/cvData';
import { Bot, Terminal, Shield, Workflow, BookOpen, Sparkles } from 'lucide-react';

const categoryIconMap: Record<string, React.ReactNode> = {
  'Hands-on Tools': <Terminal className="w-5 h-5 text-teal-400" />,
  'Local Models & Privacy': <Bot className="w-5 h-5 text-cyan-400" />,
  'Quality & Verification': <Shield className="w-5 h-5 text-emerald-400" />,
  'Modern Engineering Workflows': <Workflow className="w-5 h-5 text-amber-400" />,
  'Communication Philosophy': <BookOpen className="w-5 h-5 text-violet-400" />,
};

export const AiStatementSection: React.FC = () => {
  return (
    <section id="ai-learning" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-700/60 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              Continuous Innovation
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Statement & Self-Directed Engineering
          </h2>

          <div className="mt-4 p-5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-slate-100 mb-2">
              "After spending years at Shopify training AI models as part of my job, I made it my personal mission to understand how modern AI systems actually function under the hood."
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              I don't just use AI tools as casual chatbots—I test them, stress-test their boundaries, configure local offline runtimes, and automate real workflows. These are practical experiments, tooling stacks, and learnings developed through hands-on practice.
            </p>
          </div>
        </div>

        {/* AI Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiLearnings.map((item) => (
            <div
              key={item.title}
              className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 hover:border-teal-500/50 hover:bg-slate-800 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700">
                    {categoryIconMap[item.category] || <Bot className="w-5 h-5 text-teal-400" />}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-700/60 flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded bg-slate-900/90 text-teal-300 font-mono border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Feynman Philosophy Card */}
          <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-teal-950/40 via-slate-800/80 to-slate-900 border border-teal-800/50 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-teal-400">
                <BookOpen className="w-4 h-4" />
                <span>Core Operating Philosophy</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                The Feynman Standard
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I believe true competence means being able to translate complex technical architectures into plain, crystal-clear concepts. Whether advising board trustees, small business owners, or frontline teams, I strip away unnecessary jargon so stakeholders can make confident, informed decisions.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-teal-800/40 text-xs font-medium text-teal-300 italic">
              "If you can't explain it simply, you don't understand it well enough."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
