import { z } from 'zod';

export const UserAuthResponseSchema = z.object({
  user: z.object({
    id: z.string(),
    email: z.email(),
    username: z.string(),
    createdAt: z.string(),
  }),
  accessToken: z.string(),
  refreshToken: z.string(),
  message: z.string().optional(),
});

export type UserAuthResponseSchemaType = z.infer<typeof UserAuthResponseSchema>;
