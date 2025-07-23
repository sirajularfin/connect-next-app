import z from 'zod';

import { RegistrationFormSchema } from '@/util/validation.util';

export type IUserRegistrationRequest = z.infer<typeof RegistrationFormSchema>;

export interface IUserRegistrationResponse {
  message: string;
}
