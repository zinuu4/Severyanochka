import clsx from 'clsx';
import React from 'react';

import { MainSearch } from '@/features/main-search';
import { Logo } from '@/shared/ui';

import { Catalog } from './catalog';
import { MainMenu } from './main-menu';

import styles from './styles.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <section className={clsx(styles.container, 'container')}>
      <Logo type="text-right" wrapperClassName={styles.logoWrapper} />
      <Catalog />
      <MainSearch />
      <MainMenu />
    </section>
  </header>
);
