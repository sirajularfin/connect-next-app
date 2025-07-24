'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import GoogleIcon from '@/assets/svg/google-icon';
import AuthForm from '@/components/AuthForm/AuthForm';
import Button from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import Typography from '@/components/Typography/Typography';
import APP_ROUTES from '@/types/routes';
import useLogin from './useLogin';

const LoginPage: React.FC = () => {
  const t = useTranslations();
  const { error, isLoading, formState, handleFieldChange, handleFormSubmit } =
    useLogin();

  return (
    <AuthForm
      title={<Typography as="h2">{t('login_title')}</Typography>}
      dividerText={<Typography>{t('text_continue_with')}</Typography>}
      googleButton={
        <Button
          aria-label="Google Sign In"
          titleCase="uppercase"
          variant="SECONDARY"
        >
          <GoogleIcon width={18} height={18} />
          <span>{t('google_sign_in')}</span>
        </Button>
      }
      bottomText={
        <Typography>
          {t('login_no_account')}
          <Link href={APP_ROUTES.REGISTER}>{t('login_create_account')}</Link>
        </Typography>
      }
    >
      <form onSubmit={handleFormSubmit}>
        <TextInput
          id="email"
          type="email"
          name="email"
          placeholder={t('login_placeholder_email')}
          defaultValue={formState.email}
          error={error?.properties?.email}
          onChange={e => handleFieldChange('email', e.target.value)}
        />
        <TextInput
          id="password"
          type="password"
          name="password"
          placeholder={t('login_placeholder_password')}
          defaultValue={formState.password}
          error={error?.properties?.password}
          onChange={e => handleFieldChange('password', e.target.value)}
        />
        <Link href="#">{t('login_forgot_password')}</Link>
        <Button
          aria-label="Log In"
          disabled={isLoading}
          loading={isLoading}
          title={t('button_login')}
          titleCase="uppercase"
          type="submit"
        />
      </form>
    </AuthForm>
  );
};

export default LoginPage;