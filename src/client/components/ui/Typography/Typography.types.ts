import { PropsWithAsChild } from '@/client/types/props';
import { VariantProps } from 'class-variance-authority';
import { typographyVariants } from './Typography.variants';

export type TypographyProps = PropsWithAsChild<'p'> &
  VariantProps<typeof typographyVariants>;
