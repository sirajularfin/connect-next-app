'use client';

import APP_ROUTES from '@/types/routes';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    redirect(APP_ROUTES.LOGIN);
  }, []);

  return <></>;
};

export default Home;
