import clsx from 'clsx';
import React from 'react';

import { Logo } from '@/shared/ui';

import { FooterMenu } from './menu';
import { PhoneNumber } from './phone-number';
import { SocialMedia } from './social-media';

import styles from './styles.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <section className={clsx('container', styles.container)}>
      <div className={styles.row}>
        <Logo type="text-bottom" wrapperClassName={styles.logoWrapper} />
        <FooterMenu />
      </div>
      <div className={styles.row}>
        <SocialMedia />
        <PhoneNumber />
      </div>
    </section>
  </footer>
);
