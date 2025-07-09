'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import * as Yup from 'yup';

import { usePostLoginMutation } from '@/api/endpoints/auth';
import { setAuthTokens } from '@/redux/slices/appSession.slice';
import { setIsLoggedIn } from '@/redux/slices/auth.slice';
import { AppDispatch } from '@/redux/store';
import { ILoginRequest, ILoginResponse } from '@/types/login.type';
import APP_ROUTES from '@/types/routes';
import { useDispatch } from 'react-redux';

const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [triggerPostLogin, { isError }] = usePostLoginMutation();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onLoginSuccess = useCallback((response: ILoginResponse) => {
    dispatch(setIsLoggedIn(true));
    dispatch(setAuthTokens(response));
    router.push(APP_ROUTES.CHAT);
  }, []);

  const onFormSubmit = useCallback(
    async ({ email, password }: ILoginRequest) => {
      const request: ILoginRequest = { email, password };
      const response = await triggerPostLogin(request).unwrap();
      if (!isError) {
        onLoginSuccess(response);
      }
    },
    [isError]
  );

  return {
    onFormSubmit,
    validationSchema,
  };
};

export default useLogin;
