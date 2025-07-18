import classNames from 'classnames';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import React from 'react';

import Footer from '@/components/Footer/Footer';
import MainHeader from '@/components/MainHeader/MainHeader';
import LocalizationWrapper from '@/i18n/localizationWrapper';
import ReduxProvider from '@/redux/provider';
import '@/styles/globals.scss';
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

  return (
    <html
      lang={locale}
      className={classNames('dark-theme', customFonts.className)}
    >
      <body>
        <React.StrictMode>
          <ReduxProvider>
            <LocalizationWrapper>
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
