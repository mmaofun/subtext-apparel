'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COLLECTIONS, PRODUCTS } from '@/data/products';
import { HoodieVisual } from '@/components/ui/HoodieVisual';
import { useStore } from '@/context/StoreContext';
import { ArrowLeft, ShoppingBag, Heart, Eye } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export default function CollectionDetailPage({ params }: Props) {
  const { addToCart, setQuickViewProduct, toggleWishlist, isInWishlist, formatPrice } = useStore();

  const collection = COLLECTIONS.find((c) => c.slug === params.slug);
  if (!collection) notFound();

  const products = PRODUCTS.filter((p) => collection.items.includes(p.slug));

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Back Link */}
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ALL CAPSULES</span>
        </Link>

        {/* Hero */}
        <div className="border-b border-white/10 pb-8 space-y-3">
          <span className="text-xs font-mono text-accent font-bold">
            CAPSULE ARCHIVE // {collection.year}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-mono tracking-widest text-white uppercase">
            {collection.title}
          </h1>
          <p className="text-xs sm:text-sm font-mono text-secondary max-w-2xl">
            {collection.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => {
            const isSaved = isInWishlist(prod.id);

            return (
              <div
                key={prod.id}
                className="p-6 rounded-2xl bg-surface border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
              >
                <div className="flex justify-between items-start text-xs font-mono">
                  <span className="text-accent font-bold">ARCHETYPE {prod.themeNumber}</span>
                  <button
                    onClick={() => toggleWishlist(prod.id)}
                    className={`p-1.5 rounded-full border ${
                      isSaved ? 'border-accent text-accent' : 'border-white/10 text-muted hover:text-white'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-accent' : ''}`} />
                  </button>
                </div>

                <Link
                  href={`/product/${prod.slug}`}
                  className="w-full h-72 flex items-center justify-center my-4 relative"
                >
                  <HoodieVisual
                    themeName={prod.themeName}
                    themeNumber={prod.themeNumber}
                    colorHex={prod.colors[0].hex}
                  />
                </Link>

                <div className="space-y-3 pt-3 border-t border-white/5">
                  <div className="flex justify-between items-start">
                    <Link
                      href={`/product/${prod.slug}`}
                      className="text-base font-mono font-bold text-white group-hover:text-accent transition-colors"
                    >
                      {prod.title}
                    </Link>
                    <span className="text-sm font-mono font-bold text-white">
                      {formatPrice(prod.price)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs font-mono text-secondary pt-1">
                    <span>{prod.specs.gsm} GSM</span>
                    <button
                      onClick={() => addToCart(prod, 'L', prod.colors[0].name, 1)}
                      className="text-xs font-mono text-white hover:text-accent flex items-center gap-1 font-bold"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> ACQUIRE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
