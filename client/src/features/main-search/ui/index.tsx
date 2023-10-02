import React from 'react';

import { SearchInput } from './search-input';

import styles from './styles.module.scss';

export const MainSearch = () => (
  <div className={styles.search}>
    <SearchInput />
  </div>
);
