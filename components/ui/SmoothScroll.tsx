'use client';

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', (e: any) => {
      ScrollTrigger.update();
      if (document.documentElement.scrollHeight > window.innerHeight) {
        const progress =
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        setScrollProgress(Math.round(progress));
      }
    });

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Top HUD Telemetry Progress Bar */}
      <div className="fixed top-20 left-0 w-full h-[2px] z-40 bg-white/5 pointer-events-none">
        <div
          className="h-full bg-accent transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Scroll HUD Indicator in Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40 hidden lg:flex items-center gap-3 px-3 py-1.5 bg-[#0e0e0e]/80 border border-white/10 text-[10px] font-mono text-muted backdrop-blur-md pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>TELEMETRY: {scrollProgress}% SCROLLED</span>
        <span>// 10 ARCHETYPES CODIFIED</span>
      </div>

      {children}
    </>
  );
};
