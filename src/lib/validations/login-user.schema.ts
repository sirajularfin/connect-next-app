import { z } from 'zod';

export const LoginUserSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty('error_email_required')
    .email('error_invalid_email'),
  password: z.string().trim().nonempty('error_password_required'),
});

export type LoginUserSchemaType = z.infer<typeof LoginUserSchema>;
