import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.email('error_invalid_email').nonempty('error_email_required').trim(),
  password: z.string().nonempty('error_password_required').trim(),
});

export const RegistrationFormSchema = z.object({
  email: z.email('error_invalid_email').nonempty('error_email_required').trim(),
  password: z
    .string()
    .min(6, { message: 'error_password_min_length' })
    .regex(/[a-zA-Z]/, {
      message: 'error_password_no_letter',
    })
    .regex(/[0-9]/, { message: 'error_password_no_number' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'error_password_no_special_char',
    })
    .trim(),
  firstName: z.string().nonempty('error_first_name_required').trim(),
  lastName: z.string().nonempty('error_last_name_required').trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;