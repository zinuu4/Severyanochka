import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Severyanochka',
  description: 'Online store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
