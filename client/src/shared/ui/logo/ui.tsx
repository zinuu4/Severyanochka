import React from 'react';

import { Icon } from '../icon';

interface LogoProps {
  type: 'text-right' | 'text-down' | 'no-text';
}

export const Logo: React.FC<LogoProps> = ({ type }) => (
  <Icon name={`logo-${type}`} />
);
