'use client';

import logger from '@/common/util/logger.util';
import { PropsWithChildren, useEffect, useState } from 'react';

declare global {
  interface Window {
    msw?: boolean;
  }
}

interface IProps {
  children: React.ReactNode;
}

function MSWProvider({ children }: PropsWithChildren<IProps>) {
  const [isMswReady, setIsMswReady] = useState<boolean>(false);

  const enableMocking = async () => {
    try {
      const { worker } = await import('@/mocks/browser');
      await worker.start({ onUnhandledRequest: 'warn' });
      setIsMswReady(true);
      logger('[MSW] Started', 'info');
    } catch (err) {
      setIsMswReady(false);
      logger(`[MSW] Error: ${err}`, 'error');
    }
  };

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;
    if (!window.msw) {
      enableMocking();
    } else {
      setIsMswReady(true);
    }
  }, [isMswReady]);

  if (!isMswReady) {
    return '[MSW] Initializing...';
  }

  return <>{children}</>;
}

export default MSWProvider;
