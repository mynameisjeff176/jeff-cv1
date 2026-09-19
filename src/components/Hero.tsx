import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Copy, Download, Share2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/cvData';
import { downloadVCard } from '../utils/vcard';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone' | 'link') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="overview" className="relative bg-slate-900 text-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800">
      {/* Subtle architectural background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main profile column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Status & Location badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-900/60 border border-teal-700/60 text-teal-300">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Available for Senior Roles & Strategic Projects
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                {personalInfo.name}
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-medium text-teal-300 tracking-tight">
                {personalInfo.headline}
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-400 font-light max-w-3xl leading-relaxed">
                {personalInfo.subheadline}
              </p>
            </div>

            {/* Professional Profile Narrative */}
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-teal-400">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>Executive Summary</span>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {personalInfo.summary}
              </p>
              <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-700/50 pt-3 italic">
                "{personalInfo.aboutNote}"
              </p>
            </div>

            {/* Interactive Contact & Actions Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold shadow transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call {personalInfo.phone}</span>
              </a>

              <button
                onClick={downloadVCard}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold transition-colors cursor-pointer"
                title="Download contact vCard for phone or email client"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>Save Contact (vCard)</span>
              </button>

              <button
                onClick={() => handleCopy(window.location.href, 'link')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 text-sm font-medium transition-colors cursor-pointer"
                title="Copy link to this page"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 text-xs">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Share Page</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Connect & Credentials Card (Right sidebar column) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-lg">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                Direct Contact Card
              </h3>

              <div className="space-y-3">
                {/* Email Box */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase text-slate-400">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-teal-300 hover:underline truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors flex-shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Mobile Phone Box */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase text-slate-400">
                      Direct Mobile (NZ)
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-medium text-white hover:text-teal-300 truncate block"
                    >
                      {personalInfo.phone} <span className="text-xs text-slate-400">({personalInfo.formattedPhone})</span>
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors flex-shrink-0"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[11px] font-semibold uppercase text-slate-400">
                      Base Location
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      Whanganui, New Zealand
                    </span>
                    <span className="block text-xs text-slate-400 mt-0.5">
                      Available for remote, hybrid, and regional engagements
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick tags */}
              <div className="mt-5 pt-4 border-t border-slate-700/80">
                <span className="block text-[11px] font-semibold uppercase text-slate-400 mb-2">
                  Primary Domains
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Technical Support',
                    'Shopify Ecosystem',
                    'Executive Leadership',
                    'M&A Integration',
                    'Economic Development',
                    'Community Directing',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-700/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
