import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.email('Invalid email').nonempty('Email is required'),
  password: z.string().nonempty('Password is required'),
});

export const registrationFormSchema = z.object({
  email: z.email('Invalid email').nonempty('Email is required'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .nonempty('Password is required'),
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
});
