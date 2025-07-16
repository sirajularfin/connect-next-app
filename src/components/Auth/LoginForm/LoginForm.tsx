'use client';

import { loginAction } from '@/actions/loginActions';
import GoogleIcon from '@/assets/svg/google-icon';
import Button from '@/components/Button/Button';
import { useActionState } from 'react';
import TextInput from '../../TextInput/TextInput';
import Typography from '../../Typography/Typography';
import classes from './LoginForm.module.scss';

const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(loginAction, {
    email: '',
    password: '',
    errors: null,
    success: false,
  });

  return (
    <div className={classes.container}>
      <Typography as="h2">Log In</Typography>
      <form action={formAction}>
        <TextInput
          id="email"
          type="email"
          name="email"
          placeholder="eg. usernam@domainname.com"
          defaultValue={state?.email}
          required
        />
        <TextInput
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          defaultValue={state?.password}
          required
        />
        <Typography>Forgot Password ?</Typography>
        <Button
          aria-label="Log In"
          disabled={isPending}
          loading={isPending}
          title="Log In"
          titleCase="uppercase"
          type="submit"
        />
      </form>
      <div className={classes.divider}>
        <hr />
        <Typography>or continue with</Typography>
        <hr />
      </div>
      <Button
        aria-label="Google Sign In"
        titleCase="uppercase"
        variant="SECONDARY"
      >
        <GoogleIcon width={18} height={18} />
        <span>Google</span>
      </Button>
      <Typography>Don’t have an account? Create new account</Typography>
    </div>
  );
};

export default LoginForm;
