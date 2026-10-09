import React, { useState, useEffect } from 'react';
import { QUIZ_EVENT_CONFIG } from '../config/quizConfig';
import { Calendar, Clock, Copy, Check } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const CountdownTimer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const targetIsoDate = QUIZ_EVENT_CONFIG.firstChallenge.targetIsoDate;

  const calculateTimeLeft = (): TimeLeft | null => {
    if (!targetIsoDate) return null;

    const targetTime = new Date(targetIsoDate).getTime();
    if (isNaN(targetTime)) return null;

    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft);

  useEffect(() => {
    if (!targetIsoDate) return;

    // Tick immediately and then every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetIsoDate]);

  // Copy event details to clipboard
  const handleCopyDetails = () => {
    const textToCopy = `${QUIZ_EVENT_CONFIG.seriesName}: ${QUIZ_EVENT_CONFIG.firstChallenge.system}\n${QUIZ_EVENT_CONFIG.seriesSubtitle}\n${QUIZ_EVENT_CONFIG.clubName} — ${QUIZ_EVENT_CONFIG.collegeName}\nDate: ${QUIZ_EVENT_CONFIG.firstChallenge.displayDate}\nTime: ${QUIZ_EVENT_CONFIG.firstChallenge.displayTime}\nOfficial Instagram: ${QUIZ_EVENT_CONFIG.instagram.url}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Google Calendar URL generator
  const getGoogleCalendarUrl = () => {
    // Oct 24, 2026 19:00 IST is 13:30 UTC
    // 20261024T133000Z to 20261024T153000Z
    const startUtc = "20261024T133000Z";
    const endUtc = "20261024T153000Z";
    const title = encodeURIComponent(`${QUIZ_EVENT_CONFIG.seriesName} — ${QUIZ_EVENT_CONFIG.firstChallenge.system}`);
    const details = encodeURIComponent(
      `${QUIZ_EVENT_CONFIG.seriesSubtitle}\nOrganized by ${QUIZ_EVENT_CONFIG.clubName} (${QUIZ_EVENT_CONFIG.clubSubtitle}), ${QUIZ_EVENT_CONFIG.collegeName}.\nFollow updates on Instagram: ${QUIZ_EVENT_CONFIG.instagram.url}`
    );
    const location = encodeURIComponent(`${QUIZ_EVENT_CONFIG.collegeName}, Tamil Nadu, India`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startUtc}/${endUtc}&details=${details}&location=${location}`;
  };

  return (
    <section id="countdown" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-[#C6A052]" />
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] uppercase text-[#C6A052] font-semibold">
            COMMENCEMENT COUNTDOWN
          </span>
        </div>

        <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.14em] text-[#F7F3E9] uppercase">
          COUNTDOWN TO THE CHALLENGE
        </h3>

        {/* Date & Time in Indian Standard Time (IST) */}
        {targetIsoDate && (
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#C6A052]">
            <span className="font-medium text-[#F4D58D]">
              {QUIZ_EVENT_CONFIG.firstChallenge.displayDate}
            </span>
            <span className="text-[#C6A052]/50">·</span>
            <span className="font-medium">
              {QUIZ_EVENT_CONFIG.firstChallenge.displayTime}
            </span>
            <span className="text-[#C6A052]/50 hidden sm:inline">·</span>
            <span className="text-[#E8E2D2]/70 text-[11px] sm:text-xs">
              {QUIZ_EVENT_CONFIG.firstChallenge.timezoneLabel}
            </span>
          </div>
        )}

        {/* The Timer Interface */}
        <div className="mt-10 sm:mt-12 w-full max-w-4xl">
          {!targetIsoDate ? (
            /* Unconfigured State */
            <div className="p-8 sm:p-12 rounded-2xl border border-[#C6A052]/30 bg-[#11100E]/80 backdrop-blur-xs">
              <p className="font-cinzel text-xl sm:text-2xl md:text-3xl text-gold-metallic tracking-[0.2em] font-semibold uppercase">
                QUIZ DATE TO BE ANNOUNCED
              </p>
              <p className="mt-2 text-xs sm:text-sm text-[#E8E2D2]/70 font-sans">
                Follow our official Instagram for date and time release.
              </p>
            </div>
          ) : timeLeft?.isExpired ? (
            /* Expired / Started State */
            <div className="p-10 sm:p-14 rounded-2xl border border-[#F4D58D]/40 bg-gradient-to-b from-[#19150E] to-[#0A0907] shadow-[0_0_40px_rgba(244,213,141,0.2)]">
              <h4 className="font-cinzel text-3xl sm:text-5xl font-black text-gold-metallic tracking-[0.2em] uppercase animate-pulse">
                THE QUIZ BEGINS
              </h4>
              <p className="mt-4 font-cormorant italic text-lg sm:text-xl text-[#F4D58D]/90">
                The arena is open. May the foremost scholars triumph.
              </p>
            </div>
          ) : (
            /* Active Live Countdown: DAYS | HOURS | MINUTES | SECONDS */
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: 'DAYS', value: timeLeft ? String(timeLeft.days).padStart(2, '0') : '00' },
                { label: 'HOURS', value: timeLeft ? String(timeLeft.hours).padStart(2, '0') : '00' },
                { label: 'MINUTES', value: timeLeft ? String(timeLeft.minutes).padStart(2, '0') : '00' },
                { label: 'SECONDS', value: timeLeft ? String(timeLeft.seconds).padStart(2, '0') : '00' },
              ].map((unit, index) => (
                <div
                  key={unit.label}
                  className="relative group rounded-xl p-5 sm:p-7 md:p-8 bg-gradient-to-b from-[#14120E] via-[#0F0D0A] to-[#080705] border border-[#C6A052]/25 hover:border-[#F4D58D]/50 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center overflow-hidden"
                >
                  {/* Subtle Top Gold Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F4D58D]/60 to-transparent" />
                  
                  {/* Subtle Ambient Hover Glow */}
                  <div className="absolute -inset-1 bg-[#F4D58D]/5 opacity-0 group-hover:opacity-100 transition-opacity blur-md pointer-events-none" />

                  {/* Digit Value with Tabular Numerals & Gold Metallic Finish */}
                  <span className="font-cinzel font-black text-4xl sm:text-5xl md:text-6xl text-gold-metallic tabular-nums tracking-wider leading-none drop-shadow-[0_2px_12px_rgba(198,160,82,0.3)]">
                    {unit.value}
                  </span>

                  {/* Unit Label */}
                  <span className="mt-3 sm:mt-4 font-cinzel text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] text-[#C6A052] font-semibold uppercase">
                    {unit.label}
                  </span>

                  {/* Subtle unit separator dots for tablet/desktop */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#C6A052]/30 text-xl font-cinzel pointer-events-none">
                      :
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Convenience Actions: Add to Calendar & Copy Schedule */}
        {targetIsoDate && !timeLeft?.isExpired && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#C6A052]/40 bg-[#11100E]/90 hover:bg-[#1A1814] hover:border-[#F4D58D]/70 text-[#F4D58D] text-xs font-cinzel tracking-[0.18em] uppercase transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(198,160,82,0.2)]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Add to Google Calendar</span>
            </a>

            <button
              onClick={handleCopyDetails}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#C6A052]/30 bg-[#0A0A09]/80 hover:bg-[#161410] hover:border-[#C6A052]/60 text-[#E8E2D2] text-xs font-cinzel tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Details Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#C6A052]" />
                  <span>Copy Quiz Details</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
