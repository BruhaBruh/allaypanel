'use client';

import { cn } from '@/client/lib/shadcn';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { ButtonProps } from './Button.types';
import { buttonVariants } from './Button.variants';

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
};
