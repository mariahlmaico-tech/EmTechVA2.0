import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Crisp, high-precision SVG Logos for AI & Automation Tech Stack
const getTechLogos = (isDark: boolean) => {
  const textColor = isDark ? '#FFFFFF' : '#0F172A';
  return [
    {
      name: 'Zapier',
      glowColor: 'rgba(255, 79, 0, 0.18)',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 4L2 17.5H11.5L9.5 28L22 13.5H12L14.5 4H12.5Z" fill="#FF4F00" />
          <path d="M22 13.5L9.5 28L11.5 17.5H2L12.5 4H14.5" fill="#FF4F00" />
          <text x="30" y="22" fill={textColor} fontSize="18" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.5">zapier</text>
        </svg>
      ),
    },
    {
      name: 'Make.com',
      glowColor: 'rgba(107, 38, 217, 0.22)',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="22" height="22" rx="6" fill="url(#make_grad)" />
          <path d="M7 11L13 21L19 11" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <text x="32" y="22" fill={textColor} fontSize="18" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.5">make</text>
          <defs>
            <linearGradient id="make_grad" x1="2" y1="5" x2="24" y2="27" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9D4EDD" />
              <stop offset="1" stopColor="#6B26D9" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: 'n8n',
      glowColor: 'rgba(255, 109, 90, 0.2)',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="16" r="4" fill="#FF6D5A" />
          <circle cx="24" cy="10" r="4" fill="#FF6D5A" />
          <circle cx="24" cy="22" r="4" fill="#FF6D5A" />
          <path d="M8 16H24M24 10V22" stroke="#FF6D5A" strokeWidth="2.5" strokeLinecap="round" />
          <text x="36" y="23" fill={textColor} fontSize="20" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">n8n</text>
        </svg>
      ),
    },
    {
      name: 'GoHighLevel',
      glowColor: 'rgba(37, 99, 235, 0.22)',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 4C8.477 10 4 14.5 4 20C4 25.523 8.477 28 14 28C19.523 28 24 25.523 24 20C24 14.5 19.523 10 14 4Z" fill="url(#ghl_grad)" />
          <path d="M14 11C11.5 14 9.5 16.5 9.5 19.5C9.5 22.5 11.5 24 14 24C16.5 24 18.5 22.5 18.5 19.5C18.5 16.5 16.5 14 14 11Z" fill="#FFFFFF" />
          <text x="32" y="21" fill={textColor} fontSize="15" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.3">HighLevel</text>
          <defs>
            <linearGradient id="ghl_grad" x1="4" y1="4" x2="24" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: 'OpenAI',
      glowColor: 'rgba(16, 163, 127, 0.22)',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.6 13.11a5.6 5.6 0 0 0-.47-4.46 5.68 5.68 0 0 0-5.83-2.77 5.6 5.6 0 0 0-4.08-1.83 5.68 5.68 0 0 0-5.4 3.52 5.6 5.6 0 0 0-3.62 2.63 5.68 5.68 0 0 0 .43 6.44 5.6 5.6 0 0 0 .47 4.46 5.68 5.68 0 0 0 5.83 2.77 5.6 5.6 0 0 0 4.08 1.83 5.68 5.68 0 0 0 5.4-3.52 5.6 5.6 0 0 0 3.62-2.63 5.68 5.68 0 0 0-.43-6.44zm-8.22 13.07a3.84 3.84 0 0 1-2.28-.77l.11-.06 3.78-2.18a.93.93 0 0 0 .47-.8v-5.32l1.6 1a.08.08 0 0 1 .04.06v5.2a3.85 3.85 0 0 1-3.72 2.87z" fill="#10A37F" />
          <text x="32" y="21" fill={textColor} fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.3">OpenAI</text>
        </svg>
      ),
    },
    {
      name: 'Claude Anthropic',
      glowColor: 'rgba(217, 119, 87, 0.2)',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 4L20 28H15.5L14.2 22H7.8L6.5 28H2L8 4H14ZM11 8.8L8.8 18H13.2L11 8.8Z" fill="#D97757" />
          <text x="28" y="21" fill={textColor} fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.3">Claude</text>
        </svg>
      ),
    },
    {
      name: 'Airtable',
      glowColor: 'rgba(24, 191, 255, 0.2)',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L3 8V18L12 14V4Z" fill="#18BFFF" />
          <path d="M14 4L23 8V18L14 14V4Z" fill="#20C997" />
          <path d="M3 20L12 16L21 20L12 24L3 20Z" fill="#FFBA08" />
          <text x="30" y="21" fill={textColor} fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.3">Airtable</text>
        </svg>
      ),
    },
    {
      name: 'Notion',
      glowColor: 'rgba(255, 255, 255, 0.15)',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="22" height="24" rx="4" fill={isDark ? '#FFFFFF' : '#0F172A'} />
          <path d="M8 9V23L13 23L17 14V23H20V9L15 9L11 18V9H8Z" fill={isDark ? '#000000' : '#FFFFFF'} />
          <text x="32" y="21" fill={textColor} fontSize="17" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.3">Notion</text>
        </svg>
      ),
    },
    {
      name: 'Google Apps Script',
      glowColor: 'rgba(66, 133, 244, 0.2)',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 145 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 4L2 10.5V21.5L13.5 28L25 21.5V10.5L13.5 4Z" fill="#4285F4" />
          <path d="M10 12L7 16L10 20M17 12L20 16L17 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="32" y="21" fill={textColor} fontSize="15" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.3">Apps Script</text>
        </svg>
      ),
    },
    {
      name: 'HubSpot',
      glowColor: 'rgba(255, 122, 89, 0.22)',
      svg: (
        <svg className="h-8 w-auto" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="16" r="6" fill="#FF7A59" />
          <path d="M14 4V10M14 22V28M4 16H10M18 16H24" stroke="#FF7A59" strokeWidth="3" strokeLinecap="round" />
          <text x="30" y="21" fill={textColor} fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.3">HubSpot</text>
        </svg>
      ),
    },
  ];
};

export const TechStackBanner: React.FC = () => {
  const { isDark } = useTheme();
  const techLogos = getTechLogos(isDark);

  return (
    <section className="py-10 bg-slate-100 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800/60 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Tech Stack
        </p>
      </div>

      {/* Outer Banner Wrapper - Seamless horizontal strip without heavy card background */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="relative w-full py-4 overflow-hidden group">
          {/* Edge Fade Gradients for Seamless Infinity Look */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-slate-100 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-slate-100 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Marquee Continuous Scroller */}
          <div className="animate-marquee flex items-center gap-10 sm:gap-14">
            {[...techLogos, ...techLogos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="relative flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shrink-0 group/logo px-2"
              >
                {/* Soft Studio Lighting Glow Behind Each Logo */}
                <div
                  className="absolute inset-0 rounded-xl opacity-40 group-hover/logo:opacity-100 transition-opacity duration-300 blur-lg pointer-events-none"
                  style={{ background: logo.glowColor }}
                />

                {/* Clean, frameless logo presentation with subtle hover glow */}
                <div className="relative z-10 py-2 px-3 flex items-center justify-center">
                  {logo.svg}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
