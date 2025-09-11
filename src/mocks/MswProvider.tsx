'use client';
import { PropsWithChildren, useEffect, useState } from 'react';

import logger from '@/common/util/logger.util';

declare global {
  interface Window {
    msw?: boolean;
  }
}

interface IProps {
  children: React.ReactNode;
}

export default function MSWProvider({ children }: PropsWithChildren<IProps>) {
  const [isMswReady, setIsMswReady] = useState<boolean>(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const enableMocking = async () => {
      const { worker } = await import('@/mocks/browser');
      worker
        .start({ onUnhandledRequest: 'warn' })
        .then(() => {
          logger('[MSW] Started', 'info');
          setIsMswReady(true);
        })
        .catch((err: Error) => {
          logger(`[MSW] Error: ${err.message}`, 'error');
        });
    };

    if (!window.msw) {
      enableMocking();
    }
  }, [isMswReady]);

  if (!isMswReady) {
    return '[MSW] Initializing...';
  }

  return <>{children}</>;
}
