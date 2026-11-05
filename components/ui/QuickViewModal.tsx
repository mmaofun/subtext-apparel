'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import { HoodieVisual } from './HoodieVisual';
import { MagneticButton } from './MagneticButton';
import { X, Heart, ShieldCheck, Check, ArrowRight } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    formatPrice,
    toggleWishlist,
    isInWishlist,
  } = useStore();

  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL' | 'XXL'>('L');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [view, setView] = useState<'front' | 'back'>('front');

  if (!quickViewProduct) return null;

  const activeColor = selectedColor || quickViewProduct.colors[0].name;
  const activeColorObj = quickViewProduct.colors.find((c) => c.name === activeColor) || quickViewProduct.colors[0];
  const sizeStock = quickViewProduct.sizes.find((s) => s.size === selectedSize)?.stock ?? 0;
  const isSaved = isInWishlist(quickViewProduct.id);

  const handleAdd = () => {
    addToCart(quickViewProduct, selectedSize, activeColor, 1);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-[85] flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0d10] border border-white/15 rounded-2xl shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 text-muted hover:text-white z-20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visual Showcase Side */}
          <div className="p-8 bg-black/50 flex flex-col justify-between items-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="w-full flex items-center justify-between text-xs font-mono text-muted mb-4">
              <span>THEME {quickViewProduct.themeNumber}</span>
              <span>{quickViewProduct.specs.gsm > 0 ? `${quickViewProduct.specs.gsm} GSM` : quickViewProduct.specs.weight}</span>
            </div>

            <div className="w-full h-80 flex items-center justify-center relative overflow-hidden bg-white border border-white/10">
              <HoodieVisual
                themeName={quickViewProduct.themeName}
                themeNumber={quickViewProduct.themeNumber}
                slug={quickViewProduct.slug}
                colorHex={activeColorObj.hex}
                view={view}
                className="w-full h-full"
              />
            </div>

            {/* View Angle Switcher (Front & Back Only) */}
            <div className="flex gap-3 mt-4">
              {(['front', 'back'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-4 py-1.5 rounded text-[11px] font-mono tracking-widest uppercase transition-colors ${
                    view === v
                      ? 'bg-white text-black font-bold'
                      : 'bg-surface text-secondary hover:text-white border border-white/10'
                  }`}
                >
                  {v} VIEW
                </button>
              ))}
            </div>
          </div>

          {/* Details & Action Side */}
          <div className="p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-accent font-bold">
                  {quickViewProduct.badge || 'ARCHIVE'}
                </span>
                <span className="text-xs font-mono text-muted">{quickViewProduct.code}</span>
              </div>

              <h2 className="text-xl font-mono font-black tracking-widest text-white">
                {quickViewProduct.title}
              </h2>
              <p className="text-sm font-mono text-secondary mt-1">
                {formatPrice(quickViewProduct.price)}
              </p>

              <blockquote className="my-4 pl-3 border-l-2 border-accent text-xs font-mono text-white/80 italic">
                &quot;{quickViewProduct.quote}&quot;
              </blockquote>

              <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                {quickViewProduct.shortDesc}
              </p>

              {/* Color Selector */}
              <div className="mt-6">
                <label className="block text-[11px] font-mono text-muted uppercase tracking-widest mb-2">
                  COLORWAY: <span className="text-white font-bold">{activeColor}</span>
                </label>
                <div className="flex gap-3">
                  {quickViewProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        activeColor === c.name ? 'border-white scale-110' : 'border-white/20'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] font-mono text-muted uppercase tracking-widest">
                    SELECT SIZE:
                  </label>
                  <span className="text-[10px] font-mono text-emerald-400">
                    {sizeStock > 0 ? `${sizeStock} PIECES READY` : 'SOLD OUT'}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {quickViewProduct.sizes.map((s) => (
                    <button
                      key={s.size}
                      disabled={s.stock === 0}
                      onClick={() => setSelectedSize(s.size)}
                      className={`py-2 rounded font-mono text-xs font-bold transition-all ${
                        selectedSize === s.size
                          ? 'bg-white text-black'
                          : s.stock === 0
                          ? 'bg-surface/50 text-zinc-700 border border-white/5 cursor-not-allowed line-through'
                          : 'bg-surface hover:bg-white/10 text-secondary hover:text-white border border-white/10'
                      }`}
                    >
                      {s.size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex gap-3">
                <MagneticButton
                  onClick={handleAdd}
                  disabled={sizeStock === 0}
                  className="flex-1"
                >
                  {sizeStock > 0 ? 'ACQUIRE TO CART' : 'CURRENTLY DEPLETED'}
                </MagneticButton>
                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3 rounded-lg border transition-colors ${
                    isSaved
                      ? 'bg-accent/20 border-accent text-accent'
                      : 'bg-surface border-white/10 text-secondary hover:text-white'
                  }`}
                  aria-label="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-accent' : ''}`} />
                </button>
              </div>

              <Link
                href={`/product/${quickViewProduct.slug}`}
                onClick={() => setQuickViewProduct(null)}
                className="flex items-center justify-center gap-1.5 text-xs font-mono text-muted hover:text-white transition-colors py-1"
              >
                <span>VIEW FULL EDITORIAL DEEP-DIVE</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
