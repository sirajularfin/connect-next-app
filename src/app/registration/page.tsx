import Typography from '@/components/Typography/Typography';
import { Formik } from 'formik';
import RegistrationIllustration from '../../assets/images/registration-illustration.svg';
import Button from '../../components/Button/Button';
import useRegistration from './registration.hook';
import classes from './Registration.module.scss';

function Registration(): React.ReactElement {
  const { isDesktop, navigate, validationSchema, onFormSubmit } =
    useRegistration();

  return (
    <section className={classes.container}>
      <Typography as="h1">Create Your Account</Typography>
      <Typography>
        Your journey to seamless conversations starts here!
      </Typography>
      <div>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
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
              <form onSubmit={handleSubmit} style={style.loginForm}>
                <TextInput
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  variant="ROUNDED"
                  error={
                    errors.firstName && touched.firstName
                      ? errors.firstName
                      : null
                  }
                />
                <TextInput
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  variant="ROUNDED"
                  error={
                    errors.lastName && touched.lastName ? errors.lastName : null
                  }
                />
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
                <TextInput
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  variant="ROUNDED"
                  error={
                    errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : null
                  }
                />
                <Container
                  display="flex"
                  flexDirection="column"
                  marginTop={PixelScale.XS_10}
                >
                  <Button
                    disabled={isSubmitting}
                    title="REGISTER"
                    type="submit"
                  />
                </Container>
              </form>
            )}
          </Formik>
          <Container
            display="flex"
            gap={PixelScale.XS_5}
            justifyContent="center"
            marginTop={PixelScale.M_30}
          >
            <Text variant={FontVariant.LabelLarge} color={Colors.GREY_50}>
              Already have an account?
            </Text>
            <Text
              variant={FontVariant.LabelLarge}
              color={Colors.GREY_50}
              onClick={() => navigate(RoutePath.ROOT)}
            >
              Log in
            </Text>
          </Container>
        </Container>
    </section>
  );
}

export default Registration;
