'use client';

import React from 'react';
import Link from 'next/link';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Shield, Brain, Layers, ArrowRight, Eye, Flame } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Header */}
        <div className="border-b border-white/10 pb-8 space-y-4">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block">
            // PHILOSOPHICAL MANIFESTO
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-sans tracking-tight text-white uppercase leading-tight">
            CLOTHING AS TACTILE ARMOR.
          </h1>
          <p className="text-base font-mono text-secondary max-w-2xl leading-relaxed">
            We do not design streetwear for social approval. We engineer physical shields exploring human perception, ego defense mechanisms, and deliberate self-possession.
          </p>
        </div>

        {/* Section 1: The Thesis */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-4 font-mono">
            <span className="text-xs text-accent font-bold">[ THESIS 01 ]</span>
            <h2 className="text-2xl font-bold text-white uppercase">
              THE QUIETEST PERSON IN THE ROOM
            </h2>
            <p className="text-xs text-muted">
              Loud logos are a cry for external validation. True authority is silent and undeniable.
            </p>
          </div>

          <div className="md:col-span-7 space-y-6 text-sm text-secondary font-sans leading-relaxed">
            <p>
              In contemporary culture, fashion has degenerated into hyper-visible billboard advertising. Logos are worn as desperate declarations of belonging or wealth.
            </p>
            <p>
              Subtext Atelier is built upon the inverse philosophy: **understatement as the ultimate psychological boundary**. When you wear an unyielding 650 GSM French terry garment with zero exterior branding, the conversation shifts entirely from external status to personal poise.
            </p>
            <blockquote className="p-4 rounded-xl bg-surface border-l-2 border-accent text-xs font-mono text-white italic">
              &quot;Perception is not reality; it is an estimate negotiated between the viewer’s insecurities and the wearer’s deliberate omissions.&quot;
            </blockquote>
          </div>
        </div>

        {/* Section 2: Craft & Mass Metrics */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-white/10 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-accent font-bold">[ TEXTILE RIGOR ]</span>
            <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white uppercase">
              WHY 650–720 GSM?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-6 rounded-2xl bg-black/50 border border-white/5 space-y-3">
              <span className="text-2xl font-bold text-white block">1.45 KG</span>
              <h4 className="text-white font-bold uppercase">PHYSICAL WEIGHT</h4>
              <p className="text-secondary leading-relaxed">
                Deep somatic grounding. The physical mass of our garments acts as sensory pressure, promoting bodily calm.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/50 border border-white/5 space-y-3">
              <span className="text-2xl font-bold text-white block">0% POLY</span>
              <h4 className="text-white font-bold uppercase">ORGANIC INTEGRITY</h4>
              <p className="text-secondary leading-relaxed">
                Milled exclusively from 100% combed long-staple ring-spun cotton. Breathable, natural, and permanent.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/50 border border-white/5 space-y-3">
              <span className="text-2xl font-bold text-white block">PORTUGAL</span>
              <h4 className="text-white font-bold uppercase">ATELIER CRAFT</h4>
              <p className="text-secondary leading-relaxed">
                Individually assembled in Porto by generational garment artisans using quadruple-needle flatlock seams.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 pt-8">
          <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white uppercase">
            EXPERIENCE THE ARCHIVE
          </h3>
          <Link href="/shop">
            <MagneticButton size="lg">
              <span>EXPLORE ALL 10 ARCHETYPES</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
