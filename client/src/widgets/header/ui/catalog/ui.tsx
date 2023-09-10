'use client';

import React, { useState } from 'react';

import { CatalogMenu } from './menu';
import { TriggerBtn } from './trigger-btn';

// TODO: fix isOpen logic

export const Catalog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TriggerBtn setIsOpen={setIsOpen} isOpen={isOpen} />
      <CatalogMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};
