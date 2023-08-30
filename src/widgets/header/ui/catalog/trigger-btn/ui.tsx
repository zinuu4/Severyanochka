import React from 'react';

import { Button, Icon } from '@/shared/ui';

import styles from './styles.module.scss';

export const TriggerBtn = () => (
  <Button className="catalog-btn" isActive>
    <Icon name="burger" className={styles.burger} />
    <span className={styles.text}>Каталог</span>
  </Button>
);
