'use client';

import clsx from 'clsx';
import React from 'react';

import { Logo } from '@/shared/ui';

import { Catalog } from './catalog';

import styles from './styles.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <section className={clsx(styles.container, 'container')}>
      <Logo type="text-right" wrapperClassName={styles.logoWrapper} />
      <Catalog />
    </section>
  </header>
);
