import React, { useState, useEffect } from 'react';
import { QUIZ_EVENT_CONFIG } from '../config/quizConfig';
import authenticEmblem from '../assets/images/icarus_authentic_emblem_1791513265958.jpg';
import cloudsBackdrop from '../assets/images/dark_gold_clouds_1791513325113.jpg';

export const HeroSection: React.FC = () => {
  // Staged cinematic entrance animation stages:
  // 0: Initial mount
  // 1: Backdrop & particles visible
  // 2: Emblem revealed
  // 3: INTEGRIX revealed
  // 4: Subtitle revealed
  const [animStage, setAnimStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimStage(1), 100);
    const timer2 = setTimeout(() => setAnimStage(2), 600);
    const timer3 = setTimeout(() => setAnimStage(3), 1300);
    const timer4 = setTimeout(() => setAnimStage(4), 2100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const titleWord = QUIZ_EVENT_CONFIG.seriesName; // "INTEGRIX"

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden">
      {/* Cinematic Dark Smoky Storm Clouds Background with Golden Rays */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1500 ease-out ${
          animStage >= 1 ? 'opacity-40' : 'opacity-0'
        }`}
      >
        <img
          src={cloudsBackdrop}
          alt="Atmospheric golden sky"
          className="w-full h-full object-cover object-center scale-105 animate-subtle-pulse filter contrast-125 brightness-90"
        />
        {/* Deep vignette overlays to ensure perfect text contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/60 to-[#050505]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Step 3: Authentic ICARUS Emblem reveal with soft golden glow */}
        <div
          className={`relative mb-8 sm:mb-12 transition-all duration-1200 ease-out ${
            animStage >= 2
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-6 scale-95'
          }`}
        >
          {/* Ambient golden halo behind the emblem */}
          <div className="absolute -inset-8 sm:-inset-12 bg-[#F4D58D]/15 rounded-full blur-2xl pointer-events-none animate-pulse" />
          
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-b from-[#F4D58D]/35 via-[#C6A052]/20 to-[#80612F]/40 shadow-[0_0_50px_rgba(198,160,82,0.35)] sweep-container">
            <img
              src={authenticEmblem}
              alt="ICARUS Classical Winged Caduceus Emblem"
              className="w-full h-full object-cover rounded-full mix-blend-screen scale-105 transition-transform duration-1000 ease-out hover:scale-110"
            />
          </div>
        </div>

        {/* PRESENTS Kicker */}
        <div
          className={`transition-all duration-1000 ease-out ${
            animStage >= 2
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3'
          }`}
        >
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.45em] sm:tracking-[0.55em] text-[#C6A052] font-semibold uppercase">
            PRESENTS
          </span>
        </div>

        {/* Step 4: INTEGRIX — Largest textual element on the page */}
        <div className="mt-4 sm:mt-6 overflow-hidden">
          <h1
            className="font-cinzel font-black tracking-[0.12em] sm:tracking-[0.16em] uppercase select-none text-gold-metallic leading-none drop-shadow-[0_4px_25px_rgba(198,160,82,0.4)]"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 9.5rem)',
            }}
          >
            {titleWord.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block transition-all duration-1000 ease-out"
                style={{
                  transitionDelay: `${animStage >= 3 ? index * 85 : 0}ms`,
                  opacity: animStage >= 3 ? 1 : 0,
                  transform: animStage >= 3 ? 'translateY(0) scale(1)' : 'translateY(35px) scale(0.95)',
                  filter: animStage >= 3 ? 'none' : 'blur(4px)',
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtle Decorative Gold Underline */}
        <div
          className={`w-32 sm:w-48 h-[1px] bg-gradient-to-r from-transparent via-[#F4D58D]/70 to-transparent my-6 sm:my-8 transition-all duration-1000 delay-500 ${
            animStage >= 3 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        {/* Step 5: Full Subtitle Reveal */}
        <div
          className={`transition-all duration-1200 ease-out ${
            animStage >= 4
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="font-cinzel text-sm sm:text-base md:text-xl lg:text-2xl tracking-[0.22em] sm:tracking-[0.3em] font-medium text-[#F7F3E9] max-w-3xl leading-relaxed uppercase">
            {QUIZ_EVENT_CONFIG.seriesSubtitle}
          </h2>
          <p className="mt-3 text-xs sm:text-sm tracking-[0.2em] text-[#C6A052]/90 uppercase font-sans">
            Government Nagapattinam Medical College · ICARUS Academic Club
          </p>
        </div>

        {/* Scroll invitation */}
        <div
          className={`mt-14 sm:mt-16 transition-all duration-1000 delay-700 flex flex-col items-center gap-2 ${
            animStage >= 4 ? 'opacity-80' : 'opacity-0'
          }`}
        >
          <a
            href="#first-challenge"
            className="group flex flex-col items-center gap-2 text-[#C6A052]/70 hover:text-[#F4D58D] transition-colors duration-300"
            aria-label="Scroll to First Challenge"
          >
            <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase">
              Enter The Arena
            </span>
            <div className="w-5 h-8 rounded-full border border-[#C6A052]/40 flex items-start justify-center p-1 group-hover:border-[#F4D58D]/70 transition-colors">
              <span className="w-1 h-2 rounded-full bg-[#F4D58D] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
