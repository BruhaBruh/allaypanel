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
      success: 'bg-success text-success-foreground',
      'success-inverse': 'bg-success-foreground text-success',
      warning: 'bg-warning text-warning-foreground',
      'warning-inverse': 'bg-warning-foreground text-warning',
      destructive: 'bg-destructive text-destructive-foreground',
      'destructive-inverse': 'bg-destructive-foreground text-destructive',
    },
  },
  defaultVariants: {
    color: 'background',
  },
});

export const containerInnerVariants = cva('container py-12 h-full');
