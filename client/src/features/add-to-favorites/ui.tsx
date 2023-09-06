import clsx from 'clsx';
import React, { useState } from 'react';

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
  const [inFavorites, setInFavorites] = useState(false);

  return (
    <button
      className={clsx('btn-reset', styles.button, className, {
        [styles.inFavorites]: inFavorites,
      })}
      onClick={() => setInFavorites((prev) => !prev)}
      {...props}
    >
      <Icon name="heart" />
    </button>
  );
};
