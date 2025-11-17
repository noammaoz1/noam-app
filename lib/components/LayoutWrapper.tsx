'use client'; // Client Component

import { usePathname } from 'next/navigation';
import Navbar from '@/lib/components/Navbar';
import Footer from '@/lib/components/Footer';
import type { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDesignPage = pathname === '/design';

  return (
    <>
      {/* If it's *not* the design page, show the Navbar */}
      {!isDesignPage && <Navbar />}
      
      <div>{children}</div>
      
      {/* If it's *not* the design page, show the Footer */}
      {!isDesignPage && <Footer />}
    </>
  );
}