import clsx from 'clsx';
import React from 'react';

import { Logo } from '@/shared/ui';

import { FooterMenu } from './menu';

import styles from './styles.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <section className={clsx('container', styles.container)}>
      <Logo type="text-bottom" wrapperClassName={styles.logoWrapper} />
      <FooterMenu />
    </section>
  </footer>
);
