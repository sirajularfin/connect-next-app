// import { useNavigate } from 'react-router-dom';
// import { usePostRegistrationMutation } from 'src/api/endpoints/auth';
// import { IUserRegistrationRequest } from 'src/models/interfaces/userRegistration.interface';
// import { RoutePath } from 'src/routes/types';
// import logger from 'src/util/logger.util';
// import * as Yup from 'yup';
// import useResponsive from '../../hooks/useResponsive';

// const useRegistration = () => {
//   const isDesktop = useResponsive();
//   const navigate = useNavigate();

//   const [triggerPostRegistrationMutation, { isError }] =
//     usePostRegistrationMutation();

//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string()
//       .required('First name is required')
//       .min(2, 'First name must be at least 2 characters long'),
//     lastName: Yup.string()
//       .required('Last name is required')
//       .min(2, 'Last name must be at least 2 characters long'),
//     email: Yup.string()
//       .required('Email is required')
//       .email('Email is not valid'),
//     password: Yup.string().required('Password is required'),
//     confirmPassword: Yup.string().required('Confirm password is required'),
//   });

//   const onFormSubmit = (values: IUserRegistrationRequest) => {
//     const response = triggerPostRegistrationMutation(values).unwrap();
//     if (!isError) {
//       response
//         .then(() => {
//           navigate(RoutePath.ROOT);
//         })
//         .catch(() => {
//           logger('Registration failed:');
//         });
//     }
//   };

//   return {
//     isDesktop,
//     navigate,
//     onFormSubmit,
//     validationSchema,
//   };
// };

// export default useRegistration;
