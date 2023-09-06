'use client';

import React from 'react';

import { ProductCard } from '@/entities/product-card';
import { Logo } from '@/shared/ui';

export const Header = () => (
  <section className="container">
    <Logo type="text-right" />
    <ProductCard />
  </section>
);
