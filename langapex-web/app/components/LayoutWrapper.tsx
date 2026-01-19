'use client';

import { usePathname } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      <GoogleAnalytics gaId="G-1XEF2LHZ47" />
      {!isAdminRoute && <Navbar />}
      <main className={isAdminRoute ? '' : 'pt-16'}>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
