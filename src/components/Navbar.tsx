import React, { useState, useEffect } from 'react';
import { Mail, Printer, Menu, X, Phone, Download } from 'lucide-react';
import { downloadVCard } from '../utils/vcard';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Impact', href: '#impact' },
    { name: 'Experience', href: '#experience' },
    { name: 'AI & Tools', href: '#ai-learning' },
    { name: 'Community', href: '#community' },
    { name: 'Credentials', href: '#credentials' },
  ];

  return (
    <header
      id="site-header"
      className={`no-print sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white shadow-md'
          : 'bg-slate-900 text-white border-b border-slate-800/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <a
            href="#overview"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-lg tracking-wider shadow-sm group-hover:bg-teal-500 transition-colors">
              JS
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-teal-300 transition-colors">
                Jeff Smith
              </div>
              <div className="text-xs text-slate-400 font-normal hidden sm:block">
                Strategic Leader & Support Specialist
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => window.print()}
              title="Print or save as PDF"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-teal-400" />
              <span>Print CV</span>
            </button>

            <button
              onClick={downloadVCard}
              title="Save contact card (.vcf)"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-teal-400" />
              <span>Save Contact</span>
            </button>

            <a
              href="mailto:projectwellington@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg shadow-sm transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => window.print()}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
              title="Print CV"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                downloadVCard();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg"
            >
              <Download className="w-4 h-4 text-teal-400" />
              <span>Download Contact Card (.vcf)</span>
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="mailto:projectwellington@gmail.com"
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-teal-600 rounded-lg text-center"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a
                href="tel:021525279"
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-slate-700 rounded-lg text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Mobile</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
