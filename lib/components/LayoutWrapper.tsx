'use client'; // Client Component

import type { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}