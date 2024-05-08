'use client';

import { Button } from '@/client/components/ui';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');

      return;
    }

    if (theme === 'dark') {
      setTheme('light');

      return;
    }

    setTheme('dark');
  };

  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
