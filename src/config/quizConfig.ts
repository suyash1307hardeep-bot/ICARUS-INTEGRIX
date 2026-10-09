/**
 * INTEGRIX Official Event Configuration
 * 
 * Central configuration for Government Nagapattinam Medical College
 * and ICARUS Medical College Academic Club.
 * 
 * Administrators can update the target quiz date and time here.
 */

export interface QuizConfig {
  collegeName: string;
  clubName: string;
  clubSubtitle: string;
  seriesName: string;
  seriesSubtitle: string;
  firstChallenge: {
    system: string;
    tagline: string;
    /**
     * Target event date in ISO 8601 format with timezone offset.
     * Indian Standard Time (IST) is UTC+05:30.
     * Set to null or empty string if the date is yet to be announced.
     */
    targetIsoDate: string | null;
    timezoneLabel: string;
    displayDate: string;
    displayTime: string;
  };
  instagram: {
    handle: string;
    url: string;
  };
}

export const QUIZ_EVENT_CONFIG: QuizConfig = {
  collegeName: "GOVERNMENT NAGAPATTINAM MEDICAL COLLEGE",
  clubName: "ICARUS",
  clubSubtitle: "MEDICAL COLLEGE ACADEMIC CLUB",
  seriesName: "INTEGRIX",
  seriesSubtitle: "THE INTERCOLLEGIATE INTEGRATED MEDICAL QUIZ SERIES",
  firstChallenge: {
    system: "RESPIRATORY SYSTEM",
    tagline: "One system. Multiple disciplines. One champion.",
    // Scheduled for October 24, 2026 at 19:00 IST (Asia/Kolkata)
    targetIsoDate: "2026-10-24T19:00:00+05:30",
    timezoneLabel: "Indian Standard Time (IST)",
    displayDate: "October 24, 2026",
    displayTime: "19:00 IST (7:00 PM)",
  },
  instagram: {
    handle: "@icarus_gnmc",
    url: "https://www.instagram.com/icarus_gnmc/",
  },
};
