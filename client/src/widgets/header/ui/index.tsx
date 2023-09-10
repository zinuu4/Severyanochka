'use client';

import React from 'react';

import { ProductCard } from '@/entities/product-card';
import { Logo } from '@/shared/ui';

import styles from './styles.module.scss';

export const Header = () => (
  <section className="container">
    <div>
      <Logo type="text-right" wrapperClassName={styles.logoWrapper} />
    </div>
    <ProductCard />
  </section>
);
