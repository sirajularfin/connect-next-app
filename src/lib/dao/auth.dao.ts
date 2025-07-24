import { User } from '../models/user.model';
import { RegisterUserSchemaType } from '../validations/register-user.schema';

export const findUserByEmail = async (email: string) => {
  return User.findOne({ email });
};

export const createUser = async (data: RegisterUserSchemaType) => {
  const user = new User(data);
  await user.save();
  return user;
};
