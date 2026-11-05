'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';
import { HoodieVisual } from '@/components/ui/HoodieVisual';
import { MagneticButton } from '@/components/ui/MagneticButton';
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Tag,
  ShoppingBag,
  ArrowLeft,
  Truck,
} from 'lucide-react';

export default function CartPage() {
  const router = useRouter();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    discountAmount,
    appliedPromo,
    applyPromo,
    removePromo,
    freeShippingThreshold,
    freeShippingRemaining,
    formatPrice,
  } = useStore();

  const [promoCode, setPromoCode] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ success: boolean; text: string } | null>(null);

  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = applyPromo(promoCode);
    setPromoMessage({ success: res.success, text: res.message });
    if (res.success) setPromoCode('');
  };

  const shippingCost = freeShippingRemaining === 0 ? 0 : 15;
  const estimatedTax = cartSubtotal * 0.08;
  const grandTotal = cartSubtotal - discountAmount + shippingCost + estimatedTax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-36 pb-24 px-4 flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center border border-white/10">
          <ShoppingBag className="w-8 h-8 text-muted" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-mono font-bold tracking-widest text-white uppercase">
            YOUR ACQUISITION BAG IS EMPTY
          </h1>
          <p className="text-xs sm:text-sm font-mono text-secondary max-w-md">
            No psychological armor pieces currently registered. Explore our 10 codified archetypes in the catalogue.
          </p>
        </div>
        <Link href="/shop">
          <MagneticButton size="lg">
            <span>EXPLORE ARCHIVE</span>
          </MagneticButton>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>[ SHOPPING BAG ]</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-mono tracking-widest text-white uppercase mt-2">
              ACQUISITION SUMMARY ({cart.reduce((t, i) => t + i.quantity, 0)})
            </h1>
          </div>
          <Link
            href="/shop"
            className="text-xs font-mono text-muted hover:text-white flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>CONTINUE BROWSING</span>
          </Link>
        </div>

        {/* 2-Column Cart Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Item Table */}
          <div className="lg:col-span-7 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-surface border border-white/10 flex flex-col sm:flex-row items-center gap-6 justify-between"
              >
                <div className="flex items-center gap-6 w-full sm:w-auto">
                  <div className="w-20 h-24 bg-black/60 rounded-xl flex items-center justify-center p-2 border border-white/5 flex-shrink-0">
                    <HoodieVisual
                      themeName={item.product.themeName}
                      themeNumber={item.product.themeNumber}
                      colorHex={item.product.colors.find((c) => c.name === item.color)?.hex}
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-accent font-bold">
                      ARCHETYPE {item.product.themeNumber}
                    </span>
                    <h3 className="text-base font-mono font-bold text-white">
                      {item.product.title}
                    </h3>
                    <p className="text-xs font-mono text-secondary">
                      SIZE: <strong className="text-white">{item.size}</strong> // {item.color}
                    </p>
                    <p className="text-xs font-mono text-muted">
                      {item.product.specs.gsm} GSM Organic French Terry
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4">
                  <span className="text-base font-mono font-bold text-white">
                    {formatPrice(item.price * item.quantity)}
                  </span>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-white/15 rounded bg-black/40 text-xs font-mono">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2.5 py-1 text-muted hover:text-white"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 py-1 text-white font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2.5 py-1 text-muted hover:text-white"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-muted hover:text-red-400 transition-colors"
                      title="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Summary & Checkout Sticky Box */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-surface border border-white/10 space-y-6 lg:sticky lg:top-28">
            <h2 className="text-sm font-mono font-bold tracking-widest text-white uppercase border-b border-white/10 pb-4">
              ORDER SUMMARY
            </h2>

            {/* Promo Code Form */}
            {appliedPromo ? (
              <div className="flex justify-between items-center p-3 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>CODE &quot;{appliedPromo}&quot; APPLIED (-{formatPrice(discountAmount)})</span>
                </div>
                <button
                  onClick={removePromo}
                  className="text-muted hover:text-white underline text-[10px]"
                >
                  REMOVE
                </button>
              </div>
            ) : (
              <form onSubmit={handlePromoSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="PROMO CODE (e.g. SUBTEXT10)"
                    className="flex-1 px-3 py-2.5 bg-black/50 border border-white/10 rounded text-xs font-mono text-white placeholder-muted focus:outline-none focus:border-white uppercase"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs font-bold rounded transition-colors"
                  >
                    APPLY
                  </button>
                </div>
                {promoMessage && (
                  <p
                    className={`text-[11px] font-mono ${
                      promoMessage.success ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {promoMessage.text}
                  </p>
                )}
              </form>
            )}

            {/* Financial Line Items */}
            <div className="space-y-3 text-xs font-mono border-t border-white/5 pt-4">
              <div className="flex justify-between text-secondary">
                <span>SUBTOTAL</span>
                <span>{formatPrice(cartSubtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-accent">
                  <span>DISCOUNT ({appliedPromo})</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-secondary">
                <span>INSURED COURIER</span>
                <span>{shippingCost === 0 ? 'COMPLIMENTARY' : formatPrice(shippingCost)}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>ESTIMATED TAX</span>
                <span>{formatPrice(estimatedTax)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-3 border-t border-white/10">
                <span>TOTAL DUE</span>
                <span>{formatPrice(grandTotal)}</span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 space-y-3">
              <MagneticButton
                onClick={() => router.push('/checkout')}
                size="lg"
                className="w-full"
              >
                <span>CHECKOUT UNAVAILABLE</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                <span>PREVIEW ONLY — NO ORDERS OR PAYMENTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
