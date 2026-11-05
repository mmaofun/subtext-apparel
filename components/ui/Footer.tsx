'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050507] border-t border-white/10 text-primary pt-20 pb-12 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Kinetic Psychological Ticker */}
      <div className="border-y border-white/5 py-4 mb-16 overflow-hidden select-none bg-black/40">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-xs font-mono tracking-widest text-muted uppercase">
          <span>YOU ARE EASIER TO READ THAN YOU THINK</span>
          <span className="text-accent">•</span>
          <span>THE STRONGEST INFLUENCE IS THE ONE YOU NEVER NOTICE</span>
          <span className="text-accent">•</span>
          <span>EVERYONE PROTECTS THE VERSION OF THEMSELVES THEY CREATED</span>
          <span className="text-accent">•</span>
          <span>PERCEPTION IS A WEAPON</span>
          <span className="text-accent">•</span>
          <span>THE QUIETEST PERSON IN THE ROOM HOLDS THE GREATEST BANDWIDTH</span>
          <span className="text-accent">•</span>
          <span>650 GSM HEAVYWEIGHT BESPOKE FLEECE</span>
          <span className="text-accent">•</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-mono text-xl font-bold tracking-cinematic text-white">
                SUBTEXT
              </span>
              <p className="text-xs font-mono tracking-widest text-muted">
                ATELIER // CORTEX RESEARCH
              </p>
            </Link>
            <p className="text-xs text-secondary leading-relaxed max-w-sm">
              An ongoing investigation into dark psychology, behavioral perception, and tactile armor. Hand-milled in Europe from 650–720 GSM French terry. Designed for intentional minds.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-muted">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Garment concepts // Design preview</span>
            </div>
          </div>

          {/* Catalog Col */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
              ARCHIVE & SHOP
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-secondary">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  All Hoodies (10)
                </Link>
              </li>
              <li>
                <Link href="/collections/volume-01-the-illusion-of-choice" className="hover:text-white transition-colors">
                  Volume 01: The Illusion
                </Link>
              </li>
              <li>
                <Link href="/collections/volume-02-silent-authority" className="hover:text-white transition-colors">
                  Volume 02: Silent Authority
                </Link>
              </li>
              <li>
                <Link href="/collections/core-archive" className="hover:text-white transition-colors">
                  Core Heavyweight Archive
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white transition-colors">
                  Personal Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Care Col */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
              CLIENT CONCIERGE
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-secondary">
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping & Courier
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Sizing & Care Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Private Concierge
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-white transition-colors">
                  Order Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Preview note */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
              PREVIEW ONLY
            </h4>
            <p className="text-xs text-secondary leading-relaxed">
              This is a design preview. Orders, accounts, messages, and newsletter sign-ups are not active.
            </p>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-muted gap-4">
          <p>© 2026 SUBTEXT STUDIOS INC. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-secondary transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">
              TERMS OF SERVICE
            </Link>
            <span className="text-zinc-700">LAT: 45.4642° N // MILAN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
