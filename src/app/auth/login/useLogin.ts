'use client';

import { usePostLoginMutation } from '@/integrations/http/endpoints/auth';
import {
  LoginUserSchema,
  LoginUserSchemaType,
} from '@/lib/validations/login-user.schema';
import { useState } from 'react';

const useLogin = () => {
  const [triggerPostLoginMutation, { isError, isLoading }] =
    usePostLoginMutation();
  const [error, setError] = useState<{
    properties?: Record<string, string[]>;
  }>();
  const [formState, setFormState] = useState<LoginUserSchemaType>({
    email: '',
    password: '',
  });

  const handleFieldChange = (
    field: keyof LoginUserSchemaType,
    value: string
  ) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validatedFields = LoginUserSchema.safeParse(formState);

    if (!validatedFields.success) {
      setError({
        properties: validatedFields.error.flatten().fieldErrors,
      });
      return;
    }
    setError(undefined);
    const response = triggerPostLoginMutation(formState).unwrap();
    if (!isError) {
      alert('Login successful!');
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

export default useLogin;
