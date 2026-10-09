import React from 'react';
import { QUIZ_EVENT_CONFIG } from '../config/quizConfig';
import respiratoryGoldArt from '../assets/images/respiratory_gold_art_1791513366344.jpg';

export const FirstChallengeSection: React.FC = () => {
  return (
    <section id="first-challenge" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Sophisticated Gold-Framed Academic Panel */}
      <div className="relative rounded-2xl bg-gradient-to-b from-[#11100E]/95 via-[#0A0A09]/98 to-[#050505] p-8 sm:p-12 md:p-16 border border-[#C6A052]/30 shadow-[0_15px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(198,160,82,0.12)] overflow-hidden">
        
        {/* Subtle Anatomical Respiratory Lung Silhouette Watermark in Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 sm:w-96 md:w-[480px] h-72 sm:h-96 md:h-[480px] pointer-events-none opacity-20 md:opacity-25 mix-blend-screen filter contrast-125">
          <img
            src={respiratoryGoldArt}
            alt="Anatomical Respiratory Bronchial Outline"
            className="w-full h-full object-contain transform translate-x-12 sm:translate-x-16"
          />
        </div>

        {/* Ambient Gold Radial Flare in Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6A052]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Ornate Gold Corner Filigree / Brackets */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#F4D58D]/70 pointer-events-none" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#F4D58D]/70 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#F4D58D]/70 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#F4D58D]/70 pointer-events-none" />

        {/* Inner Gold Hairline Inset Border */}
        <div className="absolute inset-2 sm:inset-3 rounded-xl border border-[#C6A052]/15 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C6A052]/60" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.35em] sm:tracking-[0.45em] text-[#C6A052] font-semibold uppercase">
              THE FIRST CHALLENGE
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C6A052]/60" />
          </div>

          {/* Main Challenge Subject */}
          <h2 className="mt-6 sm:mt-8 font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.16em] sm:tracking-[0.2em] text-gold-antique uppercase leading-tight drop-shadow-[0_2px_15px_rgba(198,160,82,0.3)]">
            {QUIZ_EVENT_CONFIG.firstChallenge.system}
          </h2>

          {/* Subtle Decorative Gold Divider */}
          <div className="my-6 sm:my-8 flex items-center justify-center gap-2">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C6A052]" />
            <div className="w-2 h-2 rotate-45 border border-[#F4D58D] bg-[#050505]" />
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C6A052]" />
          </div>

          {/* Exact Required Supporting Line */}
          <p className="font-cormorant italic text-xl sm:text-2xl md:text-3xl text-[#E8E2D2] tracking-wide font-normal max-w-2xl leading-relaxed">
            &ldquo;{QUIZ_EVENT_CONFIG.firstChallenge.tagline}&rdquo;
          </p>

          {/* Institutional Integrity Note */}
          <div className="mt-8 pt-6 border-t border-[#C6A052]/15 flex items-center justify-center gap-4 text-xs tracking-[0.2em] text-[#C6A052]/75 uppercase">
            <span>Anatomy</span>
            <span className="text-[#C6A052]/40">·</span>
            <span>Physiology</span>
            <span className="text-[#C6A052]/40">·</span>
            <span>Pathology</span>
            <span className="text-[#C6A052]/40">·</span>
            <span>Pulmonology & Medicine</span>
          </div>
        </div>
      </div>
    </section>
  );
};
