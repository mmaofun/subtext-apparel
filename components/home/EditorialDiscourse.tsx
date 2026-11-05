'use client';

import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export const EditorialDiscourse: React.FC = () => {
  const reviews = [
    {
      author: 'Example reviewer',
      role: 'Sample copy',
      city: 'Preview',
      piece: 'THE EGO HOODIE (650 GSM)',
      comment:
        'The sheer density of the fabric gives it an architectural presence unlike anything else. It holds its own structure completely. The subtle blind embroidery is genius.',
      rating: 5,
    },
    {
      author: 'Example reviewer',
      role: 'Sample copy',
      city: 'Preview',
      piece: 'THE PERCEPTION HOODIE (700 GSM)',
      comment:
        'The hood doesn’t flop; it stands like a collar on an overcoat. The absence of drawstrings gives it an immaculate, clean line. Worth every cent.',
      rating: 5,
    },
    {
      author: 'Example reviewer',
      role: 'Sample copy',
      city: 'Preview',
      piece: 'THE CONTROL HOODIE (620 GSM)',
      comment:
        'Finally a brand that treats clothing as psychological armor rather than noisy billboard advertising. Heavy, understated, and uncompromising.',
      rating: 5,
    },
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#070707] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block">
            // CLIENT DISCOURSE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-white uppercase">
            EXAMPLE COLLECTOR FEEDBACK
          </h2>
          <p className="text-xs font-mono text-secondary">
            Illustrative reviews shown for this design preview.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.piece}
              className="p-8 rounded-2xl bg-surface border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/20 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-accent">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-white/10" />
                </div>

                <p className="text-xs sm:text-sm text-primary font-mono leading-relaxed italic">
                  &quot;{rev.comment}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold text-white uppercase">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] font-mono text-accent flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> EXAMPLE
                  </span>
                </div>
                <p className="text-[11px] font-mono text-muted">{rev.role} // {rev.city}</p>
                <span className="text-[10px] font-mono text-zinc-500 block pt-1">
                  PIECE: {rev.piece}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
