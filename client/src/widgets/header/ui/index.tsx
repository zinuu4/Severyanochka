'use client';

import React, { useRef, useState } from 'react';

import { Input, Logo, Rating } from '@/shared/ui';

import { Catalog } from './catalog';

export const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  return (
    <section className="container">
      <Logo type="text-right" />
      <Catalog />
      <Input
        value={value}
        label="input"
        ref={inputRef}
        placeholder="search"
        onChange={(e) => setValue(e.target.value)}
        rightBtn="search"
      />
      <Rating rating={3} />
    </section>
  );
};
