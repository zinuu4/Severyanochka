import React from 'react';

import { Button } from '@/shared/ui';

import styles from './styles.module.scss';

export const AddToCartButton = () => (
  <Button className={styles.button} accent='secondary' outlined>В корзину</Button>
);
