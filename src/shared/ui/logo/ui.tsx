import React from 'react';

import { Icon } from '../icon';

interface ILogoProps {
  type: 'text-right' | 'text-down' | 'no-text';
}

export const Logo = ({ type }: ILogoProps) => <Icon name={`logo-${type}`} />;
