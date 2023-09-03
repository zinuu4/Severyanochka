import React from 'react';

import { Checkbox, Logo, ToggleBtn } from '@/shared/ui';

import { Catalog } from './catalog';

export const Header = () => (
  <section className="container">
    <Logo type="text-right" />
    <Catalog />
    <ToggleBtn />
    <Checkbox />
  </section>
);
