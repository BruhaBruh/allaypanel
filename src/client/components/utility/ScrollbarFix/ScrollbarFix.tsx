'use client';

import React from 'react';

const style = 'margin-right: 0px !important';

export const ScrollbarFix = () => {
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const body = document.body as HTMLBodyElement;

    const interval = setInterval(() => {
      const styleWithoutStyleUpdaterStyle = body.style.cssText.replaceAll(
        style,
        ''
      );
      body.style.cssText = `${styleWithoutStyleUpdaterStyle} ${style}`;
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return null;
};
