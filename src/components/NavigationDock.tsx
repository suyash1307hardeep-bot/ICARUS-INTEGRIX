import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const NavigationDock: React.FC = () => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscListRef = useRef<OscillatorNode[]>([]);

  // Subtle harmonic golden celestial drone using Web Audio API
  const toggleAmbientSound = () => {
    if (!isPlayingSound) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Low-pass filter for warm, dark cinematic tone
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, ctx.currentTime);
        filter.connect(masterGain);

        // Warm harmonic frequencies in pythagorean gold ratio (A2 drone ~110Hz, E3 ~165Hz, A3 ~220Hz)
        const freqs = [110, 164.81, 220];
        const oscs: OscillatorNode[] = [];

        freqs.forEach((freq) => {
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          osc.connect(filter);
          osc.start();
          oscs.push(osc);
        });

        oscListRef.current = oscs;
        setIsPlayingSound(true);
      } catch {
        // AudioContext not allowed or unsupported
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1);
        setTimeout(() => {
          oscListRef.current.forEach((osc) => osc.stop());
          audioCtxRef.current?.close();
          setIsPlayingSound(false);
        }, 1000);
      } else {
        setIsPlayingSound(false);
      }
    }
  };

  return (
    <nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[92vw] sm:max-w-fit px-4 py-2 rounded-full border border-[#C6A052]/35 bg-[#0A0A09]/90 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(198,160,82,0.15)] flex items-center gap-3 sm:gap-6 text-xs font-cinzel tracking-[0.16em] uppercase"
      aria-label="Quick Navigation"
    >
      <a
        href="#"
        className="text-[#E8E2D2]/80 hover:text-[#F4D58D] transition-colors whitespace-nowrap shrink-0"
      >
        Top
      </a>
      <span className="text-[#C6A052]/30 select-none">·</span>
      <a
        href="#first-challenge"
        className="text-[#E8E2D2]/80 hover:text-[#F4D58D] transition-colors whitespace-nowrap shrink-0"
      >
        Challenge
      </a>
      <span className="text-[#C6A052]/30 select-none">·</span>
      <a
        href="#countdown"
        className="text-[#E8E2D2]/80 hover:text-[#F4D58D] transition-colors whitespace-nowrap shrink-0"
      >
        Countdown
      </a>
      <span className="text-[#C6A052]/30 select-none">·</span>
      <a
        href="#instagram-footer"
        className="text-[#E8E2D2]/80 hover:text-[#F4D58D] transition-colors whitespace-nowrap shrink-0"
      >
        Official IG
      </a>

      <span className="h-4 w-[1px] bg-[#C6A052]/30 select-none" />

      {/* Atmospheric Audio Ambience Toggle */}
      <button
        onClick={toggleAmbientSound}
        className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#C6A052]/30 bg-[#161410] hover:border-[#F4D58D] text-[#C6A052] hover:text-[#F4D58D] transition-all cursor-pointer whitespace-nowrap shrink-0"
        title={isPlayingSound ? "Mute Celestial Ambience" : "Play Celestial Ambience"}
        aria-label={isPlayingSound ? "Mute Celestial Ambience" : "Play Celestial Ambience"}
      >
        {isPlayingSound ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-[#F4D58D]" />
            <span className="text-[10px] hidden sm:inline text-[#F4D58D]">Ambience On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            <span className="text-[10px] hidden sm:inline text-[#E8E2D2]/70">Ambience</span>
          </>
        )}
      </button>
    </nav>
  );
};
