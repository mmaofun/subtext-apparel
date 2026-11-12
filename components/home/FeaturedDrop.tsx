'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/products';
import { HoodieVisual } from '@/components/ui/HoodieVisual';
import { useStore } from '@/context/StoreContext';
import { ShoppingBag, Eye, Heart, Check, ArrowRight } from 'lucide-react';

export const FeaturedDrop: React.FC = () => {
  const { addToCart, setQuickViewProduct, toggleWishlist, isInWishlist, formatPrice } = useStore();
  const [activeColors, setActiveColors] = useState<{ [productId: string]: string }>({});

  const featured = PRODUCTS.slice(0, 4);

  const handleColorSelect = (e: React.MouseEvent, prodId: string, colorHex: string) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveColors((prev) => ({ ...prev, [prodId]: colorHex }));
  };

  return (
    <section className="relative py-28 px-4 sm:px-8 bg-[#09090c] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-widest block">
              // THE ARCHIVE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mt-2">
              CURATED HEAVYWEIGHT CAPSULE
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-white transition-colors pb-1 border-b border-white/20 hover:border-white w-fit"
          >
            <span>VIEW ALL 10 PIECES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((prod) => {
            const currentHex = activeColors[prod.id] || prod.colors[0].hex;
            const isSaved = isInWishlist(prod.id);

            return (
              <div
                key={prod.id}
                className="group relative bg-[#0e0e0e] border border-white/10 hover:border-white/30 flex flex-col justify-between p-5 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Top Badge & Wishlist */}
                <div className="flex justify-between items-start z-10">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-white/10 text-white">
                    {prod.badge || 'CORE'}
                  </span>
                  <button
                    onClick={() => toggleWishlist(prod.id)}
                    className={`p-1.5 border transition-colors ${
                      isSaved
                        ? 'bg-accent/20 border-accent text-accent'
                        : 'bg-black/40 border-white/10 text-muted hover:text-white'
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-accent' : ''}`} />
                  </button>
                </div>

                {/* Product image */}
                <Link
                  href={`/product/${prod.slug}`}
                  className="w-full h-72 sm:h-80 flex items-center justify-center my-4 relative overflow-hidden bg-[#0a0a0a]"
                >
                  <HoodieVisual
                    themeName={prod.themeName}
                    themeNumber={prod.themeNumber}
                    slug={prod.slug}
                    colorHex={currentHex}
                    view="front"
                    className="w-full h-full"
                  />
                </Link>

                {/* Info & Purchase */}
                <div className="space-y-4 pt-2 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-accent">
                        ARCHETYPE {prod.themeNumber}
                      </span>
                      <Link
                        href={`/product/${prod.slug}`}
                        className="font-serif text-lg font-bold text-white hover:text-accent transition-colors block"
                      >
                        {prod.title}
                      </Link>
                    </div>
                    <span className="font-serif text-base font-bold text-white">
                      {formatPrice(prod.price)}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => addToCart(prod, 'L', prod.colors[0].name, 1)}
                      className="flex-1 py-2.5 bg-white text-black font-mono text-xs font-bold hover:bg-[#c9c6c5] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>ACQUIRE</span>
                    </button>

                    <button
                      onClick={() => setQuickViewProduct(prod)}
                      className="p-2.5 bg-black/60 border border-white/15 text-muted hover:text-white transition-colors"
                      title="Quick Inspect"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
