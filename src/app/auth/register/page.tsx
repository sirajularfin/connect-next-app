'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useActionState } from 'react';

import { registerAction } from '@/actions/registerActions';
import GoogleIcon from '@/assets/svg/google-icon';
import AuthForm from '@/components/AuthForm/AuthForm';
import Button from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import Typography from '@/components/Typography/Typography';
import APP_ROUTES from '@/types/routes';
import classes from './page.module.scss';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  errors: undefined,
  success: false,
};

const RegisterForm: React.FC = () => {
  const t = useTranslations();
  const [state, formAction, isPending] = useActionState(
    registerAction,
    INITIAL_STATE
  );

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
          <GoogleIcon width={18} height={18} />
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
      <form action={formAction}>
        <div className={classes.nameFields}>
          <TextInput
            id="firstName"
            type="text"
            name="firstName"
            placeholder={t('register_placeholder_firstName')}
            defaultValue={state.firstName}
            error={state?.errors?.firstName?.errors}
          />
          <TextInput
            id="lastName"
            type="text"
            name="lastName"
            placeholder={t('register_placeholder_lastName')}
            defaultValue={state.lastName}
            error={state?.errors?.lastName?.errors}
          />
        </div>
        <TextInput
          id="email"
          type="email"
          name="email"
          placeholder={t('register_placeholder_email')}
          defaultValue={state.email}
          error={state?.errors?.email?.errors}
        />
        <TextInput
          id="password"
          type="password"
          name="password"
          placeholder={t('register_placeholder_password')}
          defaultValue={state.password}
          error={state?.errors?.password?.errors}
          minLength={6}
          helperText={t('register_password_hint')}
        />
        <Button
          aria-label="Register"
          disabled={isPending}
          loading={isPending}
          title={t('button_register')}
          titleCase="uppercase"
          type="submit"
        />
      </form>
    </AuthForm>
  );
};

export default RegisterForm;
