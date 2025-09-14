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
      setIsMswReady(true); // Set to true even on error to render the app
      logger(`[MSW] Error: ${err}`, 'error');
    }
  };

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      setIsMswReady(true); // Skip MSW in production
      return;
    }

    if (!window.msw) {
      enableMocking();
    } else {
      setIsMswReady(true);
    }
  }, []);

  // Always render children, don't block the app
  if (!isMswReady && process.env.NODE_ENV === 'development') {
    return;
  }

  return <>{children}</>;
}

export default MSWProvider;