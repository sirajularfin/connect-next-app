import z from 'zod';

export const AuthTokenSchema = z.object({
  accessToken: z.string().min(20).max(500),
  refreshToken: z.string().min(20).max(500),
  createdAt: z.date(),
  tokenExpiry: z.date(),
});

export type AuthTokenSchemaType = z.infer<typeof AuthTokenSchema>;
