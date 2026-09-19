/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AiStatementSection } from './components/AiStatementSection';
import { CommunitySection } from './components/CommunitySection';
import { EducationSection } from './components/EducationSection';
import { EnduranceSection } from './components/EnduranceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <SkillsSection />
        <ExperienceSection />
        <AiStatementSection />
        <CommunitySection />
        <EducationSection />
        <EnduranceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
