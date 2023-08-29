import React from 'react';

import { Icon } from '../icon';

import styles from './styles.module.scss';

interface ILogoProps {
  type: 'text-right' | 'text-down' | 'no-text';
}

export const Logo = ({ type }: ILogoProps) => (
  <Icon className={styles.logo} name={`logo-${type}`} />
);
