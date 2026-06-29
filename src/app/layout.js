import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import '../globals.css';
import { SITE } from '@/data/site';
import { CartProvider } from '@/context/CartContext';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
import Cart from '@/components/Cart/Cart';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.seoDescription,
  keywords: SITE.keywords,
};

export const viewport = {
  themeColor: '#020f0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakartaSans.variable}`}>
      <body>
        <CartProvider>
          <SmoothScroll>
            {children}
            <Cart />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
