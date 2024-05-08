import { cva } from 'class-variance-authority';

export const containerVariants = cva('overflow-hidden', {
  variants: {
    color: {
      transparent: 'bg-transparent text-foreground',
      background: 'bg-background text-foreground',
      'background-inverse': 'bg-foreground text-background',
      primary: 'bg-primary text-primary-foreground',
      'primary-inverse': 'bg-primary-foreground text-primary',
      secondary: 'bg-secondary text-secondary-foreground',
      'secondary-inverse': 'bg-secondary-foreground text-secondary',
      tertiary: 'bg-tertiary text-tertiary-foreground',
      'tertiary-inverse': 'bg-tertiary-foreground text-tertiary',
    },
  },
  defaultVariants: {
    color: 'background',
  },
});

export const containerInnerVariants = cva('container py-12 h-full');
