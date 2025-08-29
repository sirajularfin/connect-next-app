import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { cookies } from 'next/headers';
import React from 'react';

import '@/common/styles/globals.scss';
import { APP_LANGUAGES } from '@/common/types/constants';
import Footer from '@/components/Footer/Footer';
import MainHeader from '@/components/MainHeader/MainHeader';
import LocalizationWrapper from '@/i18n/localizationWrapper';
import ReduxProvider from '@/redux/provider';
import customFonts from '../../public/fonts/fonts';

export const metadata: Metadata = {
  title: 'Connect - AI Powered Chat Application',
  description:
    'Connect is a modern, full-stack chat application built with Next.js that enables real-time communication between users — enriched with intelligent features like AI-based message translation, typing indicators, and secure authentication. Powered by Gemini or OpenAI, messages can be translated instantly with context-aware generative models, making conversations seamless across languages.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('locale')?.value as APP_LANGUAGES;
  const initialLocale =
    cookieLocale && Object.values(APP_LANGUAGES).includes(cookieLocale)
      ? cookieLocale
      : APP_LANGUAGES.EN;

  return (
    <html lang={locale}>
      <body className={customFonts.className}>
        <React.StrictMode>
          <ReduxProvider>
            <LocalizationWrapper initialLocale={initialLocale}>
              <NextIntlClientProvider locale={locale}>
                <main>
                  <MainHeader />
                  {children}
                  <Footer />
                </main>
              </NextIntlClientProvider>
            </LocalizationWrapper>
          </ReduxProvider>
        </React.StrictMode>
      </body>
    </html>
  );
}
