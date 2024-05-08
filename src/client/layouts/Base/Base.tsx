import { Header } from '@/client/components/layout';
import { ScrollbarFix } from '@/client/components/utility';
import { cn } from '@/client/lib/shadcn';
import { ThemeProvider } from '@/client/providers/Theme';
import React from 'react';

export const BaseLayout: React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => (
  <html lang="ru" suppressHydrationWarning>
    <body className={cn(className)}>
      <ThemeProvider>
        <Header />
        <main className="flex flex-col">{children}</main>
        <ScrollbarFix />
      </ThemeProvider>
    </body>
  </html>
);
