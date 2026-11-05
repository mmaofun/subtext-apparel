'use client';

import React, { useState } from 'react';
import { HoodieVisual } from '@/components/ui/HoodieVisual';
import { Feather, ShieldCheck, Scale, Scissors, Sparkles, CheckCircle2 } from 'lucide-react';

export const MaterialCraftSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fabric' | 'embroidery'>('fabric');

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#050507] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block">
            // METRIC ANALYSIS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white uppercase">
            UNCOMPROMISING TEXTILE METRIC
          </h2>
          <p className="text-xs sm:text-sm font-mono text-secondary">
            Standard streetwear uses 320–400 GSM fleece. Subtext Atelier operates exclusively at 650–720 GSM with zero synthetic polyester blending.
          </p>
        </div>

        {/* Interactive Comparison & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Interactive Canvas */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => setActiveTab('fabric')}
                className={`px-4 py-2 rounded font-mono text-xs font-bold transition-all ${
                  activeTab === 'fabric'
                    ? 'bg-white text-black'
                    : 'bg-surface text-secondary hover:text-white border border-white/10'
                }`}
              >
                10X MACRO WEAVE STRUCTURE
              </button>
              <button
                onClick={() => setActiveTab('embroidery')}
                className={`px-4 py-2 rounded font-mono text-xs font-bold transition-all ${
                  activeTab === 'embroidery'
                    ? 'bg-white text-black'
                    : 'bg-surface text-secondary hover:text-white border border-white/10'
                }`}
              >
                48,000-STITCH BLIND EMBROIDERY
              </button>
            </div>

            <div className="w-full h-96 relative rounded-2xl overflow-hidden shadow-2xl border border-white/15">
              <HoodieVisual
                themeName="CORTEX"
                themeNumber="01"
                view={activeTab}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right Metrics & Specs Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-xl bg-surface border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <Scale className="w-5 h-5 text-accent" />
                <h3 className="text-sm font-mono font-bold text-white uppercase tracking-widest">
                  650–720 GSM FLEECE MASS
                </h3>
              </div>
              <p className="text-xs text-secondary leading-relaxed">
                Milled from long-staple organic cotton yarns that are spun at high twist tension, creating an interlocking loopback grid that resists friction, stretching, and pilling.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-white pt-2 border-t border-white/5">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Cotton
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 0% Synthetic Poly
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Pre-Shrunk
                </span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <Scissors className="w-5 h-5 text-accent-ice" />
                <h3 className="text-sm font-mono font-bold text-white uppercase tracking-widest">
                  PORTUGUESE ATELIER ASSEMBLY
                </h3>
              </div>
              <p className="text-xs text-secondary leading-relaxed">
                Each piece is individually assembled by master seamsters in Porto, Portugal using quadruple-needle flatlock seams that sit completely flush against the skin without pressure points.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-zinc-300" />
                <h3 className="text-sm font-mono font-bold text-white uppercase tracking-widest">
                  LIFETIME ARCHIVAL INTEGRITY
                </h3>
              </div>
              <p className="text-xs text-secondary leading-relaxed">
                Tested against 100 industrial wash cycles with zero seam torque, neck deformation, or color loss. A permanent artifact in your personal uniform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
