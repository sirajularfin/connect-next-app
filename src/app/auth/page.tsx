import APP_ROUTES from '@/types/routes';
import { redirect, RedirectType } from 'next/navigation';

function AuthPage() {
  redirect(APP_ROUTES.LOGIN, RedirectType.replace);
}

export default AuthPage;
