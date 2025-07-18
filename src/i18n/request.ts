import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

const resources = {
  en: async () =>
    await import('../translations/en.json').then(module => module.default),
  hi: async () =>
    await import('../translations/hi.json').then(module => module.default),
};

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const lang = cookieStore.get('locale')?.value || 'en';

  return {
    locale: lang,
    messages: await resources[lang as 'en' | 'hi'](),
  };
});
