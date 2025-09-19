'use client';
import { useMemo } from 'react';

import { LanguageIcon } from '@/assets';
import { APP_LANGUAGES } from '@/common/types/constants';
import { useLocaleContext } from '../../i18n/LocalizationProvider';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
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
      <Typography>{languageLabel}</Typography>
    </Button>
  );
};

export default LanguageButton;
