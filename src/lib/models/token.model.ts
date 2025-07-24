import { AuthTokenSchemaType } from '@/lib/validations/auth-token.schema';
import { DEFAULT_ACCESS_TOKEN_EXPIRY } from '@/types/constants';
import mongoose, { Model, Schema } from 'mongoose';

const tokenSchema: Schema<AuthTokenSchemaType> = new Schema({
  userId: { type: String, required: true },
  accessToken: { type: String, required: true, unique: true },
  refreshToken: { type: String, required: true, unique: true },
  createdAt: {
    type: String,
    required: true,
    default: () => new Date().toISOString(),
  },
  tokenExpiry: {
    type: String,
    required: true,
    default: () =>
      new Date(Date.now() + DEFAULT_ACCESS_TOKEN_EXPIRY).toISOString(),
  },
});

export const Token: Model<AuthTokenSchemaType> =
  mongoose.models.Token ||
  mongoose.model<AuthTokenSchemaType>('Token', tokenSchema);
