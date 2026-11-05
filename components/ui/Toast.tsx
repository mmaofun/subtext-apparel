'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { Check, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-4 rounded-lg bg-[#0e0e12] border border-white/15 shadow-2xl text-primary transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 backdrop-blur-xl"
        >
          <div className="mt-0.5 text-accent">
            {toast.type === 'error' ? (
              <AlertTriangle className="w-4 h-4 text-red-500" />
            ) : toast.type === 'info' ? (
              <Info className="w-4 h-4 text-accent-ice" />
            ) : (
              <Check className="w-4 h-4 text-emerald-400" />
            )}
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase">
              {toast.title}
            </h4>
            {toast.description && (
              <p className="text-xs text-secondary mt-1 line-clamp-2">
                {toast.description}
              </p>
            )}
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-muted hover:text-primary transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
