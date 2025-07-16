'use server';

import { z } from 'zod';

const useLoginForm = () => {
  const validationSchema = z.object({
    email: z.email('Invalid email').nonempty('Email is required'),
    password: z.string().nonempty('Password is required'),
  });

  const loginAction = async (_: unknown, formData: FormData) => {
    const values = {
      email: formData.get('email'),
      message: formData.get('message'),
    };
    const parsed = validationSchema.safeParse(values);
    if (!parsed.success) {
      return {
        success: false,
      };
    }
    console.log('Valid data:', parsed.data);
    return { success: true };
  };

  return {
    loginAction,
    validationSchema,
  };
};

export default useLoginForm;
