'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { PRODUCTS, Product } from '@/data/products';
import { HoodieVisual } from '@/components/ui/HoodieVisual';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { useStore } from '@/context/StoreContext';
import {
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Ruler,
  ChevronDown,
  Star,
  Check,
  ArrowRight,
  Maximize2,
  X,
  Share2,
} from 'lucide-react';

interface Props {
  params: { slug: string };
}

export default function ProductDetailPage({ params }: Props) {
  const router = useRouter();
  const { addToCart, toggleWishlist, isInWishlist, formatPrice, addToast } = useStore();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.slug === params.slug);
  }, [params.slug]);

  if (!product) {
    notFound();
  }

  const [activeView, setActiveView] = useState<'front' | 'back'>('front');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL' | 'XXL'>('L');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('materials');

  const isSaved = isInWishlist(product.id);
  const activeColorObj = product.colors.find((c) => c.name === selectedColor) || product.colors[0];
  const sizeStock = product.sizes.find((s) => s.size === selectedSize)?.stock ?? 0;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, 1);
  };

  const handleBuyNow = () => {
    router.push('/checkout');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast({
        title: 'URL COPIED',
        description: 'Product frequency link copied to clipboard.',
        type: 'info',
      });
    }
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen pt-28 pb-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between text-xs font-mono text-muted border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              ATELIER
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-white transition-colors">
              CATALOGUE
            </Link>
            <span>/</span>
            <span className="text-white font-bold">{product.themeName}</span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-muted hover:text-white transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">SHARE ARCHIVE</span>
          </button>
        </div>

        {/* Product Hero Grid (Left Gallery, Right Purchase Stage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Gallery Stage */}
          <div className="lg:col-span-7 space-y-4 lg:sticky lg:top-28">
            <div className="relative w-full h-[450px] sm:h-[600px] bg-surface rounded-2xl border border-white/10 flex items-center justify-center p-8 overflow-hidden group">
              <HoodieVisual
                themeName={product.themeName}
                themeNumber={product.themeNumber}
                slug={product.slug}
                colorHex={activeColorObj.hex}
                view={activeView}
                className="w-full h-full"
              />

              {/* Zoom Trigger Button */}
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute bottom-4 right-4 p-3 rounded-full bg-black/60 border border-white/15 text-muted hover:text-white backdrop-blur-md transition-colors"
                title="Fullscreen Examination"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              <span className="absolute top-4 left-4 text-[10px] font-mono text-muted bg-black/40 px-2.5 py-1 rounded border border-white/5">
                VIEW: {activeView.toUpperCase()}
              </span>
            </div>

            {/* Thumbnail Angle Switcher (Front & Back Only) */}
            <div className="grid grid-cols-2 gap-4">
              {(['front', 'back'] as const).map((viewKey) => (
                <button
                  key={viewKey}
                  onClick={() => setActiveView(viewKey)}
                  className={`p-3 rounded-xl bg-surface border transition-all flex items-center justify-center gap-3 ${
                    activeView === viewKey
                      ? 'border-white ring-1 ring-white bg-white/5'
                      : 'border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="w-12 h-14 flex items-center justify-center">
                    <HoodieVisual
                      themeName={product.themeName}
                      themeNumber={product.themeNumber}
                      slug={product.slug}
                      colorHex={activeColorObj.hex}
                      view={viewKey}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-white uppercase">
                    {viewKey} VIEW
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Product Configurator */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-accent">
                  {product.badge || 'ARCHIVE'}
                </span>
                <span className="text-xs font-mono text-muted">{product.code}</span>
                <span className="text-xs font-mono text-muted">
                  • {product.specs.gsm > 0 ? `${product.specs.gsm} GSM` : 'FULL-GRAIN TUSCAN'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-mono font-black tracking-widest text-white uppercase">
                {product.title}
              </h1>

              <div className="flex items-center gap-4 text-sm font-mono">
                <span className="text-2xl font-bold text-white">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-muted line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
                <span className="text-xs text-emerald-400 font-mono">
                  TAX INCLUDED // FREE COURIER
                </span>
              </div>
            </div>

            {/* Psychological Thesis Quote */}
            <blockquote className="p-4 rounded-xl bg-surface border-l-2 border-accent border-white/5 text-xs font-mono text-white/90 leading-relaxed italic">
              &quot;{product.quote}&quot;
            </blockquote>

            <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
              {product.longDesc}
            </p>

            {/* Colorway Selector */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-muted uppercase">COLORWAY:</span>
                <span className="text-white font-bold">{selectedColor}</span>
              </div>
              <div className="flex gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
                      selectedColor === c.name
                        ? 'border-white bg-white/10 text-white font-bold'
                        : 'border-white/10 bg-surface text-secondary hover:border-white/20'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-white/30"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-xs font-mono">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-muted uppercase">SIZE:</span>
                  <span className="text-white font-bold">{selectedSize}</span>
                </div>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="flex items-center gap-1 text-muted hover:text-white underline"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>SIZE GUIDE</span>
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2.5">
                {product.sizes.map((s) => (
                  <button
                    key={s.size}
                    disabled={s.stock === 0}
                    onClick={() => setSelectedSize(s.size)}
                    className={`py-3 rounded-lg font-mono text-xs font-bold transition-all ${
                      selectedSize === s.size
                        ? 'bg-white text-black shadow-lg scale-105'
                        : s.stock === 0
                        ? 'bg-surface/50 text-zinc-700 border border-white/5 cursor-not-allowed line-through'
                        : 'bg-surface hover:bg-white/10 text-secondary hover:text-white border border-white/10'
                    }`}
                  >
                    {s.size}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                <span className="text-emerald-400">
                  {sizeStock > 0
                    ? `● ${sizeStock} PIECES READY IN WAREHOUSE`
                    : '○ SIZE CURRENTLY EXHAUSTED'}
                </span>
                <span className="text-muted">{product.specs.fit}</span>
              </div>
            </div>

            {/* Purchase CTA Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex gap-3">
                <MagneticButton
                  onClick={handleAddToCart}
                  disabled={sizeStock === 0}
                  size="lg"
                  className="flex-1"
                >
                  {sizeStock > 0 ? 'ACQUIRE TO BAG' : 'CURRENTLY SOLD OUT'}
                </MagneticButton>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-4 rounded-xl border transition-colors ${
                    isSaved
                      ? 'bg-accent/20 border-accent text-accent'
                      : 'bg-surface border-white/10 text-secondary hover:text-white'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-accent' : ''}`} />
                </button>
              </div>

              {sizeStock > 0 && (
                <MagneticButton
                  onClick={handleBuyNow}
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  <span>CHECKOUT UNAVAILABLE</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </MagneticButton>
              )}
            </div>

            {/* Accordion Modules */}
            <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-mono">
              {[
                {
                  id: 'materials',
                  title: 'TEXTILE & ORIGIN SPECIFICATIONS',
                  content: (
                    <ul className="space-y-2 text-secondary pt-2">
                      <li>• Fabric: {product.specs.fabric}</li>
                      <li>• Mass: {product.specs.gsm} GSM ({product.specs.weight})</li>
                      <li>• Weave: {product.specs.weave}</li>
                      <li>• Atelier Origin: {product.specs.origin}</li>
                      <li>• Finishing: {product.specs.treatment}</li>
                    </ul>
                  ),
                },
                {
                  id: 'details',
                  title: 'ARCHITECTURAL DESIGN DETAILS',
                  content: (
                    <ul className="space-y-2 text-secondary pt-2">
                      {product.details.map((d, i) => (
                        <li key={i}>• {d}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  id: 'care',
                  title: 'WASH & PRESERVATION PROTOCOL',
                  content: (
                    <ul className="space-y-2 text-secondary pt-2">
                      {product.care.map((c, i) => (
                        <li key={i}>• {c}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  id: 'shipping',
                  title: 'INSURED COURIER & RETURNS',
                  content: (
                    <p className="text-secondary leading-relaxed pt-2">
                      Complimentary worldwide express courier delivery. Dispatched in tamper-evident serialized packaging. 30-day effortless return window.
                    </p>
                  ),
                },
              ].map((acc) => (
                <div key={acc.id} className="border-b border-white/5 pb-2">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.id ? null : acc.id)
                    }
                    className="w-full flex items-center justify-between py-3 text-left font-bold text-white hover:text-accent transition-colors"
                  >
                    <span>{acc.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openAccordion === acc.id ? 'rotate-180 text-accent' : 'text-muted'
                      }`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-3 animate-in fade-in duration-200">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll-Driven Product Scrollytelling Section */}
        {product.storytelling.length > 0 && (
          <div className="border-t border-white/10 pt-20 space-y-16">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-xs font-mono text-accent uppercase tracking-widest block">
                // ANATOMY OF DESIGN
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-white uppercase">
                THE THOUGHT PROCESS BEHIND {product.themeName}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.storytelling.map((chapter, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-surface border border-white/10 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-accent font-bold">
                      {chapter.title}
                    </span>
                    <h3 className="text-xl font-mono font-bold text-white">
                      {chapter.subtitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary font-sans leading-relaxed">
                      {chapter.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-muted">
                    <span>FOCUS: {chapter.focusPoint.toUpperCase()}</span>
                    <span className="text-white font-bold">{chapter.detailNote}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Customer Reviews Section */}
        <div className="border-t border-white/10 pt-20 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-accent uppercase tracking-widest block">
                // COLLECTOR REVIEWS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-white uppercase mt-1">
                EXAMPLE IMPRESSIONS
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-white bg-surface px-4 py-2 rounded-lg border border-white/10">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-bold">{product.rating.toFixed(2)} / 5.00</span>
              <span className="text-muted">(EXAMPLE RATING)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.reviews.length > 0 ? (
              product.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-6 rounded-xl bg-surface border border-white/10 space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex gap-1 text-accent mb-1">
                        {[...Array(Math.max(0, Math.min(5, Math.round(rev.rating))))].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-accent" />
                        ))}
                      </div>
                      <h4 className="text-xs font-mono font-bold text-white">{rev.title}</h4>
                    </div>
                    <span className="text-[10px] font-mono text-muted">{rev.date}</span>
                  </div>

                  <p className="text-xs text-secondary font-sans leading-relaxed italic">
                    &quot;{rev.comment}&quot;
                  </p>

                  <div className="flex items-center justify-between text-[10px] font-mono text-muted pt-2 border-t border-white/5">
                    <span>
                      {rev.author} // {rev.location}
                    </span>
                    <span className="text-accent">{rev.sizePurchased}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 rounded-xl bg-surface border border-white/10 text-xs font-mono text-secondary col-span-2">
                No example reviews are displayed for this piece.
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-white/10 pt-20 space-y-12">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-mono font-bold tracking-widest text-white uppercase">
              COMPLEMENTARY ARCHETYPES
            </h2>
            <Link
              href="/shop"
              className="text-xs font-mono text-muted hover:text-white flex items-center gap-1"
            >
              <span>VIEW FULL CAPSULE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/product/${rel.slug}`}
                className="p-6 rounded-2xl bg-surface border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-accent">
                    ARCHETYPE {rel.themeNumber}
                  </span>
                  <h3 className="text-base font-mono font-bold text-white group-hover:text-accent transition-colors">
                    {rel.title}
                  </h3>
                </div>

                <div className="w-full h-56 flex items-center justify-center my-4">
                  <HoodieVisual
                    themeName={rel.themeName}
                    themeNumber={rel.themeNumber}
                    colorHex={rel.colors[0].hex}
                    className="w-full h-full"
                  />
                </div>

                <div className="flex justify-between items-center text-xs font-mono pt-3 border-t border-white/5">
                  <span className="text-white font-bold">{formatPrice(rel.price)}</span>
                  <span className="text-muted">{rel.specs.gsm} GSM</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Size Guide Modal */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
            onClick={() => setIsSizeGuideOpen(false)}
          />
          <div className="relative w-full max-w-2xl bg-[#0e0e12] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 space-y-6">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <h3 className="text-base font-mono font-bold text-white uppercase">
                  SUBTEXT ATELIER // SIZE MATRIX
                </h3>
                <p className="text-xs font-mono text-muted">
                  Measurements recorded in Centimeters (CM) / Laid Flat
                </p>
              </div>
              <button
                onClick={() => setIsSizeGuideOpen(false)}
                className="p-1 text-muted hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              {product.category === 'pants' ? (
                <table className="w-full text-xs font-mono text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-muted">
                      <th className="py-2">SIZE</th>
                      <th className="py-2">WAIST</th>
                      <th className="py-2">INSEAM</th>
                      <th className="py-2">FRONT RISE</th>
                      <th className="py-2">LEG OPENING</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-secondary">
                    <tr>
                      <td className="py-2.5 font-bold text-white">S (30)</td>
                      <td>78 cm</td>
                      <td>76 cm</td>
                      <td>32 cm</td>
                      <td>22 cm</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-white">M (32)</td>
                      <td>83 cm</td>
                      <td>78 cm</td>
                      <td>33 cm</td>
                      <td>23 cm</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-white">L (34 - Recommended)</td>
                      <td>88 cm</td>
                      <td>80 cm</td>
                      <td>34 cm</td>
                      <td>24 cm</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-white">XL (36)</td>
                      <td>93 cm</td>
                      <td>81 cm</td>
                      <td>35 cm</td>
                      <td>25 cm</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-white">XXL (38)</td>
                      <td>98 cm</td>
                      <td>82 cm</td>
                      <td>36 cm</td>
                      <td>26 cm</td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="w-full text-xs font-mono text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-muted">
                      <th className="py-2">SIZE</th>
                      <th className="py-2">CHEST (1/2)</th>
                      <th className="py-2">LENGTH</th>
                      <th className="py-2">SHOULDER DROP</th>
                      <th className="py-2">SLEEVE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-secondary">
                    <tr>
                      <td className="py-2.5 font-bold text-white">S</td>
                      <td>62 cm</td>
                      <td>68 cm</td>
                      <td>58 cm</td>
                      <td>61 cm</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-white">M</td>
                      <td>65 cm</td>
                      <td>71 cm</td>
                      <td>60 cm</td>
                      <td>63 cm</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-white">L (Recommended)</td>
                      <td>68 cm</td>
                      <td>74 cm</td>
                      <td>62 cm</td>
                      <td>65 cm</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-white">XL</td>
                      <td>71 cm</td>
                      <td>77 cm</td>
                      <td>64 cm</td>
                      <td>67 cm</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-bold text-white">XXL</td>
                      <td>74 cm</td>
                      <td>80 cm</td>
                      <td>66 cm</td>
                      <td>69 cm</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>

            <div className="p-4 rounded-lg bg-surface border border-white/5 text-xs text-secondary leading-relaxed">
              <strong className="text-white block font-mono mb-1">FIT ADVISORY:</strong>
              {product.category === 'pants'
                ? 'Engineered with anatomical articulation. Fits true to waist with relaxed structural volume through the thighs and a clean architectural drape over boots or sneakers.'
                : 'Our silhouettes feature an intentional drop-shoulder oversized boxy drape. Select your standard size for the intended fashion silhouette, or size down for a standard athletic fit.'}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Zoom Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl">
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-6 right-6 p-3 text-muted hover:text-white z-20"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-4xl h-[80vh] flex items-center justify-center">
            <HoodieVisual
              themeName={product.themeName}
              themeNumber={product.themeNumber}
              colorHex={activeColorObj.hex}
              view={activeView}
              className="w-full h-full scale-125"
            />
          </div>
        </div>
      )}
    </div>
  );
}
