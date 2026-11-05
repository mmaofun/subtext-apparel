'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: 'WHAT DOES 650–720 GSM MEAN IN PRACTICE?',
      a: 'GSM stands for Grams per Square Meter, the international standard measure of fabric density and weight. Standard commercial hoodies range from 280 to 380 GSM. At 650–720 GSM, Subtext hoodies weigh nearly 1.5 kilograms each. The fabric holds its own architectural shape, stands upright without sagging, and offers deep tactile grounding.',
    },
    {
      q: 'HOW SHOULD I SELECT MY SIZE?',
      a: 'All Subtext hoodies are engineered with an intentional relaxed drop-shoulder oversized boxy silhouette. We recommend taking your true standard size for the intended fashion silhouette. If you prefer a tailored, snug fit, choose one size down.',
    },
    {
      q: 'HOW DO I CARE FOR AND PRESERVE MY PIECE?',
      a: 'Because our cotton is 100% organic with 0% synthetic polyester, wash cold (30°C / 85°F) inside out on a gentle cycle. Never tumble dry. Reshape slightly while damp and dry flat in the shade. Iron low on reverse.',
    },
    {
      q: 'ARE THE HOODIES REALLY PRODUCED IN PORTUGAL?',
      a: 'Yes. Our long-staple cotton is custom-milled in Milan, Italy and assembled by master garment seamsters in Porto, Portugal. Each piece is crafted in limited batches of 250 units to maintain strict quality control.',
    },
    {
      q: 'WHAT IS THE RETURN POLICY?',
      a: 'We offer an effortless 30-day return or exchange window worldwide. Garments must be unworn with original serialized tags intact.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="border-b border-white/10 pb-8 space-y-3">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block">
            // CLIENT ADVISORY
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white uppercase">
            FREQUENTLY CODIFIED INQUIRIES
          </h1>
          <p className="text-xs sm:text-sm font-mono text-secondary">
            Essential protocols regarding fabric mass, sizing, care, and international dispatch.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-surface border border-white/10 font-mono text-xs"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center text-left font-bold text-white uppercase text-sm hover:text-accent transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    open === i ? 'rotate-180 text-accent' : 'text-muted'
                  }`}
                />
              </button>
              {open === i && (
                <p className="text-secondary font-sans leading-relaxed text-xs sm:text-sm pt-4 border-t border-white/5 mt-4">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
