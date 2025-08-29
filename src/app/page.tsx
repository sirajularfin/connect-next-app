import APP_ROUTES from '@/common/types/routes';
import { redirect } from 'next/navigation';

const Home = () => {
  redirect(APP_ROUTES.LOGIN);
};

export default Home;
