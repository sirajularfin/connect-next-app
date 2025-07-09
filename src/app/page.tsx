'use client';

import Button from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import Typography from '@/components/Typography/Typography';
import { Formik } from 'formik';
import useLogin from './page.hook';
import classes from './page.module.scss';

function Home(): React.ReactElement {
  const { validationSchema, onFormSubmit } = useLogin();

  return (
    <main className={classes.container}>
      <Typography as="h1" className={classes.title}>
        Join the conversation
      </Typography>
      <Formik
        initialValues={{
          email: 'test@gmail.com',
          password: 'testPassword@123',
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
          <form onSubmit={handleSubmit} className={classes.loginForm}>
            <TextInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              variant="ROUNDED"
              error={errors.email && touched.email ? errors.email : null}
            />
            <TextInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              variant="ROUNDED"
              error={
                errors.password && touched.password ? errors.password : null
              }
            />
            <div>
              <Button disabled={isSubmitting} title="LOG IN" type="submit" />
            </div>
          </form>
        )}
      </Formik>
      <Typography as="h2">Forgot Password ?</Typography>
      <div>
        <Typography>Don’t have an account?</Typography>
        <Typography>Create new account</Typography>
      </div>
    </main>
  );
}

export default Home;
