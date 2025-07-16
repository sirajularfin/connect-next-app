import z from 'zod';

import { loginFormSchema } from '@/util/validation.util';

export type ILoginRequest = z.infer<typeof loginFormSchema>;

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}
