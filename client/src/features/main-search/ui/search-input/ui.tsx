import React from 'react';

import { Icon, Input } from '@/shared/ui';

import styles from './styles.module.scss';

export const SearchInput = () => (
  <Input
    RightElement={<Icon name="search" className={styles.icon} />}
    placeholder="Найти товар"
    inputClassName={styles.input}
  />
);
