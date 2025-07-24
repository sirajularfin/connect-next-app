'use client';

import { usePostRegistrationMutation } from '@/integrations/http/endpoints/auth';
import {
  RegisterUserSchema,
  RegisterUserSchemaType,
} from '@/lib/validations/register-user.schema';
import { useState } from 'react';

const useRegister = () => {
  const [triggerPostRegistrationMutation, { isError, isLoading }] =
    usePostRegistrationMutation();
  const [error, setError] = useState<{
    properties?: Record<string, string[]>;
  }>();
  const [formState, setFormState] = useState<RegisterUserSchemaType>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

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
    const response = triggerPostRegistrationMutation(formState).unwrap();
    if (!isError) {
      alert('Registration successful!');
      return response;
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
