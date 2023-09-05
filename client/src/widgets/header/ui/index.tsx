import React from 'react';

import { Checkbox, Logo, ToggleButton } from '@/shared/ui';

import { Catalog } from './catalog';

export const Header = () => (
  <section className="container">
    <Logo type="text-right" />
    <Catalog />
    <ToggleButton />
    <Checkbox />
  </section>
);
