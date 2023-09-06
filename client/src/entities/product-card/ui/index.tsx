/* eslint-disable import/order */
import Link from 'next/link';
import React from 'react';

import { AddToCartButton } from './add-to-cart';
import { ProductInfo } from './info';
import { ProductTop } from './top';

import styles from './styles.module.scss';

export const ProductCard = () => (
  <Link href="/" className={styles.card}>
    <ProductTop />
    <div className={styles.content}>
      <ProductInfo />
      <AddToCartButton />
    </div>
  </Link>
);
