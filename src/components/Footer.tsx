import React from 'react';
import { personalInfo } from '../data/cvData';
import { ArrowUp, Mail, Phone, Download, Printer } from 'lucide-react';
import { downloadVCard } from '../utils/vcard';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-teal-600 text-white font-bold text-sm flex items-center justify-center">
                JS
              </span>
              <span className="text-white font-bold text-lg">{personalInfo.name}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              Strategic Leader & Technical Customer Support Specialist • {personalInfo.location}
            </p>
          </div>

          <div className="no-print flex items-center gap-3">
            <button
              onClick={downloadVCard}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Download contact card (.vcf)"
            >
              <Download className="w-4 h-4 text-teal-400" />
            </button>
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Print CV"
            >
              <Printer className="w-4 h-4 text-teal-400" />
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Call phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Designed for professional recruitment, advisory inquiries, and partner outreach.
          </p>
        </div>
      </div>
    </footer>
  );
};
