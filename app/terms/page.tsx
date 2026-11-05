'use client';

import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="border-b border-white/10 pb-8 space-y-3">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block">
            // LEGAL GOVERNANCE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white uppercase">
            TERMS OF SERVICE
          </h1>
          <p className="text-xs font-mono text-secondary">Sample content for this design preview. No orders are accepted.</p>
        </div>

        <div className="p-8 rounded-3xl bg-surface border border-white/10 space-y-6 text-xs font-mono text-secondary leading-relaxed">
          <p>
            All designs, philosophical trademarks, garment silhouettes, and proprietary 650–720 GSM French terry weaves are intellectual property of Subtext Studios Inc.
          </p>
          <p>
            Acquisition of any garment grants personal wear license. Unauthorized commercial reproduction of our codified runs is strictly prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
