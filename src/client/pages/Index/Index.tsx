'use client';

import { Typography } from '@/client/components/ui';
import React from 'react';

export const IndexPage: React.FC = () => {
  return (
    <main className="flex flex-col gap-2 min-h-full container py-12">
      <Typography variant="h2">Hello, world!</Typography>
    </main>
  );
};
