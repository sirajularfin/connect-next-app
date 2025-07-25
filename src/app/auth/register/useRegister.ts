'use client';

import { usePostRegistrationMutation } from '@/integrations/http/endpoints/auth';
import {
  RegisterUserSchema,
  RegisterUserSchemaType,
} from '@/lib/validations/register-user.schema';
import { generateHashedMessage } from '@/util/aes.util';
import { useState } from 'react';

const INITIAL_FORM_STATE: RegisterUserSchemaType = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const useRegister = () => {
  const [triggerPostRegistrationMutation, { isLoading, isSuccess }] =
    usePostRegistrationMutation();
  const [error, setError] = useState<{
    properties?: Record<string, string[]>;
  }>();
  const [formState, setFormState] =
    useState<RegisterUserSchemaType>(INITIAL_FORM_STATE);

  const handleFieldChange = (
    field: keyof RegisterUserSchemaType,
    value: string
  ) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validatedFields = RegisterUserSchema.safeParse(formState);

    if (!validatedFields.success) {
      setError({
        properties: validatedFields.error.flatten().fieldErrors,
      });
      return;
    }
    setError(undefined);
    const hashedPassword = await generateHashedMessage(formState.password);
    triggerPostRegistrationMutation({
      ...formState,
      password: hashedPassword,
    }).unwrap();
    setFormState(INITIAL_FORM_STATE);
    if (isSuccess) {
      alert('Registration successful!');
    }
  };

  return {
    error,
    isLoading,
    formState,
    handleFieldChange,
    handleFormSubmit,
  };
};

export default useRegister;
