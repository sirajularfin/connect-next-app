'use client';

import GoogleIcon from '@/assets/svg/google-icon';
import Button from '@/components/Button/Button';
import { useActionState } from 'react';
import Form from '../Form/Form';
import TextInput from '../TextInput/TextInput';
import Typography from '../Typography/Typography';
import useLoginForm from './LoginForm.hook';
import classes from './LoginForm.module.scss';
import { init } from 'next/dist/compiled/webpack/webpack';

const LoginForm = () => {
  const { loginAction } = useLoginForm();

  const [state, formAction, isPending] = useActionState(
    loginAction,
    {email: '', password: ''},
  );

  return (
    <div className={classes.container}>
      <Typography as="h2">Log In</Typography>
      <form
        action={formAction}
      >
        <TextInput
          id="email"
          type="email"
          name="email"
          placeholder="eg. usernam@domainname.com"
          value={init.email || ''}
        />
        <TextInput
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <Typography>Forgot Password ?</Typography>
      </fo>
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
