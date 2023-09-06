import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/shared/ui';

import styles from './styles.module.scss';

interface RatingProps {
  rating: number;
}

// TODO: implement halves

export const Rating: React.FC<RatingProps> = ({ rating }) => (
  <div className={styles.wrapper}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Icon
        key={star}
        name="star"
        className={clsx(styles.star, star <= rating && styles.selected)}
      />
    ))}
  </div>
);
