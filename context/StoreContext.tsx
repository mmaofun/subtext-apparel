'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PRODUCTS } from '@/data/products';

export interface CartItem {
  id: string; // product id + size + color
  productId: string;
  product: Product;
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  color: string;
  quantity: number;
  price: number;
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'error';
}

interface StoreContextType {
  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL', color: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  discountAmount: number;
  appliedPromo: string | null;
  applyPromo: (code: string) => { success: boolean; message: string };
  removePromo: () => void;
  freeShippingThreshold: number;
  freeShippingRemaining: number;

  // Wishlist
  wishlist: string[]; // product IDs
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Search & Quickview Modals
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  // Currency
  currency: 'USD' | 'EUR' | 'GBP' | 'JPY';
  setCurrency: (c: 'USD' | 'EUR' | 'GBP' | 'JPY') => void;
  formatPrice: (amountInUSD: number) => string;

  // Toast
  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoDiscountPercent, setPromoDiscountPercent] = useState<number>(0);

  // Wishlist
  const [wishlist, setWishlist] = useState<string[]>(['prod-01', 'prod-02']);

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Currency
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP' | 'JPY'>('USD');

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Load persistent state from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('subtext_cart');
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem('subtext_wishlist');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      const savedPromo = localStorage.getItem('subtext_promo');
      if (savedPromo) {
        setAppliedPromo(savedPromo);
        if (savedPromo === 'SUBTEXT10') setPromoDiscountPercent(10);
        if (savedPromo === 'EGO20') setPromoDiscountPercent(20);
      }
    } catch (e) {
      console.error('Failed to load storage:', e);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('subtext_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  // Save wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('subtext_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  const addToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (
    product: Product,
    size: 'S' | 'M' | 'L' | 'XL' | 'XXL',
    color: string,
    quantity = 1
  ) => {
    const cartItemId = `${product.id}-${size}-${color}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          productId: product.id,
          product,
          size,
          color,
          quantity,
          price: product.price
        }
      ];
    });

    addToast({
      title: 'ACQUIRED TO CART',
      description: `${product.title} — ${size} / ${color}`,
      type: 'success'
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('subtext_cart');
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const isAlready = prev.includes(productId);
      const targetProd = PRODUCTS.find((p) => p.id === productId);
      if (isAlready) {
        addToast({
          title: 'REMOVED FROM ARCHIVE',
          description: targetProd?.title || 'Product removed',
          type: 'info'
        });
        return prev.filter((id) => id !== productId);
      } else {
        addToast({
          title: 'SAVED TO ARCHIVE',
          description: targetProd?.title || 'Product saved',
          type: 'success'
        });
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountAmount = (cartSubtotal * promoDiscountPercent) / 100;
  const freeShippingThreshold = 200;
  const freeShippingRemaining = Math.max(0, freeShippingThreshold - cartSubtotal);

  const applyPromo = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'SUBTEXT10') {
      setAppliedPromo('SUBTEXT10');
      setPromoDiscountPercent(10);
      localStorage.setItem('subtext_promo', 'SUBTEXT10');
      addToast({
        title: 'PROMO APPLIED',
        description: '10% Subconscious Member Discount applied',
        type: 'success'
      });
      return { success: true, message: '10% discount applied.' };
    }
    if (clean === 'EGO20') {
      setAppliedPromo('EGO20');
      setPromoDiscountPercent(20);
      localStorage.setItem('subtext_promo', 'EGO20');
      addToast({
        title: 'PROMO APPLIED',
        description: '20% Atelier Special Access discount applied',
        type: 'success'
      });
      return { success: true, message: '20% discount applied.' };
    }
    return { success: false, message: 'Invalid code. Try "SUBTEXT10" or "EGO20".' };
  };

  const removePromo = () => {
    setAppliedPromo(null);
    setPromoDiscountPercent(0);
    localStorage.removeItem('subtext_promo');
  };

  const formatPrice = (amountInUSD: number) => {
    switch (currency) {
      case 'EUR':
        return `€${(amountInUSD * 0.92).toFixed(0)}`;
      case 'GBP':
        return `£${(amountInUSD * 0.79).toFixed(0)}`;
      case 'JPY':
        return `¥${(amountInUSD * 155).toFixed(0)}`;
      case 'USD':
      default:
        return `$${amountInUSD.toFixed(0)}`;
    }
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        discountAmount,
        appliedPromo,
        applyPromo,
        removePromo,
        freeShippingThreshold,
        freeShippingRemaining,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        currency,
        setCurrency,
        formatPrice,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
