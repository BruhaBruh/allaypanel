'use client';

import { cn } from '@/client/lib/shadcn';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { ContainerInnerProps, ContainerProps } from './Container.types';
import {
  containerInnerVariants,
  containerVariants,
} from './Container.variants';

export const ContainerInner: React.FC<ContainerInnerProps> = ({
  className,
  children,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : 'section';

  return (
    <Comp className={cn(containerInnerVariants({ className }))} {...props}>
      {children}
    </Comp>
  );
};

export const Container: React.FC<ContainerProps> = ({
  color,
  inner,
  className,
  children,
  ...props
}) => {
  return (
    <section className={cn(containerVariants({ color, className }))} {...props}>
      <ContainerInner {...inner}>{children}</ContainerInner>
    </section>
  );
};
