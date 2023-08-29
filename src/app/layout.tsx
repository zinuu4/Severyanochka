import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import { Header } from '@/widgets/header';

import './globals.css';

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
      <Header />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
