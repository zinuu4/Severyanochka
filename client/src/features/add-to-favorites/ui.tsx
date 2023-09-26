'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

import { ReactTagProps } from '@/shared/types';
import { Icon } from '@/shared/ui';

import styles from './styles.module.scss';

interface AddToFavoritesButtonProps extends ReactTagProps<'button'> {
  className?: string;
}

export const AddToFavoritesButton: React.FC<AddToFavoritesButtonProps> = ({
  className,
  ...props
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className={clsx('btn-reset', styles.button, [className], {
        [styles.inFavorites]: isFavorite,
      })}
      onClick={() => setIsFavorite((prev) => !prev)}
      {...props}
    >
      <Icon name="heart" />
    </button>
  );
};
