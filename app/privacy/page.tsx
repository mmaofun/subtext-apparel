'use client';

import React from 'react';
import { Lock } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="border-b border-white/10 pb-8 space-y-3">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block">
            // CONFIDENTIALITY PROTOCOL
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-white uppercase">
            PRIVACY & DATA ENCRYPTION
          </h1>
          <p className="text-xs font-mono text-secondary">Sample content for this design preview. No orders are accepted.</p>
        </div>

        <div className="p-8 rounded-3xl bg-surface border border-white/10 space-y-6 text-xs font-mono text-secondary leading-relaxed">
          <p>
            Subtext Studios Inc. operates under strict data privacy principles. We collect only the minimum telemetry required to fulfill your physical order.
          </p>
          <p>
            We do not sell, license, or distribute your identity, purchase records, or browsing patterns to third-party ad networks or brokers.
          </p>
        </div>
      </div>
    </div>
  );
}
