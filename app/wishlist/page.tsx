'use client';

import React from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import { PRODUCTS } from '@/data/products';
import { HoodieVisual } from '@/components/ui/HoodieVisual';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart, formatPrice } = useStore();

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  if (savedProducts.length === 0) {
    return (
      <div className="min-h-screen pt-36 pb-24 px-4 flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center border border-white/10">
          <Heart className="w-8 h-8 text-muted" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-mono font-bold tracking-widest text-white uppercase">
            YOUR SAVED ARCHIVE IS EMPTY
          </h1>
          <p className="text-xs sm:text-sm font-mono text-secondary max-w-md">
            Bookmark pieces to monitor archive availability and limited release restocks.
          </p>
        </div>
        <Link href="/shop">
          <MagneticButton size="lg">
            <span>EXPLORE CATALOGUE</span>
          </MagneticButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="border-b border-white/10 pb-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <Heart className="w-3.5 h-3.5 fill-accent" />
            <span>[ PERSONAL BOOKMARKS ]</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-mono tracking-widest text-white uppercase">
            SAVED ARCHIVE PIECES ({savedProducts.length})
          </h1>
          <p className="text-xs sm:text-sm font-mono text-secondary max-w-xl">
            Items saved for future acquisition. Stock counts update in real-time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-6 rounded-2xl bg-surface border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
            >
              <div className="flex justify-between items-start text-xs font-mono">
                <span className="text-accent font-bold">ARCHETYPE {prod.themeNumber}</span>
                <button
                  onClick={() => toggleWishlist(prod.id)}
                  className="p-1.5 text-muted hover:text-red-400"
                  title="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
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

              <div className="space-y-4 pt-3 border-t border-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <Link
                      href={`/product/${prod.slug}`}
                      className="text-base font-mono font-bold text-white group-hover:text-accent transition-colors block"
                    >
                      {prod.title}
                    </Link>
                    <span className="text-xs font-mono text-muted">{prod.specs.gsm} GSM</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-white">
                    {formatPrice(prod.price)}
                  </span>
                </div>

                <MagneticButton
                  onClick={() => addToCart(prod, 'L', prod.colors[0].name, 1)}
                  size="sm"
                  className="w-full"
                >
                  <ShoppingBag className="w-3.5 h-3.5 mr-1" />
                  <span>TRANSFER TO BAG</span>
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
