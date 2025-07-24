import z from 'zod';

import { DEFAULT_MIN_PASSWORD_LENGTH } from '@/types/constants';

export const RegisterUserSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty('error_email_required')
    .email('error_invalid_email'),
  password: z
    .string()
    .trim()
    .nonempty('error_password_required')
    .min(DEFAULT_MIN_PASSWORD_LENGTH, { message: 'error_password_min_length' })
    .regex(/[a-zA-Z]/, {
      message: 'error_password_no_letter',
    })
    .regex(/[0-9]/, { message: 'error_password_no_number' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'error_password_no_special_char',
    }),
  firstName: z.string().trim().nonempty('error_first_name_required'),
  lastName: z.string().trim().nonempty('error_last_name_required'),
});

export type RegisterUserSchemaType = z.infer<typeof RegisterUserSchema>;
