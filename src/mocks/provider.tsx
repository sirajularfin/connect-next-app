'use client';
import { useEffect } from 'react';

import logger from '@/common/util/logger.util';

export default function MSWProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      logger('[MSW] Starting...', 'info');
      import('@/mocks/browser').then(({ worker }) => {
        worker
          .start({ onUnhandledRequest: 'warn' })
          .then(() => {
            logger('[MSW] Started', 'info');
          })
          .catch(err => {
            logger(`[MSW] Error: ${err.message}`, 'error');
          });
      });
    }
  }, []);

  return <>{children}</>;
}
