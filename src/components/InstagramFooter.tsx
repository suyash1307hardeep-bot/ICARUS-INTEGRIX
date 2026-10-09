import React from 'react';
import { QUIZ_EVENT_CONFIG } from '../config/quizConfig';
import { ExternalLink } from 'lucide-react';

export const InstagramFooter: React.FC = () => {
  return (
    <footer id="instagram-footer" className="relative z-10 pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-t border-[#C6A052]/20 bg-[#050505]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Instagram Follow Section */}
        <div className="p-8 sm:p-10 rounded-2xl border border-[#C6A052]/30 bg-gradient-to-b from-[#11100E] to-[#080807] w-full max-w-lg shadow-[0_8px_30px_rgba(0,0,0,0.7)] flex flex-col items-center">
          
          {/* Instagram Icon SVG with Gold Treatment */}
          <div className="w-14 h-14 rounded-2xl p-0.5 bg-gradient-to-tr from-[#80612F] via-[#F4D58D] to-[#C6A052] flex items-center justify-center shadow-[0_0_20px_rgba(198,160,82,0.25)] mb-4">
            <div className="w-full h-full bg-[#0E0C09] rounded-[14px] flex items-center justify-center">
              <svg
                className="w-7 h-7 text-[#F4D58D]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
          </div>

          <p className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#C6A052] font-semibold">
            FOLLOW ICARUS ON INSTAGRAM
          </p>

          <a
            href={QUIZ_EVENT_CONFIG.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-[#C6A052]/50 bg-gradient-to-r from-[#17140F] via-[#211B13] to-[#17140F] hover:border-[#F4D58D] text-gold-metallic hover:shadow-[0_0_25px_rgba(244,213,141,0.25)] transition-all duration-300 font-cinzel text-lg sm:text-xl font-bold tracking-[0.15em]"
          >
            <span>{QUIZ_EVENT_CONFIG.instagram.handle}</span>
            <ExternalLink className="w-4 h-4 text-[#F4D58D] opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <p className="mt-4 text-xs text-[#E8E2D2]/60 font-sans tracking-wide">
            For official announcements, schedules & symposium communications
          </p>
        </div>

        {/* Institutional Formal Colophon */}
        <div className="mt-12 flex flex-col items-center text-center gap-2 text-xs text-[#C6A052]/60">
          <p className="font-cinzel tracking-[0.2em] uppercase text-[#E8E2D2]/80">
            {QUIZ_EVENT_CONFIG.collegeName}
          </p>
          <p className="tracking-[0.15em] uppercase text-[11px]">
            {QUIZ_EVENT_CONFIG.clubName} {QUIZ_EVENT_CONFIG.clubSubtitle} · {QUIZ_EVENT_CONFIG.seriesName}
          </p>
          <div className="w-16 h-[1px] bg-[#C6A052]/20 my-2" />
          <p className="text-[10px] tracking-[0.1em] text-[#C6A052]/40">
            Nagapattinam, Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  );
};
