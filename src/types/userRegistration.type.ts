import z from 'zod';

import { registrationFormSchema } from '@/util/validation.util';

export type IUserRegistrationRequest = z.infer<typeof registrationFormSchema>;

export interface IUserRegistrationResponse {
  message: string;
}
