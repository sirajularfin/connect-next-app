'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useActionState } from 'react';

import GoogleIcon from '@/assets/svg/google-icon';
import Button from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import Typography from '@/components/Typography/Typography';
import APP_ROUTES from '@/types/routes';
import { loginAction } from '@/util/formActions.util';
import classes from './page.module.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
  errors: null,
  success: false,
};

const LoginPage: React.FC = () => {
  const t = useTranslations();
  const [state, formAction, isPending] = useActionState(
    loginAction,
    INITIAL_STATE
  );

  return (
    <div className={classes.container}>
      <Typography as="h2">{t('login_title')}</Typography>
      <form action={formAction} className={classes.form}>
        <TextInput
          id="email"
          type="email"
          name="email"
          placeholder={t('login_placeholder_email')}
          defaultValue={state.email}
          required
        />
        <TextInput
          id="password"
          type="password"
          name="password"
          placeholder={t('login_placeholder_password')}
          defaultValue={state.password}
          required
        />
        <Typography>{t('login_forgot_password')}</Typography>
        <Button
          aria-label="Log In"
          disabled={isPending}
          loading={isPending}
          title="Log In"
          titleCase="uppercase"
          type="submit"
        />
        <div className={classes.divider}>
          <hr />
          <Typography>{t('text_continue_with')}</Typography>
          <hr />
        </div>

        <Button
          aria-label="Google Sign In"
          titleCase="uppercase"
          variant="SECONDARY"
        >
          <GoogleIcon width={18} height={18} />
          <span>{t('google_sign_in')}</span>
        </Button>

        <Typography>
          {t('login_no_account')}
          <Link href={APP_ROUTES.REGISTER} className={classes.link}>
            {t('login_create_account')}
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default LoginPage;
