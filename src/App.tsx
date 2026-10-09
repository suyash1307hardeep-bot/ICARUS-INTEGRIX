/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { CollegeHeader } from './components/CollegeHeader';
import { HeroSection } from './components/HeroSection';
import { FirstChallengeSection } from './components/FirstChallengeSection';
import { CountdownTimer } from './components/CountdownTimer';
import { ClosingBrandSection } from './components/ClosingBrandSection';
import { InstagramFooter } from './components/InstagramFooter';
import { NavigationDock } from './components/NavigationDock';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F7F3E9] selection:bg-[#C6A052]/30 selection:text-[#F4D58D] font-sans antialiased overflow-x-hidden">
      {/* Drifting Golden Dust Particles */}
      <ParticleCanvas />

      {/* Main Single-Page Academic Showcase */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* SECTION A — COLLEGE HEADER */}
        <CollegeHeader />

        {/* SECTION B — HERO SECTION */}
        <HeroSection />

        {/* SECTION C — FIRST QUIZ ANNOUNCEMENT */}
        <FirstChallengeSection />

        {/* SECTION D — LIVE COUNTDOWN TIMER */}
        <CountdownTimer />

        {/* SECTION E — CLOSING BRAND SECTION */}
        <ClosingBrandSection />

        {/* SECTION F — INSTAGRAM FOOTER */}
        <InstagramFooter />
      </div>

      {/* Floating Quick Navigation & Ambience Dock */}
      <NavigationDock />
    </div>
  );
}
