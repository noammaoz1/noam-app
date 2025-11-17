import "@/styles/global.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import LayoutWrapper from '@/lib/components/LayoutWrapper';
import localFont from 'next/font/local';

const museumFont = localFont({
  src: [
    {
      path: './fonts/museum-aaa-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/museum-aaa-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap', // improve the performance of font loading
  variable: '--font-museum-aaa' // CSS variable to reference the font
});

const narkisFont = localFont({
  src: [
    {
      path: './fonts/NarkisBlockStudio-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NarkisBlockStudio-Medium.ttf',
      weight: '500',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-narkis-block'
});

export const metadata: Metadata = {
  title: "Noam's App",
  // description:
  // "A starter kit for wiritng code in the Digital Product Jam course.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${museumFont.variable} ${narkisFont.variable}`}>
      <head>
        {/* Browser Favicon */}
        <link rel="icon" href="/icons/n-logo.png" />
        {/* Apple Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/n-logo.png"
        />
        {/* Android Icon */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/n-logo.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <script src="https://accounts.google.com/gsi/client" async></script>
      </head>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
