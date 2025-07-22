import APP_ROUTES from '@/types/routes';
import { redirect } from 'next/navigation';

function AuthPage() {
  redirect(APP_ROUTES.LOGIN);
}

export default AuthPage;
