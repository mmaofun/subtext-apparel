'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Shield, Brain, Flame } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ManifestoScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      number: '01',
      title: 'PERCEPTION',
      subtitle: 'What people see is rarely what they understand.',
      description:
        'Visual reality is mediated through prejudice, insecurity, and cognitive shortcuts. We design garments that manipulate shadow and drape to project absolute composure.',
      icon: Eye,
      accent: 'text-accent-ice',
    },
    {
      number: '02',
      title: 'CONTROL',
      subtitle: 'The strongest influence is the one you never notice.',
      description:
        'Tactical restraint over loud posturing. Seamless ergonomic construction engineered to grant physical freedom and impenetrable psychological boundaries.',
      icon: Shield,
      accent: 'text-zinc-400',
    },
    {
      number: '03',
      title: 'EGO',
      subtitle: 'Everyone protects the version of themselves they created.',
      description:
        'The subconscious armor that safeguards identity. Custom-milled 650 GSM French terry that acts as a structural boundary between your core and external noise.',
      icon: Brain,
      accent: 'text-accent',
    },
    {
      number: '04',
      title: 'OBSESSION',
      subtitle: 'Focus consumed to the point of structural distortion.',
      description:
        'Relentless attention to micro-details: 48,000-stitch blind tonal embroidery, zero-synthetic loopback weaves, and double-walled acoustic hoods.',
      icon: Flame,
      accent: 'text-amber-500',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal pillars sequentially on scroll with active glow trigger
      pillars.forEach((_, idx) => {
        gsap.from(`.pillar-card-${idx}`, {
          scrollTrigger: {
            trigger: `.pillar-card-${idx}`,
            start: 'top 85%',
            end: 'top 45%',
            scrub: 1,
          },
          y: 80,
          opacity: 0.1,
          scale: 0.94,
        });

        // Trigger active highlight
        ScrollTrigger.create({
          trigger: `.pillar-card-${idx}`,
          start: 'top 60%',
          end: 'bottom 40%',
          toggleClass: { targets: `.pillar-card-${idx}`, className: 'ring-1 ring-white/40 shadow-2xl' },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-4 sm:px-8 max-w-[1440px] mx-auto bg-background"
    >
      <div>
        {/* Section Title */}
        <div className="mb-20 text-center space-y-4">
          <span className="text-xs font-mono tracking-cinematic text-accent uppercase block">
            // THE BEHAVIORAL THESIS
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase max-w-4xl mx-auto">
            THE ARCHITECTURE OF COVERT INFLUENCE
          </h2>
          <p className="text-xs sm:text-sm font-mono text-secondary max-w-xl mx-auto">
            Four foundational tenets translated from psychological observation into physical luxury cloth.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`pillar-card-${idx} p-8 sm:p-12 bg-[#0e0e0e] border border-white/10 hover:border-white/30 transition-all duration-500 group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-mono font-bold text-muted group-hover:text-white transition-colors">
                      {pillar.number}
                    </span>
                    <div className="p-3 bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors">
                      <Icon className={`w-5 h-5 ${pillar.accent}`} />
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl font-bold tracking-wide text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-mono text-accent italic mb-4">
                    &quot;{pillar.subtitle}&quot;
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-secondary font-mono leading-relaxed pt-6 border-t border-white/5">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
