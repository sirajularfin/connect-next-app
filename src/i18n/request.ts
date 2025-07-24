import { APP_LANGUAGES } from '@/types/constants';
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

const resources: Record<APP_LANGUAGES, () => Promise<Record<string, string>>> =
  {
    [APP_LANGUAGES.EN]: () =>
      import('../translations/en.json').then(m => m.default),
    [APP_LANGUAGES.HI]: () =>
      import('../translations/hi.json').then(m => m.default),
  };

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const lang =
    (cookieStore.get('locale')?.value as APP_LANGUAGES) || APP_LANGUAGES.EN;

  const messagesLoader = resources[lang] || resources[APP_LANGUAGES.EN];
  const messages = await messagesLoader();

  return {
    locale: lang,
    messages,
  };
});
