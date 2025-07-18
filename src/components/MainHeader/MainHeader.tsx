'use client';

import React from 'react';

import Logo from '@/assets/svg/logo';
import TranslationIcon from '@/assets/svg/translation-icon';
import { useLocaleContext } from '@/i18n/localizationWrapper';
import Button from '../Button/Button';
import classes from './MainHeader.module.scss';

function MainHeader(): React.ReactElement {
  const { toggleLanguage } = useLocaleContext();

  return (
    <header className={classes.container}>
      <Logo />
      <Button onClick={toggleLanguage}>
        <TranslationIcon />
      </Button>
    </header>
  );
}

export default MainHeader;
