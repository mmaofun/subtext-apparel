'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import { PRODUCTS, Product } from '@/data/products';
import { HoodieVisual } from './HoodieVisual';
import { Search, X, ArrowRight, Tag } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, formatPrice, setQuickViewProduct } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.themeName.toLowerCase().includes(q) ||
        p.quote.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.specs.fit.toLowerCase().includes(q)
    );
  }, [query]);

  const quickTags = ['Ego', 'Perception', 'Control', 'Obsession', 'Silence', 'Silk', '650 GSM'];

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center pt-16 sm:pt-24 px-4">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative w-full max-w-3xl bg-[#0e0e12] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Search Bar */}
        <div className="flex items-center px-6 py-4 border-b border-white/10">
          <Search className="w-5 h-5 text-secondary mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH ARCHIVE BY PSYCHOLOGICAL THEME, GSM, OR SILHOUETTE..."
            className="w-full bg-transparent text-sm sm:text-base font-mono text-white placeholder-muted focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-muted hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-mono text-secondary hover:text-white px-2 py-1 border border-white/10 rounded"
          >
            ESC
          </button>
        </div>

        {/* Quick Tag Recommendations */}
        {!query && (
          <div className="p-6">
            <p className="text-xs font-mono text-muted uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" /> REPUTED ARCHETYPES:
            </p>
            <div className="flex flex-wrap gap-2">
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1.5 rounded bg-surface border border-white/10 hover:border-white/30 text-xs font-mono text-secondary hover:text-white transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">
                FEATURED HIGHLIGHTS
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRODUCTS.slice(0, 2).map((prod) => (
                  <Link
                    key={prod.id}
                    href={`/product/${prod.slug}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center gap-4 p-3 rounded bg-surface hover:bg-white/5 border border-white/5 hover:border-white/15 transition-all group"
                  >
                    <div className="w-14 h-16 bg-black/40 rounded flex items-center justify-center p-1">
                      <HoodieVisual themeName={prod.themeName} themeNumber={prod.themeNumber} colorHex={prod.colors[0].hex} />
                    </div>
                    <div>
                      <h5 className="text-xs font-mono font-bold text-white group-hover:text-accent transition-colors">
                        {prod.title}
                      </h5>
                      <p className="text-[11px] font-mono text-muted">
                        {prod.specs.gsm} GSM // {formatPrice(prod.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
            {searchResults.length === 0 ? (
              <div className="text-center py-12 text-muted font-mono text-xs">
                NO PIECES MATCHED &quot;{query.toUpperCase()}&quot;
              </div>
            ) : (
              searchResults.map((prod) => (
                <div
                  key={prod.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-surface hover:bg-white/5 border border-white/5 hover:border-white/20 transition-all group"
                >
                  <Link
                    href={`/product/${prod.slug}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center gap-4 flex-1"
                  >
                    <div className="w-12 h-14 bg-black rounded flex items-center justify-center p-1">
                      <HoodieVisual themeName={prod.themeName} themeNumber={prod.themeNumber} colorHex={prod.colors[0].hex} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-accent">[{prod.code}]</span>
                        <h4 className="text-xs font-mono font-bold text-white group-hover:text-white">
                          {prod.title}
                        </h4>
                      </div>
                      <p className="text-xs text-muted font-mono line-clamp-1 mt-0.5">
                        &quot;{prod.quote}&quot;
                      </p>
                    </div>
                  </Link>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-bold text-white">
                      {formatPrice(prod.price)}
                    </span>
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        setQuickViewProduct(prod);
                      }}
                      className="px-3 py-1.5 rounded bg-white/10 hover:bg-white text-black hover:text-black font-mono text-xs font-bold transition-colors hidden sm:block"
                    >
                      QUICK VIEW
                    </button>
                    <Link
                      href={`/product/${prod.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="p-2 text-muted group-hover:text-white"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
