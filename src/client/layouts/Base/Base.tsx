import { cn } from '@/client/lib/shadcn';
import React from 'react';

export const BaseLayout: React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => (
  <html lang="ru">
    <body className={cn(className)}>{children}</body>
  </html>
);
