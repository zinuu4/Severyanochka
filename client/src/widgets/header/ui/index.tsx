import React from 'react';

import { Checkbox, Logo, ToggleButton, ToolTip } from '@/shared/ui';

import { Catalog } from './catalog';

export const Header = () => (
  <section className="container">
    <Logo type="text-right" />
    <Catalog />
    <ToggleButton />
    <Checkbox />
    <ToolTip label="warning" theme="light" position="left" />
  </section>
);
