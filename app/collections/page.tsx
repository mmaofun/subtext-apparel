'use client';

import React from 'react';
import Link from 'next/link';
import { COLLECTIONS, PRODUCTS } from '@/data/products';
import { HoodieVisual } from '@/components/ui/HoodieVisual';
import { ArrowRight, Layers } from 'lucide-react';

export default function CollectionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="border-b border-white/10 pb-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <Layers className="w-3.5 h-3.5" />
            <span>[ CAPSULE DIRECTORY ]</span>
          </div>
          <h1 className="text-3xl sm:text-6xl font-black font-sans tracking-tight text-white uppercase">
            CURATED CAPSULES & ARCHIVES
          </h1>
          <p className="text-xs sm:text-sm font-mono text-secondary max-w-xl">
            Thematic groupings exploring distinct psychological paradigms and textile weights.
          </p>
        </div>

        {/* Collections Stack */}
        <div className="space-y-12">
          {COLLECTIONS.map((col, idx) => {
            const colProducts = PRODUCTS.filter((p) => col.items.includes(p.slug));

            return (
              <div
                key={col.slug}
                className="p-8 sm:p-12 rounded-3xl bg-surface border border-white/10 space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-6">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-accent font-bold">
                      RELEASE {col.year} // {col.itemCount} PIECES
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-mono font-black tracking-widest text-white mt-2">
                      {col.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-mono text-secondary mt-1 max-w-2xl">
                      {col.description}
                    </p>
                  </div>

                  <Link
                    href={`/collections/${col.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-mono text-xs font-bold hover:bg-zinc-200 transition-colors self-start sm:self-auto"
                  >
                    <span>ENTER CAPSULE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Items Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {colProducts.map((prod) => (
                    <Link
                      key={prod.id}
                      href={`/product/${prod.slug}`}
                      className="p-5 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-all group flex flex-col justify-between"
                    >
                      <div className="flex justify-between items-start text-xs font-mono">
                        <span className="text-accent">ST-{prod.themeNumber}</span>
                        <span className="text-muted">{prod.specs.gsm} GSM</span>
                      </div>

                      <div className="w-full h-48 flex items-center justify-center my-2">
                        <HoodieVisual
                          themeName={prod.themeName}
                          themeNumber={prod.themeNumber}
                          colorHex={prod.colors[0].hex}
                        />
                      </div>

                      <div className="pt-2 border-t border-white/5 flex justify-between items-center text-xs font-mono">
                        <span className="font-bold text-white group-hover:text-accent transition-colors">
                          {prod.themeName}
                        </span>
                        <span className="text-white">${prod.price}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
