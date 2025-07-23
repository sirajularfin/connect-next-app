import z from 'zod';

import { IUserRegistrationRequest } from '@/types/register.type';
import { RegistrationFormSchema } from '@/util/validation.util';

export const registerAction = async (
  _prevState: unknown,
  formData: FormData
) => {
  const values: IUserRegistrationRequest = {
    email: String(formData.get('email')),
    password: String(formData.get('password')),
    firstName: String(formData.get('firstName')),
    lastName: String(formData.get('lastName')),
  };
  const validatedFields = RegistrationFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error).properties,
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
    };
  }

  return {
    errors: undefined,
    email: validatedFields.data.email,
    password: validatedFields.data.password,
    firstName: validatedFields.data.firstName,
    lastName: validatedFields.data.lastName,
  };

  // const { firstName, lastName, email, password } = validatedFields.data;
  // const hashedPassword = await encryptMessage(password);
  // const user = new User({
  //   firstName,
  //   lastName,
  //   email,
  //   password: hashedPassword,
  // });

  // return await user.save();
};
