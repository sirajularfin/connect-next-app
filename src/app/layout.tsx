import classNames from 'classnames';
import type { Metadata } from 'next';
import React from 'react';

import Footer from '@/components/Footer/Footer';
import MainHeader from '@/components/MainHeader/MainHeader';
import ReduxProvider from '@/redux/provider';
import '@/styles/globals.scss';
import customFonts from '../../public/fonts/fonts';

export const metadata: Metadata = {
  title: 'Connect - Chat Application',
  description: 'A chat application built with Next.js and Redux',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(customFonts.className, 'dark-theme')}>
        <React.StrictMode>
          <ReduxProvider>
            <main>
              <MainHeader />
              {children}
              <Footer />
            </main>
          </ReduxProvider>
        </React.StrictMode>
      </body>
    </html>
  );
}
