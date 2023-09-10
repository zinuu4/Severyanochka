'use client';

import clsx from 'clsx';
import React from 'react';

import { Logo } from '@/shared/ui';

import { Catalog } from './catalog';

import styles from './styles.module.scss';

export const Header = () => (
  <section className={clsx(styles.header, 'container')}>
    <Logo type="text-right" wrapperClassName={styles.logoWrapper} />
    <Catalog />
  </section>
);
