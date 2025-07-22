import z from 'zod';

import { LoginFormSchema } from '@/util/validation.util';

export type ILoginRequest = z.infer<typeof LoginFormSchema>;

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
}
