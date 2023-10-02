import React from 'react';

import { menuItems } from './config';
import { MainMenuItem } from './menu-item';

import styles from './styles.module.scss';

export const MainMenu = () => (
  <div className={styles.menu}>
    {menuItems.map(({ icon, text }) => (
      <MainMenuItem key={text} icon={icon} text={text} />
    ))}
  </div>
);
