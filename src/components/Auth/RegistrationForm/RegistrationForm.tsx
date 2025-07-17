'use client';

import { useActionState } from 'react';

import GoogleIcon from '@/assets/svg/google-icon';
import Button from '@/components/Button/Button';
import { AUTH_MODES } from '@/types/appConstants';
import { registerAction } from '@/util/formActions.util';
import TextInput from '../../TextInput/TextInput';
import Typography from '../../Typography/Typography';
import classes from './RegistrationForm.module.scss';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  errors: null,
  success: false,
};

interface IProps {
  updateAuthState?: (mode: AUTH_MODES) => void;
}

const RegistrationForm: React.FC<IProps> = ({ updateAuthState }) => {
  const [state, formAction, isPending] = useActionState(
    registerAction,
    INITIAL_STATE
  );

  return (
    <div className={classes.container}>
      <Typography as="h2">Create Your Account</Typography>
      <form action={formAction} className={classes.form}>
        <div className={classes.nameFields}>
          <TextInput
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            defaultValue={state.firstName}
            required
          />
          <TextInput
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            defaultValue={state.lastName}
            required
          />
        </div>
        <TextInput
          id="email"
          type="email"
          name="email"
          placeholder="eg. username@domainname.com"
          defaultValue={state.email}
          required
        />
        <TextInput
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          defaultValue={state.password}
          helperText="Create a password with at least 6 characters, including letters and numbers. Avoid common words or easily guessed information."
          required
        />
        <Button
          aria-label="Register"
          disabled={isPending}
          loading={isPending}
          title="Register"
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

      <Typography>
        Already have an account?{' '}
        <Typography
          as="span"
          onClick={() => updateAuthState?.(AUTH_MODES.LOGIN)}
        >
          Log In
        </Typography>
      </Typography>
    </div>
  );
};

export default RegistrationForm;
