import React from 'react';

import { footerMenuItems } from './config';
import { FooterMenuItem } from './menu-item';

import styles from './styles.module.scss';

export const FooterMenu = () => (
  <div className={styles.menu}>
    {footerMenuItems.map(({ label, href }) => (
      <FooterMenuItem label={label} href={href} />
    ))}
  </div>
);
