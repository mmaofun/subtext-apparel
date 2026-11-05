'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/context/StoreContext';
import {
  ShoppingBag,
  Search,
  Heart,
  User,
  Menu,
  X,
  Globe,
} from 'lucide-react';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const {
    cartCount,
    setIsCartOpen,
    setIsSearchOpen,
    currency,
    setCurrency,
    wishlist,
  } = useStore();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/shop', label: 'ALL ARCHIVE' },
    { href: '/shop?category=hoodies', label: 'HOODIES' },
    { href: '/shop?category=pants', label: 'PANTS' },
    { href: '/collections', label: 'COLLECTIONS' },
    { href: '/about', label: 'EDITORIAL' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#131313]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="bg-white text-black text-center px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wide" role="note">
        Design preview · Example content · Orders and accounts unavailable
      </div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo in Bodoni Moda */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
            SUBTEXT ATELIER
          </span>
          <span className="hidden sm:inline text-[10px] font-mono text-muted tracking-widest border-l border-white/20 pl-3">
            // THE VOID
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors uppercase ${
                  isActive
                    ? 'text-white font-bold border-b border-white'
                    : 'text-muted hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Utility Actions */}
        <div className="flex items-center gap-4 sm:gap-6 text-white font-mono text-xs">
          {/* Currency Toggle */}
          <div className="hidden sm:flex items-center gap-1 text-[11px] text-muted border border-white/10 px-2.5 py-1 bg-[#0e0e0e]">
            <Globe className="w-3 h-3 text-muted" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as any)}
              className="bg-transparent text-white focus:outline-none cursor-pointer uppercase"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="JPY">JPY (¥)</option>
            </select>
          </div>

          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-muted hover:text-white transition-colors"
            title="Search Archive"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="p-2 text-muted hover:text-white transition-colors relative"
            title="Saved Pieces"
          >
            <Heart className="w-4 h-4" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent" />
            )}
          </Link>

          {/* Account */}
          <Link
            href="/account"
            className="p-2 text-muted hover:text-white transition-colors"
            title="Account Portal"
          >
            <User className="w-4 h-4" />
          </Link>

          {/* Cart Bag Drawer Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 bg-white text-black font-mono text-xs font-bold hover:bg-[#c9c6c5] transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>BAG ({cartCount})</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-b border-white/10 px-6 py-8 space-y-6">
          <nav className="flex flex-col space-y-4 text-sm font-mono tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/wishlist"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-secondary"
            >
              BOOKMARKS ({wishlist.length})
            </Link>
            <Link
              href="/account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-secondary"
            >
              ACCOUNT PREVIEW
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
