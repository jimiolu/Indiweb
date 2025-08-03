import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { ReactNode } from 'react';

/////////////////////////////////////////// LOCAL FONTS ////////////////////////////////////////////
const satoshi = localFont({
  src: [
    { path: '../fonts/Satoshi-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/Satoshi-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/Satoshi-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../fonts/Satoshi-Black.ttf', weight: '900', style: 'normal' },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Indisis: Genuine Dev Partner for Startups',
  description: 'Genuine Dev Partner for Startups',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='PCH7r42F9zNPFhA26IZZCH6nbq0zwqfjGMMOJQvvVfY'
        />
      </head>
      <body className={`${satoshi.className}  antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
