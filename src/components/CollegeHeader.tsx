import React from 'react';
import { QUIZ_EVENT_CONFIG } from '../config/quizConfig';
import authenticEmblem from '../assets/images/icarus_authentic_emblem_1791513265958.jpg';

export const CollegeHeader: React.FC = () => {
  return (
    <header className="relative z-20 w-full pt-8 pb-6 px-4 sm:px-8 border-b border-[#C6A052]/20 bg-gradient-to-b from-[#050505]/95 via-[#080807]/90 to-transparent backdrop-blur-xs">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Institutional Identity */}
        <div className="w-full flex flex-col items-center">
          <p className="font-cinzel text-xs sm:text-sm md:text-base tracking-[0.22em] sm:tracking-[0.32em] md:tracking-[0.38em] text-[#C6A052] font-semibold uppercase leading-relaxed max-w-4xl">
            {QUIZ_EVENT_CONFIG.collegeName}
          </p>
          
          {/* Subtle gold separator with antique diamond accent */}
          <div className="flex items-center justify-center gap-3 w-full my-4">
            <span className="h-[1px] w-16 sm:w-32 bg-gradient-to-r from-transparent via-[#C6A052]/60 to-[#C6A052]/20" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#F4D58D] shadow-[0_0_8px_#F4D58D]" />
            <span className="h-[1px] w-16 sm:w-32 bg-gradient-to-l from-transparent via-[#C6A052]/60 to-[#C6A052]/20" />
          </div>
        </div>

        {/* Club Emblem & Title Lockup */}
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 group">
          {/* Authentic ICARUS Emblem */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-br from-[#F4D58D]/40 via-[#C6A052]/20 to-[#80612F]/40 shadow-[0_0_25px_rgba(198,160,82,0.25)] ring-1 ring-[#C6A052]/30 sweep-container">
            <img
              src={authenticEmblem}
              alt="ICARUS Medical College Academic Club Emblem"
              className="w-full h-full object-cover rounded-full mix-blend-screen scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
              loading="eager"
            />
          </div>

          {/* Club Typography */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="font-cinzel text-2xl sm:text-3xl tracking-[0.25em] font-bold text-gold-metallic">
              {QUIZ_EVENT_CONFIG.clubName}
            </h1>
            <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.28em] text-[#E8E2D2]/80 uppercase mt-1 font-medium">
              {QUIZ_EVENT_CONFIG.clubSubtitle}
            </p>
            <p className="text-[10px] tracking-[0.2em] text-[#C6A052]/70 uppercase mt-0.5">
              Government Nagapattinam Medical College
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
