'use server';

import { ILoginRequest } from '@/types/login.type';
import { IUserRegistrationRequest } from '@/types/userRegistration.type';
import { loginFormSchema } from '@/util/validation.util';
import { z } from 'zod';

export const loginAction = async (_prevState: unknown, formData: FormData) => {
  const values: ILoginRequest = {
    email: String(formData.get('email')),
    password: String(formData.get('password')),
  };
  const parsed = loginFormSchema.safeParse(values);
  if (!parsed.success) {
    return {
      errors: z.treeifyError(parsed.error),
      success: false,
      email: values.email,
      password: values.password,
    };
  }
  return {
    errors: null,
    success: true,
    email: values.email,
    password: values.password,
  };
};

export const registerAction = async (
  _prevState: unknown,
  formData: FormData
) => {
  const values: IUserRegistrationRequest = {
    email: String(formData.get('email')),
    password: String(formData.get('password')),
    firstName: String(formData.get('firstName')),
    lastName: String(formData.get('lastName')),
  };
  const parsed = loginFormSchema.safeParse(values);
  if (!parsed.success) {
    return {
      errors: z.treeifyError(parsed.error),
      success: false,
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
    };
  }
  return {
    errors: null,
    success: true,
    email: values.email,
    password: values.password,
    firstName: values.firstName,
    lastName: values.lastName,
  };
};
