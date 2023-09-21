import React from 'react';

import { Icon } from '@/shared/ui';

import styles from './styles.module.scss';

export const PhoneNumber = () => (
  <div className={styles.wrapper}>
    <Icon name="phone" className={styles.icon} />
    <a href="tel:+88007773333">8 800 777 33 33</a>
  </div>
);
