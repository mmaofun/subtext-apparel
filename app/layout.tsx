import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { SearchModal } from '@/components/ui/SearchModal';
import { QuickViewModal } from '@/components/ui/QuickViewModal';
import { ToastContainer } from '@/components/ui/Toast';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'SUBTEXT ATELIER // Dark Psychology & Heavyweight Luxury Hoodies',
  description:
    'A luxury streetwear atelier exploring dark psychology, human perception, ego, and covert influence. Hand-milled 650–720 GSM organic French terry hoodies.',
  keywords: [
    'Subtext Atelier',
    'Dark Psychology Hoodie',
    'Luxury Streetwear',
    '650 GSM Heavyweight Hoodie',
    'Minimalist Fashion',
    'French Terry',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-primary min-h-screen flex flex-col antialiased selection:bg-accent selection:text-white">
        <StoreProvider>
          <SmoothScroll>
            {/* Subtle Global Noise Texture */}
            <div className="noise-overlay" />

            {/* Navigation */}
            <Header />

            {/* Main Page Viewport */}
            <main className="flex-1 w-full">{children}</main>

            {/* Footer */}
            <Footer />

            {/* Modals & Drawers */}
            <CartDrawer />
            <SearchModal />
            <QuickViewModal />
            <ToastContainer />
          </SmoothScroll>
        </StoreProvider>
      </body>
    </html>
  );
}
