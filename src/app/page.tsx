import { redirect } from 'next/navigation';

import { APP_ROUTES } from '@/common/types/appRoutes.type';

const Home = () => {
  redirect(APP_ROUTES.LOGIN);
};

export default Home;
