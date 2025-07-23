'use server';
import { z } from 'zod';

import { ILoginRequest } from '@/types/login.type';
import { LoginFormSchema } from '@/util/validation.util';

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
