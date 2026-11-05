'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';
import { HoodieVisual } from '@/components/ui/HoodieVisual';
import { MagneticButton } from '@/components/ui/MagneticButton';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Tag,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const router = useRouter();
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
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

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const res = applyPromo(promoInput);
    if (!res.success) {
      setPromoError(res.message);
    } else {
      setPromoInput('');
    }
  };

  const shippingCost = freeShippingRemaining === 0 ? 0 : 15;
  const grandTotal = cartSubtotal - discountAmount + shippingCost;
  const progressPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-[90] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-out Drawer */}
      <div className="relative w-full max-w-md h-full bg-[#09090c] border-l border-white/15 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-white" />
            <h2 className="text-sm font-mono font-bold tracking-widest text-white uppercase">
              ACQUISITION BAG ({cart.reduce((t, i) => t + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-muted hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-surface px-6 py-3 border-b border-white/5">
          <div className="flex justify-between items-center text-[11px] font-mono mb-1.5">
            {freeShippingRemaining === 0 ? (
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> COMPLIMENTARY COURIER UNLOCKED
              </span>
            ) : (
              <span className="text-secondary">
                ADD <strong className="text-white">{formatPrice(freeShippingRemaining)}</strong> FOR FREE COURIER
              </span>
            )}
            <span className="text-muted font-mono">{progressPercent.toFixed(0)}%</span>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-white transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
              <div className="w-16 h-16 rounded-full bg-surface-elevated flex items-center justify-center border border-white/10">
                <ShoppingBag className="w-6 h-6 text-muted" />
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-white">
                  BAG IS VACANT
                </p>
                <p className="text-xs font-mono text-muted mt-1 max-w-[240px]">
                  Explore the 10 psychological archetypes in the catalogue.
                </p>
              </div>
              <Link
                href="/shop"
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2.5 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase rounded hover:bg-zinc-200 transition-colors"
              >
                BROWSE ARCHIVE
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-white/15 transition-all group"
              >
                {/* Visual */}
                <div className="w-16 h-20 bg-black/60 rounded-lg flex items-center justify-center p-1 border border-white/5 flex-shrink-0">
                  <HoodieVisual
                    themeName={item.product.themeName}
                    themeNumber={item.product.themeNumber}
                    colorHex={item.product.colors.find((c) => c.name === item.color)?.hex}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xs font-mono font-bold text-white group-hover:text-accent transition-colors">
                        {item.product.title}
                      </h4>
                      <p className="text-[11px] font-mono text-secondary mt-0.5">
                        SIZE: <span className="text-white font-bold">{item.size}</span> // {item.color}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted hover:text-red-400 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    {/* Stepper */}
                    <div className="flex items-center border border-white/15 rounded bg-black/40 text-xs font-mono">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-muted hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 py-1 text-white font-bold min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-muted hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-xs font-mono font-bold text-white">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Area */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#08080a] space-y-4">
            {/* Promo Code Form */}
            {appliedPromo ? (
              <div className="flex items-center justify-between p-2.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>CODE &quot;{appliedPromo}&quot; ACTIVE (-{formatPrice(discountAmount)})</span>
                </div>
                <button
                  onClick={removePromo}
                  className="text-muted hover:text-white underline text-[10px]"
                >
                  REMOVE
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="PROMO CODE (e.g. SUBTEXT10)"
                    className="flex-1 px-3 py-2 bg-surface border border-white/10 rounded text-xs font-mono text-white placeholder-muted focus:border-white focus:outline-none uppercase"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-surface-elevated hover:bg-white/10 text-white font-mono text-xs font-bold rounded border border-white/15 transition-colors"
                  >
                    APPLY
                  </button>
                </div>
                {promoError && (
                  <p className="text-[10px] font-mono text-red-400 pl-1">{promoError}</p>
                )}
              </form>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs font-mono border-t border-white/5 pt-3">
              <div className="flex justify-between text-secondary">
                <span>SUBTOTAL</span>
                <span>{formatPrice(cartSubtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-accent">
                  <span>PSYCHOLOGICAL REBATE</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-secondary">
                <span>INSURED COURIER</span>
                <span>{shippingCost === 0 ? 'COMPLIMENTARY' : formatPrice(shippingCost)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                <span>TOTAL ESTIMATE</span>
                <span>{formatPrice(grandTotal)}</span>
              </div>
            </div>

            {/* Checkout & View Bag CTA */}
            <div className="space-y-2 pt-2">
              <MagneticButton
                onClick={() => {
                  setIsCartOpen(false);
                  router.push('/checkout');
                }}
                size="lg"
                className="w-full"
              >
                <span>CHECKOUT UNAVAILABLE</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>

              <Link
                href="/cart"
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-xs font-mono text-muted hover:text-white py-1 transition-colors"
              >
                VIEW FULL CART & SHIPPING DETAILS
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-muted pt-2 border-t border-white/5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>PREVIEW ONLY — NO ORDERS OR PAYMENTS</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
