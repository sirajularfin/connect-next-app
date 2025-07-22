import { IUserRegistrationRequest } from '@/types/register.type';
import mongoose, { Model, Schema } from 'mongoose';

const userSchema: Schema<IUserRegistrationRequest> = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User: Model<IUserRegistrationRequest> =
  mongoose.model<IUserRegistrationRequest>('User', userSchema);

export default User;
