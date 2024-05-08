import { Props, PropsWithAsChild } from '@/client/types/props';
import type { VariantProps } from 'class-variance-authority';
import { containerVariants } from './Container.variants';

export type ContainerProps = Props<'section'> &
  VariantProps<typeof containerVariants> & {
    inner?: Omit<ContainerInnerProps, 'children'>;
  };

export type ContainerInnerProps = PropsWithAsChild<'section'>;
