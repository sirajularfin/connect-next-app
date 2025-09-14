'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { GoogleLogo } from '@/assets';
import { DEFAULT_MIN_PASSWORD_LENGTH } from '@/common/types/constants';
import APP_ROUTES from '@/common/types/routes';
import AuthForm from '@/components/AuthForm/AuthForm';
import Button from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import Typography from '@/components/Typography/Typography';
import classes from './page.module.scss';
import useRegister from './register.hook';

const Page: React.FC = () => {
  const { error, formState, handleFieldChange, isLoading, handleFormSubmit } =
    useRegister();
  const t = useTranslations();

  return (
    <AuthForm
      title={<Typography as="h2">{t('register_title')}</Typography>}
      dividerText={<Typography>{t('text_continue_with')}</Typography>}
      googleButton={
        <Button
          aria-label="Google Sign In"
          titleCase="uppercase"
          variant="SECONDARY"
        >
          <GoogleLogo />
          <span>{t('google_sign_in')}</span>
        </Button>
      }
      bottomText={
        <Typography>
          {t('register_already_have_account')}
          <Link href={APP_ROUTES.LOGIN}>{t('login_title')}</Link>
        </Typography>
      }
    >
      <form onSubmit={handleFormSubmit}>
        <div className={classes.nameFields}>
          <TextInput
            id="firstName"
            type="text"
            name="firstName"
            placeholder={t('register_placeholder_firstName')}
            value={formState.firstName}
            onChange={e => handleFieldChange('firstName', e.target.value)}
            error={error?.properties?.firstName}
          />
          <TextInput
            id="lastName"
            type="text"
            name="lastName"
            placeholder={t('register_placeholder_lastName')}
            value={formState.lastName}
            onChange={e => handleFieldChange('lastName', e.target.value)}
            error={error?.properties?.lastName}
          />
        </div>
        <TextInput
          id="email"
          type="email"
          name="email"
          placeholder={t('register_placeholder_email')}
          onChange={e => handleFieldChange('email', e.target.value)}
          value={formState.email}
          error={error?.properties?.email}
        />
        <TextInput
          id="password"
          type="password"
          name="password"
          placeholder={t('register_placeholder_password')}
          value={formState.password}
          error={error?.properties?.password}
          minLength={DEFAULT_MIN_PASSWORD_LENGTH}
          onChange={e => handleFieldChange('password', e.target.value)}
          helperText={t('register_password_hint', {
            length: DEFAULT_MIN_PASSWORD_LENGTH,
          })}
        />
        <Button
          aria-label="Register"
          disabled={isLoading}
          loading={isLoading}
          title={t('button_register')}
          titleCase="uppercase"
          type="submit"
        />
      </form>
    </AuthForm>
  );
};

export default Page;
