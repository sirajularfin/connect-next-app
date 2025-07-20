import { APP_LANGUAGES } from '@/types/appConstants';
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

const resources = {
  [APP_LANGUAGES.EN]: async () =>
    await import('../translations/en.json').then(module => module.default),
  [APP_LANGUAGES.HI]: async () =>
    await import('../translations/hi.json').then(module => module.default),
};

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const lang = cookieStore.get('locale')?.value ?? APP_LANGUAGES.EN;

  return {
    locale: lang,
    messages: await resources[lang as APP_LANGUAGES](),
  };
});
