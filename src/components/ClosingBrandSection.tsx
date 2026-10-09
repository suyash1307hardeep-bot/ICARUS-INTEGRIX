import React from 'react';
import { QUIZ_EVENT_CONFIG } from '../config/quizConfig';
import authenticEmblem from '../assets/images/icarus_authentic_emblem_1791513265958.jpg';

export const ClosingBrandSection: React.FC = () => {
  return (
    <section className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      {/* Decorative hairline gold top accent */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <span className="h-[1px] w-20 sm:w-36 bg-gradient-to-r from-transparent via-[#C6A052]/50 to-[#C6A052]/10" />
        <span className="w-2 h-2 rotate-45 border border-[#F4D58D]/70 bg-[#050505]" />
        <span className="h-[1px] w-20 sm:w-36 bg-gradient-to-l from-transparent via-[#C6A052]/50 to-[#C6A052]/10" />
      </div>

      <div className="flex flex-col items-center">
        {/* Emblem */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-b from-[#F4D58D]/30 via-[#C6A052]/15 to-[#80612F]/30 shadow-[0_0_35px_rgba(198,160,82,0.25)] mb-8 sweep-container">
          <img
            src={authenticEmblem}
            alt="ICARUS Winged Emblem"
            className="w-full h-full object-cover rounded-full mix-blend-screen scale-105"
          />
        </div>

        {/* Club Name */}
        <p className="font-cinzel text-xs sm:text-sm tracking-[0.32em] sm:tracking-[0.4em] text-[#C6A052] font-semibold uppercase">
          {QUIZ_EVENT_CONFIG.clubName} {QUIZ_EVENT_CONFIG.clubSubtitle}
        </p>

        {/* Series Name */}
        <h3 className="mt-4 font-cinzel text-4xl sm:text-5xl md:text-6xl font-black tracking-[0.14em] text-gold-metallic uppercase leading-none drop-shadow-[0_2px_20px_rgba(198,160,82,0.3)]">
          {QUIZ_EVENT_CONFIG.seriesName}
        </h3>

        {/* Series Subtitle */}
        <h4 className="mt-4 font-cinzel text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.32em] text-[#E8E2D2]/90 uppercase max-w-2xl font-medium">
          {QUIZ_EVENT_CONFIG.seriesSubtitle}
        </h4>

        {/* Required Closing Line */}
        <div className="mt-8 pt-6 border-t border-[#C6A052]/20 max-w-xl mx-auto">
          <p className="font-cormorant italic text-lg sm:text-xl md:text-2xl text-[#F4D58D] tracking-wide">
            &ldquo;Prepare your knowledge. Challenge your limits.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
