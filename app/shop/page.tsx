'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/data/products';
import { HoodieVisual } from '@/components/ui/HoodieVisual';
import { useStore } from '@/context/StoreContext';
import {
  Filter,
  SlidersHorizontal,
  Heart,
  ShoppingBag,
  Eye,
  Check,
  Grid,
  Columns,
} from 'lucide-react';

export default function ShopPage() {
  const { addToCart, setQuickViewProduct, toggleWishlist, isInWishlist, formatPrice } = useStore();

  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedTheme, setSelectedTheme] = useState<string>('ALL');
  const [selectedFit, setSelectedFit] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'gsm-desc'>('featured');
  const [gridColumns, setGridColumns] = useState<2 | 3>(3);

  // Sync category from URL query param if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      if (cat) {
        setSelectedCategory(cat.toLowerCase());
      }
    }
  }, []);

  const categories = useMemo(() => [
    { id: 'ALL', label: 'ALL ARCHIVE', count: PRODUCTS.length },
    { id: 'hoodies', label: 'HOODIES', count: PRODUCTS.filter((p) => p.category === 'hoodies').length },
    { id: 'pants', label: 'PANTS & TROUSERS', count: PRODUCTS.filter((p) => p.category === 'pants').length },
    { id: 'tees', label: 'TEES & TOPS', count: PRODUCTS.filter((p) => p.category === 'tees').length },
    { id: 'outerwear', label: 'OUTERWEAR', count: PRODUCTS.filter((p) => p.category === 'outerwear').length },
    { id: 'accessories', label: 'ACCESSORIES', count: PRODUCTS.filter((p) => p.category === 'accessories').length },
  ], []);

  const themeList = useMemo(() => {
    return ['ALL', ...Array.from(new Set(PRODUCTS.map((p) => p.themeName)))];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'ALL' || p.category === selectedCategory;
      const matchesTheme = selectedTheme === 'ALL' || p.themeName === selectedTheme;
      const matchesFit = selectedFit === 'ALL' || p.specs.fit === selectedFit;
      return matchesCategory && matchesTheme && matchesFit;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'gsm-desc') return b.specs.gsm - a.specs.gsm;
      return 0; // featured
    });
  }, [selectedCategory, selectedTheme, selectedFit, sortBy]);

  return (
    <div className="min-h-screen pt-32 pb-32 px-4 sm:px-8 max-w-[1440px] mx-auto bg-background">
      {/* Header Banner in Bodoni Moda */}
      <header className="mb-12 border-b border-white/10 pb-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <span>// ARCHIVE DIRECTORY</span>
          <span>•</span>
          <span>20 CODIFIED PIECES ACROSS 5 DISCIPLINES</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase">
          COLLECTION: PSYCHE // FULL ATELIER
        </h1>

        <p className="font-mono text-xs sm:text-sm text-secondary max-w-2xl leading-relaxed">
          Exploring the tension between the hidden and the revealed. Custom-milled heavyweight French terry hoodies, Japanese gabardine cargos, double-pleated wool trousers, and architectural artifacts engineered with zero exterior branding.
        </p>
      </header>

      {/* Category Tabs (Primary Discipline Switcher) */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4 mb-6 text-xs font-mono">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 uppercase tracking-wider transition-all flex items-center gap-2 ${
              selectedCategory === cat.id
                ? 'bg-white text-black font-bold shadow-lg'
                : 'bg-[#111113] text-muted hover:text-white border border-white/10 hover:border-white/30'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded ${
              selectedCategory === cat.id ? 'bg-black text-white' : 'bg-white/10 text-muted'
            }`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Filter bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6 mb-12 text-xs font-mono">
        {/* Psychological Theme Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-muted mr-1 hidden sm:inline">THEME:</span>
          {themeList.map((th) => (
            <button
              key={th}
              onClick={() => setSelectedTheme(th)}
              className={`px-3 py-1.5 transition-colors uppercase ${
                selectedTheme === th
                  ? 'bg-accent text-white font-bold'
                  : 'bg-[#0e0e0e] text-muted hover:text-white border border-white/10'
              }`}
            >
              {th}
            </button>
          ))}
        </div>

        {/* Fit and Sort Controls */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-muted">SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#0e0e0e] border border-white/15 px-3 py-1.5 text-white focus:outline-none cursor-pointer"
            >
              <option value="featured">FEATURED</option>
              <option value="price-asc">PRICE: LOW TO HIGH</option>
              <option value="price-desc">PRICE: HIGH TO LOW</option>
              <option value="gsm-desc">DENSITY: GSM DESC</option>
            </select>
          </div>

          <div className="hidden sm:flex items-center gap-1 border border-white/15 bg-[#0e0e0e] p-1">
            <button
              onClick={() => setGridColumns(2)}
              className={`p-1 ${gridColumns === 2 ? 'bg-white text-black' : 'text-muted'}`}
              title="Editorial 2-column"
            >
              <Columns className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setGridColumns(3)}
              className={`p-1 ${gridColumns === 3 ? 'bg-white text-black' : 'text-muted'}`}
              title="3-column grid"
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div
        className={`grid gap-8 ${
          gridColumns === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {filteredProducts.map((product) => {
          const isSaved = isInWishlist(product.id);
          const defaultColor = product.colors[0];

          return (
            <article
              key={product.id}
              className="group relative flex flex-col border border-white/10 bg-[#0e0e0e] transition-all hover:border-white/30"
            >
              {/* Image / Garment Stage */}
              <div className="relative overflow-hidden aspect-[4/5] bg-[#0a0a0a] flex items-center justify-center p-8">
                {/* Spec / GSM Badge */}
                <div className="absolute top-4 left-4 z-10 border border-white/10 px-2 py-1 font-mono text-[10px] text-white bg-black/60 backdrop-blur-sm">
                  {product.specs.gsm > 0 ? `${product.specs.gsm} GSM` : 'TUSCAN LEATHER'} • {product.specs.weight}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-4 right-4 z-10 p-2 border transition-colors ${
                    isSaved
                      ? 'border-accent bg-accent/20 text-accent'
                      : 'border-white/10 bg-black/60 text-muted hover:text-white'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-accent' : ''}`} />
                </button>

                {/* Interactive Visual Canvas */}
                <Link
                  href={`/product/${product.slug}`}
                  className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105"
                >
                  <HoodieVisual
                    themeName={product.themeName}
                    themeNumber={product.themeNumber}
                    slug={product.slug}
                    colorHex={defaultColor.hex}
                    view="front"
                    className="w-full h-full"
                  />
                </Link>

                {/* Hover Quick-Add Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={() => addToCart(product, product.sizes[0]?.size || 'M', defaultColor.name, 1)}
                    className="bg-[#F5F5F5] text-[#000000] font-mono text-xs font-bold px-6 py-3 hover:bg-[#000000] hover:text-[#F5F5F5] border border-[#F5F5F5] transition-none"
                  >
                    QUICK ACQUIRE
                  </button>

                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="p-3 bg-black/80 text-white border border-white/20 hover:border-white"
                    title="Quick Inspect"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="p-6 border-t border-white/10 flex justify-between items-start font-mono text-xs">
                <div className="space-y-1">
                  <span className="text-[10px] text-accent font-bold">
                    ARCHETYPE {product.themeNumber} // {product.themeName}
                  </span>
                  <Link
                    href={`/product/${product.slug}`}
                    className="font-serif text-lg font-bold text-white hover:text-accent transition-colors block"
                  >
                    {product.title}
                  </Link>
                  <p className="text-[11px] text-muted italic line-clamp-1">
                    &quot;{product.quote}&quot;
                  </p>
                </div>

                <div className="text-right space-y-1">
                  <span className="font-serif text-lg font-bold text-white block">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-[10px] text-muted">{product.specs.fit}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
