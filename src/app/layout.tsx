import { BaseLayout } from '@/client/layouts/Base';
import '@/client/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://meerkat.bruhabruh.ru'),
  icons: {
    icon: [
      {
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        type: 'image/png',
        url: '/favicon.png',
      },
    ],
  },
  title: {
    template: '%s\u2009\u203a\u2009MeerkatPanel',
    default: 'MeerkatPanel',
  },
  description:
    'MeerkatPanel - panel for minecraft servers, databases and other apps',
  keywords: ['minecraft', 'server', 'panel', 'meerkat', 'meerkatpanel'],
  openGraph: {
    type: 'website',
    title: {
      template: '%s\u2009\u203a\u2009MeerkatPanel',
      default: 'MeerkatPanel',
    },
    description:
      'MeerkatPanel - panel for minecraft servers, databases and other apps',
    siteName: 'MeerkatPanel',
    images: '/favicon.png',
  },
};

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <BaseLayout className={inter.variable}>{children}</BaseLayout>
);

export default Layout;
