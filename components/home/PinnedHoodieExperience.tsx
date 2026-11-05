'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { HoodieVisual } from '@/components/ui/HoodieVisual';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Layers, ShieldAlert, Cpu, Sparkles, MoveDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PinnedHoodieExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedStageRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  const flagship = PRODUCTS[0];

  const chapters = [
    {
      step: '01 / 04',
      title: '650 GSM BESPOKE FRENCH TERRY',
      subtitle: 'Zero Synthetic Dilution',
      description:
        'Knitted on vintage circular looms using 100% long-staple organic cotton. The loopback structure provides an unyielding architectural box silhouette that never sags or collapses over time.',
      view: 'front' as const,
      spec1: '650 GSM DENSITY',
      spec2: 'ZERO SHRINKAGE',
      icon: Layers,
    },
    {
      step: '02 / 04',
      title: 'SPINAL TELEMETRY & BLIND RUNES',
      subtitle: 'Micro-Coordinate High-Density Stitch',
      description:
        'Inscribed with tone-on-tone coordinates along the thoracic axis. Engineered to be visible only at intimate personal proximity or shifting angles of low ambient light.',
      view: 'back' as const,
      spec1: '48,000 STITCHES',
      spec2: 'TONE-ON-TONE',
      icon: Cpu,
    },
    {
      step: '03 / 04',
      title: 'DOUBLE-WALLED ACOUSTIC HOOD',
      subtitle: 'Peripheral Dampening Structure',
      description:
        'Constructed with two full layers of self-fabric without drawstrings. The crossover stand-up collar isolates ambient noise and frames the face with geometric precision.',
      view: 'hood' as const,
      spec1: 'DOUBLE-WALLED',
      spec2: 'NO DRAWSTRINGS',
      icon: ShieldAlert,
    },
    {
      step: '04 / 04',
      title: 'TACTILE EMBOSS RELIEF',
      subtitle: 'Subconscious Internal Tagging',
      description:
        'Every hoodie contains a serialized internal monologue statement sewn directly into the kangaroo lining. An intimate reminder of your own behavioral command.',
      view: 'embroidery' as const,
      spec1: 'SERIALIZED',
      spec2: 'HIDDEN MONOLOGUE',
      icon: Sparkles,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=3200',
        pin: pinnedStageRef.current,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            chapters.length - 1,
            Math.floor(progress * chapters.length)
          );
          setActiveChapter(index);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [chapters.length]);

  const current = chapters[activeChapter];
  const Icon = current.icon;

  return (
    <div ref={containerRef} className="relative bg-[#0a0a0a]">
      {/* Pinned Viewport Container */}
      <div
        ref={pinnedStageRef}
        className="w-full h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden border-b border-white/10 max-w-[1440px] mx-auto"
      >
        {/* Top Telemetry Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-muted border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold tracking-widest uppercase">
              DECONSTRUCTION PROTOCOL // 360° PINNED SCROLL
            </span>
            <span className="text-zinc-600">//</span>
            <span className="text-accent font-bold">{current.step}</span>
          </div>

          <div className="flex items-center gap-2">
            {chapters.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveChapter(i)}
                className={`h-1.5 transition-all duration-300 ${
                  activeChapter === i ? 'w-8 bg-white' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          {/* Left Dynamic Spec Chapter Card */}
          <div className="lg:col-span-5 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-secondary">
              <Icon className="w-3.5 h-3.5 text-accent" />
              <span>CHAPTER {activeChapter + 1} SPECIFICATION</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
              {current.title}
            </h2>

            <p className="text-sm font-mono text-accent italic">
              &quot;{current.subtitle}&quot;
            </p>

            <p className="text-xs sm:text-sm text-secondary font-mono leading-relaxed">
              {current.description}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 font-mono text-xs">
              <div className="p-3 bg-[#131313] border border-white/10">
                <span className="text-[10px] text-muted block">SPECIFICATION A</span>
                <span className="text-white font-bold">{current.spec1}</span>
              </div>
              <div className="p-3 bg-[#131313] border border-white/10">
                <span className="text-[10px] text-muted block">SPECIFICATION B</span>
                <span className="text-white font-bold">{current.spec2}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link href={`/product/${flagship.slug}`}>
                <MagneticButton size="sm">
                  <span>ORDER ARCHETYPE 01</span>
                </MagneticButton>
              </Link>
            </div>
          </div>

          {/* Right Pinned Centered Interactive Hoodie with View Switch */}
          <div className="lg:col-span-7 flex items-center justify-center relative min-h-[380px] sm:min-h-[500px]">
            <div className="w-full max-w-lg h-[450px] sm:h-[550px] relative flex items-center justify-center transition-all duration-700 bg-[#0e0e0e] border border-white/10 p-8 shadow-2xl">
              <HoodieVisual
                themeName={flagship.themeName}
                themeNumber={flagship.themeNumber}
                colorHex="#0a0a0a"
                view={current.view}
                className="w-full h-full scale-110 transition-transform duration-700"
              />

              <span className="absolute bottom-4 right-4 text-[10px] font-mono text-muted bg-black/60 px-2.5 py-1 border border-white/10 uppercase">
                ACTIVE VIEW: {current.view.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Pinned Footer */}
        <div className="flex items-center justify-between text-[11px] font-mono text-muted pt-4 border-t border-white/10">
          <span>PINNED SCROLL TELEMETRY ACTIVE</span>
          <div className="flex items-center gap-2 text-accent font-bold animate-pulse">
            <MoveDown className="w-3.5 h-3.5" />
            <span>CONTINUE SCROLLING DOWN TO CYCLE ALL 4 CHAPTERS</span>
          </div>
          <span className="hidden sm:inline">GARMENT CODE: ST-01-EGO</span>
        </div>
      </div>
    </div>
  );
};
