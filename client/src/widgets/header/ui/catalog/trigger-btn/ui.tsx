import React from 'react';

import { Button } from '@/shared/ui';

import styles from './styles.module.scss';

interface TriggerBtnProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

export const TriggerBtn: React.FC<TriggerBtnProps> = ({
  setIsOpen,
  isOpen,
}) => {
  const onMouseLeave = () => {
    if (!isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  };

  return (
    <Button
      className={styles.burger}
      accent="secondary"
      leftIcon="burger"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={onMouseLeave}
    >
      <span className={styles.text}>Каталог</span>
    </Button>
  );
};
