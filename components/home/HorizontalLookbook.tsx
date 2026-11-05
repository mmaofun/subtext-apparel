'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import { HoodieVisual } from '@/components/ui/HoodieVisual';
import { ArrowRight, MoveRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HorizontalLookbook: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const getScrollAmount = () => {
        return -(scrollContainer.scrollWidth - window.innerWidth + 160);
      };

      const tween = gsap.to(scrollContainer, {
        x: getScrollAmount,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${scrollContainer.scrollWidth - window.innerWidth + 800}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0e0e0e] overflow-hidden py-8 border-y border-white/10">
      <div className="w-full flex flex-col justify-between h-screen p-6 sm:p-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-widest block">
              // ARCHIVE STREAM (PINNED SCROLL)
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mt-1">
              THE 10 PSYCHOLOGICAL ARCHETYPES
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <span>HORIZONTAL PINNED RUN</span>
            <MoveRight className="w-4 h-4 text-accent animate-pulse" />
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-8 will-change-transform my-auto pl-2 pr-32"
        >
          {PRODUCTS.map((prod) => (
            <Link
              key={prod.id}
              href={`/product/${prod.slug}`}
              className="w-[320px] sm:w-[420px] h-[500px] sm:h-[540px] bg-[#131313] border border-white/10 hover:border-white/30 p-6 flex flex-col justify-between transition-all duration-300 group flex-shrink-0 relative overflow-hidden"
            >
              {/* Background ambient badge */}
              <span className="absolute top-4 right-4 text-5xl font-mono font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                {prod.themeNumber}
              </span>

              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-white/10 text-accent font-bold">
                    ARCHETYPE {prod.themeNumber}
                  </span>
                  <span className="text-xs font-mono text-muted">{prod.specs.gsm} GSM</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mt-2 group-hover:text-accent transition-colors">
                  {prod.title}
                </h3>
                <p className="text-xs font-mono text-secondary mt-0.5 line-clamp-1">
                  &quot;{prod.quote}&quot;
                </p>
              </div>

              {/* Garment Visual */}
              <div className="w-full h-56 sm:h-64 flex items-center justify-center my-auto transition-transform duration-700 group-hover:scale-105">
                <HoodieVisual
                  themeName={prod.themeName}
                  themeNumber={prod.themeNumber}
                  slug={prod.slug}
                  colorHex={prod.colors[0].hex}
                  className="w-full h-full"
                />
              </div>

              {/* Bottom CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
                <span className="font-serif text-base font-bold text-white">${prod.price} USD</span>
                <span className="flex items-center gap-1 text-muted group-hover:text-white transition-colors">
                  INSPECT PIECE <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[11px] font-mono text-muted border-t border-white/10 pt-4">
          <span>SCROLL DOWN TO ADVANCE HORIZONTAL STREAM</span>
          <span>10 ITEMS CURRENTLY IN CAPSULE</span>
        </div>
      </div>
    </section>
  );
};
