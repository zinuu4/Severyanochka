import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/shared/ui';

import styles from './styles.module.scss';

interface RatingProps {
  rating: number;
  size?: 'medium' | 'small';
  className?: string;
}

// TODO: implement halves

export const Rating: React.FC<RatingProps> = ({
  rating,
  className,
  size = 'medium',
}) => (
  <div className={clsx(styles.wrapper, className)}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Icon
        key={star}
        name="star"
        className={clsx(
          styles.star,
          styles[size],
          star <= rating && styles.selected,
        )}
      />
    ))}
  </div>
);
