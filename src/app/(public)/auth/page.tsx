import APP_ROUTES from '@/common/types/appRoutes.type';
import { redirect, RedirectType } from 'next/navigation';

function Page() {
  redirect(APP_ROUTES.LOGIN, RedirectType.replace);
}

export default Page;
