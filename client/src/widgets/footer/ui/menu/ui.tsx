import React from 'react';

import { footerMenuItems } from './config';
import { FooterMenuItem } from './menu-item';

export const FooterMenu = () => (
  <>
    {footerMenuItems.map(({ label, href }) => (
      <FooterMenuItem label={label} href={href} />
    ))}
  </>
);
