import clsx from 'clsx';
import React, { useState } from 'react';

import { Icon } from '@/shared/ui';

import styles from './styles.module.scss';

export const AddToFavoritesButton = () => {
  const [inFavorites, setInFavorites] = useState(false);

  return (
    <button
      className={clsx('btn-reset', styles.button, {
        [styles.inFavorites]: inFavorites,
      })}
      onClick={() => setInFavorites((prev) => !prev)}
    >
      <Icon name="heart" />
    </button>
  );
};
