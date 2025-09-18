import { APP_ROUTES } from '@/common/types/appRoutes.type';
import { redirect } from 'next/navigation';

function Page() {
  redirect(APP_ROUTES.CHAT);
}

export default Page;
