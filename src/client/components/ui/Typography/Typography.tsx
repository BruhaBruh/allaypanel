'use client';

import { cn } from '@/client/lib/shadcn';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { TypographyProps } from './Typography.types';
import { typographyVariants } from './Typography.variants';

export const Typography: React.FC<TypographyProps> = ({
  className,
  variant,
  asChild = false,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'p';

  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
};
