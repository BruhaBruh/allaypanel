'use client';

import { Container } from '@/client/components/ui';
import { cn } from '@/client/lib/shadcn';
import { Props } from '@/client/types/props';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header: React.FC<Props<'header'>> = ({ className, ...props }) => {
  return (
    <Container
      color="secondary"
      inner={{
        asChild: true,
        className: cn('h-20 py-0 flex items-center justify-between', className),
      }}
      className="sticky top-0 z-10"
    >
      <header {...props}>
        <Link href="/" className="flex items-center justify-center gap-2">
          <span className="sr-only">Main page</span>
          <Image
            aria-hidden="true"
            src="/favicon.png"
            width={48}
            height={48}
            alt="Meerkat logo"
          />
        </Link>
        <ThemeSwitcher />
      </header>
    </Container>
  );
};
