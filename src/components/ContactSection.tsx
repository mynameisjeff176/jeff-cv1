import React, { useState } from 'react';
import { personalInfo } from '../data/cvData';
import { Mail, Phone, MapPin, Download, Printer, Check, Copy, Send, ArrowRight } from 'lucide-react';
import { downloadVCard } from '../utils/vcard';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Technical Leadership / Support Operations');
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const topics = [
    'Technical Leadership / Support Operations',
    'Shopify & Payment Gateway Architecture',
    'Strategic Consulting / M&A Restructuring',
    'Civic & Community Engagement',
    'General Inquiry / Discussion',
  ];

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`Inquiry regarding ${selectedTopic} - from ${senderName || 'Contact'}`);
    const body = encodeURIComponent(
      `Hi Jeff,\n\n${senderMessage || "I came across your profile and would love to connect regarding opportunities or advisory projects."}\n\nBest regards,\n${senderName || 'Your Name'}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800 inline-block mb-3">
                Let's Connect
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Get In Touch with Jeff
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you're looking for experienced technical support leadership, partner ecosystem optimization, organizational turnaround advisory, or community leadership, I'd welcome the conversation.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-teal-600/30 text-teal-300 border border-teal-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-teal-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-teal-600/30 text-teal-300 border border-teal-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Mobile Phone</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-white hover:text-teal-300 transition-colors"
                    >
                      {personalInfo.phone} <span className="text-xs text-slate-400">({personalInfo.formattedPhone})</span>
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-700 text-slate-300">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Based In</span>
                  <span className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={downloadVCard}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>Save Contact Card (.vcf)</span>
              </button>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-teal-400" />
                <span>Print or PDF Version</span>
              </button>
            </div>
          </div>

          {/* Right Column: Pre-configured Email Composer */}
          <div className="lg:col-span-6 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2">
              Send a Message
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Select a focus area below to launch your email client with a tailored subject line.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Topic of Discussion
                </label>
                <div className="space-y-1.5">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                        selectedTopic === topic
                          ? 'bg-teal-600 text-white font-semibold'
                          : 'bg-slate-900/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      <span>{topic}</span>
                      {selectedTopic === topic && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Name / Organisation
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Jane Doe, Acme Corp"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Brief Note (Optional)
                </label>
                <textarea
                  rows={3}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Share a brief overview of what you'd like to discuss..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors resize-none"
                />
              </div>

              <a
                href={generateMailto()}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-bold shadow-sm transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Open in Email App</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
