import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/shared/ui';

import styles from './styles.module.scss';

interface RatingProps {
  rating: number;
  className?: string;
}

// TODO: implement halves and sizes

export const Rating: React.FC<RatingProps> = ({ rating, className }) => (
  <div className={clsx(styles.wrapper, className)}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Icon
        key={star}
        name="star"
        className={clsx(styles.star, star <= rating && styles.selected)}
      />
    ))}
  </div>
);
