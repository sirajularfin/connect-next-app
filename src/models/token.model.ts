import { AuthTokenSchemaType } from '@/lib/validations/auth-token.schema';
import mongoose, { Model, Schema } from 'mongoose';

const tokenSchema: Schema<AuthTokenSchemaType> = new Schema({
  userId: { type: String, required: true },
  accessToken: { type: String, required: true, unique: true },
  refreshToken: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  tokenExpiry: { type: Date, required: true },
});

export const Token: Model<AuthTokenSchemaType> =
  mongoose.model<AuthTokenSchemaType>('Token', tokenSchema);
