import z from 'zod';

export const AuthTokenSchema = z.object({
  userId: z.string(),
  accessToken: z.string().min(20).max(500),
  createdAt: z.string(),
  tokenExpiry: z.string(),
  refreshToken: z.string().min(20).max(500),
});

export type AuthTokenSchemaType = z.infer<typeof AuthTokenSchema>;
