'use server';
import { z } from 'zod';

import { ILoginRequest } from '@/types/login.type';
import { IUserRegistrationRequest } from '@/types/register.type';
import {
  LoginFormSchema,
  RegistrationFormSchema,
} from '@/util/validation.util';

export const loginAction = async (_prevState: unknown, formData: FormData) => {
  const values: ILoginRequest = {
    email: String(formData.get('email')),
    password: String(formData.get('password')),
  };
  const validatedFields = LoginFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error).properties,
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
  const validatedFields = RegistrationFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error).properties,
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
