'use client';
import { useMemo } from 'react';

import LanguageIcon from '@/assets/svg/language-icon';
import { useLocaleContext } from '@/i18n/localizationWrapper';
import { APP_LANGUAGES } from '@/types/appConstants';
import Button from '../Button/Button';
import classes from './LanguageButton.module.scss';

const LanguageButton = () => {
  const { locale, toggleLanguage } = useLocaleContext();

  const languageLabel = useMemo(
    () => (locale === APP_LANGUAGES.EN ? 'हिंदी' : 'English'),
    [locale]
  );

  return (
    <Button
      onClick={toggleLanguage}
      aria-label="Change Language"
      className={classes.container}
    >
      <LanguageIcon />
      <span>{languageLabel}</span>
    </Button>
  );
};

export default LanguageButton;
