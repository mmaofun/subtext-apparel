'use client';

import React from 'react';
import { RotateCcw, CheckCircle2 } from 'lucide-react';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="border-b border-white/10 pb-8 space-y-3">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block">
            // CLIENT SATISFACTION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white uppercase">
            30-DAY EFFORTLESS RETURNS
          </h1>
          <p className="text-xs font-mono text-secondary">Sample content for this design preview. No orders are accepted.</p>
          <p className="text-xs sm:text-sm font-mono text-secondary">
            Experience the garment in your own space. If the drape or fit is not absolute perfection, return it with ease.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-surface border border-white/10 space-y-6 font-mono text-xs">
          <h3 className="text-base font-bold text-white uppercase">RETURN CONDITIONS</h3>
          <ul className="space-y-3 text-secondary">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Garment in original unworn, unwashed condition.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Original serialized atelier tags still attached.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Initiated within 30 calendar days of delivery.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
