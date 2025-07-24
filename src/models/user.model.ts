import mongoose, { Model, Schema } from 'mongoose';

import { RegisterUserSchemaType } from '@/lib/validations/register-user.schema';

const userSchema: Schema<RegisterUserSchemaType> = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User: Model<RegisterUserSchemaType> =
  mongoose.model<RegisterUserSchemaType>('User', userSchema);
