'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { HoodieVisual } from '@/components/ui/HoodieVisual';
import { PRODUCTS } from '@/data/products';
import { useStore } from '@/context/StoreContext';
import { ArrowRight, Volume2, VolumeX, Sparkles, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const hoodieStageRef = useRef<HTMLDivElement>(null);

  const { addToCart, formatPrice } = useStore();
  const flagship = PRODUCTS[0]; // THE EGO HOODIE

  const [activeColor, setActiveColor] = useState(flagship.colors[0].name);
  const [isMuted, setIsMuted] = useState(true);

  const selectedColorHex =
    flagship.colors.find((c) => c.name === activeColor)?.hex || flagship.colors[0].hex;

  useEffect(() => {
    if (!containerRef.current || !heroTextRef.current) return;

    const ctx = gsap.context(() => {
      // Fade out words as user scrolls down away from the top
      gsap.to(heroTextRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '50% top',
          scrub: true,
          invalidateOnRefresh: true,
        },
        opacity: 0,
        y: -90,
        ease: 'none',
      });

      // Right hoodie card parallax scrub
      if (hoodieStageRef.current) {
        gsap.to(hoodieStageRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '50% top',
            scrub: true,
            invalidateOnRefresh: true,
          },
          opacity: 0.1,
          y: 80,
          scale: 0.95,
          ease: 'none',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-4 sm:px-8 max-w-[1440px] mx-auto overflow-hidden"
    >
      {/* Top Metadata Blueprint Bar */}
      <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-muted border-b border-white/10 pb-4 gap-2">
        <div className="flex items-center gap-4">
          <span className="text-white font-bold">[ CORTEX RESEARCH // 01 ]</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">650–720 GSM ORGANIC FLEECE</span>
          <span>•</span>
          <span>MILAN MILLING // PORTO ATELIER</span>
        </div>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="flex items-center gap-1.5 text-muted hover:text-white transition-colors"
          title="Toggle Subtext Frequency"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-accent" />}
          <span>{isMuted ? 'FREQ: MUTED' : 'FREQ: 432HZ ACTIVE'}</span>
        </button>
      </div>

      {/* Main Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto py-8">
        {/* Left: Giant Typography (Starts 100% visible, smoothly disappears on scroll down) */}
        <div ref={heroTextRef} className="lg:col-span-7 space-y-6 will-change-transform opacity-100">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/60 border border-white/15 text-[10px] font-mono text-accent uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>CAPSULE 01 // THE ILLUSION OF CHOICE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] uppercase">
            YOU ARE EASIER TO READ THAN YOU THINK.
          </h1>

          <p className="font-mono text-xs sm:text-sm text-secondary max-w-xl leading-relaxed">
            Physical armor engineered around dark psychology, human perception, ego defense mechanisms, and deliberate self-possession. 650 GSM French terry. Zero exterior branding.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link href="/shop">
              <MagneticButton size="lg">
                <span>EXPLORE ALL 10 ARCHETYPES</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>
            </Link>

            <Link href={`/product/${flagship.slug}`}>
              <MagneticButton variant="secondary" size="lg">
                <span>INSPECT THE EGO HOODIE</span>
              </MagneticButton>
            </Link>
          </div>

          {/* Colorway Switcher */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/5 font-mono text-xs text-muted">
            <span className="uppercase text-[10px] tracking-widest">COLORWAY:</span>
            <div className="flex items-center gap-2">
              {flagship.colors.map((col) => (
                <button
                  key={col.name}
                  onClick={() => setActiveColor(col.name)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 border transition-all text-[11px] ${
                    activeColor === col.name
                      ? 'border-white text-white bg-white/10'
                      : 'border-white/10 text-muted hover:border-white/30'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 border border-white/30"
                    style={{ backgroundColor: col.hex }}
                  />
                  <span>{col.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Flagship Garment Studio Visual Stage */}
        <div ref={hoodieStageRef} className="lg:col-span-5 relative flex items-center justify-center will-change-transform">
          <div className="relative w-full aspect-[4/5] max-w-md bg-[#0e0e0e] border border-white/10 p-8 flex flex-col justify-between group overflow-hidden shadow-2xl">
            {/* Top Card Badge */}
            <div className="flex justify-between items-start text-xs font-mono">
              <div>
                <span className="text-accent font-bold">ARCHETYPE 01</span>
                <h3 className="font-serif text-lg font-bold text-white mt-0.5">THE EGO HOODIE</h3>
              </div>
              <span className="text-white font-bold font-mono">{formatPrice(flagship.price)}</span>
            </div>

            {/* Clean White Studio Display with EGO Text Hoodie */}
            <div className="w-full h-72 flex items-center justify-center my-4 overflow-hidden border border-white/10 bg-white">
              <HoodieVisual
                themeName={flagship.themeName}
                themeNumber={flagship.themeNumber}
                slug={flagship.slug}
                colorHex={selectedColorHex}
                view="front"
                className="w-full h-full"
              />
            </div>

            {/* Card Footer */}
            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
              <span className="text-muted">650 GSM // STRUCTURED BOXY</span>
              <button
                onClick={() => addToCart(flagship, 'L', activeColor, 1)}
                className="px-4 py-2 bg-white text-black font-bold hover:bg-[#c9c6c5] transition-colors"
              >
                QUICK ACQUIRE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker and scroll indicator */}
      <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-muted gap-2">
        <div className="flex items-center gap-6">
          <span>WEIGHT: 1.45 KG / PIECE</span>
          <span>•</span>
          <span>WEAVE: ZERO-POLY FRENCH TERRY</span>
          <span>•</span>
          <span>BATCH: 250 SERIALIZED UNITS</span>
        </div>
        <div className="flex items-center gap-2 text-accent font-bold animate-bounce">
          <span>SCROLL TO DECONSTRUCT</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
};
