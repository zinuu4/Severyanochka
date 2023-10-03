'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { Crumb } from './crumb';
import { BreadcrumbsItem, generateBreadcrumbs } from './lib';

import styles from './styles.module.scss';

// TODO: add translations

export const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbsItem[]>([]);

  useEffect(() => {
    generateBreadcrumbs({ setBreadcrumbs });
  }, []);

  return (
    <div className={clsx(styles.container, 'container')}>
      {breadcrumbs.map(({ path, title }, index) => {
        const isLastCrumb = breadcrumbs.length === index + 1;

        return (
          <Crumb
            key={path}
            path={path}
            title={title}
            isLastCrumb={isLastCrumb}
          />
        );
      })}
    </div>
  );
};
