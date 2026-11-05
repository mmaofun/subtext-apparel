'use client';

import React from 'react';
import { Truck, ShieldCheck, Globe } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="border-b border-white/10 pb-8 space-y-3">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block">
            // LOGISTICS PROTOCOL
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white uppercase">
            GLOBAL INSURED COURIER
          </h1>
          <p className="text-xs font-mono text-secondary">Sample content for this design preview. No orders are accepted.</p>
          <p className="text-xs sm:text-sm font-mono text-secondary">
            Complimentary worldwide express courier delivery for all acquisitions exceeding $200 USD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="p-6 rounded-2xl bg-surface border border-white/10 space-y-3">
            <Truck className="w-5 h-5 text-accent" />
            <h3 className="text-white font-bold uppercase">EXPRESS AIR COURIER</h3>
            <p className="text-secondary leading-relaxed">
              3–5 business days worldwide via DHL Express or FedEx Air. Full signature on delivery.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-white/10 space-y-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-white font-bold uppercase">100% TRANSIT INSURANCE</h3>
            <p className="text-secondary leading-relaxed">
              Every parcel is fully insured against theft, loss, or damage from our atelier to your door.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-white/10 space-y-3">
            <Globe className="w-5 h-5 text-accent-ice" />
            <h3 className="text-white font-bold uppercase">CARBON NEUTRAL</h3>
            <p className="text-secondary leading-relaxed">
              All international shipments are 100% carbon-offset through verified forest conservation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
