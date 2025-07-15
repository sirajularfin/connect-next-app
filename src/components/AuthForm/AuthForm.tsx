'use client';
import { Formik } from 'formik';
import React from 'react';

import GoogleIcon from '@/assets/svg/google-icon';
import Button from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import Typography from '../Typography/Typography';
import useAuthForm from './AuthForm.hook';
import classes from './AuthForm.module.scss';

function AuthForm(): React.JSX.Element {
  const { onFormSubmit, validationSchema } = useAuthForm();

  return (
    <div className={classes.container}>
      <Typography as="h2">Log In</Typography>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          onFormSubmit(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={classes.authForm}>
            <TextInput
              id="email"
              type="email"
              name="email"
              placeholder="eg. usernam@domainname.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email ? errors.email : undefined}
            />
            <TextInput
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={
                errors.password && touched.password
                  ? errors.password
                  : undefined
              }
            />
            <Typography>Forgot Password?</Typography>
            <Button
              aria-label="Log In"
              disabled={isSubmitting}
              title="Log In"
              titleCase="uppercase"
              type="submit"
            />
          </form>
        )}
      </Formik>
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
}

export default AuthForm;
